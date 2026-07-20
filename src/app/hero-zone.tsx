"use client";

import { useEffect, useRef } from "react";

/* Motion levels were an exploration control in the prototype; production
   ships the "confident" tuning as a constant. */
const CFG = { speed: 1, ghosts: 2, particles: 44 };

type Particle = {
  x: number; y: number; vy: number; ph: number; r: number;
  a: number; life: number; riding: boolean;
};

/**
 * The hero's extraction figure: incoherent noise on the left of a gate,
 * one clean signal on the right, with particles drifting down behind the
 * headline and being caught by the outgoing wave.
 *
 * Both canvases share a clock, so they run on one rAF loop, which parks
 * itself whenever the tab is hidden or the hero scrolls out of view.
 */
export default function HeroZone({ children }: { children: React.ReactNode }) {
  const zoneRef = useRef<HTMLDivElement>(null);
  const sigRef = useRef<HTMLCanvasElement>(null);
  const driftRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const zone = zoneRef.current;
    const cv = sigRef.current;
    const dc = driftRef.current;
    if (!zone || !cv || !dc) return;

    const cx = cv.getContext("2d");
    const dctx = dc.getContext("2d");
    if (!cx || !dctx) return;

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rootStyle = getComputedStyle(document.documentElement);
    const accentOf = () => rootStyle.getPropertyValue("--color-accent").trim() || "#2F80FF";

    let W = 0, H = 0, DW = 0, DH = 0, dpr = 1, offX = 0, offY = 0;

    const size = () => {
      dpr = Math.min(2, devicePixelRatio || 1);
      W = cv.clientWidth; H = cv.clientHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      cx.setTransform(dpr, 0, 0, dpr, 0, 0);

      DW = zone.clientWidth; DH = zone.clientHeight;
      dc.width = DW * dpr; dc.height = DH * dpr;
      dctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const sc = cv.getBoundingClientRect(), zc = zone.getBoundingClientRect();
      offY = sc.top - zc.top; offX = sc.left - zc.left;
    };

    const ro = new ResizeObserver(size);
    ro.observe(zone);
    ro.observe(cv);
    size();

    const tri = (p: number) => Math.abs(((p % 1) + 1) % 1 - 0.5) * 4 - 1;
    const noise = (x: number, t: number) =>
      Math.sin(x * 0.019 + t * 0.9) * 0.4 +
      Math.sin(x * 0.047 - t * 1.5) * 0.27 +
      Math.sin(x * 0.101 + t * 2.2) * 0.19 +
      Math.sin(x * 0.223 - t * 3.1) * 0.13 +
      Math.sin(x * 0.409 + t * 4.6) * 0.1 +   // higher octaves = finer, busier chaos
      Math.sin(x * 0.87 - t * 6.2) * 0.06 +
      tri(x * 0.006 - t * 0.18) * 0.22 +
      tri(x * 0.031 + t * 2.7) * 0.09;         // a second sawtooth roughens the ride
    const smooth = (p: number) => (p <= 0 ? 0 : p >= 1 ? 1 : p * p * (3 - 2 * p));

    let t = 0, pulseT = 0;
    const pulses: { x: number }[] = [];
    const parts: Particle[] = [];

    const trace = (
      phase: number, cleanAmp: number, noiseAmp: number, gx: number, jitter = 0, turb = 0,
    ) => {
      cx.beginPath();
      for (let x = 0; x <= W; x += 2) {
        const resolve = smooth((x - gx + 70) / 140); // 0 = raw, 1 = clean
        const clean = Math.sin(x * 0.02 - t * 2.2 + phase) * cleanAmp;
        // Roaming turbulence envelope: two slow beats multiply into hot-spots
        // that swell the amplitude far past baseline — the "at times" bursts.
        const env = turb
          ? 1 + turb * Math.pow(Math.max(0, Math.sin(t * 0.8 + x * 0.004 + phase) * Math.sin(t * 0.37 - x * 0.011)), 1.5)
          : 1;
        const raw = noise(x + phase * 137, t + phase) * noiseAmp * env;
        // per-frame grain, only on the unresolved (left) side — reads as static
        const jit = jitter ? (Math.random() - 0.5) * jitter * (1 - resolve) : 0;
        const y = H / 2 + clean * (0.35 + 0.65 * resolve) + raw * (1 - resolve) + jit;
        x === 0 ? cx.moveTo(x, y) : cx.lineTo(x, y);
      }
      cx.stroke();
    };

    const drawSignal = (dt: number) => {
      const accent = accentOf();
      const gx = W * 0.5; // gate meets in the true center of the full-bleed canvas
      cx.clearRect(0, 0, W, H);

      cx.strokeStyle = "rgba(233,233,237,0.07)"; cx.lineWidth = 1;
      cx.beginPath(); cx.moveTo(0, H / 2); cx.lineTo(W, H / 2); cx.stroke();

      // Left of the gate: a dense stack of incoherent waves, each its own
      // phase and frequency mix. 'lighter' lets overlapping strokes build
      // into thick turbulent bands rather than flat lines.
      cx.save(); cx.beginPath(); cx.rect(0, 0, gx, H); cx.clip();
      cx.globalCompositeOperation = "lighter";
      const nWaves = 9 + CFG.ghosts;
      for (let i = 0; i < nWaves; i++) {
        cx.strokeStyle = `rgba(150,175,215,${0.22 - i * 0.014})`;
        cx.lineWidth = 1.1 + (i % 3) * 1.1; // varied thickness thickens the mass
        trace(0.7 + i * 2.31, 12 + (i % 3) * 3, 34 + i * 7, gx, 4 + (i % 2) * 3, 2.4);
      }
      cx.globalCompositeOperation = "source-over";
      cx.restore();

      cx.save(); cx.beginPath(); cx.rect(gx, 0, W - gx, H); cx.clip();
      cx.strokeStyle = accent; cx.lineWidth = 2;
      cx.shadowColor = accent; cx.shadowBlur = 12;
      trace(0, 18, 32, gx); cx.restore();

      const gGrad = cx.createLinearGradient(gx, 0, gx, H);
      gGrad.addColorStop(0, "rgba(47,128,255,0)");
      gGrad.addColorStop(0.5, "rgba(47,128,255,0.85)");
      gGrad.addColorStop(1, "rgba(47,128,255,0)");
      cx.strokeStyle = gGrad; cx.lineWidth = 1.5;
      cx.beginPath(); cx.moveTo(gx, 6); cx.lineTo(gx, H - 6); cx.stroke();

      const glow = cx.createRadialGradient(gx, H / 2, 0, gx, H / 2, 90);
      glow.addColorStop(0, "rgba(47,128,255,0.14)");
      glow.addColorStop(1, "rgba(47,128,255,0)");
      cx.fillStyle = glow; cx.fillRect(gx - 90, 0, 180, H);

      if (reduced) return;

      // Delivery pulses riding the clean wave.
      pulseT -= dt;
      if (pulseT <= 0) { pulses.push({ x: gx }); pulseT = 2.2; }
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.x += dt * 170 * CFG.speed;
        if (p.x > W + 8) { pulses.splice(i, 1); continue; }
        const y = H / 2 + Math.sin(p.x * 0.02 - t * 2.2) * 18;
        cx.fillStyle = accent; cx.shadowColor = accent; cx.shadowBlur = 14;
        cx.beginPath(); cx.arc(p.x, y, 3, 0, Math.PI * 2); cx.fill();
        cx.shadowBlur = 0;
      }
    };

    const resetP = (p: Particle) => {
      p.x = Math.random() * DW; p.y = -6 - Math.random() * DH * 0.6;
      p.vy = 11 + Math.random() * 16; p.ph = Math.random() * 6.28;
      p.r = 0.8 + Math.random() * 1.1; p.riding = false;
      p.a = 0.12 + Math.random() * 0.18; p.life = 1;
      return p;
    };
    const waveYAt = (x: number) => offY + H / 2 + Math.sin((x - offX) * 0.02 - t * 2.2) * 18;

    const drawDrift = (dt: number) => {
      dctx.clearRect(0, 0, DW, DH);
      if (reduced) return;

      while (parts.length < CFG.particles) parts.push(resetP({} as Particle));
      const accent = accentOf();
      const gateX = offX + W * 0.5;

      for (const p of parts) {
        if (!p.riding) {
          p.y += p.vy * CFG.speed * dt;
          p.x += Math.sin(t * 0.6 + p.ph) * 9 * dt;
          if (p.x > gateX + 6) {
            const wy = waveYAt(p.x);
            if (p.y >= wy - 2 && p.y <= wy + 7) { p.riding = true; p.life = 1; }
          }
          if (p.y > DH + 10) resetP(p);
          dctx.globalAlpha = p.a;
          dctx.fillStyle = "rgb(159,179,220)";
          dctx.beginPath(); dctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); dctx.fill();
        } else {
          p.x += 110 * CFG.speed * dt;
          p.y = waveYAt(p.x);
          p.life -= dt * 0.7;
          if (p.x > offX + W - 2 || p.life <= 0) { resetP(p); continue; }
          dctx.globalAlpha = Math.min(0.55, p.life * 0.7);
          dctx.fillStyle = accent;
          dctx.shadowColor = accent; dctx.shadowBlur = 8;
          dctx.beginPath(); dctx.arc(p.x, p.y, p.r + 0.6, 0, Math.PI * 2); dctx.fill();
          dctx.shadowBlur = 0;
        }
      }
      dctx.globalAlpha = 1;
    };

    let raf = 0, last = performance.now(), onScreen = true;

    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      t += dt * CFG.speed;
      drawSignal(dt);
      drawDrift(dt);
      raf = requestAnimationFrame(frame);
    };

    // Park the loop when nobody can see it: hidden tab or hero scrolled away.
    const shouldRun = () => onScreen && !document.hidden && !reduced;
    const sync = () => {
      if (shouldRun()) {
        if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame); }
      } else if (raf) {
        cancelAnimationFrame(raf); raf = 0;
      }
    };

    const io = new IntersectionObserver(([e]) => { onScreen = e.isIntersecting; sync(); });
    io.observe(zone);
    document.addEventListener("visibilitychange", sync);

    if (reduced) { drawSignal(0); drawDrift(0); } else sync();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  return (
    <div className="hero-zone" ref={zoneRef}>
      <canvas className="drift" ref={driftRef} aria-hidden="true" />
      {children}
      <figure
        className="hero-signal"
        aria-label="A noisy trace passing through an extraction gate and emerging as a clean signal"
      >
        <canvas ref={sigRef} />
      </figure>
    </div>
  );
}

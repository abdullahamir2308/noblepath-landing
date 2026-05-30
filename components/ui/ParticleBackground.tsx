"use client";

import { useRef, useEffect } from "react";

type Particle = { x: number; y: number; vx: number; vy: number };

function setupParticleCanvas(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D
): () => void {
  const COUNT = 28;
  const CONNECT_DIST = 120;
  const SPEED = 0.25;
  const DOT_RADIUS = 1.5;

  let particles: Particle[] = [];
  let animId = 0;

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function init() {
    resize();
    particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() * 2 - 1) * SPEED,
      vy: (Math.random() * 2 - 1) * SPEED,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    }

    ctx.strokeStyle = "rgba(106,69,155,0.15)";
    ctx.lineWidth = 1;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const pi = particles[i];
        const pj = particles[j];
        if (!pi || !pj) continue;
        const dx = pi.x - pj.x;
        const dy = pi.y - pj.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECT_DIST) {
          ctx.beginPath();
          ctx.moveTo(pi.x, pi.y);
          ctx.lineTo(pj.x, pj.y);
          ctx.stroke();
        }
      }
    }

    ctx.fillStyle = "rgba(106,69,155,0.5)";
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, DOT_RADIUS, 0, Math.PI * 2);
      ctx.fill();
    }

    animId = requestAnimationFrame(draw);
  }

  init();
  draw();
  window.addEventListener("resize", resize);

  return () => {
    cancelAnimationFrame(animId);
    window.removeEventListener("resize", resize);
  };
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    return setupParticleCanvas(canvas, ctx);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

type Particle = {
  x: number;
  y: number;
  tx: number;
  ty: number;
  vx: number;
  vy: number;
};

export default function ParticleLoader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.scale(dpr, dpr);

    const width = window.innerWidth;
    const height = window.innerHeight;

    const text = "SRI CHARAN";

    const off = document.createElement("canvas");
    off.width = width;
    off.height = height;
    const offCtx = off.getContext("2d")!;

    offCtx.fillStyle = "white";
    offCtx.font = `bold ${width / 8}px sans-serif`;
    offCtx.textAlign = "center";
    offCtx.textBaseline = "middle";
    offCtx.fillText(text, width / 2, height / 2);

    const imageData = offCtx.getImageData(0, 0, width, height);
    const particles: Particle[] = [];

    // Reduced particle density for performance
    for (let y = 0; y < height; y += 12) {
      for (let x = 0; x < width; x += 12) {
        const index = (y * width + x) * 4;
        if (imageData.data[index + 3] > 128) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 6 + 3;

          particles.push({
            x: width / 2,
            y: height / 2,
            tx: x,
            ty: y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
          });
        }
      }
    }

    const primary = getComputedStyle(document.body)
      .getPropertyValue("--primary")
      .trim();

    const purple = "262 83% 58%";

    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, `hsl(${primary})`);
    gradient.addColorStop(1, `hsl(${purple})`);

    let phase: "explode" | "pause" | "form" | "hold" = "explode";
    let explodeProgress = 0;
    let pauseFrames = 0;
    let holdFrames = 0;
    let animationFrame: number;
    let running = true;

    function animate() {
      if (!running) return;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = gradient;

      let settled = 0;

      particles.forEach((p) => {
        if (phase === "explode") {
          p.x += p.vx;
          p.y += p.vy;

          p.vx *= 0.975;
          p.vy *= 0.975;

          if (explodeProgress > 1) {
            phase = "pause";
          }
        }

        else if (phase === "pause") {
          p.vx *= 0.98;
          p.vy *= 0.98;

          p.x += p.vx;
          p.y += p.vy;

          pauseFrames++;

          if (pauseFrames > 30) {
            phase = "form";
          }
        }

        else if (phase === "form") {
          const dx = p.tx - p.x;
          const dy = p.ty - p.y;

          if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) {
            settled++;
          }

          p.vx += dx * 0.006;
          p.vy += dy * 0.006;

          p.vx *= 0.95;
          p.vy *= 0.95;

          p.x += p.vx;
          p.y += p.vy;

          if (settled > particles.length * 0.92) {
            phase = "hold";
          }
        }

        else if (phase === "hold") {
          holdFrames++;

          // Hold for ~3 seconds (180 frames)
          if (holdFrames > 180) {
            running = false;
            setFadeOut(true);

            setTimeout(() => {
              setVisible(false);
            }, 700);

            return;
          }
        }

        ctx.fillRect(p.x, p.y, 2, 2);
      });

      explodeProgress += 0.008;

      animationFrame = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      running = false;
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="hero-gradient absolute inset-0" />
      <canvas ref={canvasRef} className="relative z-10" />
    </div>
  );
}
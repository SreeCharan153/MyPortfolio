"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import Typewriter from "typewriter-effect";
import LeetCodeIcon from "./LeetCodeIcon";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    if (!ctx) return;

    let particles: any[] = [];
    const maxParticles = 50;
    const connectionDistance = 150;
    const cursor = { x: -100, y: -100 };

    // ✅ Prevent overflow by clamping to viewport width, not innerWidth
    const resizeCanvas = () => {
      canvas.width = Math.min(window.innerWidth, document.documentElement.clientWidth);
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.radius = 3;
      }

      move() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x <= 0 || this.x >= canvas!.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas!.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#00ff99";
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < maxParticles; i++) particles.push(new Particle());
    };

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = "rgba(0, 255, 153, 0.5)";
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    };

    const drawCursorConnection = () => {
      particles.forEach((p) => {
        const dx = p.x - cursor.x;
        const dy = p.y - cursor.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(cursor.x, cursor.y);
          ctx.strokeStyle = "rgba(0, 255, 153, 0.8)";
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      particles.forEach((p) => {
        p.move();
        p.draw();
      });
      drawConnections();
      drawCursorConnection();
      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", () => {
      resizeCanvas();
      initParticles();
    });

    window.addEventListener("mousemove", (e) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    });

    initParticles();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section
      id="Hero"
      className="relative flex items-center justify-center min-h-screen overflow-x-hidden overflow-y-hidden bg-background"
    >
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none w-[100vw] h-full" />

      {/* ✅ Removed container, no overflow */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
          className="space-y-8"
        >
          <motion.div className="space-y-3">
            <h1 className="text-5xl md:text-7xl font-bold text-primary">
              Sri Charan Machabhakthuni
            </h1>

            <h2 className="text-lg md:text-2xl text-muted-foreground">
              <Typewriter
                options={{
                  strings: [
                    "Python Backend Developer",
                    "FastAPI • PostgreSQL • REST APIs",
                    "Authentication & Authorization Systems",
                    "Async Tasks • Celery • Docker",
                    "I build scalable backend architecture",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </h2>
          </motion.div>

          {/* ✅ flex-wrap ensures icons never push outside width */}
          <motion.div className="flex justify-center flex-wrap gap-6 overflow-hidden">
            {[
              { icon: Github, href: "https://github.com/SreeCharan153" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/sree-charan-machabhakthuni/" },
              { icon: Mail, href: "mailto:sricharanmachabhakthuni@gmail.com" },
              { icon: LeetCodeIcon, href: "https://leetcode.com/u/sreecharan750/" },
            ].map((s, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden"
              >
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/20 to-purple-600/20 blur opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <Button variant="outline" size="icon" className="relative bg-background">
                  <s.icon className="h-5 w-5" />
                </Button>
              </motion.a>
            ))}
          </motion.div>

          <motion.div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="text-lg group relative overflow-hidden bg-primary text-white hover:bg-purple-600">
              <a href="#projects">
                <span className="relative z-10">See Backend Projects</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="text-lg">
              <a
                href="/Sri Charan Machabhakthuni.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume (PDF)
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-muted-foreground"
        >
          <ArrowRight className="h-6 w-6 rotate-90" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

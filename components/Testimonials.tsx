"use client";

import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: "E-Cell Startup Founder",
    role: "SaaS MVP Client",
    text: "Delivered our MVP faster than expected. Built the backend, authentication and deployment without needing supervision.",
    avatar: "/avatars/founder.png",
  },
  {
    name: "Zaalima Development – Supervisor",
    role: "Python Developer Intern",
    text: "Writes clean, secure backend code. Understands architecture and real production workflows.",
    avatar: "/avatars/zaalima.png",
  },
  {
    name: "Freelance Client",
    role: "Web Automation",
    text: "Very professional and communicates clearly. Shipped exactly what we needed.",
    avatar: "/avatars/client.png",
  },
  {
    name: "E-Summit Core Team",
    role: "Event Tech Team",
    text: "Handled our website end-to-end and made updates on time during high traffic.",
    avatar: "/avatars/esummit.png",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  });

  const startAutoSlide = () => {
    stopAutoSlide();
    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
  };

  const stopAutoSlide = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  return (
    <section id="testimonials" className="section-padding bg-muted/50 overflow-x-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center gradient-text mb-12 pb-4"
      >
        What People Say
      </motion.h2>

      {/* Carousel Wrapper */}
      <div
        className="relative max-w-3xl mx-auto"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="backdrop-blur-md bg-card/60 border border-white/10 rounded-xl shadow-xl">
            <CardContent className="p-8 text-center space-y-4">
              <div className="mx-auto w-14 h-14 rounded-full overflow-hidden border border-white/20">
                <Image
                  src={testimonials[current].avatar || "/default-avatar.png"}
                  alt={testimonials[current].name}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-muted-foreground italic max-w-xl mx-auto leading-relaxed">
                “{testimonials[current].text}”
              </p>

              <div className="space-y-0">
                <p className="font-semibold">{testimonials[current].name}</p>
                <p className="text-xs text-muted-foreground">
                  {testimonials[current].role}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Small indicators */}
        <div className="flex justify-center mt-4 gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                idx === current
                  ? "bg-primary"
                  : "bg-muted-foreground/40 hover:bg-muted-foreground/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

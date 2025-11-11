"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const steps = [
  "Start with database schema & relationships",
  "Write modular routers, services & database layers",
  "Add authentication, validation & error handling",
  "Implement logging for every critical action",
  "Focus on ACID transactions & data integrity",
  "Test with real workflows before deployment",
  "Deploy using Docker + environment configs",
];

const BuildProcess = () => {
  return (
    <section id="process" className="section-padding overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center gradient-text mb-10"
        >
          How I Build Software
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3"
            >
              <CheckCircle className="text-primary shrink-0 mt-1" size={18} />
              <p className="text-muted-foreground">{step}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BuildProcess;

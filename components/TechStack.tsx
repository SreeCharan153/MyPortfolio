"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Server,
  Shield,
  Cpu,
  Code2,
  Wrench,
} from "lucide-react";

const TechStack = () => {
  const categories = [
    {
      title: "Backend & APIs",
      icon: Server,
      items: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "REST APIs",
        "WebSockets",
        "Async Tasks",
        "JWT & OTP Auth",
      ],
    },
    {
      title: "Security & Reliability",
      icon: Shield,
      items: [
        "Hashing (bcrypt)",
        "Audit Logs",
        "Role-Based Access",
        "Input Validation",
        "Rate Limiting",
      ],
    },
    {
      title: "Tools & DevOps",
      icon: Wrench,
      items: [
        "Docker",
        "Git & GitHub",
        "Postman",
        "Render / Vercel Deployments",
      ],
    },
    {
      title: "Frontend / Mobile",
      icon: Code2,
      items: [
        "Next.js",
        "React",
        "Flutter",
        "Tailwind CSS",
      ],
    },
  ];

  return (
    <section id="tech" className="section-padding bg-muted/50 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold mb-4 gradient-text">
            Tech Stack & Tools
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Technologies I use to build secure, scalable real-world systems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full backdrop-blur-md bg-card/70 border border-border">
                <CardHeader className="flex flex-col items-center text-center gap-2">
                  <cat.icon className="w-7 h-7 text-primary" />
                  <CardTitle>{cat.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-1 text-sm text-muted-foreground text-center">
                    {cat.items.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

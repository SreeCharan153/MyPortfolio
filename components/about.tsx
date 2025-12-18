"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const About = () => {
  const experiences = [
    {
      title: "Python Developer Intern",
      company: "Zaalima Development (Remote)",
      period: "Sep 2025 - Dec 2025",
      description:
        "Built File Organizer Pro — a desktop automation tool that sorts files in real time, detects duplicates, maintains logs in SQLite, and runs scheduled background tasks used by real users.",
    },
    {
      title: "Backend Developer",
      company: "PillionPal",
      period: "2024 - Present",
      description:
        "Building the backend for a GPS-based motorcycle ride-sharing system with JWT authentication, OTP login, live GPS tracking via WebSockets, wallets, and FairSplit — a mileage-based pricing engine.",
    },
    {
      title: "Web Developer & Startup Support",
      company: "E-Cell REC",
      period: "Feb 2024 - Mar 2025",
      description:
        "Developed the official E-Summit website and supported early-stage startups by building MVPs, landing pages, and scalable product architecture.",
    },
    {
      title: "Cybersecurity Student",
      company: "Raghu Institute of Technology",
      period: "2022 - Present",
      description:
        "Pursuing B.Tech in CSE Cybersecurity with a strong focus on backend engineering, secure authentication systems, and scalable system design.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="section-padding bg-muted/50 overflow-x-hidden"
    >
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full"
        >
          {/* About Title */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">About Me</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I’m a backend-focused Python developer building secure, scalable
              systems using FastAPI, PostgreSQL, JWT authentication, and
              WebSockets. I specialize in solving hard backend problems —
              concurrency safety, data integrity, and real-time communication —
              and turning them into clean, production-ready APIs.
              <br />
              <br />
              I’m currently building <strong>PillionPal</strong>, a GPS-based
              ride-sharing backend with live tracking and a mileage-based pricing
              engine designed for real-world scale.
            </p>
          </motion.div>

          {/* What I'm Good At */}
          <motion.div
            variants={itemVariants}
            className="mt-10 text-center mx-auto max-w-3xl"
          >
            <h3 className="text-2xl font-semibold mb-4">What I’m Good At</h3>

            <ul className="grid sm:grid-cols-2 gap-y-3 text-muted-foreground text-sm">
              <li>✅ Designing secure authentication flows (JWT, OTP, cookies)</li>
              <li>✅ Real-time WebSockets for live location & event streaming</li>
              <li>✅ Building clean REST APIs with FastAPI & Pydantic</li>
              <li>✅ SQL design, atomic transactions & race condition prevention</li>
              <li>✅ Background automation & task scheduling</li>
              <li>✅ Writing modular, maintainable backend services</li>
            </ul>
          </motion.div>

          {/* Why Backend */}
          <motion.div
            variants={itemVariants}
            className="mt-14 text-center mx-auto max-w-3xl"
          >
            <h3 className="text-2xl font-semibold mb-4">Why Backend?</h3>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Backend development is where correctness matters. I enjoy designing
              systems that are predictable, secure, and resilient under load —
              from authentication flows to real-time data pipelines. I focus on
              building APIs that fail safely, scale cleanly, and are easy to
              reason about in production.
            </p>
          </motion.div>

          {/* Outside of Code */}
          <motion.div
            variants={itemVariants}
            className="mt-10 text-center mx-auto max-w-3xl"
          >
            <p className="text-muted-foreground text-sm leading-relaxed">
              When I&apos;m not writing code, I&apos;m writing stories —
              world-building through words instead of logic.
            </p>
          </motion.div>

          {/* Experience Section */}
          <motion.div variants={itemVariants} className="mt-14">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Professional Experience
            </h3>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="card-hover overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                        <div>
                          <h4 className="text-xl font-semibold gradient-text">
                            {exp.title}
                          </h4>
                          <p className="text-muted-foreground">
                            {exp.company}
                          </p>
                        </div>

                        <Badge
                          variant="secondary"
                          className="shrink-0 self-start md:self-center"
                        >
                          {exp.period}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

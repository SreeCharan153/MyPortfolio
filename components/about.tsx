"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const About = () => {
  const experiences = [
    {
      title: "Python Developer Intern",
      company: "Zaalima Development (Remote)",
      period: "Sep 2025 - Present",
      description:
        "Developing File Organizer Pro — a desktop automation tool that sorts files in real time, detects duplicates, maintains logs in SQLite, and runs scheduled background tasks.",
    },
    {
      title: "Backend Developer",
      company: "PillionPal",
      period: "2024 - Present",
      description:
        "Building the backend for a motorcycle ride-sharing system with JWT auth, OTP login, live GPS tracking via WebSockets, wallets, and FairSplit — a mileage-based pricing engine.",
    },
    {
      title: "Web Developer & Startup Support",
      company: "E-Cell REC",
      period: "Feb 2024 - Mar 2025",
      description:
        "Developed the official E-Summit website and helped early-stage startups build MVPs, landing pages, and scalable product architecture.",
    },
    {
      title: "Cybersecurity Student",
      company: "Raghu Institute of Technology",
      period: "2022 - Present",
      description:
        "Pursuing B.Tech in CSE Cybersecurity with focus on backend development, secure authentication, and system design.",
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
              I’m a backend-focused Python developer who builds secure and scalable
              systems using FastAPI, PostgreSQL, JWT authentication, and WebSockets.
              I enjoy solving hard problems like concurrency safety, data integrity,
              and real-time communication — and turning them into clean, production-ready APIs.
              <br />
              <br />
              I’m currently working on <strong>PillionPal</strong>, a GPS-based
              ride-sharing backend with real-time tracking and a mileage-based
              pricing engine, while interning remotely at Zaalima Development,
              where I ship automation tools used by real users.
            </p>
          </motion.div>

          {/* ✅ What I'm Good At */}
          <motion.div
            variants={itemVariants}
            className="mt-10 text-center mx-auto max-w-3xl"
          >
            <h3 className="text-2xl font-semibold mb-4">What I’m Good At</h3>

            <ul className="grid sm:grid-cols-2 gap-y-3 text-muted-foreground text-sm">
              <li>✅ Designing secure authentication flows (JWT, OTP, cookies)</li>
              <li>✅ Real-time WebSockets for live location & event streaming</li>
              <li>✅ Building clean REST APIs with FastAPI & Pydantic</li>
              <li>✅ SQL design, atomic transactions & preventing race conditions</li>
              <li>✅ Background automation & task scheduling</li>
              <li>✅ Writing modular, maintainable backend services</li>
            </ul>
          </motion.div>

          {/* ✅ Why Backend? */}
          <motion.div
            variants={itemVariants}
            className="mt-14 text-center mx-auto max-w-3xl"
          >
            <h3 className="text-2xl font-semibold mb-4">Why Backend?</h3>

            <p className="text-muted-foreground text-sm leading-relaxed">
              I enjoy building the part of software that users never see but always rely on —
              the logic, security, and data flow that make everything work. Backend development
              gives me the space to think about system design, reliability, performance, and
              how to prevent edge-case failures. I like turning real-world constraints into
              clean API design and writing code that is predictable, safe, and scalable.
            </p>
          </motion.div>

          {/* ✅ Outside of Code */}
          <motion.div
            variants={itemVariants}
            className="mt-10 text-center mx-auto max-w-3xl"
          >
            <p className="text-muted-foreground text-sm leading-relaxed">
              When I&apos;m not writing code, I&apos;m writing stories — world-building through words
              instead of logic.
            </p>
          </motion.div>

          {/* ✅ Experience Section */}
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
                          <p className="text-muted-foreground">{exp.company}</p>
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

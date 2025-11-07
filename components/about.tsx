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
        "Building File Organizer Pro, an automated file management tool with rule-based sorting, duplicate detection, SQLite logging and scheduler-based background automation.",
    },
    {
      title: "Backend Developer",
      company: "PillionPal",
      period: "2024 - Present",
      description:
        "Developing the backend for a motorcycle ride-sharing platform using FastAPI, WebSockets, JWT auth, real-time tracking and a mileage-based fare engine called FairSplit.",
    },
    {
      title: "Web Developer & Startup Support",
      company: "E-Cell REC",
      period: "Feb 2024 - Mar 2025",
      description:
        "Built the official E-Summit website and supported early-stage startups with MVP development, landing pages and scalable product architecture.",
    },
    {
      title: "Cybersecurity Student",
      company: "Raghu Institute of Technology",
      period: "2022 - Present",
      description:
        "Pursuing B.Tech in CSE Cybersecurity while specializing in backend development, authentication systems and secure system design.",
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
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a backend-focused Python developer specializing in FastAPI,
              PostgreSQL, authentication systems and scalable REST APIs. I enjoy
              turning complex logic into clean, production-ready backend architecture,
              whether it&apos;s real-time communication, job scheduling or secure
              transactions.
              <br />
              <br />
              Currently, I&apos;m building PillionPal — a GPS-based ride-sharing
              platform — and working as a Python Developer Intern at Zaalima
              Development, where I build automation tools used in real
              environments.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Professional Experience
            </h3>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="card-hover overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-between gap-4 mb-4">
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
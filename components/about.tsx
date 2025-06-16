"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const About = () => {
  const experiences = [
    {
      title: "Co-Founder & CEO",
      company: "PillionPal",
      period: "2024 - Present",
      description:
        "Leading PillionPal, a motorcycle ride-sharing startup, driving product development, operations, and strategic growth.",
    },
    {
      title: "Cybersecurity Student",
      company: "Raghu Institute of Technology",
      period: "2022 - Present",
      description:
        "Pursuing a B.Tech in Cybersecurity, exploring ethical hacking, cryptography, and advanced security protocols.",
    },
    {
      title: "Web Developer",
      company: "E-Cell REC",
      period: "2025",
      description:
        "Developed the official E-Summit website, integrating event schedules and enhancing user experience.",
    },
    {
      title: "Virtual Intern",
      company: "CODSOFT",
      period: "2024",
      description:
        "Completed a virtual internship focused on web development projects, including a portfolio, landing page, and calculator.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="container px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">About Me</h2>
            <p className="text-lg text-muted-foreground">
              Hey there, I&apos;m Sri Charan Machabhakthuni — a Computer Science engineer by training, a builder by choice, and a storyteller at heart. Whether it&apos;s debugging a stubborn bug at 2 AM or sketching out the next big idea, I thrive on transforming thought into tech. Currently, I&apos;m working with E-Cell REC to drive innovation and spark entrepreneurial spirit on campus — collaborating, organizing, and executing ideas that actually move the needle. I&apos;m also the founder of <strong>PillionPal</strong>, a smart and secure ride-sharing platform built from scratch with grit, logic, and a generous dose of caffeine. When I&apos;m not deep in code, you&apos;ll catch me chasing design perfection, refining UX flows, or taking on coding gauntlets like HackWithInfy — because learning never clocks out.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Professional Journey
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  <Card className="card-hover">
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
                          className="self-start md:self-center"
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

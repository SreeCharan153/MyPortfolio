"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const About = () => {
  const experiences = [
    {
      title: "Founder",
      company: "PillionPal",
      period: "2023 - Present",
      description:
        "Leading the development of an innovative motorcycle ride-sharing platform focused on affordable urban commuting solutions.",
    },
    {
      title: "Cybersecurity Researcher",
      company: "Independent",
      period: "2022 - Present",
      description:
        "Conducting research in cybersecurity, focusing on emerging threats and defensive strategies.",
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
              I am a passionate tech innovator and cybersecurity enthusiast with a
              focus on creating impactful solutions. Currently, I'm leading
              PillionPal, a startup revolutionizing urban transportation through
              motorcycle ride-sharing.
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
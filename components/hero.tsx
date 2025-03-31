"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="container px-4 py-16 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
              Sri Charan Machabhakthuni
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Cybersecurity Enthusiast | Startup Founder | Tech Innovator
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 mb-12"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/SreeCharan153",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/sree-charan-machabhakthuni/",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:sricharanmachabhakthuni@gmail.com",
                label: "Email",
              },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
              >
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/20 to-purple-600/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
                <Button
                  variant="outline"
                  size="icon"
                  className="relative bg-background"
                >
                  <social.icon className="h-5 w-5" />
                </Button>
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              asChild
              size="lg"
              className="text-lg group relative overflow-hidden"
            >
              <a href="#projects">
                <span className="relative z-10">View My Work</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-muted-foreground"
        >
          <ArrowRight className="h-6 w-6 rotate-90" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
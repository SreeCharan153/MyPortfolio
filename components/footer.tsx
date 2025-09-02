"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import LeetCodeIcon from "./LeetCodeIcon";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border bg-background/80 backdrop-blur-sm">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex gap-6">
            <a
              href="https://github.com/SreeCharan153"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sree-charan-machabhakthuni/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:sricharanmachabhakthuni@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
            href="https://leetcode.com/u/sreecharan750/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
            >
              <LeetCodeIcon className="h-5 w-5" />
            </a>
          </div>

          <p className="text-xs text-muted-foreground tracking-wide">
            © {new Date().getFullYear()} Sree Charan Machabhakthuni — All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

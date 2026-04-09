"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import LeetCodeIcon from "./LeetCodeIcon";

const socialLinks = [
  {
    href: "https://github.com/SreeCharan153",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/sree-charan-machabhakthuni/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "mailto:sricharanmachabhakthuni@gmail.com",
    label: "Email",
    icon: Mail,
  },
  {
    href: "https://leetcode.com/u/sreecharan750/",
    label: "LeetCode",
    icon: LeetCodeIcon,
  },
];

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border bg-background/80 backdrop-blur-sm overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                // ✅ Fixed: min 44x44px touch target — previously was only 20px (h-5 w-5)
                // which is too small for mobile tap (Apple/Google guideline: 44px min)
                className="flex items-center justify-center w-11 h-11 rounded-full text-muted-foreground hover:text-primary hover:bg-muted/60 transition-all hover:scale-110"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <p className="text-xs text-muted-foreground tracking-wide text-center">
            © {new Date().getFullYear()} Sree Charan Machabhakthuni — All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
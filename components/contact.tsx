"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);

      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (data.success) {
        toast({
          title: "Message sent! ✅",
          description: "Thanks for reaching out. I’ll reply shortly.",
        });
        form.reset();
      } else {
        toast({
          title: "Could not send message ❌",
          description: data.error || "Please try again.",
        });
      }
    } catch {
      toast({
        title: "Failed to send ❌",
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-muted/50 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden backdrop-blur-md bg-card/70 border-border shadow-lg">
            <CardHeader className="text-center space-y-3">
              <CardTitle className="text-3xl">Let’s Work Together</CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                Looking for a backend intern or someone to build secure APIs?
                Tell me your idea — I usually reply within a day.
              </CardDescription>

              {/* Quick action buttons */}
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Button asChild variant="outline" size="sm" className="flex gap-2">
                  <a href="mailto:sricharanmachabhakthuni@gmail.com">
                    <Mail className="h-4 w-4" /> Email
                  </a>
                </Button>

                <Button asChild variant="outline" size="sm" className="flex gap-2">
                  <a
                    href="https://www.linkedin.com/in/sree-charan-machabhakthuni/"
                    target="_blank"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </Button>

                <Button asChild variant="outline" size="sm" className="flex gap-2">
                  <a
                    href="https://github.com/SreeCharan153"
                    target="_blank"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </Button>
              </div>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" name="name" placeholder="Enter your name" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" name="subject" placeholder="I’d like to discuss…" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Explain your project, idea, or requirement…"
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full flex gap-2" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : (
                    <>
                      <Send className="h-4 w-4" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

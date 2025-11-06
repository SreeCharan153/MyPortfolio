"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils"; // For conditional classes if you use this util

const Projects = () => {
  const projects = [
    {
      title: "PillionPal – FastAPI Backend",
      description:"Backend for a motorcycle ride-sharing platform using FastAPI. Includes JWT auth, OTP login, ride booking & cancellation, live GPS tracking via WebSockets, user wallet, and FairSplit — a mileage-based fare calculation engine.",
      image:"https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1000",
      tags: ["FastAPI", "PostgreSQL", "WebSockets", "JWT", "Docker", "REST APIs"],
      links: {
        live: "https://pillionpal.vercel.app/",
        github: "https://github.com/SreeCharan153/PillionPal-website",
       },
    },
    {
      title: "PillionPal Mobile App + API Integration",
      description: "Flutter client for PillionPal communicating with secured FastAPI endpoints for real-time ride bookings, cancellations, wallet history, and live location streaming. Integrates MapBox for route visualization and WebSockets for driver-rider updates.",
      image:"https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000",
      tags: ["Flutter", "Dart", "WebSockets", "MapBox", "REST APIs"],
      links: {
        //live: "https://example.com",
        github: "https://github.com/SreeCharan153/PillionPal",
      },
    },
    {
      title: "File Organizer Pro – Desktop Automation Tool",
      description:"Python automation tool that monitors folders in real-time and auto-sorts files based on rules, file type, and patterns. Includes duplicate detection, rollback logs, and SQLite persistence. Reduced manual sorting time by ~90% for real users.",
      image:"/fileorganizer.png",
      tags: ["Python", "SQLite", "Watchdog", "Tkinter", "Scheduler", "OOP"],
      links: {
        //live: "https://example.com",
        github: "https://github.com/SreeCharan153/File-organizer",
      },
    },
    {
      title: "Banking System (FastAPI + Next.js)",
      description:"Full banking stack with FastAPI backend and Next.js client. Supports account creation, hashed PIN auth, deposits, withdrawals, transfers, and transaction logs. Admin dashboard for user management and fraud-prevention edge case handling.",
      image:"https://images.pexels.com/photos/13406565/pexels-photo-13406565.jpeg",
      tags: ["FastAPI", "SQLite", "Next.js", "JWT Auth", "Banking Logic", "REST APIs"],
      links: {
        live: "https://my-banking-application.vercel.app/",
        github: "https://github.com/SreeCharan153/ATM",
      },
    },
    {
      title: "E-Summit Website – Raghu Engineering College",
      description:"Responsive event website with speaker profiles, schedules, and registration system. Used Firebase for auth and real-time CMS updates, enabling organizers to manage content without code.",
      image:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000",
      tags: ["React", "Firebase", "Material-UI", "Responsive UI"],
      links: {
        live: "https://esummit-rec.vercel.app/",
        github: "https://github.com/BhimaPavanTeja/e-summit-rec",
      },
    },
  ];



  return (
    <section id="projects" className="py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text text-transparent bg-clip-text p-2">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Explore some of my latest creations blending technology & creativity.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="relative backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                </div>

                <CardHeader>
                  <CardTitle className="text-lg font-bold">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 my-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="backdrop-blur-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="secondary" size="sm" asChild>
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> Live
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" /> Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

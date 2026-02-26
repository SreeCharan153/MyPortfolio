"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Star ,FileText} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import FeaturedRibbon from "./ui/FeaturedBadge";
type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  featured: boolean;
  stars?: number;
  links: {
    live?: string;
    github: string;
    casestudy?:string;
  };
};

const Projects = () => {
  const baseProjects: Project[] = [
    {
      title: "PillionPal – FastAPI Backend",
      description:
        "Backend system for a ride-sharing platform with JWT auth, OTP login, bookings, cancellations, ride history, wallets, and FairSplit fare engine. Real-time GPS via WebSockets.",
      image:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1000",
      tags: ["FastAPI", "PostgreSQL", "WebSockets", "JWT", "Docker"],
      featured: true,
      links: {
        live: "https://pillionpal.vercel.app/",
        github: "https://github.com/SreeCharan153/PillionPal-API",
        casestudy:'/projects/PillionPal'
      },
    },
    {
      title: "File Organizer Pro – Automation Tool",
      description:
        "Python automation tool that sorts files in real-time, detects duplicates, maintains logs, and supports rollback.",
      image: "/fileorganizer.png",
      tags: ["Python", "SQLite", "Watchdog", "Tkinter"],
      featured: false,
      links: { github: "https://github.com/SreeCharan153/File-organizer" },
    },
    {
      title: "Banking System – FastAPI + Next.js",
      description:
        "Secure banking backend with hashed PIN auth, deposits, withdrawals, transfers, and audit logs. Next.js client for user banking actions.",
      image:
        "https://images.pexels.com/photos/13406565/pexels-photo-13406565.jpeg",
      tags: ["FastAPI", "PostgreSQL", "Next.js", "JWT", "Docker"],
      featured: true,
      links: {
        live: "https://rupeewave.vercel.app/",
        github: "https://github.com/SreeCharan153/RupeeWave",
        casestudy: '/projects/banking-system',
      },
    },
    {
      title: "E-Summit Website – REC",
      description:
        "Event website with speaker profiles, schedule, authentication, and Firebase CMS for content updates.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000",
      tags: ["React", "Firebase", "Material-UI", "Responsive UI"],
      featured: false,
      links: {
        live: "https://esummit-rec.vercel.app/",
        github: "https://github.com/BhimaPavanTeja/e-summit-rec",
      },
    },
    {
      title: "FitStack",
      description:
        "An Application for finding the best-fit IT role for a given profile based on skills and experience.",
      image: "/fitstack.png",
      tags: ["Next.js", "Tailwind CSS","FastAPI", "Recommendation Engine"],
      featured: false,
      links: {
        live: "https://fit-stack-psi.vercel.app/",
        github: "https://github.com/SreeCharan153/FitStack",
      },
    },
  ];

  const [projects, setProjects] = useState<Project[]>(baseProjects);

  // ✅ Fetch GitHub star counts from server API
  useEffect(() => {
    const fetchStars = async () => {
      try {
        const res = await fetch("/api/github-stars");
        const data = await res.json();

        const updated = baseProjects.map((project) => {
          const item = data.find(
            (entry: any) => project.links.github.includes(entry.repo)
          );
          return { ...project, stars: item?.stars ?? 0 };
        });

        setProjects(updated);
      } catch (err) {
        console.log("Star fetch error:", err);
      }
    };

    fetchStars();
  });

  return (
    <section id="projects" className="py-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Real-world systems built with security, scalability, and clean architecture.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden">

                {/* ✅ Top-right Premium Ribbon */}
                {project.featured && <FeaturedRibbon label="Top Project" />}

                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                </div>

                <CardHeader>
                  <CardTitle className="text-lg font-bold flex items-center gap-2">
                    {project.title}

                    {/* ✅ Always show star badge if stars exist (even 0) */}
                    {typeof project.stars === "number" && (
                      <div className="flex items-center gap-1 bg-white/10 border border-white/20 backdrop-blur-sm px-2 py-[2px] rounded-full text-xs text-white">
                        <Star className="w-3.5 h-3.5 text-amber-300" />
                        {project.stars}
                      </div>
                    )}
                  </CardTitle>

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

                  <div className="flex gap-2 flex-wrap">
                    {project.links.live && (
                      <Button variant="secondary" size="sm" asChild>
                        <a href={project.links.live} target="_blank">
                          <ExternalLink className="h-4 w-4 mr-2" /> Live
                        </a>
                      </Button>
                    )}


                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links.github} target="_blank">
                        <Github className="h-4 w-4 mr-2" /> Code
                      </a>
                    </Button>

                    {project.links.casestudy && (
                      <Button variant="secondary" size="sm" asChild>
                        <a href={project.links.casestudy}>
                          <FileText className="h-4 w-4 mr-2" /> Case Study
                        </a>
                      </Button>
                    )}
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

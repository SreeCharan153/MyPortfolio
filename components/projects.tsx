"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Star, FileText } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import FeaturedRibbon from "./ui/FeaturedBadge";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  featured: boolean;
  category: "backend" | "frontend" | "fullstack";
  stars?: number;
  links: {
    live?: string;
    github: string;
    casestudy?: string;
  };
};

const baseProjects: Project[] = [
  {
    title: "PillionPal – FastAPI Backend",
    description:
      "Backend system for a ride-sharing platform with JWT auth, OTP login, bookings, cancellations, ride history, wallets, and FairSplit fare engine. Real-time GPS via WebSockets.",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1000",
    tags: ["FastAPI", "PostgreSQL", "WebSockets", "JWT", "Docker"],
    featured: true,
    category: "backend",
    links: {
      live: "https://pillionpal.vercel.app/",
      github: "https://github.com/SreeCharan153/PillionPal-API",
      casestudy: "/projects/PillionPal",
    },
  },
  {
    title: "File Organizer Pro – Automation Tool",
    description:
      "Python automation tool that sorts files in real-time, detects duplicates, maintains logs, and supports rollback.",
    image: "/fileorganizer.png",
    tags: ["Python", "SQLite", "Watchdog", "Tkinter"],
    featured: false,
    category: "backend",
    links: { github: "https://github.com/SreeCharan153/File-organizer" },
  },
  {
    title: "RupeeWave – Secure Banking System",
    description:
      "Secure banking backend with hashed PIN auth, deposits, withdrawals, transfers, and audit logs. Next.js client for user banking actions.",
    image:
      "https://images.pexels.com/photos/13406565/pexels-photo-13406565.jpeg",
    tags: ["FastAPI", "PostgreSQL", "Next.js", "JWT"],
    featured: true,
    category: "fullstack",
    links: {
      live: "https://rupeewave.vercel.app/",
      github: "https://github.com/SreeCharan153/RupeeWave",
      casestudy: "/projects/banking-system",
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
    category: "frontend",
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
    tags: ["Next.js", "Tailwind CSS", "FastAPI", "Recommendation Engine"],
    featured: false,
    category: "fullstack",
    links: {
      live: "https://fit-stack-psi.vercel.app/",
      github: "https://github.com/SreeCharan153/FitStack",
    },
  },
  {
    title: "ManagePro - Full-Stack HRMS Platform",
    description:
      "A comprehensive HR management application for streamlining employee onboarding, performance reviews, and payroll processing.",
    image: "/Manage-Pro.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "FastAPI", "JWT Auth"],
    featured: false,
    category: "fullstack",
    links: {
      live: "https://manage-pro-hrms.vercel.app/",
      github: "https://github.com/SreeCharan153/ManagePro",
      casestudy: "/projects/managepro",
    },
  },
];

type Filter = "all" | "backend" | "frontend" | "fullstack";

const filterLabels: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "backend", label: "Backend" },
  { value: "fullstack", label: "Full Stack" },
  { value: "frontend", label: "Frontend" },
];

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>(baseProjects);
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  // ✅ Fixed: dependency array [] prevents re-fetching on every render
  useEffect(() => {
    const fetchStars = async () => {
      try {
        const res = await fetch("/api/github-stars");
        const data = await res.json();

        const updated = baseProjects.map((project) => {
          const item = data.find((entry: { repo: string; stars: number }) =>
            project.links.github.includes(entry.repo)
          );
          return { ...project, stars: item?.stars ?? 0 };
        });

        setProjects(updated);
      } catch (err) {
        console.log("Star fetch error:", err);
      }
    };

    fetchStars();
  }, []); // ✅ was missing — caused infinite refetch loop

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Real-world systems built with security, scalability, and clean architecture.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {filterLabels.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setActiveFilter(value)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                activeFilter === value
                  ? "bg-primary text-white border-primary"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <Card className="relative backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden">
                  {project.featured && <FeaturedRibbon label="Top Project" />}

                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      loading="lazy" // ✅ Added lazy loading
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg font-bold flex items-center gap-2">
                      {project.title}
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
                          <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" /> Live
                          </a>
                        </Button>
                      )}

                      <Button variant="outline" size="sm" asChild>
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
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
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
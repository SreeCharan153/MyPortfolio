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
      title: "PillionPal Website",
      description:
        "An informational and promotional website for PillionPal, showcasing the motorcycle ride-sharing platform's features and benefits.",
      image:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1000",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      links: {
        live: "https://pillionpal.vercel.app/",
        github: "https://github.com/SreeCharan153/PillionPal-website",
      },
    },
    {
      title: "PillionPal Application",
      description:
        "A full-featured ride-sharing application enabling users to book and manage motorcycle rides efficiently.",
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000",
      tags: ["Flutter", "Dart", "Firebase", "MapBox"],
      links: {
        live: "https://example.com",
        github: "https://github.com/SreeCharan153/PillionPal",
      },
    },

    {
      title: "ATM Simulator",
      description:
        "A terminal-based ATM algorithm simulating secure cash withdrawals, PIN authentication, balance tracking, and error handling — built to replicate real ATM logic with a focus on data validation and user experience.",
      image:
        "https://images.unsplash.com/photo-1588776814546-ec7bd493b3d3?auto=format&fit=crop&q=80&w=1000", // This image shows a real ATM machine, more relevant
      tags: ["Python", "OOP", "CLI App", "Banking Logic"],
      links: {
        live: "https://replit.com/@SreeCharan13/ATM", // change if you hosted somewhere else
        github: "https://github.com/SreeCharan153/ATM",
      },
    },

    {
      title: "E-Summit Website",
      description:
        "Website developed for the E-Summit event, featuring event details, registration, and schedule management.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000",
      tags: ["React", "Firebase", "Material-UI", "Redux"],
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

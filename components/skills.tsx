"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Development",
      skills: [
        { name: "Flutter", level: 90 },
        { name: "React / Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "FastAPI", level: 80 },
        { name: "Python", level: 75 },
      ],
    },
    {
      title: "UI/UX Designing",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Wireframing & Prototyping", level: 80 },
        { name: "Design Systems", level: 70 },
        { name: "Canva", level: 70 },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Firebase", level: 85 },
        { name: "VS Code", level: 80 },
        { name: "Docker", level: 50 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold mb-4 tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated showcase of my technical toolset & creative capabilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/70 border border-border hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-border overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-indigo-500 animate-pulse rounded-full"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
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

export default Skills;

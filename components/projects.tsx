"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Play } from "lucide-react"

const projects = [
  {
    title: "Tower of Demons",
    category: "Shipped Title",
    description:
      "A dark fantasy RPG where players defend villages from demon towers. Features strategic combat, upgradeable weapons, and progressive world-building mechanics.",
    image: "/images/project-1.jpg",
    tags: ["Unity", "C#", "Mobile", "RPG"],
    link: "#",
    featured: true,
  },
  {
    title: "Cyber Strike",
    category: "Shipped Title",
    description:
      "Fast-paced cyberpunk action game with XP-based ability system, equipment progression, and wave-based combat against AI enemies.",
    image: "/images/project-2.jpg",
    tags: ["Unity", "C#", "AI", "Action"],
    link: "#",
    featured: true,
  },
  {
    title: "Procedural Terrain Generator",
    category: "Personal Project",
    description:
      "A tool for creating large-scale flat terrain environments procedurally. Built with custom noise algorithms and optimized mesh generation.",
    image: "/images/project-3.jpg",
    tags: ["Unity", "Procedural Gen", "Tools"],
    link: "#",
    featured: false,
  },
  {
    title: "Isometric Puzzle World",
    category: "Prototype",
    description:
      "A 3D isometric puzzle game prototype with environmental storytelling, floating platforms, and physics-based puzzle mechanics.",
    image: "/images/project-4.jpg",
    tags: ["Unity", "3D", "Puzzle", "Prototype"],
    link: "#",
    featured: false,
  },
  {
    title: "Hyper Casual Collection",
    category: "Shipped Title",
    description:
      "A collection of hyper-casual mobile games published across multiple app stores with millions of combined downloads.",
    image: "/images/project-5.jpg",
    tags: ["Unity", "Mobile", "Casual", "Published"],
    link: "#",
    featured: false,
  },
]

function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: (typeof projects)[0]
  index: number
  isVisible: boolean
}) {
  const isFeatured = project.featured

  return (
    <div
      className={`group glass-card overflow-hidden rounded-xl transition-all duration-700 ${
        isFeatured ? "md:col-span-2 lg:col-span-1" : ""
      } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/40 transition-opacity duration-300 group-hover:opacity-0" />

        {/* Overlay icons */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <a
            href={project.link}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110"
            aria-label={`View ${project.title} details`}
          >
            <Play className="h-5 w-5" />
          </a>
          <a
            href={project.link}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground/90 text-background transition-transform hover:scale-110"
            aria-label={`Open ${project.title} external link`}
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>

        {/* Category badge */}
        <span className="absolute top-4 left-4 rounded-md bg-primary/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="projects"
      className="relative py-24 lg:py-32"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            // Portfolio
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Featured <span className="text-primary">Projects</span>
          </h2>
        </div>

        {/* Featured projects - top row */}
        <div className="mb-8 grid gap-8 lg:grid-cols-2">
          {projects
            .filter((p) => p.featured)
            .map((project, idx) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={idx}
                isVisible={isVisible}
              />
            ))}
        </div>

        {/* Other projects */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter((p) => !p.featured)
            .map((project, idx) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={idx + 2}
                isVisible={isVisible}
              />
            ))}
        </div>
      </div>
    </section>
  )
}

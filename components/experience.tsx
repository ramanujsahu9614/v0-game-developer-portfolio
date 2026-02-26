"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    role: "Unity Developer",
    company: "GameForge Studios",
    period: "Jan 2023 - Present",
    description:
      "Leading development of multiple in-house casual games for cross-platform release. Collaborating with cross-functional teams across time zones and managing international client relationships.",
    responsibilities: [
      "Streamlined project workflows and established timelines while ensuring quality",
      "Developed and shipped multiple casual games across various app stores",
      "Led a team in delivering a complex engineering project within tight deadlines",
      "Optimized game performance for low-end mobile devices",
    ],
    tags: ["Unity", "C#", "Mobile", "Team Lead"],
  },
  {
    role: "Game Developer",
    company: "PixelCraft Interactive",
    period: "Jun 2022 - Dec 2022",
    description:
      "Core developer responsible for gameplay features, UI systems, backend communication, and security measures across multiple game projects.",
    responsibilities: [
      "Developed core gameplay functionalities and feature implementations",
      "Led Unity development for upcoming hyper-casual game projects",
      "Implemented backend communication and data security measures",
      "Managed project timelines and milestone delivery",
    ],
    tags: ["Unity", "C#", "Hyper-Casual", "Backend"],
  },
  {
    role: "Freelance Game Developer",
    company: "Independent",
    period: "2020 - Jun 2022",
    description:
      "Built personal game prototypes and freelance projects, exploring procedural generation, AI pathfinding, and 3D puzzle game mechanics.",
    responsibilities: [
      "Created procedural terrain generation tools for rapid environment design",
      "Implemented A* pathfinding solutions for open-world vehicle navigation",
      "Developed 3D isometric puzzle game prototypes with physics-based mechanics",
      "Published indie game projects and built a public portfolio",
    ],
    tags: ["Unity", "Prototyping", "Indie", "AI"],
  },
]

export function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="experience"
      className="relative py-24 lg:py-32"
      ref={ref}
    >
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            // Journey
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Work <span className="text-primary">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0
            return (
              <div
                key={idx}
                className={`relative mb-12 last:mb-0 transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                <div
                  className={`flex flex-col gap-4 pl-10 md:w-1/2 md:pl-0 ${
                    isEven ? "md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-background md:left-1/2`}
                  >
                    <Briefcase className="h-3.5 w-3.5 text-primary" />
                  </div>

                  {/* Card */}
                  <div className="glass-card rounded-xl p-6 transition-all duration-300">
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-medium text-primary">
                          {exp.company}
                        </p>
                      </div>
                      <span className="rounded-md bg-secondary/70 px-3 py-1 font-mono text-xs text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>

                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>

                    <ul className="mb-4 flex flex-col gap-2">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li
                          key={rIdx}
                          className="flex items-start gap-2 text-sm text-secondary-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {resp}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

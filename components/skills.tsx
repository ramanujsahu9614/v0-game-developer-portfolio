"use client"

import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "Game Engines",
    skills: [
      { name: "Unity", level: 95 },
      { name: "Unreal Engine", level: 70 },
      { name: "Godot", level: 55 },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "C#", level: 95 },
      { name: "C++", level: 65 },
      { name: "Python", level: 60 },
      { name: "GDScript", level: 50 },
    ],
  },
  {
    title: "Game Systems",
    skills: [
      { name: "Gameplay Mechanics", level: 90 },
      { name: "AI / Pathfinding", level: 80 },
      { name: "Procedural Generation", level: 75 },
      { name: "Physics Systems", level: 80 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Android / iOS SDKs", level: 85 },
      { name: "Git / Version Control", level: 90 },
      { name: "Blender (Basics)", level: 50 },
      { name: "Shader Programming", level: 60 },
    ],
  },
]

export function Skills() {
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
      id="skills"
      className="relative py-24 lg:py-32"
      ref={ref}
    >
      {/* Subtle grid bg */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            // Tech Stack
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Skills & <span className="text-primary">Arsenal</span>
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.title}
              className={`glass-card rounded-xl p-6 transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${catIdx * 150}ms` }}
            >
              <h3 className="mb-6 text-lg font-bold uppercase tracking-wider text-foreground">
                <span className="mr-2 text-primary">#</span>
                {category.title}
              </h3>

              <div className="flex flex-col gap-5">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm font-medium text-secondary-foreground">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${catIdx * 150 + skillIdx * 100}ms`,
                          boxShadow: isVisible
                            ? "0 0 8px var(--neon-glow)"
                            : "none",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

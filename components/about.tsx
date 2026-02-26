"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Gamepad2, Code, Layers } from "lucide-react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const stats = [
    { icon: Gamepad2, value: "3+", label: "Years Experience" },
    { icon: Code, value: "10+", label: "Projects Shipped" },
    { icon: Layers, value: "5+", label: "Game Engines" },
  ]

  return (
    <section id="about" className="relative py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            // About Me
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Who <span className="text-primary">I Am</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Text content */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">India</span>
            </div>

            <p className="mb-6 text-lg leading-relaxed text-secondary-foreground">
              Passionate game developer with professional experience in Unity and
              game development. Skilled in object-oriented and data-oriented
              programming, mobile SDKs, and performance optimization.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              I specialize in building engaging, high-performance games and
              interactive experiences. From hyper-casual mobile games to complex
              3D environments, I bring ideas to life with clean code, optimized
              pipelines, and creative problem-solving.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              When I am not coding, you will find me exploring new game mechanics,
              prototyping experimental gameplay ideas, or diving into the latest
              advancements in game technology.
            </p>
          </div>

          {/* Stats cards */}
          <div
            className={`flex flex-col gap-4 lg:col-span-2 transition-all duration-700 delay-400 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card flex items-center gap-5 rounded-xl p-6 transition-all duration-300"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <stat.icon className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 grid-bg" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary/30 animate-pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className={`relative z-10 mx-auto max-w-5xl px-6 text-center transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-primary">
          {'< Game Developer />'}
        </p>

        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-7xl lg:text-8xl">
          <span className="text-balance">Ramanuj</span>
          <br />
          <span className="neon-text text-primary">Sahu</span>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Crafting immersive game worlds and interactive experiences with Unity
          and cutting-edge game technologies. Turning creative visions into
          playable realities.
        </p>

        {/* Social links */}
        <div className="mb-12 flex items-center justify-center gap-4">
          <a
            href="https://github.com/ramanujsahu"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-[0_0_15px_var(--neon-glow)]"
            aria-label="GitHub Profile"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/ramanujsahu"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-[0_0_15px_var(--neon-glow)]"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:ramanuj@example.com"
            className="group flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-[0_0_15px_var(--neon-glow)]"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="neon-border inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-[0_0_25px_var(--neon-glow)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-3 text-sm font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary hover:text-primary"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  )
}

import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Contact, Footer } from "@/components/contact"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navigation />
      <Hero />
      {/* Divider */}
      <div className="mx-auto h-px max-w-7xl bg-border" />
      <About />
      <div className="mx-auto h-px max-w-7xl bg-border" />
      <Skills />
      <div className="mx-auto h-px max-w-7xl bg-border" />
      <Projects />
      <div className="mx-auto h-px max-w-7xl bg-border" />
      <Experience />
      <div className="mx-auto h-px max-w-7xl bg-border" />
      <Contact />
      <Footer />
    </main>
  )
}

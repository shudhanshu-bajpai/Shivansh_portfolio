"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Computer Science Student"

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center px-4">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.15),transparent_50%)]" />

      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image src="/shivansh.jpg" alt="Profile photo" fill className="object-cover" />
            </div>
          </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Hi, I'm <span className="text-primary">Shivansh Singh</span>
        </h1>

        <div className="h-8">
          <p className="text-xl md:text-2xl font-medium">
            {typedText}
            <span className="animate-blink">|</span>
          </p>
        </div>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Passionate about software development, algorithms, and creating innovative solutions to complex problems.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button asChild size="lg">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>

        <div className="flex justify-center gap-6 pt-6">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/Shivansh-0910" target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/shivansh-singh-2576772b1" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:shivanshs932@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" asChild>
          <Link href="#about" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

export function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(3)

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, product management, and payment processing.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: 2,
      title: "AI Image Generator",
      description: "An application that uses machine learning to generate unique images based on text prompts.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "TensorFlow", "Flask", "React"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A productivity application for managing tasks, projects, and deadlines with team collaboration features.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Firebase", "Tailwind"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather application that displays current and forecasted weather data for any location.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["JavaScript", "OpenWeather API", "Chart.js", "CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: 5,
      title: "Social Media Analytics",
      description: "A dashboard for tracking and analyzing social media metrics across multiple platforms.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "D3.js", "Express", "PostgreSQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: 6,
      title: "Blockchain Explorer",
      description: "An application for exploring and visualizing blockchain transactions and data.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Vue.js", "Web3.js", "Node.js", "MongoDB"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
  ]

  const showMoreProjects = () => {
    setVisibleProjects(projects.length)
  }

  const showLessProjects = () => {
    setVisibleProjects(3)
  }

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          My <span className="text-primary">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, visibleProjects).map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>

              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </CardContent>

              <CardFooter className="flex justify-between mt-auto">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.githubUrl} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href={project.liveUrl} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          {visibleProjects < projects.length ? (
            <Button onClick={showMoreProjects}>
              View More Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button variant="outline" onClick={showLessProjects}>
              Show Less
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

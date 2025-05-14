"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Server, Layers } from "lucide-react"

export function Skills() {
  const [activeTab, setActiveTab] = useState("programming")

  const skillCategories = [
    {
      id: "programming",
      name: "Programming",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Python", level: 80 },
        { name: "Java", level: 75 },
        { name: "C++", level: 70 },
        { name: "C#", level: 65 },
      ],
    },
    {
      id: "frontend",
      name: "Frontend",
      icon: <Globe className="h-5 w-5" />,
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Redux", level: 75 },
        { name: "Vue.js", level: 60 },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      icon: <Server className="h-5 w-5" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Django", level: 70 },
        { name: "Flask", level: 75 },
        { name: "Spring Boot", level: 65 },
        { name: "ASP.NET", level: 60 },
      ],
    },
    {
      id: "database",
      name: "Database",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "Firebase", level: 85 },
        { name: "Redis", level: 65 },
        { name: "GraphQL", level: 70 },
      ],
    },
    {
      id: "other",
      name: "Other",
      icon: <Layers className="h-5 w-5" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "CI/CD", level: 75 },
        { name: "Linux", level: 80 },
        { name: "Agile/Scrum", level: 85 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>

        <Tabs defaultValue="programming" className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-5">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className="flex items-center gap-2"
                >
                  {category.icon}
                  <span className="hidden md:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill) => (
                  <Card key={skill.name} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">{skill.name}</h3>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div
                          className="bg-primary h-2.5 rounded-full transition-all duration-500 ease-out"
                          style={{ width: activeTab === category.id ? `${skill.level}%` : "0%" }}
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

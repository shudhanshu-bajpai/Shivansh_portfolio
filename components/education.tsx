import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "ABES Engineering College",
      location: "Ghaziabad, India",
      period: "2022 - Present",
      description:
        "Focusing on software engineering, backend development, and data structures & algorithms. Current GPA: 8.1/10",
    }
  ]

  return (
    <section id="education" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          My <span className="text-primary">Education</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                      {item.degree}
                    </CardTitle>
                    <CardDescription className="text-base mt-2">{item.institution}</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      {item.period}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <MapPin className="mr-1 h-4 w-4" />
                      {item.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{item.description}</p>
                <div>
                 
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

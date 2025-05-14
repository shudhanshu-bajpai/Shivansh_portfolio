import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import Link from "next/link"


export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="gap-10 items-center justify-center flex">

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Shivansh Singh</h3>
            <p className="text-muted-foreground">
              I'm a Computer Science student with a passion for software development and
              problem-solving.
            </p>
            <p>
              Currently, I am getting specialized in full-stack development. I enjoy building applications that solve real-world problems and contribute to open-source
              projects in my free time.
            </p>
            <p>
              When I'm not coding, you can find me participating in hackathons, attending tech meetups, or exploring the
              latest technologies in the field.
            </p>

            <Button variant="outline" className="mt-4 hover:bg-green-500" asChild>
              <Link href="#" download>
                <FileText className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

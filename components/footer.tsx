import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-12">
      <div className="container">
        <div className="flex flex-col items-center">
          <Link href="/" className="font-bold text-xl mb-8">
            <span className="text-primary">Dev</span>Portfolio
          </Link>

          <div className="flex justify-center gap-6 mb-8">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/Shivansh-0910" target="_blank" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/shivansh-singh" target="_blank" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:shivanshs932@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="text-center text-muted-foreground text-sm mb-8">
            <p>© {currentYear} Shivansh Singh. All rights reserved.</p>
            <p className="mt-1">Made with <span className="text-[18px]">💓</span> </p>
          </div>

          <Button variant="outline" size="icon" asChild className="rounded-full">
            <Link href="#" aria-label="Back to top">
              <ArrowUp className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}

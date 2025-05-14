"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-muted-foreground mb-6">
              Feel free to reach out to me for any questions, opportunities, or just to say hello!
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <a href="mailto:contact@example.com" className="hover:text-primary transition-colors">
                  contact@example.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <a href="tel:+11234567890" className="hover:text-primary transition-colors">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-3" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Current Status</h3>
              <Card>
                <CardContent className="p-6">
                  <p className="mb-2">
                    <span className="font-medium">Availability:</span> Open to internship opportunities
                  </p>
                  <p>
                    <span className="font-medium">Preferred roles:</span> Software Engineer, Full-Stack Developer,
                    Machine Learning Engineer
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-6 text-center">
                    <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
                    <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. I'll respond to your message soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input id="name" placeholder="Your name" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input id="email" type="email" placeholder="Your email" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input id="subject" placeholder="Subject" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Your message" rows={5} required />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

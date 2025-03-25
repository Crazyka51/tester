"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/once-ui/ui/button"
import { Input } from "@/once-ui/ui/input"
import { Textarea } from "@/once-ui/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/once-ui/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulace odeslání formuláře
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Zpráva odeslána",
      description: "Děkuji za vaši zprávu. Ozvu se vám co nejdříve.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold mb-4 text-center">Kontaktujte mě</h1>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        Máte-li zájem o spolupráci nebo jakýkoliv dotaz, neváhejte mě kontaktovat. Rád vám odpovím co nejdříve.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <Card>
          <CardHeader>
            <CardTitle>Kontaktní informace</CardTitle>
            <CardDescription>Zde jsou způsoby, jak mě můžete kontaktovat</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-red-500 mt-0.5" />
              <div>
                <h3 className="font-medium">Email</h3>
                <a href="mailto:matej@example.com" className="text-muted-foreground hover:text-primary">
                  matej@example.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-red-500 mt-0.5" />
              <div>
                <h3 className="font-medium">Telefon</h3>
                <a href="tel:+420123456789" className="text-muted-foreground hover:text-primary">
                  +420 123 456 789
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-red-500 mt-0.5" />
              <div>
                <h3 className="font-medium">Adresa</h3>
                <p className="text-muted-foreground">Praha, Česká republika</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Linkedin className="w-5 h-5 text-red-500 mt-0.5" />
              <div>
                <h3 className="font-medium">LinkedIn</h3>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  linkedin.com/in/matej-hrabak
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Github className="w-5 h-5 text-red-500 mt-0.5" />
              <div>
                <h3 className="font-medium">GitHub</h3>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  github.com/matej-hrabak
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Napište mi</CardTitle>
            <CardDescription>Vyplňte formulář a já se vám ozvu co nejdříve</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Jméno
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Vaše jméno"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="vas@email.cz"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Předmět
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="O čem mi chcete napsat"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Zpráva
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Vaše zpráva..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isSubmitting}>
                {isSubmitting ? "Odesílání..." : "Odeslat zprávu"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


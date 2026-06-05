import { Clock, Mail, MapPin, Phone } from "lucide-react"

import { Badge } from "@/components/ui/badge"

import { ContactForm } from "./components/contact-form"
import { ContactInfo } from "./components/contact-info"

export function ContactPage() {
  return (
    <main>
      <section className="border-b">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <Badge variant="outline">Contato</Badge>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Fale com um consultor.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
              Envie uma proposta, agende uma visita ou solicite uma avaliacao do
              seu veiculo para troca.
            </p>
            <div className="mt-10 grid gap-5">
              <ContactInfo
                icon={<MapPin />}
                title="Endereco"
                text="Av. 9 de Julho, 2160 - Bela Vista, Jundiai - SP"
              />
              <ContactInfo
                icon={<Clock />}
                title="Atendimento"
                text="Seg a Sex das 08h as 18h. Sabado das 08h as 14h."
              />
              <ContactInfo
                icon={<Phone />}
                title="Telefone"
                text="(11) 4492-5101"
              />
              <ContactInfo
                icon={<Mail />}
                title="E-mail"
                text="vendas@autora.com.br"
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}

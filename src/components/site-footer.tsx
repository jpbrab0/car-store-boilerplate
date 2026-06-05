import * as React from "react"
import { ArrowRight, Car, Clock, Mail, MapPin, Phone } from "lucide-react"
import { Link } from "react-router-dom"

import { navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  return (
    <footer className="border-t bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.7fr_1.2fr] lg:px-8">
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="flex size-10 items-center justify-center bg-background text-foreground">
              <Car className="size-4" />
            </span>
            <span className="text-sm font-semibold tracking-[0.28em] uppercase">
              Autora
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-background/70">
            Curadoria automotiva premium com atendimento consultivo, veículos
            selecionados e entrega segura em todo o Brasil.
          </p>
          <Button className="mt-6" variant="secondary" asChild>
            <Link to="/contact">
              Contact
              <ArrowRight />
            </Link>
          </Button>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-[0.3em] text-background/60 uppercase">
            Website
          </h2>
          <nav className="mt-5 grid gap-3 text-sm">
            {navigation.map(([label, href]) => (
              <Link
                key={label}
                className="text-background/75 transition-colors hover:text-background"
                to={href}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-[0.3em] text-background/60 uppercase">
            Atendimento
          </h2>
          <div className="mt-5 grid gap-4 text-sm text-background/75">
            <FooterInfo
              icon={<MapPin />}
              text="Av. Aurora Concept, 1200 - Jardim Orion, Sao Paulo - SP"
            />
            <FooterInfo
              icon={<Clock />}
              text="Seg a Sex das 08h as 18h. Sabado das 08h as 14h."
            />
            <FooterInfo
              icon={<Phone />}
              text="Lucas: (11) 90000-1001 | Marina: (11) 90000-1002 | Rafael: (11) 90000-1003"
            />
            <FooterInfo icon={<Mail />} text="vendas@autora.com" />
          </div>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-background/55 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Autora Veiculos. Todos os direitos reservados.</p>
          <p>Estoque mockado para demonstracao.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterInfo({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex min-w-0 gap-3">
      {React.isValidElement<{ className?: string }>(icon)
        ? React.cloneElement(icon, { className: "mt-0.5 size-4 shrink-0" })
        : icon}
      <span className="min-w-0 leading-6">{text}</span>
    </div>
  )
}

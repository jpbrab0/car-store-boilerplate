import * as React from "react"
import { MapPin, ShieldCheck } from "lucide-react"

import { Separator } from "@/components/ui/separator"

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8"
    >
      <div className="overflow-hidden bg-muted">
        <img
          className="aspect-[4/3] size-full object-cover"
          src="https://images.unsplash.com/photo-1597007066704-67bf2068d5b2?auto=format&fit=crop&w=1200&q=85"
          alt="Showroom automotivo premium"
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
          Sobre a loja
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          Atendimento sob medida para quem valoriza tempo e segurança.
        </h2>
        <p className="mt-5 text-base leading-8 text-muted-foreground">
          Uma curadoria automotiva boutique, com carros selecionados, histórico
          verificado e suporte consultivo para compra, troca, blindagem e
          entrega em todo o Brasil.
        </p>
        <Separator className="my-8" />
        <div className="grid gap-5 sm:grid-cols-2">
          <InfoItem
            icon={<MapPin />}
            title="Jundiai, SP"
            text="Base local e entrega nacional."
          />
          <InfoItem
            icon={<ShieldCheck />}
            title="Garantia"
            text="Procedencia verificada."
          />
        </div>
      </div>
    </section>
  )
}

function InfoItem({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode
  title: string
  text: string
}) {
  return (
    <div className="flex gap-4">
      <div className="flex size-10 shrink-0 items-center justify-center border">
        {React.isValidElement<{ className?: string }>(icon)
          ? React.cloneElement(icon, { className: "size-4" })
          : icon}
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{text}</p>
      </div>
    </div>
  )
}

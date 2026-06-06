import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export function ContactForm() {
  return (
    <form className="border bg-background p-5 sm:p-8">
      <h2 className="text-2xl font-semibold tracking-tight">Enviar proposta</h2>
      <Separator className="my-6" />
      <div className="grid gap-5">
        <label className="grid gap-2">
          <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Nome
          </span>
          <Input placeholder="Seu nome" />
        </label>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              E-mail
            </span>
            <Input placeholder="voce@email.com" type="email" />
          </label>
          <label className="grid gap-2">
            <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              Telefone
            </span>
            <Input placeholder="(11) 99999-9999" />
          </label>
        </div>
        <label className="grid gap-2">
          <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Mensagem
          </span>
          <Input placeholder="Tenho interesse em..." />
        </label>
        <Button className="mt-2 w-full" size="lg">
          Enviar
          <ArrowRight />
        </Button>
      </div>
    </form>
  )
}

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export function ProposalForm() {
  return (
    <form className="border bg-background p-5">
      <h2 className="text-2xl font-semibold tracking-tight">
        Faça uma proposta
      </h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        Envie seus dados para receber atendimento sobre este veículo.
      </p>
      <Separator className="my-6" />
      <div className="grid gap-5">
        <label className="grid gap-2">
          <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Nome
          </span>
          <Input placeholder="Seu nome" />
        </label>
        <label className="grid gap-2">
          <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Email
          </span>
          <Input placeholder="voce@email.com" type="email" />
        </label>
        <label className="grid gap-2">
          <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Telefone
          </span>
          <Input placeholder="(11) 99999-9999" />
        </label>
        <Button size="lg">Enviar</Button>
      </div>
    </form>
  )
}

import { useParams } from "react-router-dom"

import { Badge } from "@/components/ui/badge"
import { findVehicleBySlug, formatCurrency, formatKm } from "@/data/vehicles"

import { DetailSection } from "./components/detail-section"
import { InfoBlock } from "./components/info-block"
import { ProposalForm } from "./components/proposal-form"
import { SpecGrid } from "./components/spec-grid"
import { VehiclePhotoCarousel } from "./components/vehicle-photo-carousel"

export function VehiclePage() {
  const { vehicleSlug = "" } = useParams()
  const vehicle = findVehicleBySlug(vehicleSlug)

  if (!vehicle) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Badge variant="outline">Veiculo nao encontrado</Badge>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight">
          Nao encontramos esse veiculo.
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Ele pode ter sido vendido ou removido do estoque mockado.
        </p>
      </main>
    )
  }

  return (
    <main>
      <VehiclePhotoCarousel vehicle={vehicle} />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-8">
        <div className="min-w-0">
          <div className="flex flex-wrap gap-2">
            {vehicle.featured ? (
              <Badge className="bg-primary px-2 py-1 text-primary-foreground">
                Destaque
              </Badge>
            ) : null}
            {vehicle.armored ? (
              <Badge className="bg-foreground px-2 py-1 text-background">
                Blindado
              </Badge>
            ) : null}
          </div>

          <div className="mt-6 grid gap-5">
            <InfoBlock label="Marca" value={vehicle.brand} />
            <InfoBlock label="Modelo" value={vehicle.model} />
            <div className="grid gap-4 sm:grid-cols-3">
              <InfoBlock label="Ano" value={vehicle.year} />
              <InfoBlock label="Km" value={`${formatKm(vehicle.km)} km`} />
              <InfoBlock label="Preco" value={formatCurrency(vehicle.price)} />
            </div>
          </div>

          <DetailSection title="Especificações Técnicas">
            <SpecGrid
              items={[
                ["Motorizacao", vehicle.power],
                ["Combustivel", vehicle.fuel],
                ["Cambio", vehicle.transmission],
                ["Tracao", vehicle.traction],
                ["Portas", `${vehicle.doors}`],
                ["Cor", vehicle.color],
              ]}
            />
          </DetailSection>

          <DetailSection title="Informações do veículo">
            <p className="text-sm leading-7 text-muted-foreground">
              {vehicle.overview}
            </p>
            <SpecGrid
              className="mt-6"
              items={[
                ["Localizacao", vehicle.location],
                ["Condicao", vehicle.condition],
                ["Categoria", vehicle.category],
              ]}
            />
          </DetailSection>

          <DetailSection title="Adicionais">
            <div className="grid gap-3 sm:grid-cols-2">
              {vehicle.additions.map((item) => (
                <div key={item} className="border px-4 py-3 text-sm">
                  {item}
                </div>
              ))}
            </div>
          </DetailSection>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <ProposalForm />
        </aside>
      </section>
    </main>
  )
}

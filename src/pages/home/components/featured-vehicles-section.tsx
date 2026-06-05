import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

import { VehicleCard } from "@/components/catalog/vehicle-card"
import { Button } from "@/components/ui/button"
import { vehicles } from "@/data/vehicles"

const featuredVehicles = [
  ...vehicles.filter((car) => car.featured),
  ...vehicles.filter((car) => !car.featured),
].slice(0, 3)

export function FeaturedVehiclesSection() {
  return (
    <section className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
              Vitrine
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Veiculos em destaque
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/vehicles">
              Ver todos
              <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredVehicles.map((car) => (
            <VehicleCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  )
}

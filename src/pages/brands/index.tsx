import { Link, useParams } from "react-router-dom"

import { VehicleCatalog } from "@/components/catalog/vehicle-catalog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { brands, brandToSlug, slugToBrand, vehicles } from "@/data/vehicles"

export function BrandPage() {
  const { brandSlug = "" } = useParams()
  const brand = slugToBrand(brandSlug)

  if (!brand) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Badge variant="outline">Marca nao encontrada</Badge>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight">
          Nao encontramos essa marca no estoque.
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Veja todas as marcas disponiveis ou fale com a equipe para buscar um
          modelo especifico sob encomenda.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {brands.map((item) => (
            <Button key={item} variant="outline" asChild>
              <Link to={`/brands/${brandToSlug(item)}`}>{item}</Link>
            </Button>
          ))}
        </div>
      </main>
    )
  }

  const brandVehicles = vehicles.filter((car) => car.brand === brand)

  return (
    <main>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {brand}
          </h1>
        </div>
      </section>
      <VehicleCatalog
        initialBrand={brand}
        layout="list"
        showHeading={false}
        vehicles={brandVehicles}
      />
    </main>
  )
}

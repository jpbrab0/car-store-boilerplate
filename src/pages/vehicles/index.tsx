import { VehicleCatalog } from "@/components/catalog/vehicle-catalog"
import { vehicles } from "@/data/vehicles"

export function VehiclesPage() {
  return (
    <main>
      <VehicleCatalog layout="list" showHeading={false} vehicles={vehicles} />
    </main>
  )
}

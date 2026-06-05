import { VehicleCatalog } from "@/components/catalog/vehicle-catalog"
import { vehicles } from "@/data/vehicles"

export function ArmoredPage() {
  const armoredVehicles = vehicles.filter((car) => car.armored)

  return (
    <main>
      <VehicleCatalog
        initialCategory="Blindado"
        layout="list"
        showHeading={false}
        vehicles={armoredVehicles}
      />
    </main>
  )
}

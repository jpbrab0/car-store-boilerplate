import * as React from "react"
import { Calendar, Car, Fuel, Gauge, MapPin } from "lucide-react"
import { Link } from "react-router-dom"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  formatCurrency,
  formatKm,
  vehicleToSlug,
  type Vehicle,
} from "@/data/vehicles"
import { cn } from "@/lib/utils"

export function VehicleCard({
  car,
  variant = "grid",
}: {
  car: Vehicle
  variant?: "grid" | "list"
}) {
  const isList = variant === "list"

  return (
    <Card
      className={cn(
        "group w-full min-w-0 border shadow-none transition-all hover:-translate-y-1 hover:shadow-xl",
        isList && "gap-0 py-4 md:grid md:grid-cols-[320px_minmax(0,1fr)]"
      )}
    >
      <div className="relative min-w-0 overflow-hidden">
        <img
          className={cn(
            "aspect-[4/3] size-full object-cover transition-transform duration-500 group-hover:scale-105",
            isList && "md:h-full md:min-h-64"
          )}
          src={car.image}
          alt={`${car.brand} ${car.model}`}
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {car.featured ? (
            <Badge className="bg-primary px-2 py-1 text-primary-foreground shadow-sm">
              Destaque
            </Badge>
          ) : null}
          {car.armored ? (
            <Badge className="bg-background px-2 py-1 text-foreground shadow-sm">
              Blindado
            </Badge>
          ) : null}
        </div>
      </div>
      <div className="flex min-w-0 flex-col">
        <CardHeader>
          <div className="text-xs font-semibold tracking-[0.25em] text-muted-foreground uppercase">
            {car.brand}
          </div>
          <CardTitle className="line-clamp-2 text-xl normal-case">
            {car.model}
          </CardTitle>
        </CardHeader>
        <CardContent className="min-w-0">
          <div className="text-2xl font-semibold">
            {formatCurrency(car.price)}
          </div>
          <div
            className={cn(
              "mt-5 grid grid-cols-2 gap-3 text-sm text-muted-foreground",
              isList && "sm:grid-cols-4"
            )}
          >
            <Spec icon={<Calendar />} label={car.year} />
            <Spec icon={<Gauge />} label={`${formatKm(car.km)} km`} />
            <Spec icon={<Fuel />} label={car.fuel} />
            <Spec icon={<Car />} label={car.power} />
          </div>
          <Separator className="my-5" />
          <div className="flex min-w-0 items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 shrink-0" />
            <span className="truncate">{car.location}</span>
          </div>
        </CardContent>
        <CardFooter className="mt-2 gap-2">
          <Button className="min-w-0 flex-1" asChild>
            <Link to={`/vehicles/${vehicleToSlug(car)}`}>Ver detalhes</Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  )
}

function Spec({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex min-w-0 items-center gap-2">
      {React.isValidElement<{ className?: string }>(icon)
        ? React.cloneElement(icon, { className: "size-4 shrink-0" })
        : icon}
      <span className="truncate">{label}</span>
    </div>
  )
}

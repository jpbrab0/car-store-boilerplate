import * as React from "react"
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatCurrency, vehicleToSlug, vehicles } from "@/data/vehicles"

const heroVehicles = vehicles.filter((car) => car.featured)

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const activeVehicle = heroVehicles[activeIndex] ?? vehicles[0]
  const progressDuration = 5200

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? heroVehicles.length - 1 : current - 1
    )
  }

  const goToNext = () => {
    setActiveIndex((current) =>
      current === heroVehicles.length - 1 ? 0 : current + 1
    )
  }

  React.useEffect(() => {
    const timeout = window.setTimeout(() => {
      setActiveIndex((current) =>
        current === heroVehicles.length - 1 ? 0 : current + 1
      )
    }, progressDuration)

    return () => window.clearTimeout(timeout)
  }, [activeIndex, progressDuration])

  return (
    <section className="border-b">
      <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-12">
        <div>
          <Badge variant="outline" className="mb-5 gap-2">
            <Sparkles className="size-3" />
            Carros em destaque
          </Badge>
          <p className="text-sm font-semibold tracking-[0.3em] text-muted-foreground uppercase">
            {activeVehicle.brand}
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {activeVehicle.model}
          </h1>
          <p className="mt-6 text-3xl font-semibold">
            {formatCurrency(activeVehicle.price)}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link to={`/vehicles/${vehicleToSlug(activeVehicle)}`}>
                Ver detalhes
                <ArrowRight />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/vehicles">Ver estoque</Link>
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-3">
            <Button variant="outline" size="icon" onClick={goToPrevious}>
              <ArrowLeft />
            </Button>
            <div className="flex gap-2">
              {heroVehicles.map((car, index) => (
                <button
                  key={car.id}
                  className="relative h-1.5 w-10 overflow-hidden bg-muted"
                  onClick={() => {
                    setActiveIndex(index)
                  }}
                  type="button"
                  aria-label={`Mostrar ${car.brand} ${car.model}`}
                >
                  <span
                    key={`${car.id}-${activeIndex}`}
                    className="absolute inset-y-0 left-0 bg-foreground transition-[width]"
                    style={{
                      animation:
                        index === activeIndex
                          ? `hero-progress ${progressDuration}ms linear forwards`
                          : undefined,
                      width: index === activeIndex ? undefined : "0%",
                    }}
                  />
                </button>
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={goToNext}>
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="relative min-h-[360px] overflow-hidden bg-muted lg:min-h-[560px]">
          <img
            className="absolute inset-0 size-full object-cover"
            src={activeVehicle.image}
            alt={`${activeVehicle.brand} ${activeVehicle.model}`}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent" />
          <div className="absolute right-5 bottom-5 left-5 flex flex-wrap gap-2 text-white sm:right-8 sm:bottom-8 sm:left-8">
            <Badge className="bg-white text-black hover:bg-white">
              Destaque
            </Badge>
            <Badge className="border-white/30 bg-black/30 text-white">
              {activeVehicle.year}
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}

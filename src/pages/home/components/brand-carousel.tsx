import * as React from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { brandLogos, brands, brandToSlug } from "@/data/vehicles"
import { useMediaQuery } from "@/hooks/use-media-query"

export function BrandCarousel() {
  const isMobile = useMediaQuery("(max-width: 639px)")
  const brandsPerPage = isMobile ? 1 : 4
  const brandPageCount = Math.ceil(brands.length / brandsPerPage)
  const [brandPage, setBrandPage] = React.useState(0)
  const safeBrandPage = Math.min(brandPage, brandPageCount - 1)
  const visibleBrands = React.useMemo(
    () =>
      brands.slice(
        safeBrandPage * brandsPerPage,
        safeBrandPage * brandsPerPage + brandsPerPage
      ),
    [brandsPerPage, safeBrandPage]
  )

  const showPreviousBrands = () => {
    setBrandPage((current) =>
      current === 0 ? brandPageCount - 1 : current - 1
    )
  }

  const showNextBrands = () => {
    setBrandPage((current) => (current + 1) % brandPageCount)
  }

  return (
    <section className="border-b">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
          <Button variant="outline" size="icon" onClick={showPreviousBrands}>
            <ArrowLeft />
          </Button>
          <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {visibleBrands.map((brand) => (
              <Link
                key={brand}
                to={`/brands/${brandToSlug(brand)}`}
                className="group flex h-28 items-center justify-center border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                aria-label={`Ver veiculos ${brand}`}
              >
                <img
                  className="max-h-12 max-w-28 object-contain opacity-90 transition-opacity group-hover:opacity-100"
                  src={brandLogos[brand]}
                  alt={brand}
                />
              </Link>
            ))}
          </div>
          <Button variant="outline" size="icon" onClick={showNextBrands}>
            <ArrowRight />
          </Button>
        </div>
        <div className="mt-4 flex justify-center gap-2">
          {Array.from({ length: brandPageCount }, (_, index) => (
            <button
              key={index}
              className={[
                "size-2 border border-foreground/30",
                index === safeBrandPage ? "bg-foreground" : "bg-transparent",
              ].join(" ")}
              onClick={() => setBrandPage(index)}
              type="button"
              aria-label={`Mostrar grupo ${index + 1} de marcas`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

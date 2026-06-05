import * as React from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

import { type Vehicle } from "@/data/vehicles"

const extraGalleryImages = [
  "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1600&q=90",
  "https://images.unsplash.com/photo-1549927681-0b673b8243ab?auto=format&fit=crop&w=1600&q=90",
  "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=90",
  "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=90",
]

export function VehiclePhotoCarousel({ vehicle }: { vehicle: Vehicle }) {
  const [slideIndex, setSlideIndex] = React.useState(0)
  const [modalIndex, setModalIndex] = React.useState(0)
  const [modalOpen, setModalOpen] = React.useState(false)
  const images = React.useMemo(
    () => [
      ...(vehicle.images.length > 0 ? vehicle.images : [vehicle.image]),
      ...extraGalleryImages,
    ],
    [vehicle.image, vehicle.images]
  )
  const visibleItems = 3
  const maxSlideIndex = Math.max(0, images.length - visibleItems)

  const showNextSlide = () => {
    setSlideIndex((current) => (current >= maxSlideIndex ? 0 : current + 1))
  }

  const showPreviousSlide = () => {
    setSlideIndex((current) => (current === 0 ? maxSlideIndex : current - 1))
  }

  const showNext = () => {
    setModalIndex((current) => (current + 1) % images.length)
  }

  const showPrevious = () => {
    setModalIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    )
  }

  return (
    <section className="border-b">
      <div className="relative block h-[58svh] min-h-[360px] w-full overflow-hidden bg-black">
        <button
          className="absolute top-1/2 left-4 z-10 flex size-11 -translate-y-1/2 items-center justify-center border border-white/30 bg-white text-black shadow-lg"
          onClick={showPreviousSlide}
          type="button"
          aria-label="Fotos anteriores"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          className="absolute top-1/2 right-4 z-10 flex size-11 -translate-y-1/2 items-center justify-center border border-white/30 bg-white text-black shadow-lg"
          onClick={showNextSlide}
          type="button"
          aria-label="Proximas fotos"
        >
          <ChevronRight className="size-5" />
        </button>
        <div
          className="flex h-full transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(-${slideIndex * (100 / visibleItems)}%)`,
          }}
        >
          {images.map((image, index) => (
            <button
              key={image}
              className="h-full w-1/3 shrink-0 p-1.5 sm:p-3"
              onClick={() => {
                setModalIndex(index)
                setModalOpen(true)
              }}
              type="button"
            >
              <img
                className="size-full cursor-pointer object-cover"
                src={image}
                alt={`${vehicle.brand} ${vehicle.model}`}
              />
            </button>
          ))}
        </div>
      </div>

      {modalOpen ? (
        <div className="fixed inset-0 z-50 bg-black/95 p-4 text-white">
          <button
            className="absolute top-4 right-4 z-20 flex size-11 items-center justify-center border border-white/30 bg-white text-black shadow-lg"
            onClick={() => setModalOpen(false)}
            type="button"
            aria-label="Fechar galeria"
          >
            <X className="size-4" />
          </button>
          <button
            className="absolute top-1/2 left-4 z-20 flex size-11 -translate-y-1/2 items-center justify-center border border-white/30 bg-white text-black shadow-lg"
            onClick={showPrevious}
            type="button"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            className="absolute top-1/2 right-4 z-20 flex size-11 -translate-y-1/2 items-center justify-center border border-white/30 bg-white text-black shadow-lg"
            onClick={showNext}
            type="button"
            aria-label="Proxima foto"
          >
            <ChevronRight className="size-5" />
          </button>
          <button
            className="flex size-full items-center justify-center"
            onClick={showNext}
            type="button"
          >
            <img
              className="max-h-full max-w-full object-contain"
              src={images[modalIndex]}
              alt={`${vehicle.brand} ${vehicle.model}`}
            />
          </button>
          <div className="pointer-events-none absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((image, index) => (
              <span
                key={image}
                className={[
                  "size-3 border border-white/60 bg-transparent",
                  index === modalIndex ? "bg-white" : "",
                ].join(" ")}
              />
            ))}
          </div>
          <div className="pointer-events-none absolute right-5 bottom-5 text-sm font-semibold tracking-widest text-white/80">
            {modalIndex + 1} / {images.length}
          </div>
        </div>
      ) : null}
    </section>
  )
}

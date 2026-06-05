import { AboutSection } from "./components/about-section"
import { BrandCarousel } from "./components/brand-carousel"
import { FeaturedVehiclesSection } from "./components/featured-vehicles-section"
import { HeroCarousel } from "./components/hero-carousel"

export function HomePage() {
  return (
    <main>
      <HeroCarousel />
      <BrandCarousel />
      <AboutSection />
      <FeaturedVehiclesSection />
    </main>
  )
}

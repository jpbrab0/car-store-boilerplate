import { ArrowRight, Car, Menu } from "lucide-react"
import { Link } from "react-router-dom"

import { navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/92 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center bg-primary text-primary-foreground">
            <Car className="size-4" />
          </span>
          <span className="text-sm font-semibold tracking-[0.28em] uppercase">
            Autora
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-xs font-semibold tracking-widest text-muted-foreground uppercase md:flex">
          {navigation.map(([label, href]) => (
            <Link
              key={label}
              className="transition-colors hover:text-foreground"
              to={href}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild>
            <Link to="/contact">
              WhatsApp
              <ArrowRight />
            </Link>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden" variant="outline" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Autora</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 px-4">
              {navigation.map(([label, href]) => (
                <Link
                  key={label}
                  className="border-b py-3 text-sm font-semibold tracking-widest uppercase"
                  to={href}
                >
                  {label}
                </Link>
              ))}
              <Button className="mt-4" asChild>
                <Link to="/contact">Falar com consultor</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

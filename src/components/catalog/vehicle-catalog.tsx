import * as React from "react"
import { ChevronDown, Search, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  brands,
  categories,
  formatCurrency,
  maxVehiclePrice,
  type Vehicle,
} from "@/data/vehicles"

import { VehicleCard } from "./vehicle-card"

type VehicleCatalogProps = {
  title?: string
  eyebrow?: string
  initialBrand?: string
  initialCategory?: string
  layout?: "grid" | "list"
  showHeading?: boolean
  vehicles: Vehicle[]
}

export function VehicleCatalog({
  title = "Encontre o próximo carro.",
  eyebrow = "Estoque selecionado",
  initialBrand = "Todas",
  initialCategory = "Todos",
  layout = "grid",
  showHeading = true,
  vehicles,
}: VehicleCatalogProps) {
  const [category, setCategory] = React.useState(initialCategory)
  const [brand, setBrand] = React.useState(initialBrand)
  const [search, setSearch] = React.useState("")
  const [priceRange, setPriceRange] = React.useState([maxVehiclePrice])
  const [sort, setSort] = React.useState("featured")

  const availableBrands = React.useMemo(
    () => [
      "Todas",
      ...brands.filter((item) => vehicles.some((car) => car.brand === item)),
    ],
    [vehicles]
  )

  const availableCategories = React.useMemo(
    () => [
      "Todos",
      ...categories
        .filter((item) => item !== "Todos")
        .filter((item) => vehicles.some((car) => car.category === item)),
    ],
    [vehicles]
  )

  const filteredVehicles = React.useMemo(() => {
    return vehicles
      .filter((car) => category === "Todos" || car.category === category)
      .filter((car) => brand === "Todas" || car.brand === brand)
      .filter((car) => car.price <= priceRange[0])
      .filter((car) => {
        const query = search.trim().toLowerCase()
        return (
          query.length === 0 ||
          `${car.brand} ${car.model} ${car.category}`
            .toLowerCase()
            .includes(query)
        )
      })
      .sort((a, b) => {
        if (sort === "price-asc") return a.price - b.price
        if (sort === "price-desc") return b.price - a.price
        if (sort === "km") return a.km - b.km
        return Number(b.featured) - Number(a.featured)
      })
  }, [brand, category, priceRange, search, sort, vehicles])

  const isList = layout === "list"

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {showHeading ? (
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
              {eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
          </div>
        </div>
      ) : null}

      {isList ? (
        <div className={showHeading ? "mt-8" : ""}>
          <FilterPanel
            availableBrands={availableBrands}
            availableCategories={availableCategories}
            brand={brand}
            category={category}
            direction="row"
            priceRange={priceRange}
            setBrand={setBrand}
            setCategory={setCategory}
            setPriceRange={setPriceRange}
          />
        </div>
      ) : null}

      <div
        className={isList ? "mt-8" : "mt-8 grid gap-8 lg:grid-cols-[280px_1fr]"}
      >
        {!isList ? (
          <aside className="hidden lg:block">
            <FilterPanel
              availableBrands={availableBrands}
              availableCategories={availableCategories}
              brand={brand}
              category={category}
              priceRange={priceRange}
              setBrand={setBrand}
              setCategory={setCategory}
              setPriceRange={setPriceRange}
            />
          </aside>
        ) : null}
        <div>
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              {filteredVehicles.length} veículos encontrados
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative w-full sm:w-72">
                <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  className="pl-10"
                  placeholder="Buscar marca, modelo ou categoria"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Ordenar
                    <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setSort("featured")}>
                    Destaques primeiro
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSort("price-asc")}>
                    Menor preço
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSort("price-desc")}>
                    Maior preço
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSort("km")}>
                    Menor km
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {!isList ? (
                <Sheet>
                  <SheetTrigger asChild>
                    <Button className="lg:hidden" variant="outline">
                      <SlidersHorizontal />
                      Filtros
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Filtros</SheetTitle>
                    </SheetHeader>
                    <div className="px-4">
                      <FilterPanel
                        availableBrands={availableBrands}
                        availableCategories={availableCategories}
                        brand={brand}
                        category={category}
                        priceRange={priceRange}
                        setBrand={setBrand}
                        setCategory={setCategory}
                        setPriceRange={setPriceRange}
                      />
                    </div>
                  </SheetContent>
                </Sheet>
              ) : null}
            </div>
          </div>
          {!isList ? (
            <Tabs value={category} onValueChange={setCategory} className="mb-6">
              <TabsList className="w-full justify-start overflow-x-auto">
                {availableCategories.map((item) => (
                  <TabsTrigger key={item} value={item}>
                    {item}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          ) : null}
          <div
            className={
              isList
                ? "grid gap-5"
                : "grid min-w-0 gap-5 sm:grid-cols-2 xl:grid-cols-3"
            }
          >
            {filteredVehicles.map((car) => (
              <VehicleCard
                key={car.id}
                car={car}
                variant={isList ? "list" : "grid"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FilterPanel({
  availableBrands,
  availableCategories,
  brand,
  category,
  direction = "column",
  priceRange,
  setBrand,
  setCategory,
  setPriceRange,
}: {
  availableBrands: string[]
  availableCategories: string[]
  brand: string
  category: string
  direction?: "column" | "row"
  priceRange: number[]
  setBrand: (value: string) => void
  setCategory: (value: string) => void
  setPriceRange: (value: number[]) => void
}) {
  const isRow = direction === "row"

  return (
    <div className={isRow ? "py-5" : "border bg-background p-5"}>
      {!isRow ? (
        <>
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-semibold tracking-widest uppercase">Filtros</h3>
            <SlidersHorizontal className="size-4 text-muted-foreground" />
          </div>
          <Separator className="my-5" />
        </>
      ) : null}
      <div
        className={
          isRow
            ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.5fr]"
            : "space-y-6"
        }
      >
        <div className="min-w-0">
          <label className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Marca
          </label>
          <Select value={brand} onValueChange={setBrand}>
            <SelectTrigger className="mt-2 w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {availableBrands.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="min-w-0">
          <label className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Categoria
          </label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="mt-2 w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {availableCategories.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="min-w-0">
          <div className="flex items-center justify-between gap-3">
            <label className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              Preço máximo
            </label>
            <span className="text-sm font-semibold">
              {formatCurrency(priceRange[0])}
            </span>
          </div>
          <Slider
            className="mt-5"
            value={priceRange}
            max={maxVehiclePrice}
            min={100000}
            step={10000}
            onValueChange={setPriceRange}
          />
        </div>
      </div>
    </div>
  )
}

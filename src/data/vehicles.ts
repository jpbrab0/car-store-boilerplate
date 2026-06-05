export type Vehicle = {
  id: number
  brand: string
  model: string
  category: "Esportivo" | "SUV" | "Sedan" | "Blindado" | "Elétrico"
  year: string
  km: number
  price: number
  power: string
  fuel: string
  location: string
  color: string
  image: string
  images: string[]
  featured?: boolean
  armored?: boolean
  transmission: string
  traction: string
  doors: number
  condition: string
  overview: string
  additions: string[]
}

export const vehicles: Vehicle[] = [
  {
    id: 1,
    brand: "Porsche",
    model: "Cayenne Turbo",
    category: "SUV",
    year: "2019/2019",
    km: 25400,
    price: 549900,
    power: "550 cv",
    fuel: "Gasolina",
    location: "Jundiai, SP",
    color: "Preto Basalto",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=90",
    ],
    featured: true,
    transmission: "Automático",
    traction: "Integral",
    doors: 4,
    condition: "Pronta entrega",
    overview:
      "SUV esportivo com alto desempenho, acabamento premium e histórico verificado.",
    additions: ["Teto panoramico", "Bancos ventilados", "Som premium"],
  },
  {
    id: 2,
    brand: "Land Rover",
    model: "Discovery Sport HSE SI4",
    category: "SUV",
    year: "2017/2017",
    km: 87000,
    price: 119900,
    power: "240 cv",
    fuel: "Flex",
    location: "Jundiai, SP",
    color: "Prata Indus",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1511407397940-d57f68e81203?auto=format&fit=crop&w=1600&q=90",
    ],
    transmission: "Automático",
    traction: "Integral",
    doors: 4,
    condition: "Revisado",
    overview:
      "SUV familiar com boa altura de rodagem, conforto e pacote HSE completo.",
    additions: ["Teto panoramico", "Camera de ré", "Ar digital"],
  },
  {
    id: 3,
    brand: "Porsche",
    model: "Macan",
    category: "SUV",
    year: "2024/2025",
    km: 8400,
    price: 539900,
    power: "265 cv",
    fuel: "Gasolina",
    location: "Jundiai, SP",
    color: "Cinza Crayon",
    image:
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1617814076668-8dfc6fe2ac55?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1600712242805-5f78671b24da?auto=format&fit=crop&w=1600&q=90",
    ],
    featured: true,
    transmission: "PDK",
    traction: "Integral",
    doors: 4,
    condition: "Baixa km",
    overview:
      "SUV compacto premium com dirigibilidade esportiva e pacote de tecnologia atual.",
    additions: ["Pacote Sport Chrono", "Rodas 21", "Assistente de faixa"],
  },
  {
    id: 4,
    brand: "Chevrolet",
    model: "Camaro SS",
    category: "Esportivo",
    year: "2014/2015",
    km: 42100,
    price: 259900,
    power: "406 cv",
    fuel: "Gasolina",
    location: "Jundiai, SP",
    color: "Amarelo Rally",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1611016186353-9af58c69a533?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=90",
    ],
    transmission: "Automático",
    traction: "Traseira",
    doors: 2,
    condition: "Colecionável",
    overview:
      "Muscle car V8 com visual marcante, ronco envolvente e configuração SS.",
    additions: ["Escape esportivo", "Bancos em couro", "Head-up display"],
  },
  {
    id: 5,
    brand: "Mercedes-Benz",
    model: "SLK 200",
    category: "Esportivo",
    year: "2013/2014",
    km: 38900,
    price: 229900,
    power: "184 cv",
    fuel: "Gasolina",
    location: "Jundiai, SP",
    color: "Branco Polar",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1616789916437-bbf724d10dae?auto=format&fit=crop&w=1600&q=90",
    ],
    transmission: "Automático",
    traction: "Traseira",
    doors: 2,
    condition: "Conversível",
    overview:
      "Roadster elegante com teto retrátil, ótimo acabamento e condução refinada.",
    additions: ["Teto rígido retrátil", "Bancos elétricos", "Faróis bi-xenon"],
  },
  {
    id: 6,
    brand: "BMW",
    model: "M340i xDrive",
    category: "Sedan",
    year: "2022/2023",
    km: 16200,
    price: 429900,
    power: "387 cv",
    fuel: "Gasolina",
    location: "Jundiai, SP",
    color: "Azul Portimao",
    image:
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=1600&q=90",
    ],
    featured: true,
    transmission: "Automático",
    traction: "Integral",
    doors: 4,
    condition: "Garantia ativa",
    overview:
      "Sedan esportivo com motor seis cilindros, tração xDrive e pacote M.",
    additions: ["Pacote M Sport", "Som Harman Kardon", "Piloto adaptativo"],
  },
  {
    id: 7,
    brand: "Volvo",
    model: "XC90 T8 Recharge",
    category: "Elétrico",
    year: "2023/2024",
    km: 9300,
    price: 519900,
    power: "462 cv",
    fuel: "Hibrido",
    location: "Jundiai, SP",
    color: "Onyx Black",
    image:
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1605515298946-d0573716f803?auto=format&fit=crop&w=1600&q=90",
    ],
    transmission: "Automático",
    traction: "Integral",
    doors: 4,
    condition: "Hibrido plug-in",
    overview:
      "SUV de sete lugares com conjunto híbrido, segurança Volvo e alto conforto.",
    additions: ["7 lugares", "Piloto semi-autonomo", "Som Bowers & Wilkins"],
  },
  {
    id: 8,
    brand: "Toyota",
    model: "SW4 Diamond",
    category: "Blindado",
    year: "2021/2022",
    km: 31800,
    price: 389900,
    power: "204 cv",
    fuel: "Diesel",
    location: "Jundiai, SP",
    color: "Branco Perolizado",
    image:
      "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1530263503756-b382295fd927?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1600&q=90",
    ],
    armored: true,
    transmission: "Automático",
    traction: "4x4",
    doors: 4,
    condition: "Blindagem revisada",
    overview:
      "SUV blindado com robustez, conforto e documentação de blindagem disponível.",
    additions: ["Blindagem nivel III-A", "Laudo de blindagem", "7 lugares"],
  },
]

export const categories = [
  "Todos",
  "SUV",
  "Esportivo",
  "Sedan",
  "Blindado",
  "Elétrico",
]

export const brands = Array.from(new Set(vehicles.map((car) => car.brand)))

export const brandLogos: Record<string, string> = {
  BMW: "https://cdn.simpleicons.org/bmw/111111",
  Chevrolet: "https://cdn.simpleicons.org/chevrolet/111111",
  "Land Rover": "https://www.svgrepo.com/show/446889/land-rover.svg",
  "Mercedes-Benz": "https://www.svgrepo.com/show/446899/mercedes-benz.svg",
  Porsche: "https://cdn.simpleicons.org/porsche/111111",
  Toyota: "https://cdn.simpleicons.org/toyota/111111",
  Volvo: "https://cdn.simpleicons.org/volvo/111111",
}

export const maxVehiclePrice = Math.max(...vehicles.map((car) => car.price))

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value)

export const formatKm = (value: number) =>
  new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 0 }).format(value)

export const brandToSlug = (brand: string) =>
  brand
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")

export const slugToBrand = (slug: string) =>
  brands.find((brand) => brandToSlug(brand) === slug)

export const vehicleToSlug = (vehicle: Vehicle) =>
  `${vehicle.id}-${brandToSlug(`${vehicle.brand}-${vehicle.model}`)}`

export const findVehicleBySlug = (slug: string) =>
  vehicles.find((vehicle) => vehicleToSlug(vehicle) === slug)

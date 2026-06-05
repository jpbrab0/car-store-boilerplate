import { Route, Routes } from "react-router-dom"

import { AppLayout } from "@/components/app-layout"
import { ArmoredPage } from "@/pages/armored"
import { BrandPage } from "@/pages/brands"
import { ContactPage } from "@/pages/contact"
import { HomePage } from "@/pages/home"
import { VehiclePage } from "@/pages/vehicle"
import { VehiclesPage } from "@/pages/vehicles"

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="vehicles" element={<VehiclesPage />} />
        <Route path="vehicles/:vehicleSlug" element={<VehiclePage />} />
        <Route path="brands/:brandSlug" element={<BrandPage />} />
        <Route path="armored" element={<ArmoredPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App

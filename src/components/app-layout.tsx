import { Outlet } from "react-router-dom"

import { ScrollToTop } from "@/components/scroll-to-top"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export function AppLayout() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <ScrollToTop />
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </div>
  )
}

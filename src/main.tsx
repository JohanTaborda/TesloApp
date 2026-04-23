import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import TesloShop from "./TesloShop"
import { ThemeProvider } from "@/components/theme-provider.tsx"


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <TesloShop />
    </ThemeProvider>
  </StrictMode>
)

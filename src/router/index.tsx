import { createBrowserRouter } from "react-router-dom"

// Pages
import LanderPage from "@/views/Lander"
import InfoPage from "@/views/Info"
import CheckoutPage from "@/views/Checkout"
import WinnerPage from "@/views/Winner"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LanderPage />
  },
  {
    path: "/info",
    element: <InfoPage />
  },
  {
    path: "/checkout",
    element: <CheckoutPage />
  },
  {
    path: "/winner",
    element: <WinnerPage />
  }
])

export default router;
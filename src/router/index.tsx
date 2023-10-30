import { createBrowserRouter } from "react-router-dom"
import LanderPage from "@/views/Lander"
import InfoPage from "@/views/Info"
import CheckoutPage from "@/views/Checkout"

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
  }
])

export default router;
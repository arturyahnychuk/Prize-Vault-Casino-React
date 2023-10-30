import { createBrowserRouter } from "react-router-dom"
import LanderPage from "@/views/Lander"
import InfoPage from "@/views/Info"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LanderPage />
  },
  {
    path: "/info",
    element: <InfoPage />
  }
])

export default router;
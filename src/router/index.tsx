import { createBrowserRouter } from "react-router-dom"
import LanderPage from "@/views/Lander"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LanderPage />
  }
])

export default router;
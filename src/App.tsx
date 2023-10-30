import { RouterProvider } from 'react-router-dom'
import Header from "@/components/common/Header"
import PageLayout from "@/components/layout/PageLayout"
import router from "@/router"
import '@/index.css'

const App = () => {  
  return (
    <>
      <PageLayout>
        <Header />
        <RouterProvider router={router} />
      </PageLayout>      
    </>
  )
}

export default App

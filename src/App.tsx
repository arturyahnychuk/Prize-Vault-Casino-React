import { useState, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import Header from "@/components/common/Header"
import PageLayout from "@/components/layout/PageLayout"
import Loader from '@/components/loader/Loader'
import router from "@/router"
import '@/index.css'

const App = () => {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    window.onload = () => {
      setIsLoading(false)
    }

    return () => {
      window.onload = null
    }
  }, [])

  return (
    <>
      <PageLayout>
        { isLoading && (<Loader />)}
        <Header />
        <RouterProvider router={router} />
      </PageLayout>      
    </>
  )
}

export default App

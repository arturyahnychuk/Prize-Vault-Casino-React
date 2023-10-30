// Main Router
import { RouterProvider } from "react-router-dom";
import router from "@/router";
// main css
import "@/index.css";
// Components
import PageLayout from "@/components/layouts/pageLayout";
import Header from "@/components/common/Header";

import { useEffect, useState } from "react";
import Loader from "./components/loader/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  window.addEventListener('load', ()=> {
    setIsLoading(false)
  })
  return (
    <PageLayout>
        {isLoading && (<Loader />)}
      <Header />
      <RouterProvider router={router} />
    </PageLayout>
  );
}

export default App;

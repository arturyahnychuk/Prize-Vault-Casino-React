// Main Router
import { RouterProvider, useNavigate } from "react-router-dom";
import router from "@/router";
// main css
import "@/index.css";
// Components
import PageLayout from "@/components/layouts/pageLayout";
import Header from "@/components/common/Header";

import { useEffect, useState, useLayoutEffect } from "react";
import Loader from "./components/loader/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useLayoutEffect(() => {
    if (document.readyState === "complete") {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
    document.addEventListener("readystatechange", () => {
      setIsLoading(false);
    });
    window.onload = () => {
      setIsLoading(false);
    };
  }, []);


  return (
    <PageLayout>
      {isLoading && <Loader />}
      <Header />
      <RouterProvider router={router} />
    </PageLayout>
  );
}

export default App;

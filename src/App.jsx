import "./App.css";
import Navbar from "./components/Navbar";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useState } from "react";
import { Suspense } from "react";

const pricingPromise = fetch('pricingData.json').then(res => res.json());
function App() {

  return (
    <>    
    <Navbar></Navbar>
    <Suspense fallback={<span className="loading loading-ball loading-md"></span>}>
      <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
    </Suspense>
    </>
  )
}

export default App

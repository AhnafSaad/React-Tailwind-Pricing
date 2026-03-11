import "./App.css";
import Navbar from "./components/Navbar";
import PricingOptions from "./components/PricingOptions";
import Products from "./components/Products";
import ResultData from "./components/ResultData";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useState } from "react";
import { Suspense } from "react";

const pricingPromise = fetch('pricingData.json').then(res => res.json());
const productPromise = axios.get('productData.json')
function App() {

  return (
    <>    
    <Navbar></Navbar>
    <Suspense fallback={<span className="loading loading-ball loading-md"></span>}>
      <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
    </Suspense>
    <ResultData></ResultData>
    <Products productPromise={productPromise}></Products>
    </>
  )
}

export default App

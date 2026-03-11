import React from "react";
import { use } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

;

const Producs = ({productPromise}) => {
    const productList = use(productPromise);
    const data = productList.data
    
   
    return (
        <div>
             <h1>Products : {data.length}</h1>
        </div>
    );
};

export default Producs;
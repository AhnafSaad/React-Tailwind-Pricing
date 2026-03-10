import PricingCard from "./PricingCard";
import React from "react";
import { use } from "react";

const PricingOptions = ({ pricingPromise }) => {
    const pricingData = use(pricingPromise);
    return (
        <div className="grid md:grid-cols-4 gap-2">
            {pricingData.map((pricing)=> <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)}
        </div>
    );
};

export default PricingOptions;
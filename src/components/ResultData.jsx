import React from "react";
import { Line, LineChart, ResponsiveContainer } from "recharts";

const results = [
  { "month": "Jan", "sales": 1200 },
  { "month": "Feb", "sales": 1500 },
  { "month": "Mar", "sales": 1700 },
  { "month": "Apr", "sales": 1400 },
  { "month": "May", "sales": 2100 },
  { "month": "Jun", "sales": 2500 },
  { "month": "Jul", "sales": 2300 },
  { "month": "Aug", "sales": 2600 },
  { "month": "Sep", "sales": 2800 },
  { "month": "Oct", "sales": 3000 },
  { "month": "Nov", "sales": 3200 },
  { "month": "Dec", "sales": 3500 }
];

const ResultData = () => {
  return (
    <div style={{ width: '100%', maxWidth: 600, height: 300 }}>
      
      
      <ResponsiveContainer width="100%" height="100%">
        
        
        <LineChart data={results}>
          <Line 
            type="monotone" 
            dataKey="sales" 
            stroke="#8884d8" 
            strokeWidth={3} 
            dot={false} 
          />
        </LineChart>
        
      </ResponsiveContainer>
    </div>
  );
};

export default ResultData;
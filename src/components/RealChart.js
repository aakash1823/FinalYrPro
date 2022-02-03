import React from "react";
import { Chart } from "react-google-charts";


export default function RealChart({p1,n1}) {
    const data = [
        ["Positive", "Negative", { role: "style" }],
        ["Positive", 8.94, "#b87333"], // RGB value
        ["Negative", 10.49, "silver"], // English color name
        
      ];
      
  return (
    <Chart chartType="ColumnChart" width="100%" height="400px" data={data} style={{display:'inline-block'}} />
  );
}

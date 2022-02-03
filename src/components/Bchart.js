import React from "react";
import { Chart } from "react-google-charts";

export const options = {
  title: "Fake and Real Reviews",
  pieHole: 0.4,
  is3D: false,
};

export default function Bchart({pos,neg}) {
    console.log(pos,"hello")
    console.log(neg)
    const data = [
        ["Type", "Count"],
        ["Positive", parseInt(pos)],
        ["Negative", parseInt(neg)],        
      ];
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      style={{display:'inline-block'}}
      data={data}
      options={options}
    />
  );
}

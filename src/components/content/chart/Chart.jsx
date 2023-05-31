import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import "./Chart.css"

const Chart = () => {
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!dataFetched) {
        const response = await d3.csv(
          "https://res.cloudinary.com/nguyenle23/raw/upload/v1685502289/me/fifa_data.csv"
        );
        const data = response.map((d) => d.Age);

        const svg = d3
          .select("#chart")
          .append("svg")
          .attr("width", 1500)
          .attr("height", 500);

        svg
          .selectAll("rect")
          .data(data)
          .enter()
          .append("rect")
          .attr("x", (d, i) => i * 20)
          .attr("y", (d) => 500 - d * 5)
          .attr("width", 10)
          .attr("height", (d) => d * 5)
          .attr("fill", "white");

        svg
          .selectAll("text")
          .data(data)
          .enter()
          .append("text")
          .text((d) => d)
          .attr("x", (d, i) => i * 20 - 2)
          .attr("y", (d, i) => 500 - 5 * d - 3)
          .attr("fill", "white");

        setDataFetched(true);
      }
    };
    fetchData();

    return () => {
      d3.select("#chart").selectAll("*").remove();
    };
  }, [dataFetched]);

  return (
    <div id="chart-frame">
      <div id="chart"></div>
    </div>
  )
};

export default Chart;

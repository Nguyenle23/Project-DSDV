import React, { useEffect, useState } from "react";
import * as d3 from "d3";

const Chart = () => {
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!dataFetched) {
        const response = await d3.csv(
          "https://raw.githubusercontent.com/Nguyenle23/Project-DSDV/main/fifa.csv?token=GHSAT0AAAAAABSFP7TMKAU7KFHYQZOAMFLIZDU4UTA"
        );
        const data = response.map((d) => d.Age);
        console.log(data);

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
          .attr("x", (d, i) => i * 70)
          .attr("y", (d) => 300 - d * 5)
          .attr("width", 65)
          .attr("height", (d) => d * 5)
          .attr("fill", "white");

        svg
          .selectAll("text")
          .data(data)
          .enter()
          .append("text")
          .text((d) => d)
          .attr("x", (d, i) => i * 70)
          .attr("y", (d, i) => 300 - 10 * d - 3)
          .attr("fill", "white");

        setDataFetched(true);
      }
    };
    fetchData();

    return () => {
      d3.select("#chart").selectAll("*").remove();
    };
  }, [dataFetched]);

  return <div id="chart"></div>;
};

export default Chart;

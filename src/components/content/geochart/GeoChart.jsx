import React, { useEffect, useState, useRef } from "react";
import * as d3 from "d3";
import "./GeoChart.css";
import map from "./GeoChart.world.geo.json";

const GeoChart = ({ type }) => {
  const [dataFetched, setDataFetched] = useState(false);
  const svgRef = useRef();
  const [zoomedCountry, setZoomedCountry] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (true) {
        // const response = await d3.csv(
        //   "https://res.cloudinary.com/nguyenle23/raw/upload/v1685516151/me/fifa_500_new.csv"
        // );

        // const countPlayersByCountry = (data) => {
        //   const result = [];
        //   for (let i = 0; i < data.length; i++) {
        //     const country = data[i].Country;
        //     const duration = data[i].Duration;
        //     const index = result.findIndex((item) => item.country === country);
        //     if (index === -1) {
        //       result.push({ country: country, duration: duration, count: 1 });
        //     }
        //     if (index !== -1) {
        //       result[index].count += 1;
        //     }
        //   }
        //   return result;
        // };

        // const data = countPlayersByCountry(response);
        // data.pop();
        // console.log(data);

        var width = 1000;
        var height = 500;
        d3.json(
          "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
        ).then((data) => {
          const projection = d3.geoMercator().fitSize([1000, 500], data);
          const path = d3.geoPath().projection(projection);
          const svg = d3.select(svgRef.current);

          //tooltip
          const tooltip = d3
            .select("body")
            .append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

          // Render the map
          svg
            .selectAll("path")
            .data(data.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("fill", "lightgray")
            .attr("stroke", "white")
            .attr("stroke-width", 0.5)
            .on("mouseover", (event, d) => {
              // Handle mouseover event
              d3.select(event.target).attr("fill", "orange");

              tooltip.transition().duration(200).style("opacity", 0.9);
              tooltip
                .html("<strong>Country: </strong>" + d.properties.name)
                .style("left", event.pageX + "px")
                .style("top", event.pageY - 28 + "px");
            })
            .on("mouseout", (event, d) => {
              // Handle mouseout event
              d3.select(event.target).attr("fill", "lightgray");
            })
            .on("mouseleave", (event, d) => {
              // Handle click event
              tooltip.transition().duration(200).style("opacity", 0);
              // setZoomedCountry(d);
              // console.log(d);
            });

          let zoomLevel = 1;
          const centerX = width / 2;
          const centerY = height / 2;

          // Define the zoom function
          function zoom() {
            svg
              .selectAll("path,circle,text")
              .transition()
              .duration(750)
              .attr(
                "transform",
                `translate(${centerX}, ${centerY}) scale(${zoomLevel}) translate(${-centerX}, ${-centerY})`
              );
          }

          // Handle zoom-in event
          function handleZoomIn() {
            zoomLevel *= 2;
            zoom();
          }

          // Handle zoom-out event
          function handleZoomOut() {
            zoomLevel /= 2;
            zoom();
          }

          // Append zoom-in button
          const zoomInButton = svg
            .append("g")
            .attr("transform", "translate(20, 20)")
            .on("click", handleZoomIn);

          zoomInButton
            .append("rect")
            .attr("width", 30)
            .attr("height", 30)
            .attr("fill", "white")
            .attr("stroke", "black");

          // Append zoom-out button
          const zoomOutButton = svg
            .append("g")
            .attr("transform", "translate(60, 20)")
            .on("click", handleZoomOut);

          zoomOutButton
            .append("rect")
            .attr("width", 30)
            .attr("height", 30)
            .attr("fill", "white")
            .attr("stroke", "black")
            .attr("stroke-width", 1);

          // Render the zoom buttons

          // const zoomInButton = svg
          //   .append("g")
          //   .attr("transform", "translate(20, 20)")
          //   .on("click", () => {
          //     // Handle zoom in event
          //     svg
          //       .selectAll("path")
          //       .transition()
          //       .duration(750)
          //       .attr(
          //         "transform",
          //         `translate(${width / 2}, ${height / 2}) scale(2) translate(${-width / 2}, ${-height / 2})`
          //       );
          //     svg
          //       .selectAll("circle")
          //       .transition()
          //       .duration(750)
          //       .attr(
          //         "transform",
          //         `translate(${width / 2}, ${height / 2}) scale(2) translate(${-width / 2}, ${-height / 2})`
          //       );
          //     svg
          //       .selectAll("text")
          //       .transition()
          //       .duration(750)
          //       .attr(
          //         "transform",
          //         `translate(${width / 2}, ${height / 2}) scale(2) translate(${-width / 2}, ${-height / 2})`
          //       );
          //   }
          //   );
          // zoomInButton
          //   .append("rect")
          //   .attr("width", 30)
          //   .attr("height", 30)
          //   .attr("fill", "white")
          //   .attr("stroke", "black");

          // zoomInButton
          //   .append("text")
          //   .attr("x", 15)
          //   .attr("y", 20)
          //   .attr("text-anchor", "middle")
          //   .attr("font-size", 20)
          //   .attr("fill", "black")
          //   .text("+");

          // const zoomOutButton = svg
          //   .append("g")
          //   .attr("transform", "translate(20, 60)")
          //   .on("click", () => {
          //     // Handle zoom out event
          //     svg
          //       .selectAll("path")
          //       .transition()
          //       .duration(750)
          //       .attr("transform", "");
          //     svg
          //       .selectAll("circle")
          //       .transition()
          //       .duration(750)
          //       .attr("transform", "");
          //     svg
          //       .selectAll("text")
          //       .transition()
          //       .duration(750)
          //       .attr("transform", "");
          //   }
          //   );
          // zoomOutButton
          //   .append("rect")
          //   .attr("width", 30)
          //   .attr("height", 30)
          //   .attr("fill", "white")
          //   .attr("stroke", "black");

          // zoomOutButton
          //   .append("text")
          //   .attr("x", 15)
          //   .attr("y", 20)
          //   .attr("text-anchor", "middle")
          //   .attr("font-size", 20)
          //   .attr("fill", "black")
          //   .text("-");
        });
        setDataFetched(true);
      }
    };
    fetchData();
  });
  const svgStyle = {
    borderColor: '#fff',
    borderWidth: '0.2rem',
    borderStyle: 'solid',
  };

  return (
    <svg ref={svgRef} style={svgStyle} width={1000} height={500}>
    </svg>
  );
};

export default GeoChart;

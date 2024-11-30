import React from "react";

export default function Wheel({ birthchart }) {
  console.log(birthchart);
  const slices = 12;
  const radius = 100; // Radius of the pie chart
  const colors = [
    "#FF5733",
    "#FFC300",
    "#DAF7A6",
    "#581845",
    "#C70039",
    "#900C3F",
    "#FFC0CB",
    "#40E0D0",
    "#8A2BE2",
    "#00FF7F",
    "#6495ED",
    "#FFD700",
  ]; // Customize colors for the slices

  // Function to generate the path for each slice
  const generateSlice = (index) => {
    const angle = (2 * Math.PI) / slices;
    const startAngle = index * angle;
    const endAngle = startAngle + angle;

    const x1 = radius + radius * Math.cos(startAngle);
    const y1 = radius + radius * Math.sin(startAngle);
    const x2 = radius + radius * Math.cos(endAngle);
    const y2 = radius + radius * Math.sin(endAngle);

    return `
      M ${radius} ${radius}
      L ${x1} ${y1}
      A ${radius} ${radius} 0 0 1 ${x2} ${y2}
      Z
    `;
  };

  return (
    <svg
      width={radius * 2}
      height={radius * 2}
      viewBox={`0 0 ${radius * 2} ${radius * 2}`}
    >
      {Array.from({ length: slices }).map((item, index) => (
        <path
          key={index}
          d={generateSlice(index)}
          fill={colors[index % colors.length]}
          stroke="#ffffff" // Optional: stroke to separate slices
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

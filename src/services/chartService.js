export function getTimeRange() {
  return ["7 days", "30 days", "60 days"];
}

export function getChart1Points(range) {
  switch (range) {
    case "7 days":
      return generateChartPoints(7, 18000, 25000);
    case "30 days":
      return generateChartPoints(30, 18000, 25000);
    case "60 days":
      return generateChartPoints(60, 18000, 25000);
    default:
      return [];
  }
}

export function getChart2Points(range) {
  switch (range) {
    case "7 days":
      return generateChartPoints(7, 8000, 12000);
    case "30 days":
      return generateChartPoints(30, 8000, 12000);
    case "60 days":
      return generateChartPoints(60, 8000, 12000);
    default:
      return [];
  }
}

function generateChartPoints(days, minY, maxY) {
  const points = [];
  const currentDate = new Date();
  
  for (let i = 0; i < days; i++) {
    const date = new Date(currentDate);
    date.setDate(date.getDate() - i);
    const yValue = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
    points.push({ x: date, y: yValue });
  }
  
  return points.reverse();
}

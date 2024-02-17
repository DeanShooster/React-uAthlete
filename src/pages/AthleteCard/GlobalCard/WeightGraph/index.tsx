import { useContext, useEffect, useState } from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { AthleteContext } from "../../../../context/AthleteContext";

import "./index.scss";

interface IGraphData {
  month: string;
  value: number;
}

export const WeightGraph = () => {
  const { athlete } = useContext(AthleteContext);
  const [chartData, setChartData] = useState<IGraphData[]>([]);

  useEffect(() => {
    if (athlete) {
      const data: IGraphData[] = [];
      for (let i = 0; i < athlete.personalDetails.weight.length; i++) {
        data.push({
          month: i === 0 ? "Start" : `Month ${i}`,
          value: athlete.personalDetails.weight[i],
        });
      }
      console.log(data);
      setChartData(data);
    }
  }, [athlete]);

  const graphStyle = {
    themeColor: "green",
    stroke: "#b6b6b6",
    strokeWidth: 2,

    dotRadius: 5,
    activeDotRadius: 10,
    strokeColor: "#b6b6b6",
  };

  return (
    <>
      {athlete && athlete.personalDetails.weight.length > 1 && (
        <div className="weight-graph-container">
          <h1>Weight Progress</h1>
          <ResponsiveContainer height="100%">
            <LineChart data={chartData} margin={{ top: 12, right: 15, bottom: 3, left: 0 }}>
              <CartesianGrid strokeDasharray="1 5" strokeOpacity={0.5} vertical={false} />
              <XAxis dataKey="month" stroke={graphStyle.stroke} strokeWidth={graphStyle.strokeWidth} tickLine={false} tickMargin={8} />
              <YAxis dataKey="value" />
              <Line
                type="monotone"
                dataKey="value"
                stroke={graphStyle.themeColor}
                strokeWidth={graphStyle.strokeWidth}
                dot={{ r: graphStyle.dotRadius, fill: graphStyle.themeColor }}
                activeDot={{ r: graphStyle.activeDotRadius, stroke: graphStyle.strokeColor }}
              />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
};

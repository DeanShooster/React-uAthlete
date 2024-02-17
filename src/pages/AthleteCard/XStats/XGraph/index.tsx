import { useEffect, useState } from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { INav } from "../..";

import "./index.scss";

interface IXGraph {
  title: string;
  data: number[];
  category: INav;
}

interface IGraphData {
  month: string;
  value: number;
}

export const XGraph = ({ title, data, category }: IXGraph) => {
  const [graphData, setGraphData] = useState<IGraphData[]>([]);

  useEffect(() => {
    const graphDataStruct: IGraphData[] = [];
    for (let i = 0; i < data.length; i++) {
      graphDataStruct.push({
        month: i === 0 ? "Start" : `Month ${i}`,
        value: data[i],
      });
    }
    setGraphData(graphDataStruct);
  }, [data]);

  const graphUnitHandler = (workout: string) => {
    const workoutName = workout.toLocaleLowerCase();
    if (category === "STRENGTH" && (workoutName === "benchpress" || workoutName === "deadlift" || workoutName === "squat")) return "KG";
    if (category === "ENDURANCE") {
      if (workoutName === "bike5km" || workoutName === "plank") return "S";
    }
    if (category === "STAMINA") return "S";
  };

  const themeColorHandler = () => {
    const green = "green",
      red = "red";
    const lastBiggerThanPrev = data[data.length - 1] > data[data.length - 2];
    if (category === "STRENGTH") return lastBiggerThanPrev ? green : red;
    if (category === "ENDURANCE") {
      if (title.toLocaleLowerCase() === "bike5km") return lastBiggerThanPrev ? red : green;
      else return lastBiggerThanPrev ? green : red;
    }
    if (category === "STAMINA") return lastBiggerThanPrev ? red : green;
  };

  const graphStyle = {
    themeColor: themeColorHandler(),
    stroke: "#b6b6b6",
    strokeWidth: 2,

    dotRadius: 5,
    activeDotRadius: 10,
    strokeColor: "#b6b6b6",
  };

  return (
    <>
      {data.length > 0 ? (
        <div className="stats-graph-container">
          <h1>{title}</h1>
          <ResponsiveContainer height="100%">
            <LineChart data={graphData} margin={{ top: 12, right: 15, bottom: 3, left: 0 }}>
              <CartesianGrid strokeDasharray="1 5" strokeOpacity={0.5} vertical={false} />
              <XAxis dataKey="month" stroke={graphStyle.stroke} strokeWidth={graphStyle.strokeWidth} tickLine={false} tickMargin={8} />
              <YAxis dataKey="value" stroke={graphStyle.stroke} strokeWidth={graphStyle.strokeWidth} tickLine={false} unit={graphUnitHandler(title)} tickMargin={4} />
              <Line
                type="monotone"
                dataKey="value"
                stroke={graphStyle.themeColor}
                strokeWidth={graphStyle.strokeWidth}
                dot={{ r: graphStyle.dotRadius, fill: graphStyle.themeColor }}
                activeDot={{ r: graphStyle.activeDotRadius, stroke: graphStyle.strokeColor }}
              />
              <Tooltip
                contentStyle={{
                  background: "#0f0f0f",
                  border: `1px solid ${graphStyle.strokeColor}`,
                  borderRadius: "5px",
                  fontSize: "20px",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ) : null}
    </>
  );
};

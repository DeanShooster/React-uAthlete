import { useContext, useEffect, useState } from "react";
import { Legend, PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { MetaProDataContext } from "../../../../../context/MetaProDataContext";

interface IRadarGraph {
  graphStyle: {
    graphStroke: string;
    athleteRadarStroke: string;
    athleteRadarFill: string;
    metaRadarStroke: string;
    metaRadarFill: string;
  };
}

interface IProData {
  subject: string;
  athleteData: number;
  proData: number;
}

export const ProRadarGraph = ({ graphStyle }: IRadarGraph) => {
  const { metaProData } = useContext(MetaProDataContext);
  const [proData, setProData] = useState<IProData[]>([]);

  useEffect(() => {
    if (metaProData) {
      const data: IProData[] = [
        {
          subject: "Strength",
          athleteData: metaProData?.athleteData.strength,
          proData: metaProData?.proData.strength,
        },
        {
          subject: "Endurance",
          athleteData: metaProData?.athleteData.endurance,
          proData: metaProData?.proData.endurance,
        },
        {
          subject: "Stamina",
          athleteData: metaProData?.athleteData.stamina,
          proData: metaProData?.proData.stamina,
        },
      ];
      setProData(data);
    }
  }, [metaProData]);

  return (
    <div>
      <h2>Professional Level</h2>
      <RadarChart outerRadius={90} width={400} height={250} data={proData}>
        <PolarGrid stroke={graphStyle.graphStroke} />
        <PolarAngleAxis dataKey="subject" stroke={graphStyle.graphStroke} tickLine={false} />
        <Radar dataKey="proData" stroke={graphStyle.metaRadarStroke} fill={graphStyle.metaRadarFill} />
        <Radar
          name="Compared to Professional Level"
          dataKey="athleteData"
          stroke={graphStyle.athleteRadarStroke}
          fill={graphStyle.athleteRadarFill}
          fillOpacity={0.9}
          legendType="triangle"
        />
        <Legend />
      </RadarChart>
    </div>
  );
};

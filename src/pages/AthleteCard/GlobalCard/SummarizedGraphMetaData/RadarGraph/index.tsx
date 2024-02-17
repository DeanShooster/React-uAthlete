import { useContext, useEffect, useState } from "react";
import { Legend, PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { MetaProDataContext } from "../../../../../context/MetaProDataContext";
import { AthleteContext } from "../../../../../context/AthleteContext";
import { RadarGraphCalculator } from "../../../../../utils/algorithms";

interface IRadarGraph {
  graphStyle: {
    graphStroke: string;
    athleteRadarStroke: string;
    athleteRadarFill: string;
    metaRadarStroke: string;
    metaRadarFill: string;
  };
}

interface IMetaData {
  subject: string;
  athleteData: number;
  metaData: number;
}

export const RadarGraph = ({ graphStyle }: IRadarGraph) => {
  const { metaProData } = useContext(MetaProDataContext);
  const { athlete } = useContext(AthleteContext);
  const [metaData, setMetaData] = useState<IMetaData[]>([]);

  useEffect(() => {
    if (metaProData && athlete) {
      const graphData = RadarGraphCalculator(athlete, metaProData.metaData);
    }
    // if (metaProData) {
    //   const data: IMetaData[] = [
    //     {
    //       subject: "Strength",
    //       athleteData: metaProData?.athleteData.strength,
    //       metaData: metaProData?.metaData.strength,
    //     },
    //     {
    //       subject: "Endurance",
    //       athleteData: metaProData?.athleteData.endurance,
    //       metaData: metaProData?.metaData.endurance,
    //     },
    //     {
    //       subject: "Stamina",
    //       athleteData: metaProData?.athleteData.stamina,
    //       metaData: metaProData?.metaData.stamina,
    //     },
    //   ];
    //   setMetaData(data);
    // }
  }, [metaProData, athlete]);

  return (
    <div>
      <h2>Meta Level</h2>
      <RadarChart outerRadius={90} width={400} height={250} data={metaData}>
        <PolarGrid stroke={graphStyle.graphStroke} />
        <PolarAngleAxis dataKey="subject" stroke={graphStyle.graphStroke} tickLine={false} />
        <Radar dataKey="metaData" stroke={graphStyle.metaRadarStroke} fill={graphStyle.metaRadarFill} />
        <Radar
          name="Compared to Meta Level"
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

import { RadarGraph } from "./RadarGraph";
import { ProRadarGraph } from "./ProRadarGraph";

import "./index.scss";
import { Divider } from "../../../../components/Divider";

export const SummarizedGraphMetaData = () => {
  const radarGraphStyle = {
    graphStroke: "#e8e8e8",
    athleteRadarStroke: "#df990e",
    athleteRadarFill: "#df990e",
    metaRadarStroke: "transparent",
    metaRadarFill: "transparent",
  };

  return (
    <div className="summarized-graph-metadata-container">
      <RadarGraph graphStyle={radarGraphStyle} />
      <Divider color="gray" freeStyle={{ height: "75%" }} />
      <ProRadarGraph graphStyle={radarGraphStyle} />
    </div>
  );
};

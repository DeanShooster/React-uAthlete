import { Title } from "./Title";
import { Stats } from "./Stats";
import { AthleteImage } from "./AthleteImage";
import { AthleteRank } from "./AthleteRank";

import "./index.scss";
import { Divider } from "../../../../components/Divider";

export const GeneralAthleteStats = () => {
  return (
    <div className="general-athlete-stats-container">
      <div className="general-athlete-stats-wrapper">
        <Title />
        <Divider />
        <Stats />
      </div>
      <div>
        <AthleteImage />
        <AthleteRank />
      </div>
    </div>
  );
};

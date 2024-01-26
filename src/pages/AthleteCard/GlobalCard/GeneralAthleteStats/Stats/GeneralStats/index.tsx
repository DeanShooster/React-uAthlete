import { useContext } from "react";
import { AthleteContext } from "../../../../../../context/AthleteContext";

import "./index.scss";
import { ProgressUpGraph, ProgressDownGraph, RabbitBadge, SheepBadge, DeerBadge, EagleBadge, BearBadge } from "../../../../../../assets";

export const GeneralStats = () => {
  const rankBadgeImages: string[] = [RabbitBadge, SheepBadge, DeerBadge, EagleBadge, BearBadge];
  const { athlete } = useContext(AthleteContext);

  return (
    <div className="general-stats-wrapper">
      <div>
        <h2>Progress</h2>
        <div>
          <img alt="" src={ProgressUpGraph} />
          <span>64%</span>
        </div>
      </div>
      <div>
        <h2>Rank</h2>
        <div>
          <img alt="" src={athlete ? rankBadgeImages[athlete?.athleteRank] : ""} />
          <span>{athlete?.athleteRank}</span>
        </div>
      </div>
      <div>
        <h2>Average</h2>
        <div>
          <img alt="" src={ProgressUpGraph} />
          <span>5%</span>
        </div>
      </div>
    </div>
  );
};

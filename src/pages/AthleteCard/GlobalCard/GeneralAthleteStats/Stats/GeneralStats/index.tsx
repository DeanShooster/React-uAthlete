import { useContext } from "react";
import { AthleteContext } from "../../../../../../context/AthleteContext";

import "./index.scss";
import { ProgressUpGraph, ProgressDownGraph, RabbitBadge, SheepBadge, DeerBadge, EagleBadge, BearBadge } from "../../../../../../assets";

interface IGeneralStats {
  totalProgress: number;
  avgProgress: number;
}

export const GeneralStats = ({ totalProgress, avgProgress }: IGeneralStats) => {
  const rankBadgeImages: string[] = [RabbitBadge, SheepBadge, DeerBadge, EagleBadge, BearBadge];
  const { athlete } = useContext(AthleteContext);

  return (
    <div className="general-stats-wrapper">
      <div>
        <h2>Progress</h2>
        <div>
          <img alt="" src={totalProgress > 0 ? ProgressUpGraph : ProgressDownGraph} />
          <span>{totalProgress}%</span>
        </div>
      </div>
      <div>
        <h2>Rank</h2>
        <div>
          <img alt="" src={athlete ? rankBadgeImages[athlete.athleteRank] : ""} />
          <span>{athlete?.athleteRank}</span>
        </div>
      </div>
      <div>
        <h2>Average</h2>
        <div>
          <img alt="" src={avgProgress > 0 ? ProgressUpGraph : ProgressDownGraph} />
          <span>{avgProgress}%</span>
        </div>
      </div>
    </div>
  );
};

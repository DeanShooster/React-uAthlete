import { useContext, useMemo } from "react";
import { AthleteContext } from "../../../../../context/AthleteContext";
import { CategoryProgressCalculator, AvgProgressCalculator, TotalProgressionCalculator } from "../../../../../utils/algorithms";

import { GeneralStats } from "./GeneralStats";
import { SpecificStats } from "./SpecificStats";

import "./index.scss";

export const Stats = () => {
  const { athlete } = useContext(AthleteContext);

  const memoizedProgress = useMemo(() => {
    if (!athlete) return null;
    const strengthProgress: number = CategoryProgressCalculator(Object.values(athlete.progress.strength));
    const enduranceProgress: number = CategoryProgressCalculator(Object.values(athlete.progress.endurance));
    const staminaProgress: number = CategoryProgressCalculator(Object.values(athlete.progress.stamina)) * -1;
    const totalProgress: number = TotalProgressionCalculator(strengthProgress, enduranceProgress, staminaProgress, athlete.progressionUpdates.length);
    const avgProgress: number = AvgProgressCalculator(strengthProgress, enduranceProgress, staminaProgress);

    return { strengthProgress, enduranceProgress, staminaProgress, totalProgress, avgProgress };
  }, [athlete]);

  return (
    <div className="global-stats-wrapper">
      {memoizedProgress && (
        <>
          <GeneralStats totalProgress={memoizedProgress.totalProgress} avgProgress={memoizedProgress.avgProgress} />
          <SpecificStats strength={memoizedProgress.strengthProgress} endurance={memoizedProgress.enduranceProgress} stamina={memoizedProgress.staminaProgress} />
        </>
      )}
    </div>
  );
};

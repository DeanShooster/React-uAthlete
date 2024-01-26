import { useContext } from "react";
import { AthleteContext } from "../../../../context/AthleteContext";
import { BMICalculator } from "../../../../utils/algorithms";
import { noData } from "../../../../constants";

import { BMIGraph } from "./BMIGraph";

import "./index.scss";
import { ArrowRight, BouncyArrowDown, BouncyArrowUp } from "../../../../assets";

export const WeightStats = () => {
  const { athlete } = useContext(AthleteContext);

  if (!athlete) return null;

  const isNewAthlete = athlete.personalDetails.weight.length === 1;

  const athleteWeightStats = {
    currentWeight: athlete.personalDetails.weight[athlete.personalDetails.weight.length - 1],
    previousWeight: athlete.personalDetails.weight[athlete.personalDetails.weight.length - 2],
  };

  const athleteBMIStats = {
    currentBMI: BMICalculator(athleteWeightStats.currentWeight, athlete.personalDetails.height),
    previousBMI: BMICalculator(athleteWeightStats.previousWeight, athlete.personalDetails.height),
  };

  const BMIProgress = athleteBMIStats.currentBMI && athleteBMIStats.previousBMI ? parseFloat(athleteBMIStats.currentBMI) - parseFloat(athleteBMIStats.previousBMI) : 0;
  const weightProgress = athleteWeightStats.currentWeight - athleteWeightStats.previousWeight;

  return (
    <div className="weight-stats-card-container">
      <div className="weight-stats-card-wrapper">
        <h2>BMI {athleteBMIStats.currentBMI}</h2>
        <BMIGraph BMI={athleteBMIStats.currentBMI} />
        <div className="weight-bmi-progress-wrapper">
          <span>{athleteBMIStats.previousBMI || noData}</span>
          <img alt="" src={ArrowRight} />
          <span>{athleteBMIStats.currentBMI}</span>
        </div>
        <div className="weight-bmi-graph-percent-wrapper">
          {isNewAthlete ? (
            noData
          ) : (
            <>
              <img alt="" src={BMIProgress >= 0 ? BouncyArrowUp : BouncyArrowDown} />
              <span>{isNewAthlete ? noData : BMIProgress.toFixed(2)}</span>
            </>
          )}
        </div>
      </div>

      <div className="weight-stats-card-wrapper">
        <h2>Weight {athleteWeightStats.currentWeight}kg</h2>
        <div className="weight-bmi-progress-wrapper">
          <span>{athleteWeightStats.previousWeight ? `${athleteWeightStats.previousWeight}kg` : noData}</span>
          <img alt="" src={ArrowRight} />
          <span>{athleteWeightStats.currentWeight}kg</span>
        </div>
        <div className="weight-bmi-graph-percent-wrapper">
          {isNewAthlete ? (
            noData
          ) : (
            <>
              <img alt="" src={weightProgress >= 0 ? BouncyArrowUp : BouncyArrowDown} />
              <span>{isNewAthlete ? noData : weightProgress}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

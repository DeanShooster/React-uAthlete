import { useContext, useEffect, useState } from "react";
import { AthleteContext } from "../../../../../context/AthleteContext";

import "./index.scss";

export const Title = () => {
  const { athlete } = useContext(AthleteContext);
  const [athleteRankName, setAthleteRankName] = useState<string>("Novice");

  useEffect(() => {
    switch (athlete?.athleteRank) {
      case 0: {
        setAthleteRankName("Novice");
        break;
      }
      case 1: {
        setAthleteRankName("Intermediate");
        break;
      }
      case 2: {
        setAthleteRankName("Intermediate");
        break;
      }
      case 3: {
        setAthleteRankName("Advanced");
        break;
      }
      case 4: {
        setAthleteRankName("Expert");
        break;
      }
      default:
        setAthleteRankName("Novice");
    }
  }, [athlete?.athleteRank]);

  return (
    <div className="general-athlete-stats-title">
      <h1>{athleteRankName}</h1>
      <div>{athlete?.personalDetails.name}</div>
    </div>
  );
};

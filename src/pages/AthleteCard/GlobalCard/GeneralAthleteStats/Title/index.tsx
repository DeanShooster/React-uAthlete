import { useContext } from "react";
import { AthleteContext } from "../../../../../context/AthleteContext";

import "./index.scss";

export const Title = () => {
  const { athlete } = useContext(AthleteContext);
  return (
    <div className="general-athlete-stats-title">
      <h1>Athlete Overview</h1>
      <div>{athlete?.personalDetails.name}</div>
    </div>
  );
};

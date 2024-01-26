import { GeneralAthleteStats } from "./GeneralAthleteStats";
import { WeightStats } from "./WeightStats";

import "./index.scss";

export const GlobalCard = () => {
  return (
    <div className="global-card-container">
      <GeneralAthleteStats />
      <WeightStats />
    </div>
  );
};

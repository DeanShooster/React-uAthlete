import { GeneralAthleteStats } from "./GeneralAthleteStats";
import { WeightStats } from "./WeightStats";
import { SummarizedGraphMetaData } from "./SummarizedGraphMetaData";
import { WeightGraph } from "./WeightGraph";

import "./index.scss";

export const GlobalCard = () => {
  return (
    <>
      <div className="global-card-container">
        <GeneralAthleteStats />
        <WeightStats />
        <SummarizedGraphMetaData />
      </div>
      <WeightGraph />
    </>
  );
};

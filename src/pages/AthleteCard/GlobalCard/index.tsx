import { GeneralAthleteStats } from "./GeneralAthleteStats";
import { WeightStats } from "./WeightStats";
import { SummarizedGraphMetaData } from "./SummarizedGraphMetaData";

import "./index.scss";
import { MetaProDataContextProvider } from "../../../context/MetaProDataContext";

export const GlobalCard = () => {
  return (
    <div className="global-card-container">
      <GeneralAthleteStats />
      <WeightStats />
      <MetaProDataContextProvider>
        <SummarizedGraphMetaData />
      </MetaProDataContextProvider>
    </div>
  );
};

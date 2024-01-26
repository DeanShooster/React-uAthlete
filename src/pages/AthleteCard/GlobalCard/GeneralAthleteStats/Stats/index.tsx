import { GeneralStats } from "./GeneralStats";
import { SpecificStats } from "./SpecificStats";

import "./index.scss";

export const Stats = () => {
  return (
    <div className="global-stats-wrapper">
      <GeneralStats />
      <SpecificStats />
    </div>
  );
};

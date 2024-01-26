import "./index.scss";
import { ProgressDownGraph, ProgressUpGraph } from "../../../../../../assets";

export const SpecificStats = () => {
  return (
    <div className="specific-stats-container">
      <div className="specific-stats-wrapper">
        <div>
          <h3>Strength</h3>
          <div>
            <img alt="" src={ProgressUpGraph} />
            <span>24%</span>
          </div>
        </div>
        <div>
          <h3>Endurance</h3>
          <div>
            <img alt="" src={ProgressUpGraph} />
            <span>32%</span>
          </div>
        </div>
        <div>
          <h3>Stamina</h3>
          <div>
            <img alt="" src={ProgressDownGraph} />
            <span>14%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

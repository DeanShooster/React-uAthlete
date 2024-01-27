import "./index.scss";
import { ProgressDownGraph, ProgressUpGraph } from "../../../../../../assets";

interface ISpecificStats {
  strength: number;
  endurance: number;
  stamina: number;
}

export const SpecificStats = ({ strength, endurance, stamina }: ISpecificStats) => {
  return (
    <div className="specific-stats-container">
      <div className="specific-stats-wrapper">
        <div>
          <h3>Strength</h3>
          <div>
            <img alt="" src={strength > 0 ? ProgressUpGraph : ProgressDownGraph} />
            <span>{strength}%</span>
          </div>
        </div>
        <div>
          <h3>Endurance</h3>
          <div>
            <img alt="" src={endurance > 0 ? ProgressUpGraph : ProgressDownGraph} />
            <span>{endurance}%</span>
          </div>
        </div>
        <div>
          <h3>Stamina</h3>
          <div>
            <img alt="" src={stamina > 0 ? ProgressUpGraph : ProgressDownGraph} />
            <span>{stamina}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

import "./index.scss";

interface IBMIGraph {
  BMI: string | null;
}

export const BMIGraph = ({ BMI }: IBMIGraph) => {
  return (
    <div className="bmi-graph">
      <div></div>
    </div>
  );
};

import { IDataPolicy, dataPolicy, dataPolicyLastUpdated } from "../../data/dataPolicy";
import { useScrollTopView } from "../../hooks/useScrollTopView";

import { SinglePolicy } from "./SinglePolicy";

export const DataPolicy = () => {
  useScrollTopView();
  return (
    <section className="global-privacy-policy-page">
      <div className="global-privacy-policy-title-last-update-wrapper">
        <h1>Data Policy</h1>
        <div className="global-privacy-policy-last-updated">Last Updated: {dataPolicyLastUpdated.toLocaleDateString()}</div>
      </div>
      {dataPolicy.map((policy: IDataPolicy, index: number) => {
        return <SinglePolicy key={index} policy={policy} />;
      })}
    </section>
  );
};

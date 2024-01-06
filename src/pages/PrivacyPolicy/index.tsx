import { IPrivacyPolicy, privacyPolicy, privacyPolicyLastUpdated } from "../../data/privacyPolicy";
import { useScrollTopView } from "../../hooks/useScrollTopView";

import { SinglePolicy } from "./SinglePolicy";

export const PrivacyPolicy = () => {
  useScrollTopView();
  return (
    <section className="global-privacy-policy-page">
      <div className="global-privacy-policy-title-last-update-wrapper">
        <h1>Privacy Policy</h1>
        <div className="global-privacy-policy-last-updated">Last Updated: {privacyPolicyLastUpdated.toLocaleDateString()}</div>
      </div>
      {privacyPolicy.map((policy: IPrivacyPolicy, index: number) => {
        return <SinglePolicy key={index} policy={policy} />;
      })}
    </section>
  );
};

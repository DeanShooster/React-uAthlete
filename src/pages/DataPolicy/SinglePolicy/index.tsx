import { IArticle, IDataPolicy } from "../../../data/dataPolicy";

import "./index.scss";

interface ISinglePolicy {
  policy: IDataPolicy;
}

export const SinglePolicy = ({ policy }: ISinglePolicy) => {
  return (
    <div className="privacy-data-policy-wrapper">
      <h2>{policy.title}</h2>
      {policy.article.map((policy: IArticle, index: number) => {
        return (
          <div key={index}>
            {policy.subTitle && <h3>{policy.subTitle}</h3>}
            <p>{policy.paragraph}</p>
          </div>
        );
      })}
    </div>
  );
};

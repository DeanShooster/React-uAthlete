import { IArticle, IPrivacyPolicy } from "../../../data/privacyPolicy";

import "./index.scss";

interface ISinglePolicy {
  policy: IPrivacyPolicy;
}

export const SinglePolicy = ({ policy }: ISinglePolicy) => {
  return (
    <div className="privacy-single-policy-wrapper">
      <h2>{policy.title}</h2>
      {policy.intro && <p>{policy.intro}</p>}
      <ul>
        {policy.article.map((paragraph: IArticle, index: number) => {
          return (
            <li key={index}>
              <p>
                <span>{paragraph.subTitle} </span>
                {paragraph.paragraph}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

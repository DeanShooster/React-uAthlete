import { noData } from "../../../../constants";

import "./index.scss";

export const EmptyCategory = () => {
  return (
    <div className="empty-category-wrapper">
      <div>{noData}</div>
    </div>
  );
};

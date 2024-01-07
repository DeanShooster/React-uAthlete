import { Bell } from "../../../../assets";

import "./index.scss";

export const NotificationBell = () => {
  return (
    <div className="bell-wrapper">
      <img alt="" src={Bell} />
      <div className="notification-dot"></div>
    </div>
  );
};

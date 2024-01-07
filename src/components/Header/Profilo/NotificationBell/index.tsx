import { Bell } from "../../../../assets";

import "./index.scss";

interface INotificationBell {
  isRead: boolean | undefined;
}

export const NotificationBell = ({ isRead }: INotificationBell) => {
  return (
    <div className="bell-wrapper">
      <img alt="" src={Bell} className={`${isRead === false ? "ringing-bell-animation" : undefined}`} />
      {isRead === false && <div className="notification-dot"></div>}
    </div>
  );
};

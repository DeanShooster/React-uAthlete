import "./index.scss";
import { Bell } from "../../../../assets";

interface INotificationBell {
  isRead: boolean | undefined;
  openNotifications: Function;
}

export const NotificationBell = ({ isRead, openNotifications }: INotificationBell) => {
  return (
    <div className="bell-wrapper" onClick={() => openNotifications()}>
      <img alt="" src={Bell} className={`${isRead === false ? "ringing-bell-animation" : undefined}`} />
      {isRead === false && <div className="notification-dot"></div>}
    </div>
  );
};

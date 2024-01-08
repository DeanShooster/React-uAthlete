import { notificationsLimit } from "../../../../constants";
import { formatDateToLongString } from "../../../../utils/date";

import "./index.scss";

interface INotification {
  title: string;
  message: string;
  date: Date;
}

interface IAthleteNotifications {
  notifications: INotification[] | undefined;
  closeNotification: Function;
}

export const AthleteNotifications = ({ notifications, closeNotification }: IAthleteNotifications) => {
  return (
    <div className="notifications-container">
      <h1>Notifications</h1>
      <div className="notifications-wrapper">
        {notifications?.map((notification: INotification, index: number) => {
          if (index >= notificationsLimit) return null;
          return (
            <div key={index} className="notification-wrapper">
              <time>{formatDateToLongString(notification.date)}</time>
              <h2>{notification.title}</h2>
              <p>{notification.message}</p>
            </div>
          );
        })}
      </div>
      <div className="notification-close-wrapper">
        <button onClick={() => closeNotification()}>Close</button>
      </div>
    </div>
  );
};

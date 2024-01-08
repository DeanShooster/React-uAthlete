import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AthleteContext } from "../../../context/AthleteContext";
import { white, screenSize } from "../../../constants";
import useWindowSize from "../../../hooks/useWindowSize";

import { NotificationBell } from "./NotificationBell";
import { AthleteNotifications } from "./AthleteNotifications";

import "./index.scss";
import { Graphs } from "../../../assets";
import { Divider } from "../../Divider";

export const Profilo = () => {
  const width = useWindowSize();
  const { athlete, setAthlete } = useContext(AthleteContext);
  const [openNotifications, setOpenNotifications] = useState<boolean>(false);

  const dividerStyle = {
    size: 1,
    height: width > screenSize.mobile ? 40 : 30,
    color: white,
    borderR: 50,
  };

  const notificationsHandler = async () => {
    if (openNotifications) return;
    setOpenNotifications(true);
    if (!athlete?.notifications.isRead) {
      const notifications = { ...athlete?.notifications, isRead: true };
      setAthlete({ ...athlete, notifications });
      // Update DB isRead
    }
  };

  return (
    <nav className="profilo-container">
      <NotificationBell isRead={athlete?.notifications.isRead} openNotifications={notificationsHandler} />
      <Divider {...dividerStyle} />
      <Link className="athlete-name" to="">
        {athlete?.personalDetails.name}
      </Link>
      <Divider {...dividerStyle} />
      <img alt="" src={Graphs} className="graph" />
      {openNotifications && <AthleteNotifications notifications={athlete?.notifications.messages} closeNotification={() => setOpenNotifications(false)} />}
    </nav>
  );
};

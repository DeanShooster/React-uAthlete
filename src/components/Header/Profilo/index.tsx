import { useContext } from "react";
import { Link } from "react-router-dom";
import { AthleteContext } from "../../../context/AthleteContext";
import { white, screenSize } from "../../../constants";
import useWindowSize from "../../../hooks/useWindowSize";

import { NotificationBell } from "./NotificationBell";

import "./index.scss";
import { Graphs } from "../../../assets";
import { Divider } from "../../Divider";

export const Profilo = () => {
  const width = useWindowSize();
  const { athlete } = useContext(AthleteContext);

  const dividerStyle = {
    size: 1,
    height: width > screenSize.mobile ? 40 : 30,
    color: white,
    borderR: 50,
  };

  return (
    <nav className="profilo-container">
      <NotificationBell isRead={athlete?.notifications.isRead} />
      <Divider {...dividerStyle} />
      <Link className="athlete-name" to="">
        {athlete?.personalDetails.name}
      </Link>
      <Divider {...dividerStyle} />
      <img alt="" src={Graphs} className="graph" />
    </nav>
  );
};

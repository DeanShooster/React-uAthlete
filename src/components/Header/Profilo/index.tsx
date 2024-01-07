import { useContext } from "react";
import { Link } from "react-router-dom";
import { AthleteContext } from "../../../context/AthleteContext";

import { NotificationBell } from "./NotificationBell";

import "./index.scss";
import { Graphs } from "../../../assets";

export const Profilo = () => {
  const { athlete } = useContext(AthleteContext);

  return (
    <nav className="profilo-container">
      <NotificationBell />
      <Link className="athlete-name" to="">
        {athlete?.personalDetails.name}
      </Link>
      <img alt="" src={Graphs} className="graph" />
    </nav>
  );
};

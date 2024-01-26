import { useContext } from "react";
import { AthleteContext } from "../../../../../context/AthleteContext";

import "./index.scss";
import { Deer, Eagle, Rabbit, Sheep, Bear } from "../../../../../assets";

export const AthleteImage = () => {
  const athleteImages: string[] = [Rabbit, Sheep, Deer, Eagle, Bear];
  const { athlete } = useContext(AthleteContext);

  return (
    <div className="athlete-image-wrapper">
      <img alt="" src={athlete ? athleteImages[athlete?.athleteRank] : ""} />
    </div>
  );
};

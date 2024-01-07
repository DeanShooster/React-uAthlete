import { useContext } from "react";
import { AthleteContext } from "../../context/AthleteContext";

import { Logo } from "./Logo";
import { User } from "./User";
import { Profilo } from "./Profilo";

import "./index.scss";

export const Header = () => {
  const { athlete } = useContext(AthleteContext);

  return (
    <header>
      <Logo />
      {athlete ? <Profilo /> : <User />}
    </header>
  );
};

import { useContext } from "react";

import { Logo } from "./Logo";
import { User } from "./User";

import "./index.scss";
import { AthleteContext } from "../../context/AthleteContext";

export const Header = () => {
  const { athlete } = useContext(AthleteContext);

  return (
    <header>
      <Logo />
      {athlete ? <div>athlete!</div> : <User />}
    </header>
  );
};

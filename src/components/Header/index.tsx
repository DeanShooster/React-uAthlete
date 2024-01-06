import { Logo } from "./Logo";
import { User } from "./User";

import "./index.scss";

export const Header = () => {
  return (
    <header>
      <Logo />
      <User />
    </header>
  );
};

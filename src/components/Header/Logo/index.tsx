import { useNavigate } from "react-router";

import "./index.scss";
import { PulseHeart, WebsiteLogo } from "../../../assets";
import { routes } from "../../../Routes";

export const Logo = () => {
  const navigate = useNavigate();

  return (
    <div className="logo-wrapper" onClick={() => navigate(`${routes.Home.path}`)}>
      <img alt="" src={WebsiteLogo} />
      <img alt="" src={PulseHeart} />
      <img alt="" src={WebsiteLogo} />
    </div>
  );
};

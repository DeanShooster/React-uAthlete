import { screenSize } from "../../constants";
import useWindowSize from "../../hooks/useWindowSize";

import { Links } from "./Links";
import { Divider } from "../Divider";
import { Outro } from "./Outro";

import "./index.scss";

export const Footer = () => {
  const windowSize = useWindowSize();

  return (
    <footer>
      <Links />
      <Divider size={windowSize >= screenSize.ipad ? 50 : windowSize >= screenSize.mobile ? 75 : 90} />
      <Outro />
    </footer>
  );
};

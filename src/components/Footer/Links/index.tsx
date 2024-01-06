import { routes } from "../../../Routes";
import { Link } from "react-router-dom";

import "./index.scss";

export const Links = () => {
  return (
    <div className="footer-links">
      <div>
        <h3>Privacy & Data</h3>
        <ul>
          <li>
            <Link to={`${routes.Privacy.path}`}>Privacy Policy</Link>
          </li>
          <li>
            <Link to={`${routes.DataPolicy.path}`}>Data</Link>
          </li>
          <li>
            <Link to={`${routes.DataPolicy.path}`}>Cookies</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3>Company</h3>
        <ul>
          <li>
            <a href="/">Terms of Use</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Development</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

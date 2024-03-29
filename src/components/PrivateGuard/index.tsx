import { useContext } from "react";
import { AthleteContext } from "../../context/AthleteContext";
import { Link, Outlet } from "react-router-dom";

import "./index.scss";
import { StopSign } from "../../assets";

export const PrivateGuard = () => {
  const { athlete } = useContext(AthleteContext);
  return (
    <>
      {athlete ? (
        <Outlet />
      ) : (
        <section className="no-auth-container">
          <div className="no-auth-wrapper">
            <div>
              <h1>No Access</h1>
              <img alt="" src={StopSign} />
            </div>
            <p>Please login or create a new account if you did not sign up previously</p>
            <Link to="/">Back to HomePage</Link>
          </div>
        </section>
      )}
    </>
  );
};

import { useState } from "react";

import { NavHeader } from "./NavHeader";
import { GlobalCard } from "./GlobalCard";
import { XStats } from "./XStats";

import "./index.scss";

export interface INavItem {
  key: INav;
  label: string;
  component: React.ReactNode;
}

export type INav = "GLOBAL" | "STRENGTH" | "ENDURANCE" | "STAMINA";

export const AthleteCard = () => {
  const navItems: INavItem[] = [
    { key: "GLOBAL", label: "Global Stats", component: <GlobalCard key={0} /> },
    { key: "STRENGTH", label: "Strength", component: <XStats key={1} /> },
    { key: "ENDURANCE", label: "Endurance", component: <XStats key={2} /> },
    { key: "STAMINA", label: "Stamina", component: <XStats key={3} /> },
  ];

  const [nav, setNav] = useState<INav>("GLOBAL");

  return (
    <section className="athlete-card-page">
      <NavHeader navItems={navItems} nav={nav} setNav={setNav} />
      {navItems.map(({ key, component }) => {
        return nav === key ? component : null;
      })}
    </section>
  );
};

import { useState } from "react";
import { MetaProDataContextProvider } from "../../context/MetaProDataContext";

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
  const [nav, setNav] = useState<INav>("GLOBAL");

  const navItems: INavItem[] = [
    { key: "GLOBAL", label: "Global Stats", component: <GlobalCard key={0} /> },
    { key: "STRENGTH", label: "Strength", component: <XStats key={1} category={nav} /> },
    { key: "ENDURANCE", label: "Endurance", component: <XStats key={2} category={nav} /> },
    { key: "STAMINA", label: "Stamina", component: <XStats key={3} category={nav} /> },
  ];

  return (
    <section className="athlete-card-page">
      <NavHeader navItems={navItems} nav={nav} setNav={setNav} />
      <MetaProDataContextProvider>
        {navItems.map(({ key, component }) => {
          return nav === key ? component : null;
        })}
      </MetaProDataContextProvider>
    </section>
  );
};

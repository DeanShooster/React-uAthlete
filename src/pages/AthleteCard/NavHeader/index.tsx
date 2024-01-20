import { INav, INavItem } from "..";

import "./index.scss";

interface INavHeader {
  navItems: INavItem[];
  nav: INav;
  setNav: Function;
}

export const NavHeader = ({ navItems, nav, setNav }: INavHeader) => {
  return (
    <nav className="athlete-card-nav">
      {navItems.map(({ key, label }, index: number) => {
        return (
          <div key={index} className={nav === key ? "active-nav" : undefined} onClick={() => setNav(key)}>
            {label}
          </div>
        );
      })}
    </nav>
  );
};

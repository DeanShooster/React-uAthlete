interface IRoute {
  path: string;
}

interface IRoutes {
  Home: IRoute;
  AthleteCard: IRoute;
  Privacy: IRoute;
  DataPolicy: IRoute;
}

export const routes: IRoutes = {
  Home: { path: "/" },
  AthleteCard: { path: "/Card" },
  Privacy: { path: "/privacy" },
  DataPolicy: { path: "/data-policy" },
};

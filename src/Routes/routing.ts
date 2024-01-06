interface IRoute {
  path: string;
}

interface IRoutes {
  Home: IRoute;
  Privacy: IRoute;
  DataPolicy: IRoute;
}

export const routes: IRoutes = {
  Home: { path: "/" },
  Privacy: { path: "/privacy" },
  DataPolicy: { path: "/data-policy" },
};

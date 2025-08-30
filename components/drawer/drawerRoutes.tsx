interface Route {
  key: string;
  name: string;
}

interface RouteOptions {
  drawerLabel?: string;
  title?: string;
}

interface Descriptor {
  options: RouteOptions;
}

interface CategorizedRoutes {
  mainRoutes: Route[];
  managementRoutes: Route[];
  applicationRoutes: Route[];
}

export const categorizeRoutes = (routes: Route[]): CategorizedRoutes => {
  const mainRoutes = routes.filter(
    (route) => route.name === "index" || route.name === "preferences"
  );

  const managementRoutes = routes.filter((route) =>
    route.name.startsWith("(management)")
  );

  const applicationRoutes = routes.filter((route) =>
    route.name.startsWith("(applications)")
  );

  return {
    mainRoutes,
    managementRoutes,
    applicationRoutes,
  };
};

export const getRouteLabel = (
  route: Route,
  descriptors: Record<string, Descriptor>
): string => {
  const { options } = descriptors[route.key];
  return options.drawerLabel || options.title || route.name;
};

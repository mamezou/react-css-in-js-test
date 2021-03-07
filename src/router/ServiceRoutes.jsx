import { Service } from "../Pages/Service";
import { UrlParameter } from "../Pages/UrlParameter";

export const ServiceRoutes = [
  {
    path:"/",
    exact: true,
    children: <Service />
  },
  {
    path:"/:id",
    exact: false,
    children: <UrlParameter />
  },
]
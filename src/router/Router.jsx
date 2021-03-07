import { Route, Switch } from "react-router-dom";
import { Top } from "../Pages/Top";
import { Page404 } from "../Pages/404";
import { AboutRoutes } from "./AboutRoutes.jsx";
import { ServiceRoutes } from "./ServiceRoutes";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Top} />
      <Route
        path="/about"
        render={({ match: { url } }) => (
          <Switch>
            {AboutRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/service"
        render={({ match: { url } }) => (
          <Switch>
            {ServiceRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route component={Page404} />
    </Switch>
  );
};

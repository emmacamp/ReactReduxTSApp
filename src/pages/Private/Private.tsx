import { Route, Navigate } from "react-router-dom";
import { lazy } from "react";

import { PrivateRoutes } from "../../models";
import { RoutesWithNotFound } from "../../utilities";

const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const Home = lazy(() => import("./Home/Home"));

const Private = () => {
  return (
    <>
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
        <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
        <Route path={PrivateRoutes.HOME} element={<Home />} />
      </RoutesWithNotFound>
    </>
  );
};

export default Private;
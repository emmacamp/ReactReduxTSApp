import { useSelector } from "react-redux";
import { AppStore } from "../redux/store";
import { Outlet, Navigate } from "react-router-dom";
import { PublicRoutes } from "../models";

export const AuthGuard = () => {
  const userState = useSelector((store: AppStore) => store.user);
  return userState.name ? (
    <Outlet />
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
  );
};

export default AuthGuard;

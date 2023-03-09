import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import { PrivateRoutes, PublicRoutes } from "./models";
import { RoutesWithNotFound } from "./utilities";
import { AuthGuard } from "./guards";
import "./App.css";
const Login = lazy(() => import("./pages/Login/Login"));
const Private = lazy(() => import("./pages/Private/Private"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>Loading...</>}>
        <Provider store={store}>
          <BrowserRouter>
            <RoutesWithNotFound>
              {/* Public Routes */}
              <Route
                path="/"
                element={<Navigate to={PrivateRoutes.PRIVATE} />}
              />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />

              {/* Private Routes */}
              <Route element={<AuthGuard />}>
                <Route
                  path={`${PrivateRoutes.PRIVATE}/*`}
                  element={<Private />}
                />
              </Route>
            </RoutesWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;

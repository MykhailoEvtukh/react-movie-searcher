import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Loader from "react-loader-spinner";
import routes from "../routes";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage")
);

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense
        fallback={
          <Loader
            type="Bars"
            color="#aa77cc"
            height={50}
            width={50}
            timeout={2000}
          />
        }
      >
        <Switch>
          <Route exact path={routes.HOME} component={HomePage} />
          <Route path={routes.MOVIES_DETAILS} component={MovieDetailsPage} />
          <Route path={routes.MOVIES_PAGE} component={MoviesPage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;

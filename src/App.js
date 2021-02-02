import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import FadeLoader from "./loader/loader";
const Nav = lazy(() => import("./components/common/nav/nav"));
const HomePage = lazy(() => import("./pages/homePage"));
const NotFound = lazy(() => import("./pages/notFound"));
const Message = lazy(() => import("./pages/message"));

const App = () => {
  return (
    <Suspense fallback={<FadeLoader />}>
      <BrowserRouter>
        <Nav />
        <Message />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;

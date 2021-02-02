import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import FadeLoader from "./loader/loader";
const Nav = lazy(() => import("./components/common/nav/nav"));
const HomePage = lazy(() => import("./pages/homePage"));
const NotFound = lazy(() => import("./pages/notFound"));
const Message = lazy(() => import("./pages/message"));
const AdmissionProcess = lazy(() => import("./pages/admissionProcess"));
const FAQs = lazy(() => import("./pages/faqs"));
const GoToTop = lazy(() => import("./pages/goToTop"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<FadeLoader />}>
        <Nav />
        <Message />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/admissionProcess" exact component={AdmissionProcess} />
          <Route path="/faqs" exact component={FAQs} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
        <GoToTop />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

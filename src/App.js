import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import FadeLoader from "./loader/loader";
const Nav = lazy(() => import("./components/common/nav/nav"));
const HomePage = lazy(() => import("./pages/homePage"));
const NotFound = lazy(() => import("./pages/notFound"));
const Message = lazy(() => import("./pages/message"));
const AdmissionProcess = lazy(() => import("./pages/admissionProcess"));
const FAQs = lazy(() => import("./pages/faqs"));
const GoToTop = lazy(() => import("./pages/goToTop"));
const ContactUs = lazy(() => import("./pages/contactUs"));
const ProvincialMinisterMessage = lazy(() =>
  import("./pages/provincialMinisterMessage")
);
const DirectorGeneralMessage = lazy(() =>
  import("./pages/directorGeneralMessage")
);
const ChairmanHECPunjabMessage = lazy(() =>
  import("./pages/chairmanHECPunjabMessage")
);
const ChairmanPECMessage = lazy(() => import("./pages/chairmanPECMessage"));
const AboutUs = lazy(() => import("./pages/aboutUs"));
const AdvisoryBody = lazy(() => import("./pages/advisoryBody"));
const BecomeAnInstructor = lazy(() => import("./pages/becomeAnInstructor"));
const FastTrackTechnicalProgram = lazy(() =>
  import("./pages/fastTrackTechnicalProgram")
);
const FastTrackNonTechnicalProgram = lazy(() =>
  import("./pages/fastTrackNonTechnicalProgram")
);
const AssociateCertificationProgram = lazy(() =>
  import("./pages/associateCertificationProgram")
);

const App = () => {
  // State
  const [firstLoad, setFirstLoad] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem("First Load") === null) {
      window.sessionStorage.setItem("First Load", 1);
      setFirstLoad(true);
    } else {
      setFirstLoad(false);
    }
  }, []);

  if (firstLoad) {
    setTimeout(() => {
      setFirstLoad(false);
    }, 3000);
  }
  return (
    <BrowserRouter>
      <Suspense fallback={<FadeLoader />}>
        <Nav firstLoad={firstLoad} />
        <Message firstLoad={firstLoad} />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/admissionProcess" component={AdmissionProcess} />
          <Route path="/faqs" component={FAQs} />
          <Route path="/contactUs" component={ContactUs} />
          <Route
            path="/joinDigiPAKISTAN/becomeAnInstructor"
            component={BecomeAnInstructor}
          />
          <Route
            path="/fastTrackTechnicalProgram"
            exact
            component={FastTrackTechnicalProgram}
          />
          <Route
            path="/fastTrackNonTechnicalProgram"
            exact
            component={FastTrackNonTechnicalProgram}
          />
          <Route
            path="/associateCertificationProgram"
            exact
            component={AssociateCertificationProgram}
          />
          <Route
            path="/about/provincialMinisterMessage"
            component={ProvincialMinisterMessage}
          />
          <Route
            path="/about/directorGeneralMessage"
            component={DirectorGeneralMessage}
          />
          <Route
            path="/about/chairmanHECPunjabMessage"
            component={ChairmanHECPunjabMessage}
          />
          <Route
            path="/about/chairmanPECMessage"
            component={ChairmanPECMessage}
          />
          <Route path="/about/advisoryBody" component={AdvisoryBody} />
          <Route path="/about/aboutUs" component={AboutUs} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
        <GoToTop />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

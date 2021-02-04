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
const CompTIAItFundamentals = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/compTIAItFundamentals"
  )
);
const MicrosoftFrontEndDevelopment = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/microsoftFrontEndDevelopment"
  )
);
const AspDotNetWebApplications = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/aspDotNetWebApplications"
  )
);
const PHPLaravel = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/phpLaravel"
  )
);
const MERNStack = lazy(() =>
  import("./components/course_outlines/fast_track_technical_programs/mernStack")
);
const SQLServerSpecialist = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/sqlServerSpecialist"
  )
);
const OracleDatabaseAdministrator = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/orcaleDatabaseAdministrator"
  )
);
const AndroidAppsDevelopment = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/androidAppsDevelopment"
  )
);
const KotlinAppsDevelopment = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/kotlinAppsDevelopment"
  )
);
const IOSAppsDevelopment = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/iOSAppsDevelopment"
  )
);
const XamarinAppsDevelopment = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/xamarinAppsDevelopment"
  )
);
const ReactNativeWebAndAppsDevelopment = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/reactNativeWebAndAppsDevelopment"
  )
);
const GameDevelopment = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/gameDevelopment"
  )
);
const CiscoCCNANetworking = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/ciscoCCNANetworking"
  )
);
const ComptiaSecurity = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/comptiaSecurity"
  )
);
const CertifiedEthicalHacking = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/certifiedEthicalHacking"
  )
);
const PenetrationTestingSecurityAnalyst = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/penetrationTestingSecurityAnalyst"
  )
);
const CertifiedHackingForensicInvestigator = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/certifiedHackingForensicInvestigator"
  )
);
const CertifiedInformationSystemsAuditor = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/certifiedInformationSystemsAuditor"
  )
);
const CertifiedInformationSecurityManager = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/certifiedInformationSecurityManager"
  )
);
const AWSPractitioner = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/awsPractitioner"
  )
);
const AWSSolutionArchitect = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/awsSolutionArchitect"
  )
);
const AWSSysOpsAdministrator = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/awsSysOpsAdministrator"
  )
);
const AWSDeveloperAssociate = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/awsDeveloperAssociate"
  )
);
const MicrosoftAzureCloudFundamentals = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/microsoftAzureCloudFundamentals"
  )
);
const MicrosoftCloudAdministrator = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/microsoftCloudAdministrator"
  )
);
const PythonForEveryone = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/pythonForEveryone"
  )
);
const MachineLearningAndAI = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/machineLearningAndAI"
  )
);
const DataScience = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/dataScience"
  )
);
const BigDataAndHeadoopEcosystem = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/bigDataAndHeadoopEcosystem"
  )
);
const GoogleCloudEngineer = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/googleCloudEngineer"
  )
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
            path="/fastTrackTechnicalProgram/comptiaItFundamentals"
            component={CompTIAItFundamentals}
          />
          <Route
            path="/fastTrackTechnicalProgram/microsoftFrontEndDevelopment"
            component={MicrosoftFrontEndDevelopment}
          />
          <Route
            path="/fastTrackTechnicalProgram/aspDotNetWebApplications"
            component={AspDotNetWebApplications}
          />
          <Route
            path="/fastTrackTechnicalProgram/phpLaravel"
            component={PHPLaravel}
          />
          <Route
            path="/fastTrackTechnicalProgram/mernStack"
            component={MERNStack}
          />
          <Route
            path="/fastTrackTechnicalProgram/sqlServerSpecialist"
            component={SQLServerSpecialist}
          />
          <Route
            path="/fastTrackTechnicalProgram/oracleDatabaseAdministrator"
            component={OracleDatabaseAdministrator}
          />
          <Route
            path="/fastTrackTechnicalProgram/androidAppsDevelopment"
            component={AndroidAppsDevelopment}
          />
          <Route
            path="/fastTrackTechnicalProgram/kotlinAppsDevelopment"
            component={KotlinAppsDevelopment}
          />
          <Route
            path="/fastTrackTechnicalProgram/iOSAppsDevelopment"
            component={IOSAppsDevelopment}
          />
          <Route
            path="/fastTrackTechnicalProgram/xamarinAppsDevelopment"
            component={XamarinAppsDevelopment}
          />
          <Route
            path="/fastTrackTechnicalProgram/reactNativeWebAndAppsDevelopment"
            component={ReactNativeWebAndAppsDevelopment}
          />
          <Route
            path="/fastTrackTechnicalProgram/gameDevelopment"
            component={GameDevelopment}
          />
          <Route
            path="/fastTrackTechnicalProgram/ciscoCCNANetworking"
            component={CiscoCCNANetworking}
          />
          <Route
            path="/fastTrackTechnicalProgram/comptiaSecurity"
            component={ComptiaSecurity}
          />
          <Route
            path="/fastTrackTechnicalProgram/ceh"
            component={CertifiedEthicalHacking}
          />
          <Route
            path="/fastTrackTechnicalProgram/ecsa"
            component={PenetrationTestingSecurityAnalyst}
          />
          <Route
            path="/fastTrackTechnicalProgram/chfi"
            component={CertifiedHackingForensicInvestigator}
          />
          <Route
            path="/fastTrackTechnicalProgram/cisa"
            component={CertifiedInformationSystemsAuditor}
          />
          <Route
            path="/fastTrackTechnicalProgram/cism"
            component={CertifiedInformationSecurityManager}
          />
          <Route
            path="/fastTrackTechnicalProgram/awsPractitioner"
            component={AWSPractitioner}
          />
          <Route
            path="/fastTrackTechnicalProgram/awsSolutionArchitect"
            component={AWSSolutionArchitect}
          />
          <Route
            path="/fastTrackTechnicalProgram/awsSysOpsAdministrator"
            component={AWSSysOpsAdministrator}
          />
          <Route
            path="/fastTrackTechnicalProgram/awsDeveloperAssociate"
            component={AWSDeveloperAssociate}
          />
          <Route
            path="/fastTrackTechnicalProgram/microsoftAzureCloudFundamentals"
            component={MicrosoftAzureCloudFundamentals}
          />
          <Route
            path="/fastTrackTechnicalProgram/microsoftCloudAdministrator"
            component={MicrosoftCloudAdministrator}
          />
          <Route
            path="/fastTrackTechnicalProgram/pythonForEverone"
            component={PythonForEveryone}
          />
          <Route
            path="/fastTrackTechnicalProgram/machineLearningAndAI"
            component={MachineLearningAndAI}
          />
          <Route
            path="/fastTrackTechnicalProgram/dataScience"
            component={DataScience}
          />
          <Route
            path="/fastTrackTechnicalProgram/bigDataAndHeadoopEcosystem"
            component={BigDataAndHeadoopEcosystem}
          />
          <Route
            path="/fastTrackTechnicalProgram/googleCloudEngineer"
            component={GoogleCloudEngineer}
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

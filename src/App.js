import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import FadeLoader from "./loader/loader";
import { Beforeunload } from "react-beforeunload";
import { connect } from "react-redux";
import { signOut } from "./store/actions/authActions";
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
const QuickBooks = lazy(() =>
  import(
    "./components/course_outlines/fast_track_non_technical_program/quickBooks"
  )
);
const SAPERP = lazy(() =>
  import("./components/course_outlines/fast_track_non_technical_program/saperp")
);
const ProjectManagementProfessional = lazy(() =>
  import(
    "./components/course_outlines/fast_track_non_technical_program/projectManagementProfessional"
  )
);
const AmazonFBABusiness = lazy(() =>
  import(
    "./components/course_outlines/fast_track_non_technical_program/amazonFBABusiness"
  )
);
const SearchEngineOptimization = lazy(() =>
  import(
    "./components/course_outlines/fast_track_non_technical_program/searchEngineOptimzation"
  )
);
const DigitalMarketing = lazy(() =>
  import(
    "./components/course_outlines/fast_track_non_technical_program/digitalMarketing"
  )
);
const SocialMediaMarketing = lazy(() =>
  import(
    "./components/course_outlines/fast_track_non_technical_program/socialMediaMarketing"
  )
);
const GraphicDesign = lazy(() =>
  import(
    "./components/course_outlines/fast_track_non_technical_program/graphicDesign"
  )
);
const UIANDUX = lazy(() =>
  import(
    "./components/course_outlines/fast_track_non_technical_program/uiAndUx"
  )
);
const InteriorDesign = lazy(() =>
  import(
    "./components/course_outlines/fast_track_non_technical_program/interiorDesign"
  )
);
const MayaMaxAnimation = lazy(() =>
  import(
    "./components/course_outlines/fast_track_non_technical_program/3dMayaMaxAnimation"
  )
);
const VideoEditing = lazy(() =>
  import(
    "./components/course_outlines/fast_track_non_technical_program/videoEditing"
  )
);
const AutoCad = lazy(() =>
  import(
    "./components/course_outlines/fast_track_non_technical_program/autocad"
  )
);
const MicrosoftOffice365 = lazy(() =>
  import(
    "./components/course_outlines/fast_track_non_technical_program/microsoftOffice365"
  )
);
const Enterpreneurship = lazy(() =>
  import(
    "./components/course_outlines/fast_track_non_technical_program/enterpreneurship"
  )
);
const DigitalForensicCyberSecurity = lazy(() =>
  import(
    "./components/course_outlines/associate_certifications_programs/digitalForensicCyberSecurity"
  )
);
const PenetrationTestingCyberSecurity = lazy(() =>
  import(
    "./components/course_outlines/associate_certifications_programs/penetrationTestingCyberSecurity"
  )
);
const CISSP = lazy(() =>
  import(
    "./components/course_outlines/associate_certifications_programs/certifiedInformationSystemsSecurityProfessional"
  )
);
const AWSCloudComputing = lazy(() =>
  import(
    "./components/course_outlines/associate_certifications_programs/awsCloudComputing"
  )
);
const BlockChainTechnology = lazy(() =>
  import(
    "./components/course_outlines/associate_certifications_programs/blockchainTechnology"
  )
);
const FullStackWebDevelopment = lazy(() =>
  import(
    "./components/course_outlines/associate_certifications_programs/fullStackWebDevelopment"
  )
);
const InternetOfThings = lazy(() =>
  import(
    "./components/course_outlines/associate_certifications_programs/internetOfThings"
  )
);
const ArtificialIntelligence = lazy(() =>
  import(
    "./components/course_outlines/associate_certifications_programs/artificialIntelligence"
  )
);
const ApplyNow = lazy(() => import("./pages/applyNow"));
const SignUp = lazy(() => import("./pages/signUp"));
const LogIn = lazy(() => import("./pages/logIn"));
const TermsAndConditions = lazy(() => import("./pages/termsAndConditions"));
const ApplicationForm = lazy(() => import("./pages/applicationForm"));
const EmailVerification = lazy(() => import("./pages/emailVerification"));
const AdmissionStatus = lazy(() => import("./pages/admissionStatus"));
const GenerateChallan = lazy(() =>
  import("./components/generate_challan/generateChallan")
);
const BankChallan = lazy(() => import("./components/bank_challan/bankChallan"));
const ForgotPassword = lazy(() =>
  import("./components/forgot_password/forgotPassword")
);
const OnlineBanking = lazy(() =>
  import("./components/online_banking/onlineBanking")
);
const EServicesBanking = lazy(() =>
  import("./components/eservices_banking/eservicesBanking")
);

const App = ({ signOut, uid }) => {
  // State
  const [firstLoad, setFirstLoad] = useState(false);

  // Object Destructuring
  // const { replace } = useHistory();

  useEffect(() => {
    if (window.sessionStorage.getItem("First Load") === null) {
      window.sessionStorage.setItem("First Load", 1);
      setFirstLoad(true);
    } else {
      setFirstLoad(false);
    }
  }, [setFirstLoad]);

  if (firstLoad) {
    setTimeout(() => {
      setFirstLoad(false);
    }, 3000);
  }
  return (
    <Beforeunload
      onBeforeunload={(event) => {
        if (uid) {
          signOut();
          event.preventDefault();
        }
      }}
    >
      <BrowserRouter>
        <Suspense fallback={<FadeLoader />}>
          <Nav firstLoad={firstLoad} />
          <Message firstLoad={firstLoad} />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/admissionProcess" component={AdmissionProcess} />
            <Route path="/faqs" component={FAQs} />
            <Route path="/contactUs" component={ContactUs} />
            <Route path="/apply-now" exact component={ApplyNow} />
            <Route path="/apply-now/signup" component={SignUp} />
            <Route path="/apply-now/login" component={LogIn} />
            <Route
              path="/apply-now/forgotPassword"
              component={ForgotPassword}
            />
            <Route
              path="/apply-now/generateChallan"
              exact
              component={GenerateChallan}
            />
            <Route
              path="/apply-now/generateChallan/bankChallan"
              component={BankChallan}
            />
            <Route
              path="/apply-now/generateChallan/onlineBanking"
              component={OnlineBanking}
            />
            <Route
              path="/apply-now/generateChallan/eservicesBanking"
              component={EServicesBanking}
            />
            <Route
              path="/apply-now/admissionStatus"
              component={AdmissionStatus}
            />
            <Route
              path="/apply-now/emailVerification"
              component={EmailVerification}
            />
            <Route
              path="/apply-now/termsAndConditions"
              component={TermsAndConditions}
            />
            <Route
              path="/apply-now/applicationForm"
              component={ApplicationForm}
            />
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
              path="/fastTrackNonTechnicalProgram/quickBooks"
              component={QuickBooks}
            />
            <Route
              path="/fastTrackNonTechnicalProgram/saperp"
              component={SAPERP}
            />
            <Route
              path="/fastTrackNonTechnicalProgram/projectManagementProfessional"
              component={ProjectManagementProfessional}
            />
            <Route
              path="/fastTrackNonTechnicalProgram/amazonFBABusiness"
              component={AmazonFBABusiness}
            />
            <Route
              path="/fastTrackNonTechnicalProgram/searchEngineOptimization"
              component={SearchEngineOptimization}
            />
            <Route
              path="/fastTrackNonTechnicalProgram/digitalMarketing"
              component={DigitalMarketing}
            />
            <Route
              path="/fastTrackNonTechnicalProgram/socialMediaMarketing"
              component={SocialMediaMarketing}
            />
            <Route
              path="/fastTrackNonTechnicalProgram/graphicDesign"
              component={GraphicDesign}
            />
            <Route
              path="/fastTrackNonTechnicalProgram/uiux"
              component={UIANDUX}
            />
            <Route
              path="/fastTrackNonTechnicalProgram/interiorDesigning"
              component={InteriorDesign}
            />
            <Route
              path="/fastTrackNonTechnicalProgram/3dMayaMaxAnimation"
              component={MayaMaxAnimation}
            />
            <Route
              path="/fastTrackNonTechnicalProgram/videoEditing"
              component={VideoEditing}
            />
            <Route
              path="/fastTrackNonTechnicalProgram/autocad"
              component={AutoCad}
            />
            <Route
              path="/fastTrackNonTechnicalProgram/microsoftOffice365"
              component={MicrosoftOffice365}
            />
            <Route
              path="/fastTrackNonTechnicalProgram/enterpreneurship"
              component={Enterpreneurship}
            />
            <Route
              path="/associateCertificationProgram"
              exact
              component={AssociateCertificationProgram}
            />
            <Route
              path="/associateCertificationProgram/digitalForensicCyberSecurity"
              component={DigitalForensicCyberSecurity}
            />
            <Route
              path="/associateCertificationProgram/penetrationTestingCyberSecurity"
              component={PenetrationTestingCyberSecurity}
            />
            <Route
              path="/associateCertificationProgram/cissp"
              component={CISSP}
            />
            <Route
              path="/associateCertificationProgram/artificialIntelligence"
              component={ArtificialIntelligence}
            />
            <Route
              path="/associateCertificationProgram/awsCloudComputing"
              component={AWSCloudComputing}
            />
            <Route
              path="/associateCertificationProgram/internetOfThings"
              component={InternetOfThings}
            />
            <Route
              path="/associateCertificationProgram/blockchainTechnology"
              component={BlockChainTechnology}
            />
            <Route
              path="/associateCertificationProgram/fullStackWebDevelopment"
              component={FullStackWebDevelopment}
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
    </Beforeunload>
  );
};

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

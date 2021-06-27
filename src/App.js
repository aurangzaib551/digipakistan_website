import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import FadeLoader from "./loader/loader";
import { Beforeunload } from "react-beforeunload";
import { connect } from "react-redux";
import { signOut } from "./store/actions/AuthActions";
import { Helmet } from "react-helmet";
const Nav = lazy(() => import("./components/common/nav/Nav"));
const HomePage = lazy(() => import("./pages/HomePage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Message = lazy(() => import("./pages/Message"));
const AdmissionProcess = lazy(() => import("./pages/AdmissionProcess"));
const FAQs = lazy(() => import("./pages/Faqs"));
const GoToTop = lazy(() => import("./pages/GoToTop"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const ProvincialMinisterMessage = lazy(() =>
  import("./pages/ProvincialMinisterMessage")
);
const DirectorGeneralMessage = lazy(() =>
  import("./pages/DirectorGeneralMessage")
);
const ChairmanHECPunjabMessage = lazy(() =>
  import("./pages/ChairmanHECPunjabMessage")
);
const ChairmanPECMessage = lazy(() => import("./pages/ChairmanPECMessage"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const AdvisoryBody = lazy(() => import("./pages/AdvisoryBody"));
const BecomeAnInstructor = lazy(() => import("./pages/BecomeAnInstructor"));
const FastTrackTechnicalProgram = lazy(() =>
  import("./pages/FastTrackTechnicalProgram")
);
const FastTrackNonTechnicalProgram = lazy(() =>
  import("./pages/FastTrackNonTechnicalProgram")
);
const AssociateCertificationProgram = lazy(() =>
  import("./pages/AssociateCertificationProgram")
);
const CompTIAItFundamentals = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/CompTIAItFundamentals"
  )
);
const MicrosoftFrontEndDevelopment = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/MicrosoftFrontEndDevelopment"
  )
);
const AspDotNetWebApplications = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/AspDotNetWebApplications"
  )
);
const PHPLaravel = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/PHPLaravel"
  )
);
const MERNStack = lazy(() =>
  import("./components/course_outlines/fast_track_technical_programs/MernStack")
);
const SQLServerSpecialist = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/SqlServerSpecialist"
  )
);
const OracleDatabaseAdministrator = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/OrcaleDatabaseAdministrator"
  )
);
const AndroidAppsDevelopment = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/AndroidAppsDevelopment"
  )
);
const KotlinAppsDevelopment = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/KotlinAppsDevelopment"
  )
);
const IOSAppsDevelopment = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/iOSAppsDevelopment"
  )
);
const XamarinAppsDevelopment = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/XamarinAppsDevelopment"
  )
);
const ReactNativeWebAndAppsDevelopment = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/ReactNativeWebAndAppsDevelopment"
  )
);
const GameDevelopment = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/GameDevelopment"
  )
);
const CiscoCCNANetworking = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/CiscoCCNANetworking"
  )
);
const ComptiaSecurity = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/ComptiaSecurity"
  )
);
const CertifiedEthicalHacking = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/CertifiedEthicalHacking"
  )
);
const PenetrationTestingSecurityAnalyst = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/PenetrationTestingSecurityAnalyst"
  )
);
const CertifiedHackingForensicInvestigator = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/CertifiedHackingForensicInvestigator"
  )
);
const CertifiedInformationSystemsAuditor = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/CertifiedInformationSystemsAuditor"
  )
);
const CertifiedInformationSecurityManager = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/CertifiedInformationSecurityManager"
  )
);
const AWSPractitioner = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/AwsPractitioner"
  )
);
const AWSSolutionArchitect = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/AwsSolutionArchitect"
  )
);
const AWSSysOpsAdministrator = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/AwsSysOpsAdministrator"
  )
);
const AWSDeveloperAssociate = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/AwsDeveloperAssociate"
  )
);
const MicrosoftAzureCloudFundamentals = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/MicrosoftAzureCloudFundamentals"
  )
);
const MicrosoftCloudAdministrator = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/MicrosoftCloudAdministrator"
  )
);
const PythonForEveryone = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/PythonForEveryone"
  )
);
const MachineLearningAndAI = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/MachineLearningAndAI"
  )
);
const DataScience = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/DataScience"
  )
);
const BigDataAndHeadoopEcosystem = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/BigDataAndHeadoopEcosystem"
  )
);
const GoogleCloudEngineer = lazy(() =>
  import(
    "./components/course_outlines/fast_track_technical_programs/GoogleCloudEngineer"
  )
);
const QuickBooks = lazy(() =>
  import(
    "./components/course_outlines/fast_track_non_technical_program/QuickBooks"
  )
);
const SAPERP = lazy(() =>
  import("./components/course_outlines/fast_track_non_technical_program/SapErp")
);
const ProjectManagementProfessional = lazy(() =>
  import(
    "./components/course_outlines/fast_track_non_technical_program/ProjectManagementProfessional"
  )
);
const AmazonFBABusiness = lazy(() =>
  import(
    "./components/course_outlines/fast_track_non_technical_program/AmazonFBABusiness"
  )
);
const SearchEngineOptimization = lazy(() =>
  import(
    "./components/course_outlines/fast_track_non_technical_program/SearchEngineOptimzation"
  )
);
const DigitalMarketing = lazy(() =>
  import(
    "./components/course_outlines/fast_track_non_technical_program/DigitalMarketing"
  )
);
const SocialMediaMarketing = lazy(() =>
  import(
    "./components/course_outlines/fast_track_non_technical_program/SocialMediaMarketing"
  )
);
const GraphicDesign = lazy(() =>
  import(
    "./components/course_outlines/fast_track_non_technical_program/GraphicDesign"
  )
);
const UIANDUX = lazy(() =>
  import(
    "./components/course_outlines/fast_track_non_technical_program/UiAndUx"
  )
);
const InteriorDesign = lazy(() =>
  import(
    "./components/course_outlines/fast_track_non_technical_program/InteriorDesign"
  )
);
const MayaMaxAnimation = lazy(() =>
  import(
    "./components/course_outlines/fast_track_non_technical_program/3DMayaMaxAnimation"
  )
);
const VideoEditing = lazy(() =>
  import(
    "./components/course_outlines/fast_track_non_technical_program/VideoEditing"
  )
);
const AutoCad = lazy(() =>
  import(
    "./components/course_outlines/fast_track_non_technical_program/Autocad"
  )
);
const MicrosoftOffice365 = lazy(() =>
  import(
    "./components/course_outlines/fast_track_non_technical_program/MicrosoftOffice365"
  )
);
const Enterpreneurship = lazy(() =>
  import(
    "./components/course_outlines/fast_track_non_technical_program/Enterpreneurship"
  )
);
const DigitalForensicCyberSecurity = lazy(() =>
  import(
    "./components/course_outlines/associate_certifications_programs/DigitalForensicCyberSecurity"
  )
);
const PenetrationTestingCyberSecurity = lazy(() =>
  import(
    "./components/course_outlines/associate_certifications_programs/PenetrationTestingCyberSecurity"
  )
);
const CISSP = lazy(() =>
  import(
    "./components/course_outlines/associate_certifications_programs/CertifiedInformationSystemsSecurityProfessional"
  )
);
const AWSCloudComputing = lazy(() =>
  import(
    "./components/course_outlines/associate_certifications_programs/AwsCloudComputing"
  )
);
const BlockChainTechnology = lazy(() =>
  import(
    "./components/course_outlines/associate_certifications_programs/BlockchainTechnology"
  )
);
const FullStackWebDevelopment = lazy(() =>
  import(
    "./components/course_outlines/associate_certifications_programs/FullStackWebDevelopment"
  )
);
const InternetOfThings = lazy(() =>
  import(
    "./components/course_outlines/associate_certifications_programs/InternetOfThings"
  )
);
const ArtificialIntelligence = lazy(() =>
  import(
    "./components/course_outlines/associate_certifications_programs/ArtificialIntelligence"
  )
);
const ApplyNow = lazy(() => import("./pages/ApplyNow"));
const SignUp = lazy(() => import("./pages/SignUp"));
const LogIn = lazy(() => import("./pages/LogIn"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const ApplicationForm = lazy(() => import("./pages/ApplicationForm"));
const EmailVerification = lazy(() => import("./pages/EmailVerification"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const GenerateChallan = lazy(() => import("./pages/GenerateChallan"));
const BankChallan = lazy(() => import("./pages/BankChallan"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const OnlineBanking = lazy(() => import("./pages/OnlineBanking"));
const EServicesBanking = lazy(() => import("./pages/EServicesBanking"));
const PaymentVerification = lazy(() => import("./pages/PaymentVerification"));
const Team = lazy(() => import("./pages/Team"));

const App = ({ signOut, uid }) => {
  // ? State
  const [firstLoad, setFirstLoad] = useState(false);

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
    }, 5000);
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
        <Helmet>
          <title>DigiPAKISTAN | National Skills Development Initiative</title>
          <meta
            name="description"
            content="DigiPAKISTAN is a National Skills Development Initiative to transform Pakistani Youth into productive workforce to contest the challenges of fourth industrial revolution through latest, demand driven and state of the art IT Skills with the increased access to high-quality education for everyone, anywhere and anytime."
          />

          {/* <!-- Google / Search Engine Tags --> */}
          <meta
            itemprop="name"
            content="DigiPAKISTAN | National Skills Development Initiative"
          />
          <meta
            itemprop="description"
            content="DigiPAKISTAN is a National Skills Development Initiative to transform Pakistani Youth into productive workforce to contest the challenges of fourth industrial revolution through latest, demand driven and state of the art IT Skills with the increased access to high-quality education for everyone, anywhere and anytime."
          />
          <meta
            itemprop="image"
            content="http://i.ibb.co/fFStNr0/meta-logo.jpg"
          />

          {/* <!-- Facebook Meta Tags --> */}
          <meta property="og:url" content="https://digipakistan.org" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="DigiPAKISTAN | National Skills Development Initiative"
          />
          <meta
            property="og:description"
            content="DigiPAKISTAN is a National Skills Development Initiative to transform Pakistani Youth into productive workforce to contest the challenges of fourth industrial revolution through latest, demand driven and state of the art IT Skills with the increased access to high-quality education for everyone, anywhere and anytime."
          />
          <meta
            property="og:image"
            content="http://i.ibb.co/fFStNr0/meta-logo.jpg"
          />

          {/* <!-- Twitter Meta Tags --> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="DigiPAKISTAN | National Skills Development Initiative"
          />
          <meta
            name="twitter:description"
            content="DigiPAKISTAN is a National Skills Development Initiative to transform Pakistani Youth into productive workforce to contest the challenges of fourth industrial revolution through latest, demand driven and state of the art IT Skills with the increased access to high-quality education for everyone, anywhere and anytime."
          />
          <meta
            name="twitter:image"
            content="http://i.ibb.co/fFStNr0/meta-logo.jpg"
          />
          <meta
            name="keywords"
            content="digipakistan, digi pakistan, digipakistan national skills development initiative, pakistan engineering council, digiskills, digiskill, digital pakistan, Fast Track Technical Programe, comptia it fundamental, free comptia it fundamental course, microsoft front end web developer, free microsoft front end web developer cousre, asp.net web developer, free asp.net web developer course, php laravel, free php laravel course, mern stack, free mern stack course, swl server specialist, free swl server specialist course, oracle database administrator (ocp: 12c dba), free oracle database administrator (ocp: 12c dba) course, android apps development, free android apps development course, kotlin mobile apps development, free kotlin mobile apps development course, ios apps development, free ios apps development course, xamarin mobile apps development, free xamarin mobile apps development course, react native web & apps development, free react native web & apps development course, game development, free game development course, cisco ccna networking, free cisco ccna networking course, comptia security + (syo-601), free comptia security + (syo-601) course, ceh, free ceh course, certified ethical hacking, free certified ethical hacking course, chfi, free chfi course, certified hacking forensic investigation, free certified hacking forensic investigation course, ecsa, free ecsa course, penetration testing security analyst, free penetration testing security analyst course, cisa, free cisa course, certified information system auditor, free certified information system auditor course, cism, free cism course, certified information security manager,free certified information security manager course, aws practitioner, free aws practitioner course, aws solution architect, free aws solution architect course, aes sysops administration, free aes sysops administration course, aws developer associate, free aws developer associate course, microsoft azure cloud fundamentals, free microsoft azure cloud fundamentals course, microsoft cloud administrator 103-104, free microsoft cloud administrator 103-104 course, google cloud engineer, free google cloud engineer course, python for everyone, free python for everyone course, machine learning & ai, free machine learning & ai course, data science, free data science course, big data & headoop ecosystem, free big data & headoop ecosystem course, quickbooks erp, free quickbooks erp course, sap erp, free sap erp course, project management professional, free project management professional course, amazon fba business, free amazon fba business course, search engine optimizatio, free search engine optimizatio course, seo, free seo course, digital marketing, free digital marketing course, social media marketing, free social media marketing course, smm, free smm course, graphic design, free graphic design course, ui/ ux design, free ui/ ux design course, interior designing, free interior designing course, 3d maya max animation, free 3d maya max animation course, video editing, free video editing course, autocad, free autocad course, microsoft office 365, free microsoft office 365 course, enterpreneurship, free enterpreneurship course, digital forensic cyber security, free digital forensic cyber security course, penetration testing cyber security, free penetration testing cyber security course, cissp cyber security professional, free cissp cyber security professional course, artificial intelligence, free artificial intelligence course, aws cloud computing, free aws cloud computing course, internet of things, free internet of things course, iot, free iot course, block chain technology, free block chain technology course, full stack web development, free full stack web development course, mcsa, free mcsa course"
          ></meta>
        </Helmet>
        <Suspense fallback={<FadeLoader />}>
          <Nav firstLoad={firstLoad} />
          <Message firstLoad={firstLoad} />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/admissionProcess" component={AdmissionProcess} />
            <Route path="/faqs" component={FAQs} />
            <Route path="/contactUs" component={ContactUs} />
            <Route path="/about/ourTeam" component={Team} />
            <Route path="/apply-now" exact component={ApplyNow} />
            <Route path="/apply-now/signup" component={SignUp} />
            <Route path="/apply-now/login" component={LogIn} />
            <Route
              path="/apply-now/paymentVerification"
              component={PaymentVerification}
            />
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
            <Route path="/dashboard" component={Dashboard} />
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

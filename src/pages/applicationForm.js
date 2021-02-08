import React, { useState, useLayoutEffect } from "react";
import Container from "@material-ui/core/Container";
import PersonalInformation from "../components/application_form/personalInformation";
import Button from "@material-ui/core/Button";
import AvailablePrograms from "../components/application_form/availablePrograms";
import Education from "../components/application_form/education";
import Address from "../components/application_form/address";
import AdditionalFreeCourseVoucher from "../components/application_form/additionalFreeCourseVoucher";
import Copyright from "../components/common/copyright/copyright";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { application, clearAll } from "../store/actions/applicationFormActions";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const ApplicationForm = ({
  uid,
  emailVerified,
  termsAndConditions,
  submitForm,
  rollNumber,
  emailAddress,
  msg,
  clearAll,
  applicationSubmitted,
  referCode,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    applicant: "",
    cnic: "",
    overseasCNIC: "",
    overseasMobileNumber: "",
    mobileNumber: "",
    emailAddress,
    dob: "",
    gender: "",
    firstCourseTitle: "",
    firstCourseName: "",
    firstCourseLink: "",
    secondCourseTitle: "",
    secondCourseName: "",
    secondCourseLink: "",
    thirdCourseTitle: "",
    thirdCourseName: "",
    thirdCourseLink: "",
    qualification: "",
    education: "",
    instituteName: "",
    province: "",
    country: "",
    city: "",
    address: "",
    referenceCode: "",
    knowAboutUs: "",
    termsAndConditions,
    rollNumber,
  });
  const [btnLoading, setBtnLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useLayoutEffect(() => {
    if (msg) {
      setTimeout(() => {
        setFormData({
          fullName: "",
          fatherName: "",
          applicant: "",
          cnic: "",
          overseasCNIC: "",
          overseasMobileNumber: "",
          countryCode: "",
          mobileNumber: "",
          emailAddress,
          dob: "",
          gender: "",
          firstCourseTitle: "",
          firstCourseName: "",
          firstCourseLink: "",
          secondCourseTitle: "",
          secondCourseName: "",
          secondCourseLink: "",
          thirdCourseTitle: "",
          thirdCourseName: "",
          thirdCourseLink: "",
          qualification: "",
          education: "",
          instituteName: "",
          province: "",
          country: "",
          city: "",
          address: "",
          referenceCode: "",
          knowAboutUs: "",
        });
        clearAll();
      }, 5000);
    }
  }, [emailAddress, clearAll, msg]);

  // User is logged in or not
  if (!uid) return <Redirect to="/apply-now/login" />;
  // Checking email is verified or not
  if (!emailVerified) return <Redirect to="/apply-now/emailVerification" />;
  // Checking Terms & Conditions
  if (!termsAndConditions)
    return <Redirect to="/apply-now/termsAndConditions" />;
  // Checking application is submitted or not
  if (applicationSubmitted) return <Redirect to="/apply-now/admissionStatus" />;

  //   Getting Values from input fields
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  //   Getting value from first course title
  const handleFirstCourseTitle = (event) => {
    setFormData({
      ...formData,
      firstCourseTitle: event.target.value,
      firstCourseName: "",
      firstCourseLink: "",
    });
  };

  //   Getting value from first course name
  const handleFirstCourseName = ({ target }) => {
    const { value } = target;

    if (value === "Microsoft Front End Development") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/frontEndLMS",
        firstCourseName: value,
      });
    } else if (value === "ASP.NET Web Applications") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/aspDotNetLMS",
        firstCourseName: value,
      });
    } else if (value === "PHP Laravel") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/phpLaravelLMS",
        firstCourseName: value,
      });
    } else if (value === "MERN Stack") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/mernStackLMS",
        firstCourseName: value,
      });
    } else if (value === "SQL Server Specialist") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/sqlServerSpecialistLMS",
        firstCourseName: value,
      });
    } else if (value === "Oracle Database Administrator (OCP : 12C DBA)") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/oracleDatabaseLMS",
        firstCourseName: value,
      });
    } else if (value === "Android Apps Development") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/androidAppLMS",
        firstCourseName: value,
      });
    } else if (value === "IOS Apps Development") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/iosAppLMS",
        firstCourseName: value,
      });
    } else if (value === "Xamarin Mobile Apps Development") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/xamarinAppLMS",
        firstCourseName: value,
      });
    } else if (value === "React Native Web & Apps Development") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/reactNativeLMS",
        firstCourseName: value,
      });
    } else if (value === "Game Development") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/gameDevelopmentLMS",
        firstCourseName: value,
      });
    } else if (value === "Cisco CCNA Networking") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/ccnaNetworkingLMS",
        firstCourseName: value,
      });
    } else if (value === "Graphics Design") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/graphicDesignLMS",
        firstCourseName: value,
      });
    } else if (value === "Video Editing") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/videoEditingLMS",
        firstCourseName: value,
      });
    } else if (value === "Search Engine Optimization (SEO)") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/seoLMS",
        firstCourseName: value,
      });
    } else if (value === "Social Media Marketing") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/socialMediaLMS",
        firstCourseName: value,
      });
    } else if (value === "Amazon FBA Business") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/amazonFbaBusinessLMS",
        firstCourseName: value,
      });
    } else if (value === "Project Management Professional (PMP)") {
      setFormData({
        ...formData,
        firstCourseLink:
          "/lmsDashboard/myCourses/projectManagementProfessionalLMS",
        firstCourseName: value,
      });
    } else if (value === "Digital Forensic Cyber Security") {
      setFormData({
        ...formData,
        firstCourseLink:
          "/lmsDashboard/myCourses/digitalForensicCyberSecurityLMS",
        firstCourseName: value,
      });
    } else if (value === "Penetration Testing Cyber Security") {
      setFormData({
        ...formData,
        firstCourseLink:
          "/lmsDashboard/myCourses/penetrationTestingCyberSecurityLMS",
        firstCourseName: value,
      });
    } else if (value === "Artificial Intelligence") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/artificialIntelligenceLMS",
        firstCourseName: value,
      });
    } else if (value === "AWS Cloud Computing") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/cloudComputingLMS",
        firstCourseName: value,
      });
    } else if (value === "Full Stack Web Development") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/fullStackWebDevelopmentLMS",
        firstCourseName: value,
      });
    } else if (value === "Internet of Things (IoT)") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/iotLMS",
        firstCourseName: value,
      });
    } else if (value === "BlockChain Technology") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/blockChainLMS",
        firstCourseName: value,
      });
    } else if (value === "CompTIA It Fundamentals") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/comptiaItFundamentalsLMS",
        firstCourseName: value,
      });
    } else if (value === "Kotlin Mobile Apps Development") {
      setFormData({
        ...formData,
        firstCourseLink:
          "/lmsDashboard/myCourses/kotlinMobileAppsDevelopmentLMS",
        firstCourseName: value,
      });
    } else if (value === "CompTIA Security + (SYO - 601)") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/comptiaSecurityPlusLMS",
        firstCourseName: value,
      });
    } else if (value === "Certified Ethical Hacking") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/certifiedEthicalHackingLMS",
        firstCourseName: value,
      });
    } else if (value === "Certified Hacking Forensic Investigator") {
      setFormData({
        ...formData,
        firstCourseLink:
          "/lmsDashboard/myCourses/certifiedHackingForensicInvestigatorLMS",
        firstCourseName: value,
      });
    } else if (value === "Penetration Testing Security Analyst") {
      setFormData({
        ...formData,
        firstCourseLink:
          "/lmsDashboard/myCourses/penetrationTestingSecurityAnalystLMS",
        firstCourseName: value,
      });
    } else if (value === "Certified Information System Auditor") {
      setFormData({
        ...formData,
        firstCourseLink:
          "/lmsDashboard/myCourses/certifiedInformationSystemAuditorLMS",
        firstCourseName: value,
      });
    } else if (value === "Certified Information Security Manager") {
      setFormData({
        ...formData,
        firstCourseLink:
          "/lmsDashboard/myCourses/certifiedInformationSecurityManagerLMS",
        firstCourseName: value,
      });
    } else if (value === "AWS Practitioner") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/awsPractitionerLMS",
        firstCourseName: value,
      });
    } else if (value === "AWS Solution Architect") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/awsSolutionArchitectLMS",
        firstCourseName: value,
      });
    } else if (value === "AWS SysOps Administrator") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/awsSysOpsAdministratorLMS",
        firstCourseName: value,
      });
    } else if (value === "AWS Developer Associate") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/awsDeveloperAssociateLMS",
        firstCourseName: value,
      });
    } else if (value === "Microsoft Azure Cloud Fundamentals") {
      setFormData({
        ...formData,
        firstCourseLink:
          "/lmsDashboard/myCourses/microsoftAzureCloudFundamentalsLMS",
        firstCourseName: value,
      });
    } else if (value === "Microsoft Cloud Administrator 103 - 104") {
      setFormData({
        ...formData,
        firstCourseLink:
          "/lmsDashboard/myCourses/microsoftCloudAdministratorLMS",
        firstCourseName: value,
      });
    } else if (value === "Google Cloud Engineer") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/googleCloudEngineerLMS",
        firstCourseName: value,
      });
    } else if (value === "Python For Everyone") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/pythonForEveryoneLMS",
        firstCourseName: value,
      });
    } else if (value === "Machine Learning & AI") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/machineLearningAndAILMS",
        firstCourseName: value,
      });
    } else if (value === "Big Data & Headoop Ecosystem") {
      setFormData({
        ...formData,
        firstCourseLink:
          "/lmsDashboard/myCourses/bigDataAndHeadoopEcosystemLMS",
        firstCourseName: value,
      });
    } else if (value === "QuickBooks ERP") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/quickBooksERPLMS",
        firstCourseName: value,
      });
    } else if (value === "SAP ERP") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/sapERPLMS",
        firstCourseName: value,
      });
    } else if (value === "Digital Marketing") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/digitalMarketingLMS",
        firstCourseName: value,
      });
    } else if (value === "UI / UX Design") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/uiUXDesignLMS",
        firstCourseName: value,
      });
    } else if (value === "Interior Design") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/interiorDesignLMS",
        firstCourseName: value,
      });
    } else if (value === "3D Maya Max Animation") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/3dMayaMaxAnimationLMS",
        firstCourseName: value,
      });
    } else if (value === "AutoCad") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/autocadLMS",
        firstCourseName: value,
      });
    } else if (value === "Microsoft Office 365") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/microsoftOffice365LMS",
        firstCourseName: value,
      });
    } else if (value === "Enterpreneurship") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/enterpreneurshipLMS",
        firstCourseName: value,
      });
    } else if (value === "CISSP Cyber Security Professional") {
      setFormData({
        ...formData,
        firstCourseLink:
          "/lmsDashboard/myCourses/cisspCyberSecurityProfessionalLMS",
        firstCourseName: value,
      });
    }
  };

  //   Getting value from second course title
  const handleSecondCourseTitle = (event) => {
    setFormData({
      ...formData,
      secondCourseTitle: event.target.value,
      secondCourseName: "",
      secondCourseLink: "",
    });
  };

  //   Getting value from second course name
  const handleSecondCourseName = ({ target }) => {
    const { value } = target;

    if (value === "Microsoft Front End Development") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/frontEndLMS",
        secondCourseName: value,
      });
    } else if (value === "ASP.NET Web Applications") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/aspDotNetLMS",
        secondCourseName: value,
      });
    } else if (value === "PHP Laravel") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/phpLaravelLMS",
        secondCourseName: value,
      });
    } else if (value === "MERN Stack") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/mernStackLMS",
        secondCourseName: value,
      });
    } else if (value === "SQL Server Specialist") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/sqlServerSpecialistLMS",
        secondCourseName: value,
      });
    } else if (value === "Oracle Database Administrator (OCP : 12C DBA)") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/oracleDatabaseLMS",
        secondCourseName: value,
      });
    } else if (value === "Android Apps Development") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/androidAppLMS",
        secondCourseName: value,
      });
    } else if (value === "IOS Apps Development") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/iosAppLMS",
        secondCourseName: value,
      });
    } else if (value === "Xamarin Mobile Apps Development") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/xamarinAppLMS",
        secondCourseName: value,
      });
    } else if (value === "React Native Web & Apps Development") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/reactNativeLMS",
        secondCourseName: value,
      });
    } else if (value === "Game Development") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/gameDevelopmentLMS",
        secondCourseName: value,
      });
    } else if (value === "Cisco CCNA Networking") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/ccnaNetworkingLMS",
        secondCourseName: value,
      });
    } else if (value === "Graphics Design") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/graphicDesignLMS",
        secondCourseName: value,
      });
    } else if (value === "Video Editing") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/videoEditingLMS",
        secondCourseName: value,
      });
    } else if (value === "Search Engine Optimization (SEO)") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/seoLMS",
        secondCourseName: value,
      });
    } else if (value === "Social Media Marketing") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/socialMediaLMS",
        secondCourseName: value,
      });
    } else if (value === "Amazon FBA Business") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/amazonFbaBusinessLMS",
        secondCourseName: value,
      });
    } else if (value === "Project Management Professional (PMP)") {
      setFormData({
        ...formData,
        secondCourseLink:
          "/lmsDashboard/myCourses/projectManagementProfessionalLMS",
        secondCourseName: value,
      });
    } else if (value === "Digital Forensic Cyber Security") {
      setFormData({
        ...formData,
        secondCourseLink:
          "/lmsDashboard/myCourses/digitalForensicCyberSecurityLMS",
        secondCourseName: value,
      });
    } else if (value === "Penetration Testing Cyber Security") {
      setFormData({
        ...formData,
        secondCourseLink:
          "/lmsDashboard/myCourses/penetrationTestingCyberSecurityLMS",
        secondCourseName: value,
      });
    } else if (value === "Artificial Intelligence") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/artificialIntelligenceLMS",
        secondCourseName: value,
      });
    } else if (value === "AWS Cloud Computing") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/cloudComputingLMS",
        secondCourseName: value,
      });
    } else if (value === "Full Stack Web Development") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/fullStackWebDevelopmentLMS",
        secondCourseName: value,
      });
    } else if (value === "Internet of Things (IoT)") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/iotLMS",
        secondCourseName: value,
      });
    } else if (value === "BlockChain Technology") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/blockChainLMS",
        secondCourseName: value,
      });
    } else if (value === "CompTIA It Fundamentals") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/comptiaItFundamentalsLMS",
        secondCourseName: value,
      });
    } else if (value === "Kotlin Mobile Apps Development") {
      setFormData({
        ...formData,
        secondCourseLink:
          "/lmsDashboard/myCourses/kotlinMobileAppsDevelopmentLMS",
        secondCourseName: value,
      });
    } else if (value === "CompTIA Security + (SYO - 601)") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/comptiaSecurityPlusLMS",
        secondCourseName: value,
      });
    } else if (value === "Certified Ethical Hacking") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/certifiedEthicalHackingLMS",
        secondCourseName: value,
      });
    } else if (value === "Certified Hacking Forensic Investigator") {
      setFormData({
        ...formData,
        secondCourseLink:
          "/lmsDashboard/myCourses/certifiedHackingForensicInvestigatorLMS",
        secondCourseName: value,
      });
    } else if (value === "Penetration Testing Security Analyst") {
      setFormData({
        ...formData,
        secondCourseLink:
          "/lmsDashboard/myCourses/penetrationTestingSecurityAnalystLMS",
        secondCourseName: value,
      });
    } else if (value === "Certified Information System Auditor") {
      setFormData({
        ...formData,
        secondCourseLink:
          "/lmsDashboard/myCourses/certifiedInformationSystemAuditorLMS",
        secondCourseName: value,
      });
    } else if (value === "Certified Information Security Manager") {
      setFormData({
        ...formData,
        secondCourseLink:
          "/lmsDashboard/myCourses/certifiedInformationSecurityManagerLMS",
        secondCourseName: value,
      });
    } else if (value === "AWS Practitioner") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/awsPractitionerLMS",
        secondCourseName: value,
      });
    } else if (value === "AWS Solution Architect") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/awsSolutionArchitectLMS",
        secondCourseName: value,
      });
    } else if (value === "AWS SysOps Administrator") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/awsSysOpsAdministratorLMS",
        secondCourseName: value,
      });
    } else if (value === "AWS Developer Associate") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/awsDeveloperAssociateLMS",
        secondCourseName: value,
      });
    } else if (value === "Microsoft Azure Cloud Fundamentals") {
      setFormData({
        ...formData,
        secondCourseLink:
          "/lmsDashboard/myCourses/microsoftAzureCloudFundamentalsLMS",
        secondCourseName: value,
      });
    } else if (value === "Microsoft Cloud Administrator 103 - 104") {
      setFormData({
        ...formData,
        secondCourseLink:
          "/lmsDashboard/myCourses/microsoftCloudAdministratorLMS",
        secondCourseName: value,
      });
    } else if (value === "Google Cloud Engineer") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/googleCloudEngineerLMS",
        secondCourseName: value,
      });
    } else if (value === "Python For Everyone") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/pythonForEveryoneLMS",
        secondCourseName: value,
      });
    } else if (value === "Machine Learning & AI") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/machineLearningAndAILMS",
        secondCourseName: value,
      });
    } else if (value === "Big Data & Headoop Ecosystem") {
      setFormData({
        ...formData,
        secondCourseLink:
          "/lmsDashboard/myCourses/bigDataAndHeadoopEcosystemLMS",
        secondCourseName: value,
      });
    } else if (value === "QuickBooks ERP") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/quickBooksERPLMS",
        secondCourseName: value,
      });
    } else if (value === "SAP ERP") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/sapERPLMS",
        secondCourseName: value,
      });
    } else if (value === "Digital Marketing") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/digitalMarketingLMS",
        secondCourseName: value,
      });
    } else if (value === "UI / UX Design") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/uiUXDesignLMS",
        secondCourseName: value,
      });
    } else if (value === "Interior Design") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/interiorDesignLMS",
        secondCourseName: value,
      });
    } else if (value === "3D Maya Max Animation") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/3dMayaMaxAnimationLMS",
        secondCourseName: value,
      });
    } else if (value === "AutoCad") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/autocadLMS",
        secondCourseName: value,
      });
    } else if (value === "Microsoft Office 365") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/microsoftOffice365LMS",
        secondCourseName: value,
      });
    } else if (value === "Enterpreneurship") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/enterpreneurshipLMS",
        secondCourseName: value,
      });
    } else if (value === "CISSP Cyber Security Professional") {
      setFormData({
        ...formData,
        secondCourseLink:
          "/lmsDashboard/myCourses/cisspCyberSecurityProfessionalLMS",
        secondCourseName: value,
      });
    }
  };

  //   Getting value from third course title
  const handleThirdCourseTitle = (event) => {
    setFormData({
      ...formData,
      thirdCourseTitle: event.target.value,
      thirdCourseName: "",
      thirdCourseLink: "",
    });
  };

  //   Getting value from third course name
  const handleThirdCourseName = ({ target }) => {
    const { value } = target;

    if (value === "Microsoft Front End Development") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/frontEndLMS",
        thirdCourseName: value,
      });
    } else if (value === "ASP.NET Web Applications") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/aspDotNetLMS",
        thirdCourseName: value,
      });
    } else if (value === "PHP Laravel") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/phpLaravelLMS",
        thirdCourseName: value,
      });
    } else if (value === "MERN Stack") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/mernStackLMS",
        thirdCourseName: value,
      });
    } else if (value === "SQL Server Specialist") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/sqlServerSpecialistLMS",
        thirdCourseName: value,
      });
    } else if (value === "Oracle Database Administrator (OCP : 12C DBA)") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/oracleDatabaseLMS",
        thirdCourseName: value,
      });
    } else if (value === "Android Apps Development") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/androidAppLMS",
        thirdCourseName: value,
      });
    } else if (value === "IOS Apps Development") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/iosAppLMS",
        thirdCourseName: value,
      });
    } else if (value === "Xamarin Mobile Apps Development") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/xamarinAppLMS",
        thirdCourseName: value,
      });
    } else if (value === "React Native Web & Apps Development") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/reactNativeLMS",
        thirdCourseName: value,
      });
    } else if (value === "Game Development") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/gameDevelopmentLMS",
        thirdCourseName: value,
      });
    } else if (value === "Cisco CCNA Networking") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/ccnaNetworkingLMS",
        thirdCourseName: value,
      });
    } else if (value === "Graphics Design") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/graphicDesignLMS",
        thirdCourseName: value,
      });
    } else if (value === "Video Editing") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/videoEditingLMS",
        thirdCourseName: value,
      });
    } else if (value === "Search Engine Optimization (SEO)") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/seoLMS",
        thirdCourseName: value,
      });
    } else if (value === "Social Media Marketing") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/socialMediaLMS",
        thirdCourseName: value,
      });
    } else if (value === "Amazon FBA Business") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/amazonFbaBusinessLMS",
        thirdCourseName: value,
      });
    } else if (value === "Project Management Professional (PMP)") {
      setFormData({
        ...formData,
        thirdCourseLink:
          "/lmsDashboard/myCourses/projectManagementProfessionalLMS",
        thirdCourseName: value,
      });
    } else if (value === "Digital Forensic Cyber Security") {
      setFormData({
        ...formData,
        thirdCourseLink:
          "/lmsDashboard/myCourses/digitalForensicCyberSecurityLMS",
        thirdCourseName: value,
      });
    } else if (value === "Penetration Testing Cyber Security") {
      setFormData({
        ...formData,
        thirdCourseLink:
          "/lmsDashboard/myCourses/penetrationTestingCyberSecurityLMS",
        thirdCourseName: value,
      });
    } else if (value === "Artificial Intelligence") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/artificialIntelligenceLMS",
        thirdCourseName: value,
      });
    } else if (value === "AWS Cloud Computing") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/cloudComputingLMS",
        thirdCourseName: value,
      });
    } else if (value === "Full Stack Web Development") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/fullStackWebDevelopmentLMS",
        thirdCourseName: value,
      });
    } else if (value === "Internet of Things (IoT)") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/iotLMS",
        thirdCourseName: value,
      });
    } else if (value === "BlockChain Technology") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/blockChainLMS",
        thirdCourseName: value,
      });
    } else if (value === "CompTIA It Fundamentals") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/comptiaItFundamentalsLMS",
        thirdCourseName: value,
      });
    } else if (value === "Kotlin Mobile Apps Development") {
      setFormData({
        ...formData,
        thirdCourseLink:
          "/lmsDashboard/myCourses/kotlinMobileAppsDevelopmentLMS",
        thirdCourseName: value,
      });
    } else if (value === "CompTIA Security + (SYO - 601)") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/comptiaSecurityPlusLMS",
        thirdCourseName: value,
      });
    } else if (value === "Certified Ethical Hacking") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/certifiedEthicalHackingLMS",
        thirdCourseName: value,
      });
    } else if (value === "Certified Hacking Forensic Investigator") {
      setFormData({
        ...formData,
        thirdCourseLink:
          "/lmsDashboard/myCourses/certifiedHackingForensicInvestigatorLMS",
        thirdCourseName: value,
      });
    } else if (value === "Penetration Testing Security Analyst") {
      setFormData({
        ...formData,
        thirdCourseLink:
          "/lmsDashboard/myCourses/penetrationTestingSecurityAnalystLMS",
        thirdCourseName: value,
      });
    } else if (value === "Certified Information System Auditor") {
      setFormData({
        ...formData,
        thirdCourseLink:
          "/lmsDashboard/myCourses/certifiedInformationSystemAuditorLMS",
        thirdCourseName: value,
      });
    } else if (value === "Certified Information Security Manager") {
      setFormData({
        ...formData,
        thirdCourseLink:
          "/lmsDashboard/myCourses/certifiedInformationSecurityManagerLMS",
        thirdCourseName: value,
      });
    } else if (value === "AWS Practitioner") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/awsPractitionerLMS",
        thirdCourseName: value,
      });
    } else if (value === "AWS Solution Architect") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/awsSolutionArchitectLMS",
        thirdCourseName: value,
      });
    } else if (value === "AWS SysOps Administrator") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/awsSysOpsAdministratorLMS",
        thirdCourseName: value,
      });
    } else if (value === "AWS Developer Associate") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/awsDeveloperAssociateLMS",
        thirdCourseName: value,
      });
    } else if (value === "Microsoft Azure Cloud Fundamentals") {
      setFormData({
        ...formData,
        thirdCourseLink:
          "/lmsDashboard/myCourses/microsoftAzureCloudFundamentalsLMS",
        thirdCourseName: value,
      });
    } else if (value === "Microsoft Cloud Administrator 103 - 104") {
      setFormData({
        ...formData,
        thirdCourseLink:
          "/lmsDashboard/myCourses/microsoftCloudAdministratorLMS",
        thirdCourseName: value,
      });
    } else if (value === "Google Cloud Engineer") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/googleCloudEngineerLMS",
        thirdCourseName: value,
      });
    } else if (value === "Python For Everyone") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/pythonForEveryoneLMS",
        thirdCourseName: value,
      });
    } else if (value === "Machine Learning & AI") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/machineLearningAndAILMS",
        thirdCourseName: value,
      });
    } else if (value === "Big Data & Headoop Ecosystem") {
      setFormData({
        ...formData,
        thirdCourseLink:
          "/lmsDashboard/myCourses/bigDataAndHeadoopEcosystemLMS",
        thirdCourseName: value,
      });
    } else if (value === "QuickBooks ERP") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/quickBooksERPLMS",
        thirdCourseName: value,
      });
    } else if (value === "SAP ERP") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/sapERPLMS",
        thirdCourseName: value,
      });
    } else if (value === "Digital Marketing") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/digitalMarketingLMS",
        thirdCourseName: value,
      });
    } else if (value === "UI / UX Design") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/uiUXDesignLMS",
        thirdCourseName: value,
      });
    } else if (value === "Interior Design") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/interiorDesignLMS",
        thirdCourseName: value,
      });
    } else if (value === "3D Maya Max Animation") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/3dMayaMaxAnimationLMS",
        thirdCourseName: value,
      });
    } else if (value === "AutoCad") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/autocadLMS",
        thirdCourseName: value,
      });
    } else if (value === "Microsoft Office 365") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/microsoftOffice365LMS",
        thirdCourseName: value,
      });
    } else if (value === "Enterpreneurship") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/enterpreneurshipLMS",
        thirdCourseName: value,
      });
    } else if (value === "CISSP Cyber Security Professional") {
      setFormData({
        ...formData,
        thirdCourseLink:
          "/lmsDashboard/myCourses/cisspCyberSecurityProfessionalLMS",
        thirdCourseName: value,
      });
    }
  };

  //   Getting value from qualification field
  const handleQualification = (event) => {
    setFormData({
      ...formData,
      qualification: event.target.value,
      education: "",
    });
  };

  // Form validation
  const validate = () => {
    const errors = {};

    // Regular Expressions
    const charactersRegEx = /^[a-zA-Z. ]+$/;
    const cnicRegEx = /^[0-9]{13}$/;
    const numberRegEx = /^[+0-9]{13}$/;
    const overseasCNICRegEx = /^[0-9]{1,}$/;
    const overseasMobileNumberRegEx = /^[+0-9]{7,}$/;

    if (formData.fullName.trim() === "") {
      errors.fullName =
        "Enter your full name without special characters & don't left the field empty";
    } else if (!charactersRegEx.test(formData.fullName)) {
      errors.fullName = "Invalid Full Name";
    }

    if (formData.fatherName.trim() === "") {
      errors.fatherName = "Father name mustn't be empty";
    } else if (!charactersRegEx.test(formData.fatherName)) {
      errors.fatherName = "Invalid Full Name";
    }

    if (formData.applicant === "") {
      errors.applicant = "Applicant mustn't be empty";
    }

    if (formData.applicant !== "") {
      if (formData.applicant === "Local Pakistani") {
        if (formData.cnic.trim() === "") {
          errors.cnic = "CNIC / Form-B mustn't be empty";
        } else if (!cnicRegEx.test(formData.cnic)) {
          errors.cnic = "Invalid CNIC / Form-B or maximum 13 digits allowed";
        }

        if (formData.mobileNumber.trim() === "") {
          errors.mobileNumber = "Mobile Number mustn't be empty";
        } else if (!numberRegEx.test(formData.mobileNumber)) {
          errors.mobileNumber =
            "Invalid Mobile Number or Mobile Number must be maximum 10 digits";
        }
      } else if (formData.applicant === "Overseas") {
        if (formData.overseasCNIC.trim() === "") {
          errors.overseasCNIC = "CNIC / Form-B over mustn't be empty";
        } else if (!overseasCNICRegEx.test(formData.overseasCNIC)) {
          errors.overseasCNIC = "Invalid CNIC / Form-B";
        }

        if (formData.overseasMobileNumber.trim() === "") {
          errors.overseasMobileNumber = "Mobile Number mustn't be empty";
        } else if (
          !overseasMobileNumberRegEx.test(formData.overseasMobileNumber)
        ) {
          errors.overseasMobileNumber =
            "Invalid Mobile Number or Mobile number must be minimum 7 digits";
        }
      }
    }

    if (formData.dob.trim() === "") {
      errors.dob = "Date of Birth mustn't be empty";
    }

    if (formData.gender === "") {
      errors.gender = "Gender mustn't be empty";
    }

    if (formData.firstCourseTitle === "") {
      errors.firstCourseTitle = "First course mustn't be empty";
    }

    if (formData.firstCourseTitle !== "") {
      if (formData.firstCourseName === "") {
        errors.firstCourseName = "First course category mustn't be empty";
      }

      if (formData.firstCourseName === formData.secondCourseName) {
        errors.firstCourseName = "Course category  mustn't be same";
      } else if (formData.firstCourseName === formData.thirdCourseName) {
        errors.firstCourseTitle = "Course category mustn't be same";
      }

      if (formData.secondCourseName !== "") {
        if (formData.secondCourseName === formData.thirdCourseName) {
          errors.firstCourseTitle = "Course category mustn't be same";
        }
      }
    }

    if (formData.secondCourseTitle !== "") {
      if (formData.secondCourseName === "") {
        errors.secondCourseName = "Second course category mustn't be empty";
      }
    }

    if (formData.thirdCourseTitle !== "") {
      if (formData.thirdCourseName === "") {
        errors.thirdCourseName = "Third course category mustn't be empty";
      }
    }

    if (formData.qualification === "") {
      errors.qualification = "Qualification mustn't be empty";
    }

    if (formData.qualification !== "") {
      if (formData.qualification === "Other") {
        if (formData.education.trim() === "") {
          errors.education = "Education mustn't be empty";
        }
      }
    }

    if (formData.instituteName.trim() === "") {
      errors.instituteName = "Institute name mustn't be empty";
    }

    if (formData.province === "") {
      errors.province = "Province mustn't be empty";
    }

    if (formData.country.trim() === "") {
      errors.country = "Country mustn't be empty";
    }

    if (formData.city.trim() === "") {
      errors.city = "City mustn't be empty";
    }

    if (formData.address.trim() === "") {
      errors.address = "Address mustn't be empty";
    }

    if (formData.knowAboutUs.trim() === "") {
      errors.knowAboutUs = "This field mustn't be empty";
    }

    const marketerCode = referCode.filter(
      (codes) => codes["Refer Code"] === formData.referenceCode
    );

    if (formData.referenceCode.trim() !== "") {
      if (marketerCode.length === 0) {
        errors.marketerCode = "Wrong Reference Code";
      }
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Checking if he changing the value then update the state accordingly
    if (formData.applicant === "Overseas") {
      setFormData({
        ...formData,
        cnic: "",
        mobileNumber: "",
      });
    } else if (formData.applicant === "Local Pakistani") {
      setFormData({
        ...formData,
        overseasCNIC: "",
        overseasMobileNumber: "",
        countryCode: "",
      });
    }

    // Checking errors in input fields
    const errors = validate();
    setErrors(errors || {});
    if (errors) return;

    setBtnLoading(true);

    // Sending data to DB
    submitForm(formData, setBtnLoading, uid);
  };

  console.log(formData);

  return (
    <>
      <Container className="mt pt-4 application-form">
        <h1 className="text-center fw-light display-4">
          Digi<span className="fw-bold">PAKISTAN</span> Application Form
        </h1>
        <form onSubmit={handleSubmit} className="w-100">
          <PersonalInformation
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            setFormData={setFormData}
          />
          <AvailablePrograms
            formData={formData}
            handleChange={handleFirstCourseTitle}
            handleFirstCourseName={handleFirstCourseName}
            handleChangeSecond={handleSecondCourseTitle}
            handleSecondCourseName={handleSecondCourseName}
            handleChangeThird={handleThirdCourseTitle}
            handleThirdCourseName={handleThirdCourseName}
            errors={errors}
          />
          <Education
            formData={formData}
            handleChange={handleChange}
            handleQualification={handleQualification}
            errors={errors}
          />
          <Address
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
          <AdditionalFreeCourseVoucher
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />

          {Object.keys(errors).length > 0 && (
            <Alert severity="info" variant="filled" className="mt-3">
              Some fields are missing. Check it
            </Alert>
          )}

          <Button
            disabled={btnLoading}
            type="submit"
            variant="contained"
            className="custom-button my-3"
            fullWidth
          >
            {btnLoading && <CircularProgress className="loader" />}
            {btnLoading ? (
              <span className="ms-3">Sending Application...</span>
            ) : (
              "Send Application"
            )}
          </Button>
        </form>
      </Container>
      <Copyright />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
    emailVerified: state.firebase.auth.emailVerified,
    termsAndConditions: state.applicationForm.termsAndConditions,
    rollNumber: state.firebase.profile.rollNumber
      ? state.firebase.profile.rollNumber
      : "",
    emailAddress: state.firebase.auth.email,
    msg: state.applicationForm.msg,
    applicationSubmitted: state.firebase.profile.applicationSubmitted,
    referCode: state.firestore.ordered["Refer Code"]
      ? state.firestore.ordered["Refer Code"]
      : "",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: (formData, setBtnLoading, uid) =>
      dispatch(application(formData, setBtnLoading, uid)),
    clearAll: () => dispatch(clearAll()),
  };
};

export default compose(
  firestoreConnect([{ collection: "Refer Code" }]),
  connect(mapStateToProps, mapDispatchToProps)
)(ApplicationForm);

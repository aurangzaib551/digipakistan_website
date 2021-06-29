import React, { useLayoutEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import Loader from "../loader/loader";
import { Redirect, Link, useHistory } from "react-router-dom";
import { statusOfAdmission } from "../store/actions/ApplicationFormActions";
import {
  signOut,
  updateProfile,
  uploadImage,
  clearAll,
} from "../store/actions/AuthActions";
import { Helmet } from "react-helmet";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BookIcon from "@material-ui/icons/BookRounded";
import MenuIcon from "@material-ui/icons/MenuRounded";
import IconButton from "@material-ui/core/IconButton";
import DollarIcon from "@material-ui/icons/AttachMoney";
import UserIcon from "@material-ui/icons/PermIdentity";
import ExitIcon from "@material-ui/icons/ExitToApp";
import { useMediaQuery } from "react-responsive";
import BoySVG from "../assets/svgs/boy.svg";
import GirlSVG from "../assets/svgs/girl.svg";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Label from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Loading from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import InputInfo from "@material-ui/core/FormHelperText";
import ProgressBar from "@material-ui/core/LinearProgress";

const UpdateProfile = ({
  status,
  profile,
  uid,
  emailVerified,
  applicationSubmitted,
  goingToApproveTheApplication,
  signOut,
  updateProfile,
  profileUpdated,
  uploadImage,
  clearAll,
}) => {
  // ? State
  const [openDrawer, setOpenDrawer] = useState(true);
  const [count, setCount] = useState(1);
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openSnacbar, setOpenSnacbar] = useState(false);
  const [image, setImage] = useState({});
  const [progressBarEnable, setProgressBarEnable] = useState(false);
  const [progress, setProgress] = useState(null);
  const [formData, setFormData] = useState({
    name: profile.fullName,
    fatherName: profile.fatherName,
    firstCourseTitle:
      profile.fullName && profile.course[0]
        ? profile.course[0]["First Course Title"]
        : "",
    firstCourseName:
      profile.fullName && profile.course[0]
        ? profile.course[0]["First Course Name"].name
        : "",
    firstCourseLink:
      profile.fullName && profile.course[0]
        ? profile.course[0]["First Course Name"].link
        : "",
    firstCourseStatus:
      profile.fullName && profile.course[0]
        ? profile.course[0]["First Course Name"].status
        : false,
    secondCourseTitle:
      profile.fullName && profile.course[1]
        ? profile.course[1]["Second Course Title"]
        : "",
    secondCourseName:
      profile.fullName && profile.course[1]
        ? profile.course[1]["Second Course Name"].name
        : "",
    secondCourseLink:
      profile.fullName && profile.course[1]
        ? profile.course[1]["Second Course Name"].link
        : "",
    secondCourseStatus:
      profile.fullName && profile.course[1]
        ? profile.course[1]["Second Course Name"].status
        : false,
    thirdCourseTitle:
      profile.fullName && profile.course[2]
        ? profile.course[2]["Third Course Title"]
        : "",
    thirdCourseName:
      profile.fullName && profile.course[2]
        ? profile.course[2]["Third Course Name"].name
        : "",
    thirdCourseLink:
      profile.fullName && profile.course[2]
        ? profile.course[2]["Third Course Name"].link
        : "",
    thirdCourseStatus:
      profile.fullName && profile.course[2]
        ? profile.course[2]["Third Course Name"].status
        : false,
  });

  // ? Object Destructuring
  const { push } = useHistory();

  // ? Refs
  const imageRef = useRef();

  // ? Getting Date
  const date = new Date();

  const getDays = date.getDay();

  const daysArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const days = daysArray[getDays];

  const todayDate = date.getDate();

  const year = date.getFullYear();

  const getMonth = date.getMonth();

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = monthNames[getMonth];

  useLayoutEffect(() => {
    if (profile.admissionStatus === false) {
      if (`${days}, ${month} ${todayDate}, ${year}` !== profile.approvalDate) {
        // Setting status is approved when next day is come
        goingToApproveTheApplication(uid);
      }
    }
  }, [
    month,
    profile.admissionStatus,
    profile.approvalDate,
    todayDate,
    uid,
    year,
    days,
    goingToApproveTheApplication,
  ]);

  // ? Media Query
  const isTab = useMediaQuery({
    query: "(max-width: 768px)",
  });

  // ! User is logged in or not
  if (!uid) return <Redirect to="/apply-now/login" />;
  // ! Checking email is verified or not
  if (!emailVerified) return <Redirect to="/apply-now/emailVerification" />;
  // ! Checking application is submitted or not
  if (!applicationSubmitted)
    return <Redirect to="/apply-now/applicationForm" />;

  // ? Drawer closing function
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  // ? toggling the drawer
  const toggleDrawer = () => {
    setTimeout(() => {
      setOpenDrawer(!openDrawer);
    }, 300);
  };

  // ? Closing the nav when screen is tab
  if (isTab) {
    if (count === 1) {
      setOpenDrawer(false);
      setCount(2);
    }
    // toggleDrawer();
  }

  // ? Openning the nav when screen is not tab
  if (isTab === false) {
    if (count === 2) {
      setOpenDrawer(true);
      setCount(1);
    }
  }

  // ! Drawer Width
  const drawerWidth = 300;

  // ? Handling other input fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ? Handling first course
  const handleFirstCourseTitle = (event) => {
    setFormData({
      ...formData,
      firstCourseTitle: event.target.value,
      firstCourseName: "",
      firstCourseLink: "",
    });
  };

  // ? Getting value from first course name
  const handleFirstCourseName = ({ target }) => {
    const { value } = target;

    if (value === "Microsoft Front End Development") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/frontEndLMS",
        firstCourseName: value,
      });
    } else if (value === "Data Science") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/dataScienceLMS",
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

  // ? Getting value from second course title
  const handleSecondCourseTitle = (event) => {
    setFormData({
      ...formData,
      secondCourseTitle: event.target.value,
      secondCourseName: "",
      secondCourseLink: "",
      thirdCourseTitle: "",
      thirdCourseLink: "",
      thirdCourseName: "",
    });
  };

  // ?  Getting value from second course name
  const handleSecondCourseName = ({ target }) => {
    const { value } = target;

    if (value === "Microsoft Front End Development") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/frontEndLMS",
        secondCourseName: value,
      });
    } else if (value === "Data Science") {
      setFormData({
        ...formData,
        secondCourseLink: "/lmsDashboard/myCourses/dataScienceLMS",
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

  //  ? Getting value from third course title
  const handleThirdCourseTitle = (event) => {
    setFormData({
      ...formData,
      thirdCourseTitle: event.target.value,
      thirdCourseName: "",
      thirdCourseLink: "",
    });
  };

  // ?  Getting value from third course name
  const handleThirdCourseName = ({ target }) => {
    const { value } = target;

    if (value === "Microsoft Front End Development") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/frontEndLMS",
        thirdCourseName: value,
      });
    } else if (value === "Data Science") {
      setFormData({
        ...formData,
        thirdCourseLink: "/lmsDashboard/myCourses/dataScienceLMS",
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

  // ? Handling Image
  const handleImage = (e) => {
    setImage(e.target.files[0]);
    setLoading(true);
    setProgressBarEnable(true);

    // ? Image is uploading on server
    uploadImage(
      uid,
      formData.name,
      e.target.files[0],
      setProgress,
      setLoading,
      setProgressBarEnable,
      profile.dob,
      setEdit
    );
  };

  // ? Saving profile function
  const handleSaveProfile = () => {
    const course = [];

    if (formData.firstCourseTitle) {
      course.push({
        "First Course Title": formData.firstCourseTitle,
        "First Course Name": {
          name: formData.firstCourseName,
          status: formData.firstCourseStatus,
          link: formData.firstCourseLink,
        },
      });
    }

    if (formData.secondCourseTitle) {
      course.push({
        "Second Course Title": formData.secondCourseTitle,
        "Second Course Name": {
          name: formData.secondCourseName,
          status: formData.secondCourseStatus,
          link: formData.secondCourseLink,
        },
      });
    }

    if (formData.thirdCourseTitle) {
      course.push({
        "Third Course Title": formData.thirdCourseTitle,
        "Third Course Name": {
          name: formData.thirdCourseName,
          status: formData.thirdCourseStatus,
          link: formData.thirdCourseLink,
        },
      });
    }

    const data = {
      fullName: formData.name,
      fatherName: formData.fatherName,
      course,
    };

    setLoading(true);

    updateProfile(uid, data, setLoading, setEdit, setOpenSnacbar);

    setTimeout(() => {
      clearAll();
    }, 6001);
  };

  return profile.fullName ? (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <div className="mt dashboard">
        {/* // ? Navbar Dashboard */}
        <div
          className="position-relative"
          style={{ width: openDrawer ? 300 : 25, transition: "all .2s" }}
        >
          <div className="nav-btn" style={{ right: openDrawer ? -25 : 0 }}>
            <IconButton
              className="outline border border bg-white"
              style={{ zIndex: 1300 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <Drawer
            anchor="left"
            open={openDrawer}
            variant="persistent"
            onClose={handleDrawerClose}
          >
            <List
              style={{
                width: drawerWidth,
                backgroundColor: "#01645f",
                height: "100%",
                color: "#fff",
                marginTop: 90,
              }}
            >
              <img
                src={"https://i.ibb.co/Sd0qZ7X/dplmslogo.png"}
                alt="DigiPAKISTAN"
                width="88%"
                className="mt-2 ms-2"
              />

              <div className="profile-dash d-flex align-items-center mt-3">
                {image.name || profile.image ? (
                  <img
                    src={
                      profile.image ? profile.image : URL.createObjectURL(image)
                    }
                    alt="DigiPAKISTAN Dashboard Profile Pic"
                    className="profile-pic mx-3 rounded"
                  />
                ) : (
                  <img
                    src={profile.gender === "Male" ? BoySVG : GirlSVG}
                    alt="DigiPAKISTAN Dashboard Profile Pic"
                    className="profile-pic me-1"
                  />
                )}

                <div>
                  <h5 className="fw-bold me-3">{profile.fullName}</h5>
                  <Link to="/dashboard/updateProfile" className="small">
                    Update Profile
                  </Link>
                </div>
              </div>

              <div className="mt-3">
                <h6 className="fw-bold text-center">MAIN</h6>
                <ListItem
                  button
                  onClick={() => {
                    setTimeout(() => {
                      push("/dashboard");
                    }, 300);
                  }}
                >
                  <ListItemIcon>
                    <BookIcon style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText primary="Course" />
                </ListItem>

                <ListItem button>
                  <ListItemIcon>
                    <i className="fas fa-cogs text-white"></i>
                  </ListItemIcon>
                  <ListItemText primary="How It Works" />
                </ListItem>

                <ListItem
                  button
                  onClick={() => {
                    setTimeout(() => {
                      push("/dashboard/referAndEarn");
                    }, 300);
                  }}
                >
                  <ListItemIcon>
                    <DollarIcon style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText primary="Refer &amp; Earn" />
                </ListItem>

                <h6 className="fw-bold text-center mt-2">PERSONAL</h6>
                <ListItem
                  button
                  onClick={() => {
                    setTimeout(() => {
                      push("/dashboard/updateProfile");
                    }, 300);
                  }}
                >
                  <ListItemIcon>
                    <UserIcon style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText primary="Update Profile" />
                </ListItem>

                <ListItem button onClick={() => signOut(push)}>
                  <ListItemIcon>
                    <ExitIcon style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText primary="Log Out" />
                </ListItem>
              </div>
            </List>
          </Drawer>
        </div>

        {/* // ? Content Right Side */}
        <div
          className="px-5"
          style={{
            marginLeft: isTab ? 0 : 300,
            paddingTop: 35,
          }}
        >
          <h6 className="mb-5 fw-bold">{profile.fullName} / Update Profile</h6>
          <h3 className="fw-bold mb-5">Update Profile</h3>

          {/* // ? Image Section */}
          <div className="d-flex flex-column align-items-center">
            {image.name || profile.image ? (
              <img
                src={profile.image ? profile.image : URL.createObjectURL(image)}
                alt="DigiPAKISTAN User Avatar"
                width="200"
                height="200"
                className="rounded"
              />
            ) : (
              <img
                src={profile.gender === "Male" ? BoySVG : GirlSVG}
                alt="DigiPAKISTAN User Avatar"
                width="200"
                height="200"
              />
            )}

            {edit && progressBarEnable && (
              <>
                <div className="d-flex align-items-center">
                  <h6 className="fw-bold mt-4 me-3">{progress}%</h6>
                  <Loading
                    style={{
                      height: 30,
                      width: 30,
                      color: "#02a39b",
                    }}
                  />
                </div>
                <ProgressBar
                  value={progress}
                  className="w-75 mb-3"
                  variant="determinate"
                />
              </>
            )}

            {/* // ? Image input field & not showing in front end */}
            <input
              type="file"
              ref={imageRef}
              className="d-none"
              onChange={handleImage}
              accept="image/*"
            />

            {/* // ? Btn is doing work for image upload */}
            {edit && (
              <Button
                variant="contained"
                className="custom-button mt-3"
                onClick={() => imageRef.current.click()}
                disabled={loading}
              >
                Upload Image
              </Button>
            )}
          </div>

          {/* // ? Other fields section */}
          <div className="container mb-5">
            <h5 className="mb-0 fw-bold mt-2">
              <span className="title">Roll #:</span>
              <span className="fw-normal">{profile.rollNumber}</span>
            </h5>

            {edit ? (
              <Input
                name="name"
                fullWidth
                value={formData.name}
                onChange={handleChange}
                label="Full Name"
                className="mt-2"
              />
            ) : (
              <h5 className="mb-0 fw-bold mt-2">
                <span className="title">Name:</span>
                <span className="fw-normal">{formData.name}</span>
              </h5>
            )}

            {edit ? (
              <Input
                name="fatherName"
                fullWidth
                value={formData.fatherName}
                onChange={handleChange}
                label="Father Name"
                className="mt-2"
              />
            ) : (
              <h5 className="mb-0 fw-bold mt-2">
                <span className="title">Father Name:</span>
                <span className="fw-normal">{formData.fatherName}</span>
              </h5>
            )}

            <h5 className="mb-0 fw-bold mt-2">
              <span className="title">Gender:</span>
              <span className="fw-normal">{profile.gender}</span>
            </h5>

            <h5 className="mb-0 fw-bold mt-2">
              <span className="title">CNIC:</span>
              <span className="fw-normal">{profile.cnic}</span>
            </h5>

            <h5 className="mb-0 fw-bold mt-2">
              <span className="title">D.O.B:</span>
              <span className="fw-normal">{profile.dob}</span>
            </h5>

            <h5 className="mb-0 fw-bold mt-2">
              <span className="title">Mobile #:</span>
              <span className="fw-normal">{profile.mobileNumber}</span>
            </h5>

            <h5 className="mb-0 fw-bold mt-2 word-break">
              <span className="title">E-Mail:</span>
              <span className="fw-normal">{profile.emailAddress}</span>
            </h5>

            <h5 className="mb-0 fw-bold mt-2">
              <span className="title">Qualification:</span>
              <span className="fw-normal">{profile.qualification}</span>
            </h5>

            <h5 className="mb-0 fw-bold mt-2">
              <span className="title">Education:</span>
              <span className="fw-normal">{profile.education}</span>
            </h5>

            <h5 className="mb-0 fw-bold mt-2">
              <span className="title">Institute Name:</span>
              <span className="fw-normal">{profile.institute}</span>
            </h5>

            {edit ? (
              <FormControl fullWidth variant="standard" className="mt-3">
                <Label htmlFor="firstCourse">First Course *</Label>
                <Select
                  id="firstCourse"
                  name="firstCourseTitle"
                  value={formData.firstCourseTitle}
                  onChange={handleFirstCourseTitle}
                >
                  <MenuItem value="Fast Track Technical Program">
                    Fast Track Technical Program
                  </MenuItem>
                  <MenuItem value="Fast Track Non-Technical Program">
                    Fast Track Non-Technical Program
                  </MenuItem>
                  <MenuItem value="Associate Certification Program">
                    Associate Certification Program
                  </MenuItem>
                </Select>
              </FormControl>
            ) : (
              <h5 className="mb-0 fw-bold mt-2">
                <span className="title">First Course:</span>
                <span className="fw-normal">{formData.firstCourseTitle}</span>
              </h5>
            )}

            {edit ? (
              <>
                {formData.firstCourseTitle ===
                  "Fast Track Technical Program" && (
                  <FormControl fullWidth className="mt-3" variant="standard">
                    <Label id="firstCourseCategory">
                      First Course Category
                    </Label>
                    <Select
                      value={formData.firstCourseName}
                      id="firstCourseCategory"
                      name="firstCourseName"
                      onChange={handleFirstCourseName}
                    >
                      <MenuItem value="CompTIA It Fundamentals">
                        CompTIA It Fundamentals
                      </MenuItem>
                      <MenuItem value="Microsoft Front End Development">
                        Microsoft Front End Development
                      </MenuItem>
                      <MenuItem value="ASP.NET Web Applications">
                        ASP.NET Web Applications
                      </MenuItem>
                      <MenuItem value="PHP Laravel">PHP Laravel</MenuItem>
                      <MenuItem value="MERN Stack">MERN Stack</MenuItem>
                      <MenuItem value="SQL Server Specialist">
                        SQL Server Specialist
                      </MenuItem>
                      <MenuItem value="Oracle Database Administrator (OCP : 12C DBA)">
                        Oracle Database Administrator (OCP : 12C DBA)
                      </MenuItem>
                      <MenuItem value="Android Apps Development">
                        Android Apps Development
                      </MenuItem>
                      <MenuItem value="Kotlin Mobile Apps Development">
                        Kotlin Mobile Apps Development
                      </MenuItem>
                      <MenuItem value="IOS Apps Development">
                        IOS Apps Development
                      </MenuItem>
                      <MenuItem value="Xamarin Mobile Apps Development">
                        Xamarin Mobile Apps Development
                      </MenuItem>
                      <MenuItem value="React Native Web &amp; Apps Development">
                        React Native Web &amp; Apps Development
                      </MenuItem>
                      <MenuItem value="Game Development">
                        Game Development
                      </MenuItem>
                      <MenuItem value="Cisco CCNA Networking">
                        Cisco CCNA Networking
                      </MenuItem>
                      <MenuItem value="CompTIA Security + (SYO - 601)">
                        CompTIA Security + (SYO - 601)
                      </MenuItem>
                      <MenuItem value="Certified Ethical Hacking">
                        Certified Ethical Hacking
                      </MenuItem>
                      <MenuItem value="Certified Hacking Forensic Investigator">
                        Certified Hacking Forensic Investigator
                      </MenuItem>
                      <MenuItem value="Penetration Testing Security Analyst">
                        Penetration Testing Security Analyst
                      </MenuItem>
                      <MenuItem value="Certified Information System Auditor">
                        Certified Information System Auditor
                      </MenuItem>
                      <MenuItem value="Certified Information Security Manager">
                        Certified Information Security Manager
                      </MenuItem>
                      <MenuItem value="AWS Practitioner">
                        AWS Practitioner
                      </MenuItem>
                      <MenuItem value="AWS Solution Architect">
                        AWS Solution Architect
                      </MenuItem>
                      <MenuItem value="AWS SysOps Administrator">
                        AWS SysOps Administrator
                      </MenuItem>
                      <MenuItem value="AWS Developer Associate">
                        AWS Developer Associate
                      </MenuItem>
                      <MenuItem value="Microsoft Azure Cloud Fundamentals">
                        Microsoft Azure Cloud Fundamentals
                      </MenuItem>
                      <MenuItem value="Microsoft Cloud Administrator 103 - 104">
                        Microsoft Cloud Administrator 103 - 104
                      </MenuItem>
                      <MenuItem value="Google Cloud Engineer">
                        Google Cloud Engineer
                      </MenuItem>
                      <MenuItem value="Python For Everyone">
                        Python for Everyone
                      </MenuItem>
                      <MenuItem value="Machine Learning &amp; AI">
                        Machine Learning &amp; AI
                      </MenuItem>
                      <MenuItem value="Data Science">Data Science</MenuItem>
                      <MenuItem value="Big Data &amp; Headoop Ecosystem">
                        Big Data &amp; Headoop Ecosystem
                      </MenuItem>
                    </Select>
                  </FormControl>
                )}

                {formData.firstCourseTitle ===
                  "Fast Track Non-Technical Program" && (
                  <FormControl fullWidth className="mt-3" variant="standard">
                    <Label id="firstCourseCategory">
                      First Course Category
                    </Label>
                    <Select
                      id="firstCourseCategory"
                      name="firstCourseName"
                      value={formData.firstCourseName}
                      onChange={handleFirstCourseName}
                    >
                      <MenuItem value="QuickBooks ERP">QuickBooks ERP</MenuItem>
                      <MenuItem value="SAP ERP">SAP ERP</MenuItem>
                      <MenuItem value="Project Management Professional (PMP)">
                        Project Management Professional (PMP)
                      </MenuItem>
                      <MenuItem value="Amazon FBA Business">
                        Amazon FBA Business
                      </MenuItem>
                      <MenuItem value="Search Engine Optimization (SEO)">
                        Search Engine Optimization (SEO)
                      </MenuItem>
                      <MenuItem value="Digital Marketing">
                        Digital Marketing
                      </MenuItem>
                      <MenuItem value="Social Media Marketing">
                        Social Media Marketing
                      </MenuItem>
                      <MenuItem value="Graphics Design">
                        Graphic Design
                      </MenuItem>
                      <MenuItem value="UI / UX Design">UI / UX Design</MenuItem>
                      <MenuItem value="Interior Design">
                        Interior Design
                      </MenuItem>
                      <MenuItem value="3D Maya Max Animation">
                        3D Maya Max Animation
                      </MenuItem>
                      <MenuItem value="Video Editing">Video Editing</MenuItem>
                      <MenuItem value="AutoCad">AutoCad</MenuItem>
                      <MenuItem value="Microsoft Office 365">
                        Microsoft Office 365
                      </MenuItem>
                      <MenuItem value="Enterpreneurship">
                        Enterpreneurship
                      </MenuItem>
                    </Select>
                  </FormControl>
                )}

                {formData.firstCourseTitle ===
                  "Associate Certification Program" && (
                  <FormControl fullWidth className="mt-3" variant="standard">
                    <Label htmlFor="firstCourseCategory">
                      First Course Category
                    </Label>
                    <Select
                      id="firstCourseCategory"
                      name="firstCourseName"
                      value={formData.firstCourseName}
                      onChange={handleFirstCourseName}
                    >
                      <MenuItem value="Digital Forensic Cyber Security">
                        Digital Forensic Cyber Security
                      </MenuItem>
                      <MenuItem value="Penetration Testing Cyber Security">
                        Penetration Testing Cyber Security
                      </MenuItem>
                      <MenuItem value="CISSP Cyber Security Professional">
                        CISSP Cyber Security Professional
                      </MenuItem>
                      <MenuItem value="Artificial Intelligence">
                        Artificial Intelligence
                      </MenuItem>
                      <MenuItem value="AWS Cloud Computing">
                        AWS Cloud Computing
                      </MenuItem>
                      <MenuItem value="Internet of Things (IoT)">
                        Internet of Things (IoT)
                      </MenuItem>
                      <MenuItem value="BlockChain Technology">
                        BlockChain Technology
                      </MenuItem>
                      <MenuItem value="Full Stack Web Development">
                        Full Stack Web Development (MCSA)
                      </MenuItem>
                    </Select>
                  </FormControl>
                )}
              </>
            ) : (
              <h5 className="mb-0 fw-bold mt-2">
                <span className="title">First Course Category:</span>
                <span className="fw-normal">{formData.firstCourseName}</span>
              </h5>
            )}

            {edit ? (
              <FormControl fullWidth variant="standard" className="mt-3">
                <Label htmlFor="secondCourse">Second Course (Optional)</Label>
                <Select
                  id="secondCourse"
                  name="secondCourseTitle"
                  value={formData.secondCourseTitle}
                  onChange={handleSecondCourseTitle}
                >
                  <MenuItem value="">Select</MenuItem>
                  <MenuItem value="Fast Track Technical Program">
                    Fast Track Technical Program
                  </MenuItem>
                  <MenuItem value="Fast Track Non-Technical Program">
                    Fast Track Non-Technical Program
                  </MenuItem>
                  <MenuItem value="Associate Certification Program">
                    Associate Certification Program
                  </MenuItem>
                </Select>
                {formData.secondCourseName ? (
                  ""
                ) : (
                  <InputInfo error>
                    First select the second course then you will be eligibe for
                    the selection of third course
                  </InputInfo>
                )}
              </FormControl>
            ) : (
              <>
                {formData.secondCourseTitle && (
                  <h5 className="mb-0 fw-bold mt-2">
                    <span className="title">Second Course:</span>
                    <span className="fw-normal">
                      {formData.secondCourseTitle}
                    </span>
                  </h5>
                )}
              </>
            )}

            {edit ? (
              <>
                {formData.secondCourseTitle ===
                  "Fast Track Technical Program" && (
                  <FormControl fullWidth className="mt-3" variant="standard">
                    <Label id="secondCourseCategory">
                      Second Course Category
                    </Label>
                    <Select
                      value={formData.secondCourseName}
                      id="secondCourseCategory"
                      name="secondCourseName"
                      onChange={handleSecondCourseName}
                    >
                      <MenuItem value="CompTIA It Fundamentals">
                        CompTIA It Fundamentals
                      </MenuItem>
                      <MenuItem value="Microsoft Front End Development">
                        Microsoft Front End Development
                      </MenuItem>
                      <MenuItem value="ASP.NET Web Applications">
                        ASP.NET Web Applications
                      </MenuItem>
                      <MenuItem value="PHP Laravel">PHP Laravel</MenuItem>
                      <MenuItem value="MERN Stack">MERN Stack</MenuItem>
                      <MenuItem value="SQL Server Specialist">
                        SQL Server Specialist
                      </MenuItem>
                      <MenuItem value="Oracle Database Administrator (OCP : 12C DBA)">
                        Oracle Database Administrator (OCP : 12C DBA)
                      </MenuItem>
                      <MenuItem value="Android Apps Development">
                        Android Apps Development
                      </MenuItem>
                      <MenuItem value="Kotlin Mobile Apps Development">
                        Kotlin Mobile Apps Development
                      </MenuItem>
                      <MenuItem value="IOS Apps Development">
                        IOS Apps Development
                      </MenuItem>
                      <MenuItem value="Xamarin Mobile Apps Development">
                        Xamarin Mobile Apps Development
                      </MenuItem>
                      <MenuItem value="React Native Web &amp; Apps Development">
                        React Native Web &amp; Apps Development
                      </MenuItem>
                      <MenuItem value="Game Development">
                        Game Development
                      </MenuItem>
                      <MenuItem value="Cisco CCNA Networking">
                        Cisco CCNA Networking
                      </MenuItem>
                      <MenuItem value="CompTIA Security + (SYO - 601)">
                        CompTIA Security + (SYO - 601)
                      </MenuItem>
                      <MenuItem value="Certified Ethical Hacking">
                        Certified Ethical Hacking
                      </MenuItem>
                      <MenuItem value="Certified Hacking Forensic Investigator">
                        Certified Hacking Forensic Investigator
                      </MenuItem>
                      <MenuItem value="Penetration Testing Security Analyst">
                        Penetration Testing Security Analyst
                      </MenuItem>
                      <MenuItem value="Certified Information System Auditor">
                        Certified Information System Auditor
                      </MenuItem>
                      <MenuItem value="Certified Information Security Manager">
                        Certified Information Security Manager
                      </MenuItem>
                      <MenuItem value="AWS Practitioner">
                        AWS Practitioner
                      </MenuItem>
                      <MenuItem value="AWS Solution Architect">
                        AWS Solution Architect
                      </MenuItem>
                      <MenuItem value="AWS SysOps Administrator">
                        AWS SysOps Administrator
                      </MenuItem>
                      <MenuItem value="AWS Developer Associate">
                        AWS Developer Associate
                      </MenuItem>
                      <MenuItem value="Microsoft Azure Cloud Fundamentals">
                        Microsoft Azure Cloud Fundamentals
                      </MenuItem>
                      <MenuItem value="Microsoft Cloud Administrator 103 - 104">
                        Microsoft Cloud Administrator 103 - 104
                      </MenuItem>
                      <MenuItem value="Google Cloud Engineer">
                        Google Cloud Engineer
                      </MenuItem>
                      <MenuItem value="Python For Everyone">
                        Python for Everyone
                      </MenuItem>
                      <MenuItem value="Machine Learning &amp; AI">
                        Machine Learning &amp; AI
                      </MenuItem>
                      <MenuItem value="Data Science">Data Science</MenuItem>
                      <MenuItem value="Big Data &amp; Headoop Ecosystem">
                        Big Data &amp; Headoop Ecosystem
                      </MenuItem>
                    </Select>
                  </FormControl>
                )}

                {formData.secondCourseTitle ===
                  "Fast Track Non-Technical Program" && (
                  <FormControl fullWidth className="mt-3" variant="standard">
                    <Label id="secondCourseCategory">
                      Second Course Category
                    </Label>
                    <Select
                      value={formData.secondCourseName}
                      id="secondCourseCategory"
                      name="secondCourseName"
                      onChange={handleSecondCourseName}
                    >
                      <MenuItem value="QuickBooks ERP">QuickBooks ERP</MenuItem>
                      <MenuItem value="SAP ERP">SAP ERP</MenuItem>
                      <MenuItem value="Project Management Professional (PMP)">
                        Project Management Professional (PMP)
                      </MenuItem>
                      <MenuItem value="Amazon FBA Business">
                        Amazon FBA Business
                      </MenuItem>
                      <MenuItem value="Search Engine Optimization (SEO)">
                        Search Engine Optimization (SEO)
                      </MenuItem>
                      <MenuItem value="Digital Marketing">
                        Digital Marketing
                      </MenuItem>
                      <MenuItem value="Social Media Marketing">
                        Social Media Marketing
                      </MenuItem>
                      <MenuItem value="Graphics Design">
                        Graphic Design
                      </MenuItem>
                      <MenuItem value="UI / UX Design">UI / UX Design</MenuItem>
                      <MenuItem value="Interior Design">
                        Interior Design
                      </MenuItem>
                      <MenuItem value="3D Maya Max Animation">
                        3D Maya Max Animation
                      </MenuItem>
                      <MenuItem value="Video Editing">Video Editing</MenuItem>
                      <MenuItem value="AutoCad">AutoCad</MenuItem>
                      <MenuItem value="Microsoft Office 365">
                        Microsoft Office 365
                      </MenuItem>
                      <MenuItem value="Enterpreneurship">
                        Enterpreneurship
                      </MenuItem>
                    </Select>
                  </FormControl>
                )}

                {formData.secondCourseTitle ===
                  "Associate Certification Program" && (
                  <FormControl fullWidth className="mt-3" variant="standard">
                    <Label id="secondCourseCategory">
                      Second Course Category
                    </Label>
                    <Select
                      value={formData.secondCourseName}
                      id="secondCourseCategory"
                      name="secondCourseName"
                      onChange={handleSecondCourseName}
                    >
                      <MenuItem value="Digital Forensic Cyber Security">
                        Digital Forensic Cyber Security
                      </MenuItem>
                      <MenuItem value="Penetration Testing Cyber Security">
                        Penetration Testing Cyber Security
                      </MenuItem>
                      <MenuItem value="CISSP Cyber Security Professional">
                        CISSP Cyber Security Professional
                      </MenuItem>
                      <MenuItem value="Artificial Intelligence">
                        Artificial Intelligence
                      </MenuItem>
                      <MenuItem value="AWS Cloud Computing">
                        AWS Cloud Computing
                      </MenuItem>
                      <MenuItem value="Internet of Things (IoT)">
                        Internet of Things (IoT)
                      </MenuItem>
                      <MenuItem value="BlockChain Technology">
                        BlockChain Technology
                      </MenuItem>
                      <MenuItem value="Full Stack Web Development">
                        Full Stack Web Development (MCSA)
                      </MenuItem>
                    </Select>
                  </FormControl>
                )}
              </>
            ) : (
              <>
                {formData.secondCourseTitle && (
                  <h5 className="mb-0 fw-bold mt-2">
                    <span className="title">Second Course Category:</span>
                    <span className="fw-normal">
                      {formData.secondCourseName}
                    </span>
                  </h5>
                )}
              </>
            )}

            {edit && formData.secondCourseName ? (
              <FormControl fullWidth variant="standard" className="mt-3">
                <Label htmlFor="thirdCourse">Third Course (Optional)</Label>
                <Select
                  id="thirdCourse"
                  name="thirdCourseTitle"
                  value={formData.thirdCourseTitle}
                  onChange={handleThirdCourseTitle}
                >
                  <MenuItem value="">Select</MenuItem>
                  <MenuItem value="Fast Track Technical Program">
                    Fast Track Technical Program
                  </MenuItem>
                  <MenuItem value="Fast Track Non-Technical Program">
                    Fast Track Non-Technical Program
                  </MenuItem>
                  <MenuItem value="Associate Certification Program">
                    Associate Certification Program
                  </MenuItem>
                </Select>
              </FormControl>
            ) : (
              <>
                {formData.thirdCourseTitle && (
                  <h5 className="mb-0 fw-bold mt-2">
                    <span className="title">Third Course:</span>
                    <span className="fw-normal">
                      {formData.thirdCourseTitle}
                    </span>
                  </h5>
                )}
              </>
            )}

            {edit && formData.secondCourseName ? (
              <>
                {formData.thirdCourseTitle ===
                  "Fast Track Technical Program" && (
                  <FormControl fullWidth className="mt-3" variant="standard">
                    <Label id="thirdCourseCategory">
                      Third Course Category
                    </Label>
                    <Select
                      value={formData.thirdCourseName}
                      id="thirdCourseCategory"
                      name="thirdCourseName"
                      onChange={handleThirdCourseName}
                    >
                      <MenuItem value="CompTIA It Fundamentals">
                        CompTIA It Fundamentals
                      </MenuItem>
                      <MenuItem value="Microsoft Front End Development">
                        Microsoft Front End Development
                      </MenuItem>
                      <MenuItem value="ASP.NET Web Applications">
                        ASP.NET Web Applications
                      </MenuItem>
                      <MenuItem value="PHP Laravel">PHP Laravel</MenuItem>
                      <MenuItem value="MERN Stack">MERN Stack</MenuItem>
                      <MenuItem value="SQL Server Specialist">
                        SQL Server Specialist
                      </MenuItem>
                      <MenuItem value="Oracle Database Administrator (OCP : 12C DBA)">
                        Oracle Database Administrator (OCP : 12C DBA)
                      </MenuItem>
                      <MenuItem value="Android Apps Development">
                        Android Apps Development
                      </MenuItem>
                      <MenuItem value="Kotlin Mobile Apps Development">
                        Kotlin Mobile Apps Development
                      </MenuItem>
                      <MenuItem value="IOS Apps Development">
                        IOS Apps Development
                      </MenuItem>
                      <MenuItem value="Xamarin Mobile Apps Development">
                        Xamarin Mobile Apps Development
                      </MenuItem>
                      <MenuItem value="React Native Web &amp; Apps Development">
                        React Native Web &amp; Apps Development
                      </MenuItem>
                      <MenuItem value="Game Development">
                        Game Development
                      </MenuItem>
                      <MenuItem value="Cisco CCNA Networking">
                        Cisco CCNA Networking
                      </MenuItem>
                      <MenuItem value="CompTIA Security + (SYO - 601)">
                        CompTIA Security + (SYO - 601)
                      </MenuItem>
                      <MenuItem value="Certified Ethical Hacking">
                        Certified Ethical Hacking
                      </MenuItem>
                      <MenuItem value="Certified Hacking Forensic Investigator">
                        Certified Hacking Forensic Investigator
                      </MenuItem>
                      <MenuItem value="Penetration Testing Security Analyst">
                        Penetration Testing Security Analyst
                      </MenuItem>
                      <MenuItem value="Certified Information System Auditor">
                        Certified Information System Auditor
                      </MenuItem>
                      <MenuItem value="Certified Information Security Manager">
                        Certified Information Security Manager
                      </MenuItem>
                      <MenuItem value="AWS Practitioner">
                        AWS Practitioner
                      </MenuItem>
                      <MenuItem value="AWS Solution Architect">
                        AWS Solution Architect
                      </MenuItem>
                      <MenuItem value="AWS SysOps Administrator">
                        AWS SysOps Administrator
                      </MenuItem>
                      <MenuItem value="AWS Developer Associate">
                        AWS Developer Associate
                      </MenuItem>
                      <MenuItem value="Microsoft Azure Cloud Fundamentals">
                        Microsoft Azure Cloud Fundamentals
                      </MenuItem>
                      <MenuItem value="Microsoft Cloud Administrator 103 - 104">
                        Microsoft Cloud Administrator 103 - 104
                      </MenuItem>
                      <MenuItem value="Google Cloud Engineer">
                        Google Cloud Engineer
                      </MenuItem>
                      <MenuItem value="Python For Everyone">
                        Python for Everyone
                      </MenuItem>
                      <MenuItem value="Machine Learning &amp; AI">
                        Machine Learning &amp; AI
                      </MenuItem>
                      <MenuItem value="Data Science">Data Science</MenuItem>
                      <MenuItem value="Big Data &amp; Headoop Ecosystem">
                        Big Data &amp; Headoop Ecosystem
                      </MenuItem>
                    </Select>
                  </FormControl>
                )}

                {formData.thirdCourseTitle ===
                  "Fast Track Non-Technical Program" && (
                  <FormControl fullWidth className="mt-3" variant="standard">
                    <Label id="thirdCourseCategory">
                      Third Course Category
                    </Label>
                    <Select
                      value={formData.thirdCourseName}
                      id="thirdCourseCategory"
                      name="thirdCourseName"
                      onChange={handleThirdCourseName}
                    >
                      <MenuItem value="QuickBooks ERP">QuickBooks ERP</MenuItem>
                      <MenuItem value="SAP ERP">SAP ERP</MenuItem>
                      <MenuItem value="Project Management Professional (PMP)">
                        Project Management Professional (PMP)
                      </MenuItem>
                      <MenuItem value="Amazon FBA Business">
                        Amazon FBA Business
                      </MenuItem>
                      <MenuItem value="Search Engine Optimization (SEO)">
                        Search Engine Optimization (SEO)
                      </MenuItem>
                      <MenuItem value="Digital Marketing">
                        Digital Marketing
                      </MenuItem>
                      <MenuItem value="Social Media Marketing">
                        Social Media Marketing
                      </MenuItem>
                      <MenuItem value="Graphics Design">
                        Graphic Design
                      </MenuItem>
                      <MenuItem value="UI / UX Design">UI / UX Design</MenuItem>
                      <MenuItem value="Interior Design">
                        Interior Design
                      </MenuItem>
                      <MenuItem value="3D Maya Max Animation">
                        3D Maya Max Animation
                      </MenuItem>
                      <MenuItem value="Video Editing">Video Editing</MenuItem>
                      <MenuItem value="AutoCad">AutoCad</MenuItem>
                      <MenuItem value="Microsoft Office 365">
                        Microsoft Office 365
                      </MenuItem>
                      <MenuItem value="Enterpreneurship">
                        Enterpreneurship
                      </MenuItem>
                    </Select>
                  </FormControl>
                )}

                {formData.thirdCourseTitle ===
                  "Associate Certification Program" && (
                  <FormControl fullWidth className="mt-3" variant="standard">
                    <Label id="thirdCourseCategory">
                      Third Course Category
                    </Label>
                    <Select
                      value={formData.thirdCourseName}
                      id="thirdCourseCategory"
                      name="thirdCourseName"
                      onChange={handleThirdCourseName}
                    >
                      <MenuItem value="Digital Forensic Cyber Security">
                        Digital Forensic Cyber Security
                      </MenuItem>
                      <MenuItem value="Penetration Testing Cyber Security">
                        Penetration Testing Cyber Security
                      </MenuItem>
                      <MenuItem value="CISSP Cyber Security Professional">
                        CISSP Cyber Security Professional
                      </MenuItem>
                      <MenuItem value="Artificial Intelligence">
                        Artificial Intelligence
                      </MenuItem>
                      <MenuItem value="AWS Cloud Computing">
                        AWS Cloud Computing
                      </MenuItem>
                      <MenuItem value="Internet of Things (IoT)">
                        Internet of Things (IoT)
                      </MenuItem>
                      <MenuItem value="BlockChain Technology">
                        BlockChain Technology
                      </MenuItem>
                      <MenuItem value="Full Stack Web Development">
                        Full Stack Web Development (MCSA)
                      </MenuItem>
                    </Select>
                  </FormControl>
                )}
              </>
            ) : (
              <>
                {formData.thirdCourseTitle && (
                  <h5 className="mb-0 fw-bold mt-2">
                    <span className="title">Third Course Category:</span>
                    <span className="fw-normal">
                      {formData.thirdCourseName}
                    </span>
                  </h5>
                )}
              </>
            )}

            <h5 className="mb-0 fw-bold mt-2">
              <span className="title">Province:</span>
              <span className="fw-normal">{profile.province}</span>
            </h5>

            <h5 className="mb-0 fw-bold mt-2">
              <span className="title">Country:</span>
              <span className="fw-normal text-uppercase">
                {profile.country}
              </span>
            </h5>

            <h5 className="mb-0 fw-bold mt-2">
              <span className="title">City:</span>
              <span className="fw-normal">{profile.city}</span>
            </h5>

            <h5 className="mb-0 fw-bold mt-2">
              <span className="title">Address:</span>
              <span className="fw-normal">{profile.address}</span>
            </h5>

            <div className="d-flex justify-content-center">
              {edit ? (
                <div className="d-flex flex-column flex-sm-row">
                  <Button
                    variant="contained"
                    className="custom-button mt-3 me-sm-3"
                    onClick={handleSaveProfile}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loading className="loader me-2" /> Saving Profile...
                      </>
                    ) : (
                      "Save Profile"
                    )}
                  </Button>

                  <Button
                    variant="contained"
                    className="custom-button mt-3"
                    onClick={() => setEdit(false)}
                    disabled={loading}
                  >
                    Close
                  </Button>
                </div>
              ) : (
                <Button
                  variant="contained"
                  className="custom-button mt-3"
                  onClick={() => setEdit(true)}
                >
                  Edit Profile
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* // ? Snacbar Msg of Update Profile */}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={openSnacbar}
        onClose={() => setOpenSnacbar(false)}
        autoHideDuration={6000}
      >
        <Alert
          onClose={() => setOpenSnacbar(false)}
          variant="filled"
          severity={
            profileUpdated === "Successfully Updated" ? "success" : "error"
          }
        >
          {profileUpdated}
        </Alert>
      </Snackbar>
    </>
  ) : (
    <Loader />
  );
};

const mapStateToProps = (state) => {
  return {
    status: state.firebase.profile.admissionStatus,
    profile: state.firebase.profile,
    uid: state.firebase.auth.uid,
    emailVerified: state.firebase.auth.emailVerified,
    applicationSubmitted: state.firebase.profile.applicationSubmitted,
    profileUpdated: state.auth.profileUpdated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    goingToApproveTheApplication: (uid) => dispatch(statusOfAdmission(uid)),
    signOut: (push) => dispatch(signOut(push)),
    updateProfile: (uid, formData, setLoading, setEdit, setOpenSnacbar) =>
      dispatch(
        updateProfile(uid, formData, setLoading, setEdit, setOpenSnacbar)
      ),
    uploadImage: (
      uid,
      username,
      image,
      setProgress,
      setLoading,
      setProgressBarEnable,
      dob,
      setEdit
    ) =>
      dispatch(
        uploadImage(
          uid,
          username,
          image,
          setProgress,
          setLoading,
          setProgressBarEnable,
          dob,
          setEdit
        )
      ),
    clearAll: () => dispatch(clearAll()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);

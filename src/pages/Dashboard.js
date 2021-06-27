import React, { useLayoutEffect, useState } from "react";
import { connect } from "react-redux";
import Loader from "../loader/loader";
import { Redirect, Link, useHistory } from "react-router-dom";
import { statusOfAdmission } from "../store/actions/applicationFormActions";
import { signOut } from "../store/actions/authActions";
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

const Dashboard = ({
  status,
  profile,
  uid,
  emailVerified,
  applicationSubmitted,
  goingToApproveTheApplication,
  signOut,
}) => {
  // ? State
  const [openDrawer, setOpenDrawer] = useState(true);
  const [count, setCount] = useState(1);

  // ? Object Destructuring
  const { push } = useHistory();

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
                src="https://i.ibb.co/Sd0qZ7X/dplmslogo.png"
                alt="DigiPAKISTAN"
                width="88%"
                className="mt-2 ms-2"
              />

              <div className="profile-dash d-flex align-items-center mt-3">
                <img
                  src="https://i.ibb.co/MNGFtFG/516-5167304-transparent-background-white-user-icon-png-png-download.png"
                  alt="DigiPAKISTAN Dashboard Profile Pic"
                  className="profile-pic"
                />

                <div>
                  <h5 className="fw-bold me-3">Sajawal Aslam</h5>
                  <Link to="/" className="small">
                    Update Profile
                  </Link>
                </div>
              </div>

              <div className="mt-3">
                <h6 className="fw-bold text-center">MAIN</h6>
                <ListItem button>
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

                <ListItem button>
                  <ListItemIcon>
                    <DollarIcon style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText primary="Refer &amp; Earn" />
                </ListItem>

                <h6 className="fw-bold text-center mt-2">PERSONAL</h6>
                <ListItem button>
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
      </div>

      {/* <Container className="mt pt-4">
        
      </Container> */}
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    goingToApproveTheApplication: (uid) => dispatch(statusOfAdmission(uid)),
    signOut: (push) => dispatch(signOut(push)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

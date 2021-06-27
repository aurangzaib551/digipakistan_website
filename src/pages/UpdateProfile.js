import React, { useLayoutEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import Loader from "../loader/loader";
import { Redirect, Link, useHistory } from "react-router-dom";
import { statusOfAdmission } from "../store/actions/ApplicationFormActions";
import { signOut } from "../store/actions/AuthActions";
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

const UpdateProfile = ({
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
  const [edit, setEdit] = useState(false);

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

  // ? Handling Image
  // TODO: add image backend and btn is disabled when image is uploading also show progress bar with %
  const handleImage = () => {
    imageRef.current.click();
  };

  // ? Saving profile function
  // TODO: do backend for save profile
  const handleSaveProfile = () => {
    setEdit(false);
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
          {/* // TODO: Dynamic Name of logged in user */}
          <h6 className="mb-5 fw-bold">Sajawal Aslam / Update Profile</h6>
          <h3 className="fw-bold mb-5">Update Profile</h3>

          {/* // ? Image Section */}
          <div className="d-flex flex-column align-items-center">
            {/* // TODO: when image is uploaded then show uploaded image */}
            <img
              // TODO: Show image according to gender
              src={true ? BoySVG : GirlSVG}
              alt="DigiPAKISTAN User Avatar"
              width="200"
              height="200"
            />

            {/* // ? Image input field & not showing in front end */}
            <input
              type="file"
              ref={imageRef}
              className="d-none"
              accept="image/*"
            />

            {/* // ? Btn is doing work for image upload */}
            {edit && (
              <Button
                variant="contained"
                className="custom-button mt-3"
                onClick={handleImage}
              >
                Upload Image
              </Button>
            )}
          </div>

          {/* // ? Other fields section */}
          <div className="container mb-5">
            <h5 className="mb-0 fw-bold mt-2">
              <span className="title">Roll #:</span>
              <span className="fw-normal">123456</span>
            </h5>

            {edit ? (
              <Input
                name="fullName"
                fullWidth
                label="Full Name"
                className="mt-2"
              />
            ) : (
              <h5 className="mb-0 fw-bold mt-2">
                <span className="title">Name:</span>
                <span className="fw-normal">Sajawal Aslam</span>
              </h5>
            )}

            {edit ? (
              <Input
                name="fatherName"
                fullWidth
                label="Father Name"
                className="mt-2"
              />
            ) : (
              <h5 className="mb-0 fw-bold mt-2">
                <span className="title">Father Name:</span>
                <span className="fw-normal">Aslam</span>
              </h5>
            )}

            <h5 className="mb-0 fw-bold mt-2">
              <span className="title">Gender:</span>
              <span className="fw-normal">Male</span>
            </h5>

            <h5 className="mb-0 fw-bold mt-2">
              <span className="title">CNIC:</span>
              <span className="fw-normal">352021234567</span>
            </h5>

            <h5 className="mb-0 fw-bold mt-2">
              <span className="title">D.O.B:</span>
              <span className="fw-normal">09-06-1997</span>
            </h5>

            <h5 className="mb-0 fw-bold mt-2">
              <span className="title">Mobile #:</span>
              <span className="fw-normal">0322-1213456</span>
            </h5>

            <h5 className="mb-0 fw-bold mt-2">
              <span className="title">E-Mail:</span>
              <span className="fw-normal">aurangzaibmanzoor551@gmail.com</span>
            </h5>

            <h5 className="mb-0 fw-bold mt-2">
              <span className="title">Qualification:</span>
              <span className="fw-normal">Intermediate</span>
            </h5>

            <h5 className="mb-0 fw-bold mt-2">
              <span className="title">Education:</span>
              <span className="fw-normal">F.Sc (Pre-Engg.)</span>
            </h5>

            <h5 className="mb-0 fw-bold mt-2">
              <span className="title">Institute Name:</span>
              <span className="fw-normal">Concordia Colleges</span>
            </h5>

            {edit ? (
              <FormControl fullWidth variant="standard" className="mt-3">
                <Label htmlFor="firstCourse">First Course *</Label>
                <Select
                  id="firstCourse"
                  name="firstCourseTitle"
                  //  value={formData.firstCourseTitle}
                  //  onChange={handleChange}
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
                <span className="fw-normal">Fast Track Technical Program</span>
              </h5>
            )}

            {/* // TODO: show courses according to first course */}
            <h5 className="mb-0 fw-bold mt-2">
              <span className="title">First Course Category:</span>
              <span className="fw-normal">CompTIA It Fundamentals</span>
            </h5>

            {edit ? (
              <FormControl fullWidth variant="standard" className="mt-3">
                <Label htmlFor="secondCourse">Second Course (Optional)</Label>
                <Select
                  id="secondCourse"
                  name="secondCourseTitle"
                  // value={formData.secondCourseTitle}
                  // onChange={handleChangeSecond}
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
              <h5 className="mb-0 fw-bold mt-2">
                <span className="title">Second Course:</span>
                <span className="fw-normal">Fast Track Technical Program</span>
              </h5>
            )}

            {/* // TODO: show courses according to second course */}
            <h5 className="mb-0 fw-bold mt-2">
              <span className="title">Second Course Category:</span>
              <span className="fw-normal">Microsoft Front End Development</span>
            </h5>

            {edit ? (
              <FormControl fullWidth variant="standard" className="mt-3">
                <Label htmlFor="thirdCourse">Third Course (Optional)</Label>
                <Select
                  id="thirdCourse"
                  name="thirdCourseTitle"
                  // value={formData.thirdCourseTitle}
                  // onChange={handleChangeThird}
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
              <h5 className="mb-0 fw-bold mt-2">
                <span className="title">Third Course:</span>
                <span className="fw-normal">Fast Track Technical Program</span>
              </h5>
            )}

            {/* // TODO: show courses according to third course */}
            <h5 className="mb-0 fw-bold mt-2">
              <span className="title">Third Course Category:</span>
              <span className="fw-normal">ASP.NET Web Applications</span>
            </h5>

            <h5 className="mb-0 fw-bold mt-2">
              <span className="title">Province:</span>
              <span className="fw-normal">Punjab</span>
            </h5>

            <h5 className="mb-0 fw-bold mt-2">
              <span className="title">Country:</span>
              <span className="fw-normal">PAKISTAN</span>
            </h5>

            <h5 className="mb-0 fw-bold mt-2">
              <span className="title">City:</span>
              <span className="fw-normal">LAHORE</span>
            </h5>

            <h5 className="mb-0 fw-bold mt-2">
              <span className="title">Address:</span>
              <span className="fw-normal">
                House # 123, Gulberg III, Lahore
              </span>
            </h5>

            <div className="d-flex justify-content-center">
              {edit ? (
                <Button
                  variant="contained"
                  className="custom-button mt-3"
                  onClick={handleSaveProfile}
                >
                  Save Profile
                </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);

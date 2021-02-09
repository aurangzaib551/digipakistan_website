import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useMediaQuery } from "react-responsive";
import Button from "@material-ui/core/Button";
import Copyright from "../../common/copyright/copyright";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/authActions";

const ReactNativeWebAndAppsDevelopment = ({ signOut }) => {
  useEffect(() => {
    signOut();
  }, [signOut]);

  // State
  const [tabValue, setTabValue] = useState(0);

  // Object Destructuring
  const { push } = useHistory();

  const handleTab = (obj, ind) => {
    setTabValue(ind);
  };

  //   Media Query
  const isSmall = useMediaQuery({
    query: "(max-width: 400px)",
  });
  return (
    <>
      <Container className="mt overflow-hidden pt-4 course-outlines mb-5 pb-5">
        <h1 className="text-center fw-bold mx-3">
          React Native Web &amp; Apps Development
        </h1>
        <div className="row g-4 mb-5 pb-5">
          <div className="col-lg-8">
            <Paper square>
              <Tabs
                value={tabValue}
                variant={isSmall ? "scrollable" : "standard"}
                onChange={handleTab}
                scrollButtons={isSmall ? "on" : "off"}
                centered={isSmall ? false : true}
              >
                <Tab label="Overview" className="outline" />
                <Tab label="Curriculum" className="outline" />
                <Tab label="Instructor" className="outline" />
              </Tabs>
            </Paper>
            {tabValue === 0 && (
              <div className="my-3">
                <h3 className="fw-bold">Course Description</h3>
                <p className="text-justify">
                  React Native enables you to build iOS , Web and Android
                  appliaction and benefit from code reuse cross platform. React
                  Native is an exciting new language backed by Facebook that
                  allows you to create a native mobile experience on Android,
                  Web and iOS devices through a common coding experience. Apps
                  can be developed fast using popular free text editors and
                  testing is fast for iOS, Web and Android - rapid mobile
                  development.
                </p>

                <p className="text-justify">
                  This course teaches developers at any level to get started
                  with React Native and start coding. You will build cross
                  platform applications for Android, Web and iOS in React
                  Native! This is a hands-on training course. Every Module
                  includes a hands-on project. You’ll need to successfully
                  finish the project(s) to complete the Specialization and earn
                  your certificate.
                </p>

                <h3 className="fw-bold">Certificate</h3>
                <p className="text-justify">
                  On successful completion of the course participants will be
                  awarded participation certificate from DigiPAKISTAN. Also
                  prepare for International Exam.
                </p>
                <h3 className="fw-bold">Duration &amp; Frequency</h3>
                <p className="mb-0">Total Duration of the course is 3 months</p>
              </div>
            )}
            {tabValue === 1 && (
              <div className="my-3">
                <ul className="list-unstyled">
                  <li className="fw-bold mt-2">
                    Module I
                    <ul className="fw-normal list-style-roman">
                      <li>Web Development with React.js</li>
                      <li>ES6 for React Developers</li>
                      <li>JSX and React Components</li>
                      <li>React Router and Single Page Applications</li>
                      <li>
                        React Forms, Flow Architecture and Introduction to Redux
                      </li>
                      <li>More Redux and Client-Server Communication</li>
                      <li>Bonus: Building and Deployment</li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    Module II
                    <ul className="fw-normal list-style-roman">
                      <li>
                        Android and iOS Apps Development with React Native
                      </li>
                      <li>
                        Introduction to React Native, React Native Components
                        and Navigation
                      </li>
                      <li>React Native UI Elements and Redux</li>
                      <li>
                        React Native Alerts, Animations, Gestures, and Persist
                        Redux Store
                      </li>
                      <li>
                        Accessing Native Capabilities of Devices: The Expo SDK
                      </li>
                      <li>
                        Secure Store, Local Notifications, Social Sharing,
                        Sending Email,
                      </li>
                      <li>
                        Picking an Image, Image Manipulator, and Network Info
                      </li>
                      <li>
                        Building and Deployment, Building Standalone Apps,
                        Ejecting for Android and iOS Native Development
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="col-lg-4">
            <Paper elevation={10} className="p-3 border">
              <h6 className="fw-bold mb-0 details text-center text-sm-start">
                Total No. of Seats in Batch-01:{" "}
                <span className="text-success">1000 Students Only</span>
              </h6>
              <h6 className="fw-bold mb-0 details text-center text-sm-start">
                Course Type:{" "}
                <span className="fw-normal">Fast Track Technical Program</span>
              </h6>
              <h6 className="fw-bold mb-0 details text-center text-sm-start">
                Duration: <span className="fw-normal">3 Months</span>
              </h6>
              <h6 className="fw-bold mb-0 details text-center text-sm-start">
                Language: <span className="fw-normal">Urdu / English</span>
              </h6>
              <Button
                onClick={() => push("/apply-now")}
                variant="contained"
                fullWidth
                className="custom-button mt-3"
              >
                Apply Now
              </Button>
            </Paper>
          </div>
        </div>
      </Container>
      <div className="pt-5">
        <Copyright />
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ReactNativeWebAndAppsDevelopment);

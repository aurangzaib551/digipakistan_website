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
import { Helmet } from "react-helmet";

const XamarinAppsDevelopment = ({ signOut }) => {
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
      <Helmet>
        <title>Xamarin Mobile Apps Development</title>
      </Helmet>
      <Container className="mt overflow-hidden pt-4 course-outlines mb-5 pb-5">
        <h1 className="text-center fw-bold mx-3">
          Xamarin Mobile Apps Development
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
                  <strong>Xamarin</strong> is an open-source,{" "}
                  <strong>C#</strong> based set of tools for writing{" "}
                  <strong>Android, iOS and Windows apps</strong> with native
                  user interfaces and a shared code base across all platforms.
                  It allows developers to use the same{" "}
                  <strong>IDE, language, and APIs</strong> everywhere --
                  anything that can be done in{" "}
                  <strong>Objective-C, Swift, or Java</strong> can be done in{" "}
                  <strong>C#</strong> with Xamarin. <strong>Xamarin</strong> was
                  bought by Microsoft in 2016 and is included with Visual
                  Studio. In this instructor-led, live training, participants
                  learn key aspects of Xamarin as they take on the development
                  of their own set of{" "}
                  <strong>
                    mobile applications for Android, iOS and Windows.
                  </strong>
                </p>

                <h3 className="fw-bold">Certificate</h3>
                <p className="text-justify">
                  On successful completion of the course participants will be
                  awarded participation{" "}
                  <strong>certificate from DigiPAKISTAN.</strong> Also prepare
                  for <strong>International Exam.</strong>
                </p>
                <h3 className="fw-bold">Duration &amp; Frequency</h3>
                <p className="mb-0">
                  Total Duration of the course is <strong>3 months</strong>
                </p>
              </div>
            )}
            {tabValue === 1 && (
              <div className="my-3">
                <ul className="text-justify">
                  <li>Introduction</li>
                  <li>Understanding the Xamarin Architecture</li>
                  <li>Xamarin Developer Tools</li>
                  <li>Setting up Your Development Environment</li>
                  <li>Creating Your First Application</li>
                  <li>Making Your Application Interactive</li>
                  <li>Model Classes and Event Handling</li>
                  <li>Creating the UI</li>
                  <li>
                    Collections, Persistence, and MVVM (Model-View-View-Model)
                    in Xamarin
                  </li>
                  <li>Data Binding in Xamarin</li>
                  <li>Using Pages in Xamarin</li>
                  <li>Architecting for Multiple Platforms</li>
                  <li>Building Your Application</li>
                  <li>Testing Your Application</li>
                  <li>Debugging Your Application</li>
                  <li>Optimizing the Performance of Your Application</li>
                  <li>Deploying Your Application to the iOS App Store</li>
                  <li>Deploying Your Android Application</li>
                  <li>Summary and Conclusion</li>
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

export default connect(null, mapDispatchToProps)(XamarinAppsDevelopment);

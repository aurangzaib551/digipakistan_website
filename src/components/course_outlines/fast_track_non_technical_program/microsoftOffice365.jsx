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

const MicrosoftOffice365 = ({ signOut }) => {
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
        <title>Microsoft Office 365</title>
      </Helmet>
      <Container className="mt overflow-hidden pt-4 course-outlines mb-5 pb-5">
        <h1 className="text-center fw-bold mx-3">Microsoft Office 365</h1>
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
                  This course helps you in learning office productivity tools
                  that are part and parcel of modern work environment. It will
                  provide hands on training in Microsoft Word, Microsoft Excel,
                  Microsoft PowerPoint, Internet and Email applications. These
                  applications fit in all types of the modern working
                  environment. Though, this course is designed for beginners,
                  but it is also useful for people who have basic computer
                  knowledge. It aims at raising and improving the users’
                  knowledge and competency of computer usage. If you are a
                  person who wishes to explore the world of computing or someone
                  willing to learn computer basics, then this module is for you.
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
                <ul className="fw-bold list-unstyled">
                  <li>Intro to IT &amp; Computers</li>

                  <li className="mt-3">
                    Microsoft Word
                    <ul className="fw-normal">
                      <li>Getting Started With Microsoft Word</li>
                      <li>Editing a Document</li>
                      <li>Formatting Text</li>
                      <li>Formatting Paragraphs</li>
                      <li>Adding Table</li>
                      <li>Header and Footer</li>
                      <li>Drawing Toolbar – Word Art</li>
                      <li>Create Word Macros</li>
                      <li>Proofing a Document</li>
                      <li>Customize autocorrect options</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Microsoft Excel
                    <ul className="fw-normal">
                      <li>Getting Started With MS Excel</li>
                      <li>Formulas and Functions</li>
                      <li>Editing Features</li>
                      <li>Working with the Large Workbooks</li>
                      <li>Inserting page breaks for printing-</li>
                      <li>Working with Charts</li>
                      <li>Inserting Graphic Objects</li>
                      <li>Previewing and Printing</li>
                      <li>Simple Database Operation</li>
                      <li>
                        Analyzing Data Using Pivot Tables and Pivot Charts
                      </li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Microsoft PowerPoint
                    <ul className="fw-normal">
                      <li>Getting Started</li>
                      <li>Creating a Presentation</li>
                      <li>Working with Content</li>
                      <li>Formatting Text</li>
                      <li>Adding Content</li>
                      <li>Graphics</li>
                      <li>Tables</li>
                      <li>Charts</li>
                      <li>Slide Effects</li>
                      <li>Printing</li>
                      <li>Package a Presentation</li>
                    </ul>
                  </li>

                  <li className="mt-3">Internet &amp; Microsoft Outlook</li>
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
                <span className="fw-normal">
                  Fast Track Non-Technical Program
                </span>
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

export default connect(null, mapDispatchToProps)(MicrosoftOffice365);

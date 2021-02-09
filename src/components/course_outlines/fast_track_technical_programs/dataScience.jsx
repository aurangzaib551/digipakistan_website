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

const MachineLearningAndAI = ({ signOut }) => {
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
        <title>Data Science</title>
      </Helmet>
      <Container className="mt overflow-hidden pt-4 course-outlines mb-5 pb-5">
        <h1 className="text-center fw-bold mx-3">Data Science</h1>
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
                  This course is designed to teach Data Science in a hands-on
                  manner and prepare participants for a career in this field.
                  The course will provide you with the complete toolbox to
                  become a Data Scientist. Students will acquire the precise
                  technical skills recruiters are looking for when hiring Data
                  Scientists.
                </p>

                <p className="text-justify">
                  On completion, students will have gained the analytical skills
                  required to open the doors to a lucrative career as a Data
                  Scientist.
                </p>

                <p className="text-justify">
                  Data is extremely important to all organizations, and at all
                  levels. It's not just big IT and software companies: Data
                  experts are needed in banking and finance, automotive, energy,
                  healthcare, transport, retail, and virtually every domain you
                  can think of. And because data drives decisions - from small
                  regional offices to the boardroom - graduates from bootcamps
                  in Data Science will be directly involved in important
                  strategic decision-making processes.
                </p>

                <p className="text-justify">
                  The role of data scientist is now a buzz worthy career. It has
                  staying power in the marketplace and provides opportunities
                  for people who study data science to make valuable
                  contributions to their companies and societies at large.
                  LinkedIn recently picked data scientist as its most promising
                  career of 2019. One of the reasons it got the top spot was
                  that the average salary for people in the role is $130,000.
                </p>

                <p className="text-justify">
                  Data science is one of the fastest-growing sectors of the tech
                  industry. In simple words, there is soaring demand for Data
                  professionals yet a huge deficit on the supply side. The
                  course will qualify you for a position as a data scientist or
                  a data analyst. This program will ensure you have the
                  knowledge to kick-start your career in Data Science.
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
                <ul className="list-style-decimal fw-bold">
                  <li>
                    Python for Data Science
                    <ul className="fw-normal">
                      <li>Intro to Python</li>
                      <li>
                        Variables, Data Types &amp; Type Conversion in Python
                      </li>
                      <li>Numbers &amp; Strings in Python</li>
                      <li>Working with Lists in Python</li>
                      <li>NumPy in Python</li>
                      <li>
                        Data Visualization in Python (Matplotlib &amp; Seaborn)
                      </li>
                      <li>Dictionaries in Python</li>
                      <li>Pandas Library in Python</li>
                      <li>Manipulating Data Frames</li>
                      <li>Conditionals &amp; Loops in Python</li>
                      <li>Functions &amp; Built in Functions in Python</li>
                      <li>Descriptive Statistics in Python</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Exploratory Data Analysis and Model Preparation
                  </li>
                  <li className="mt-3">
                    Machine Learning and Model Deployment
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

export default connect(null, mapDispatchToProps)(MachineLearningAndAI);

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

const Enterpreneurship = ({ signOut }) => {
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
        <title>Enterpreneurship</title>
      </Helmet>
      <Container className="mt overflow-hidden pt-4 course-outlines mb-5 pb-5">
        <h1 className="text-center fw-bold mx-3">Enterpreneurship</h1>
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
                  Develop your entrepreneurial mindset and skill sets, learn how
                  to bring innovations to market, and craft a business model to
                  successfully launch your new business. The Entrepreneurship
                  Specialization examines the entrepreneurial mindset and skill
                  sets, indicators of innovation opportunities, critical steps
                  to bring innovations to the marketplace, and innovation
                  strategies to establish and maintain a competitive advantage.
                  Fundamentals of new venture financing are explored with
                  attention to capital structures for new ventures, term sheets
                  and how to negotiate them, and the differences between
                  early-stage versus later-stage financing. You will develop an
                  understanding of how to develop winning investor pitches, who
                  and when to pitch, how to avoid common mistakes, and how to
                  ‘get to the close’. In the final Capstone Project, you will
                  apply the tools and concepts from the specialization courses
                  by crafting a comprehensive, customer-validated business
                  model, and creating a business plan and investor pitch.
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
                <ul>
                  <li>
                    You will gain a deeper insight into entrepreneurial
                    intuition
                  </li>
                  <li>
                    You will gain ideas why your business reflects your
                    personality
                  </li>
                  <li>
                    You will understand when entrepreneurial passion becomes
                    "obsession"
                  </li>
                  <li>
                    You will have an idea what abilities distinguish
                    entrepreneurs from other people
                  </li>
                  <li>
                    You will gain ideas what drives entrepreneurs to succeed
                  </li>
                  <li>You will learn about resources vs resourcefulness</li>
                  <li>
                    You will gain insights how to overcome entrepreneurial grief
                    and failures
                  </li>
                  <li>
                    You will find out why patience is vital in entrepreneurship
                  </li>
                  <li>You will discover how to achieve the state of flow</li>
                  <li>
                    You will have an understanding about inspiration, and why it
                    is important for entrepreneurs
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

export default connect(null, mapDispatchToProps)(Enterpreneurship);

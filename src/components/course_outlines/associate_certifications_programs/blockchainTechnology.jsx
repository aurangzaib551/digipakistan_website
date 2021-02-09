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

const BlockChainTechnology = ({ signOut }) => {
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
        <h1 className="text-center fw-bold mx-3">BlockChain Technology</h1>
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
                  Based on a peer-to-peer (P2P) topology, blockchain is a
                  distributed ledger technology (DLT) that allows data to be
                  stored globally on thousands of servers – while letting anyone
                  on the network see everyone else's entries in near real-time.
                  That makes it difficult for one user to gain control of, or
                  game, the network.
                </p>

                <p className="text-justify">
                  For businesses, however, blockchain holds the promise of
                  transactional transparency – the ability to create secure,
                  real-time communication networks with partners around the
                  globe to support everything from supply chains to payment
                  networks to real estate deals and healthcare data sharing.
                </p>

                <p className="text-justify">
                  So while blockchain isn't going to replace traditional
                  corporate relational databases, it does open new doors for the
                  movement and storage of transactional data inside and outside
                  of global enterprises.
                </p>

                <h3 className="fw-bold">Certificate</h3>
                <p className="text-justify">
                  On successful completion of the course participants will be
                  awarded participation certificate from DigiPAKISTAN. Also
                  prepare for International Exam.
                </p>
                <h3 className="fw-bold">Duration &amp; Frequency</h3>
                <p className="mb-0">Total Duration of the course is 6 months</p>
              </div>
            )}
            {tabValue === 1 && (
              <div className="my-3">
                <ul className="fw-bold list-unstyled">
                  <li>
                    Level-1: BlockChain Basics
                    <ul className="fw-normal">
                      <li>Blockchain Defined</li>
                      <li>Ethereum Blockchain</li>
                      <li>Algorithms &amp; Techniques</li>
                      <li>Trust Essentials</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Level-2
                    <ul className="fw-normal">
                      <li>Blockchain: Foundations and Use Cases</li>
                      <li>Module 1: Blockchain Foundations</li>
                      <li>Module 2: The Technical Side</li>
                      <li>Module 3: Blockchain in Use</li>
                      <li>Module 4: Further Topics</li>
                      <li>Module 5: Use Cases</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Level-3: This is the advance level when both level has been
                    clear then they will reach to this level
                    <ul className="fw-normal">
                      <li>IBM Blockchain Foundation for Developers</li>
                      <li>Welcome to this course</li>
                      <li>Leverage blockchain benefits</li>
                      <li>Transform your business with blockchain</li>
                      <li>Blockchain composed</li>
                      <li>Blockchain fabric development and architecture</li>
                      <li>Wrap up</li>
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
                <span className="fw-normal">
                  Associate Certification Program
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

export default connect(null, mapDispatchToProps)(BlockChainTechnology);

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

const BigDataAndHeadoopEcosystem = ({ signOut }) => {
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
          Big Data &amp; Headoop Ecosystem
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
                  Hadoop is a framework that allows for the distributed
                  processing of large datasets across clusters of computers
                  using simple programming models.
                </p>

                <p className="text-justify">
                  Let us discuss how Hadoop resolves the three challenges of the
                  distributed system, such as high chances of system failure,
                  the limit on bandwidth, and programming complexity.
                </p>

                <p className="text-justify">
                  The four key characteristics of Hadoop are:
                </p>

                <ul>
                  <li>
                    Economical: Its systems are highly economical as ordinary
                    computers can be used for data processing.
                  </li>
                  <li>
                    Reliable: It is reliable as it stores copies of the data on
                    different machines and is resistant to hardware failure.
                  </li>
                  <li>
                    Scalable: It is easily scalable both, horizontally and
                    vertically. A few extra nodes help in scaling up the
                    framework.
                  </li>
                  <li>
                    Flexible: It is flexible and you can store as much
                    structured and unstructured data as you need to and decide
                    to use them later.
                  </li>
                </ul>

                <p className="text-justify">
                  Traditionally, data was stored in a central location, and it
                  was sent to the processor at runtime. This method worked well
                  for limited data.
                </p>

                <p className="text-justify">
                  However, modern systems receive terabytes of data per day, and
                  it is difficult for the traditional computers or Relational
                  Database Management System (RDBMS) to push high volumes of
                  data to the processor.
                </p>

                <p className="text-justify">
                  Hadoop brought a radical approach. In Hadoop, the program goes
                  to the data, not vice versa. It initially distributes the data
                  to multiple systems and later runs the computation wherever
                  the data is located.
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
                <ul className="list-unstyled fw-bold">
                  <li>
                    Module 1: Introduction to Hadoop
                    <ul className="fw-normal">
                      <li>Understand what Hadoop is</li>
                      <li>Understand what Big Data is</li>
                      <li>
                        Learn about other open source software related to Hadoop
                      </li>
                      <li>
                        Understand how Big Data solutions can work on the Cloud
                      </li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Module 2: Hadoop Architecture
                    <ul className="fw-normal">
                      <li>Understand the main Hadoop components</li>
                      <li>Learn how HDFS works</li>
                      <li>
                        List data access patterns for which HDFS is designed
                      </li>
                      <li>Describe how data is stored in an HDFS cluster</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Module 3: Hadoop Administration
                    <ul className="fw-normal">
                      <li>Add and remove nodes from a cluster</li>
                      <li>
                        Verify the health of a clusterStart and stop a clusters
                        components
                      </li>
                      <li>Modify Hadoop configuration parameters</li>
                      <li>Setup a rack topology</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Module 4: Hadoop Components
                    <ul className="fw-normal">
                      <li>Describe the MapReduce philosophy</li>
                      <li>
                        Explain how Pig and Hive can be used in a Hadoop
                        environment
                      </li>
                      <li>
                        Describe how Flume and Sqoop can be used to move data
                        into Hadoop
                      </li>
                      <li>
                        Describe how Oozie is used to schedule and control
                        Hadoop job execution
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

export default connect(null, mapDispatchToProps)(BigDataAndHeadoopEcosystem);

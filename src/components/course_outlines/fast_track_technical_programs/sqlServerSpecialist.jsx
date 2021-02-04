import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useMediaQuery } from "react-responsive";
import Button from "@material-ui/core/Button";
import Copyright from "../../common/copyright/copyright";

const SQLServerSpecialist = () => {
  // State
  const [tabValue, setTabValue] = useState(0);

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
        <h1 className="text-center fw-bold mx-3">SQL Server Specialist</h1>
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
                  Microsoft SQL Server provides a robust architecture for
                  enterprise level data management, developer’s productivity and
                  business intelligence. This hands-on course is designed to
                  provide necessary knowledge and hands-on experience for
                  installation and configuration and administration of SQL
                  Server; designing and implementing SQL Server databases,
                  querying and manipulating data from SQL Server and
                  implementing a Data Warehouse with SQL Server. SQL Server
                  training curriculum is carefully designed to meet the
                  requirements of Microsoft exam: Querying Microsoft SQL Server.
                  Course helps developing strong understanding of Microsoft SQL
                  Server and development foundation.
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
                <h6 className="fw-bold">
                  Module 1:{" "}
                  <span className="fw-normal">Introduction to SQL Server</span>
                </h6>
                <h6 className="fw-bold">
                  Lab: <span className="fw-normal">Exploring SQL Server</span>
                </h6>

                <h6 className="fw-bold mt-3">
                  Module 2:{" "}
                  <span className="fw-normal">
                    What’s New in SQL Server Performance
                  </span>
                </h6>
                <h6 className="fw-bold">
                  Lab:{" "}
                  <span className="fw-normal">
                    Implementing SQL Server 2016 Performance Improvements
                  </span>
                </h6>

                <h6 className="fw-bold mt-3">
                  Module 3:{" "}
                  <span className="fw-normal">
                    What’s New in SQL Server Security?
                  </span>
                </h6>
                <h6 className="fw-bold">
                  Lab:{" "}
                  <span className="fw-normal">
                    Implementing SQL Server Security Improvements
                  </span>
                </h6>

                <h6 className="fw-bold mt-3">
                  Module 4:{" "}
                  <span className="fw-normal">
                    What’s New in SQL Server Availability and Scalability?
                  </span>
                </h6>
                <h6 className="fw-bold">
                  Lab: <span className="fw-normal">Monitoring tempdb</span>
                </h6>

                <h6 className="fw-bold mt-3">
                  Module 5:{" "}
                  <span className="fw-normal">
                    What’s New in SQL Server Reporting and BI
                  </span>
                </h6>
                <h6 className="fw-bold">
                  Lab: <span className="fw-normal">Implementing PowerBI</span>
                </h6>

                <h6 className="fw-bold mt-3">
                  Module 6:{" "}
                  <span className="fw-normal">
                    What’s New in SQL Server Data Access?
                  </span>
                </h6>
                <h6 className="fw-bold">
                  Lab:{" "}
                  <span className="fw-normal">
                    Exploring the new features of SQL Server Integrated services
                    (SSIS)
                  </span>
                </h6>

                <h6 className="fw-bold mt-3">
                  Module 7:{" "}
                  <span className="fw-normal">
                    New and Enhanced Features in SQL Server OLAP
                  </span>
                </h6>
                <h6 className="fw-bold">
                  Lab: <span className="fw-normal">OLAP with SQL Server</span>
                </h6>

                <h6 className="fw-bold mt-3">
                  Module 8:{" "}
                  <span className="fw-normal">
                    What’s New for SQL Server in the Cloud?
                  </span>
                </h6>
                <h6 className="fw-bold">
                  Lab: <span className="fw-normal">Using Stretch Database</span>
                </h6>
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

export default SQLServerSpecialist;

import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useMediaQuery } from "react-responsive";
import Button from "@material-ui/core/Button";
import Copyright from "../../common/copyright/copyright";
import { useHistory } from "react-router-dom";

const ASPDotNETWebApplications = () => {
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
        <h1 className="text-center fw-bold mx-3">ASP.NET Web Applications</h1>
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
                  ASP.NET is a platform for building dynamic web sites that
                  address a wide range of business needs. This extensive project
                  driven course covers n-tier web application development using
                  Microsoft .NET Framework / .NET Core, Visual Studio and SQL
                  Server. It includes object oriented programming using C#, web
                  development using HTML5, CSS3 and Bootstrap 4; Interactive and
                  rich UI development using JavaScript, jQuery and jQuery UI;
                  Server side programming using ASP .NET Core MVC, Web API and
                  C#; Database programming using ADO .NET Entity Framework, LINQ
                  and SQL Server 2017.
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
                <ul className="text-justify">
                  <li>Overview of .NET &amp; Web Technologies</li>
                  <li>Designing ASP.NET MVC Web Applications</li>
                  <li>Developing ASP.NET MVC Models</li>
                  <li>Developing ASP.NET MVC Controllers</li>
                  <li>Developing ASP.NET MVC Views</li>
                  <li>Testing and Debugging ASP.NET MVC Web Applications</li>
                  <li>Structuring ASP.NET MVC Web Applications</li>
                  <li>Applying Styles to ASP.NET MVC Web Applications</li>
                  <li>
                    Building Responsive Pages in ASP.NET MVC Web Applications
                  </li>
                  <li>
                    Using JavaScript and jQuery for Responsive MVC Web
                    Aplications
                  </li>
                  <li>Controlling Access to ASP.NET MVC Web Applications</li>
                  <li>Building a Resilient ASP.NET MVC Web Application</li>
                  <li>Implementing Web APIs in ASP.NET MVC Web Applications</li>
                  <li>Deploying ASP.NET MVC Web Applications</li>
                  <li>Practical Approach</li>
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

export default ASPDotNETWebApplications;

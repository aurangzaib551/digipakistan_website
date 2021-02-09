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

const PHPLaravel = ({ signOut }) => {
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
        <title>PHP Laravel</title>
      </Helmet>
      <Container className="mt overflow-hidden pt-4 course-outlines mb-5 pb-5">
        <h1 className="text-center fw-bold mx-3">PHP Laravel</h1>
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
                  <strong>PHP</strong> is a server-based scripting language
                  primarily used for web development. In simpler words, it is a
                  language that is used to build, operate and run websites from
                  the back end. It is a general purpose language and can be
                  learned by all people even if they do not have any background.
                  In this project-based course students will learn web
                  development using{" "}
                  <strong>PHP 7 and Laravel Framework.</strong> It includes
                  essentials of web programming in{" "}
                  <strong>
                    PHP 7, Object Oriented Programming in PHP 7, Installation
                    and Configuration of Laravel Framework, database development
                    using Eloquent (Laravel ORM Framework) and MySql.
                  </strong>{" "}
                  The students will also learn to take advantage of{" "}
                  <strong>Laravel Framework’s MVC Architecture</strong>, its
                  Blade template system and its powerful routing features. The
                  course also covers <strong>REST APIs / REST Services</strong>{" "}
                  development using <strong>PHP and Laravel Framework.</strong>
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
                  <li>Database(MySql) Introduction</li>
                  <li>Control Structures</li>
                  <li>Function</li>
                  <li>Array</li>
                  <li>Common Features</li>
                  <li>OOP Fundamentals</li>
                  <li>PHP 7 New Features</li>
                  <li>Windows/MAC/LINUX- Local Environment Setup</li>
                  <li>LARAVEL FUNDAMENTALS</li>
                  <li>LARAVEL FUNDAMENTALS- MVC concept and other</li>
                  <li>Laravel Fundamentals- Laravel Blade Template</li>
                  <li>Responses</li>
                  <li>Laravel Fundamentals- Database- Laravel Migrations</li>
                  <li>LARAVEL FUNDAMENTALS- Query Builder</li>
                  <li>LARAVEL FUNDAMENTALS- Database- Eloquent/ORM</li>
                  <li>Validations</li>
                  <li>Building a Classified application</li>
                  <li>
                    PROJECT: CREATE A BASIC ECOMMERCE SITE IN LARAVEL- ADMIN
                    PANEL
                  </li>
                  <li>Front End in Laravel</li>
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

export default connect(null, mapDispatchToProps)(PHPLaravel);

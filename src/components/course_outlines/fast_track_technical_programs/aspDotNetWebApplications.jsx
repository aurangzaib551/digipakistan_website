import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Tabsi from "@material-ui/core/Tabs";
import Tabi from "@material-ui/core/Tab";
import { useMediaQuery } from "react-responsive";
import { Tab, Tabs } from "react-bootstrap";

const ASPNET = () => {
  const [key, setKey] = useState("home");

  return (
    <>
      <div className="course-outlines mt">
        <div className="bg-img">
          <div className="container pt-5">
            <h1 className="fw-bold text-white">Courses</h1>
            <p className="mb-0 small fw-bold text-white">
              Home &bull; Available Programs &bull; Fast Track &bull; ASP.NET
              Web Applications
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-9 mt-4 mt-lg-5">
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="fw-bold mb-0">ASP.NET Web Applications</h2>

                <div>
                  <Button
                    // onClick={() => push("/apply-now")}
                    variant="contained"
                    fullWidth
                    className="custom-button mt-3"
                  >
                    Apply Now
                  </Button>
                </div>
              </div>

              <div className="my-3">
                <img
                  src="https://c1.wallpaperflare.com/preview/763/123/778/technology-lumia-mobile-smartphone.jpg"
                  alt=""
                  width="100%"
                  className="rounded "
                  height="400"
                />
              </div>

              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
              >
                <Tab eventKey="home" title="Overview">
                  <h3 className="fw-bold">Course Description</h3>
                  <p>
                    This course teaches IT Professionals how to manage their
                    Azure subscriptions, secure identities, administer the
                    infrastructure, configure virtual networking, connect Azure
                    and on-premises sites, manage network traffic, implement
                    storage solutions, create and scale virtual machines,
                    implement web apps and containers, back up and share data,
                    and monitor your solution. Level: Intermediate
                  </p>
                  <p>
                    Candidates for this exam should have subject matter
                    expertise implementing, managing, and monitoring an
                    organization’s Microsoft Azure environment.
                  </p>
                  <p>
                    Responsibilities for an Azure Administrator include
                    implementing, managing, and monitoring identity, governance,
                    storage, compute, and virtual networks in a cloud
                    environment, plus provision, size, monitor, and adjust
                    resources, when needed.
                  </p>

                  <p>
                    An Azure Administrator often serves as part of a larger team
                    dedicated to implementing your organization's cloud
                    infrastructure.
                  </p>

                  <p>
                    A candidate for this exam should have at least six months of
                    hands-on experience administering Azure, along with a strong
                    understanding of core Azure services, Azure workloads,
                    security, and governance. In addition, this role should have
                    experience using PowerShell, Azure CLI, Azure portal, and
                    Azure Resource Manager templates.
                  </p>

                  <h3 className="fw-bold">SKILLS MEASURED</h3>
                  <p>
                    NOTE: : The bullets that appear below each of the skills
                    measured are intended to illustrate how we are assessing
                    that skill. This list is not definitive or exhaustive.
                  </p>
                  <p>
                    NOTE: In most cases, exams do NOT cover preview features,
                    and some features will only be added to an exam when they
                    are GA (General Availability)
                  </p>
                </Tab>
                <Tab eventKey="requi" title="Prerequisite"></Tab>
                <Tab eventKey="profile" title="Curriculum">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Web Development ( Backend )
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Course Overview</li>
                            <li>Drilling into Data</li>
                            <li>Working with Models and Model Binding</li>
                            <li>Editing Data with Razor Pages</li>
                            <li>
                              Working with SQL Server and the Entity Framework
                              Core
                            </li>
                            <li>Building the User Interface</li>
                            <li>Integrating Client-side JavaScript and CSS</li>
                            <li>Working with the Internals of ASP.NET Core</li>
                            <li>Deploying ASP.NET Core Web Applications</li>
                            <li>
                              Building Web Applications with ASP.NET Core MVC
                            </li>
                            <li>Getting Started with Configuration Concepts</li>
                            <li>Applying the Options Pattern</li>
                            <li>Working with Configuration Providers</li>
                            <li>Logging in ASP.NET Core Quickstart</li>
                            <li>
                              Controlling What Messages are Logged in ASP.NET
                              Core Applications
                            </li>
                            <li>
                              Automating Logging of Standard Events in ASP.NET
                              Core
                            </li>
                            <li>
                              Building Better Log Entries to Enable Faster
                              Analysis
                            </li>
                            <li>Enabling Consumption</li>
                            <li>
                              Understanding Authentication and Authorization in
                              ASP.NET Core
                            </li>
                            <li>
                              Implementing Authentication with ASP.NET Core
                              Identity
                            </li>
                            <li>Applying an OpenIdConnect Identity Provider</li>
                            <li>Applying Authorization</li>
                            <li>
                              Adding Background Tasks to ASP.NET Core
                              Applications
                            </li>
                            <li>Building .NET Core Worker Services</li>
                            <li>Advanced Hosted Service Concepts</li>
                            <li>Running Worker Services in Production</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Web Development ( Front End )
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Course Overview</li>
                            <li>Introduction</li>
                            <li>Benefits & Features of Angular</li>
                            <li>Angular Architecture</li>
                            <li>Tooling</li>
                            <li>Tips, Tricks, & Gotchas</li>
                            <li>Angular: Present & Future</li>
                            <li>First Things First</li>
                            <li>Introduction to Components</li>
                            <li>Templates, Interpolation, and Directives</li>
                            <li>Data Binding & Pipes</li>
                            <li>More on Components</li>
                            <li>Building Nested Components</li>
                            <li>Services and Dependency Injection</li>
                            <li>Retrieving Data Using HTTP</li>
                            <li>Navigation and Routing Basics</li>
                            <li>
                              Navigation and Routing Additional Techniques
                            </li>
                            <li>Angular Modules</li>
                            <li>
                              Building, Testing, and Deploying with the CLI
                            </li>
                            <li>Form Basics in Angular</li>
                            <li>Data Binding in Angular Forms</li>
                            <li>Form Validation</li>
                            <li>HTTP Form Posting and Data Access</li>
                            <li>Third-party Form Controls</li>
                            <li>Angular CLI Setup and Verification</li>
                            <li>Generating a New Angular Application</li>
                            <li>Generating Code from Blueprints</li>
                            <li>Generating Routing Features</li>
                            <li>Building and Serving</li>
                            <li>Running Unit and End to End Tests</li>
                            <li>Tooling Features</li>
                            <li>How Styles Work in Angular</li>
                            <li>
                              Scalable, Maintainable CSS/SCSS Architecture in
                              Angular
                            </li>
                            <li>Creating Component Themes</li>
                            <li>Material Design</li>
                            <li>Getting Started</li>
                            <li>Layout Component</li>
                            <li>Displaying Real Data</li>
                            <li>Using Data Tables</li>
                            <li>Dialogs and Popups</li>
                            <li>The Product Description Component</li>
                            <li>Creating a Service to Get Album Data</li>
                            <li>Using Interfaces to Describe Data</li>
                            <li>Adding the Tracklisting Component</li>
                            <li>Displaying a List of Products</li>
                            <li>
                              Creating Navigation using the Angular Router
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Databases
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Sql Server</li>
                            <li>Concepts</li>
                            <li>Database Creation</li>
                            <li>Tables</li>
                            <li>CRUD Operations</li>
                            <li>Backup/ Restore</li>
                            <li>Interacting with Web Application</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="contact" title="Instructor">
                  <div className="d-flex flex-sm-row flex-column px-3 justify-content-center align-items-center mb-5">
                    <img
                      src="https://i.ibb.co/CVCp97m/FARUKH-KHAN.png"
                      alt="FARUKH KHAN"
                      width="200"
                      height="200"
                    />

                    <div className="ms-3">
                      <h5 className="fw-bold">FARUKH KHAN</h5>
                      <p>Instructor</p>
                      <p className="mb-0">
                        Microsoft MCT | MCSD | .NET | Javascript | Angular |
                        Azure Cloud | Azure | DevOps | Microsoft Certified
                        Trainer
                      </p>
                    </div>
                  </div>
                </Tab>
              </Tabs>

              <h3 className="fw-bold mb-0">Related</h3>
              <div className="row">
                <div className="col-sm-6 col-md-4 mt-4">
                  <div className="card w-100">
                    <img
                      src="https://i.ibb.co/3pV01zc/ASP-NET-Web-Applications.jpg"
                      className="card-img-top w-100"
                      style={{ borderRadius: 0, height: 130 }}
                      alt="..."
                    />
                    <div className="card-body d-flex flex-column align-items-center">
                      <div className="d-flex flex-column align-items-center img-par">
                        <div className="image d-flex flex-column align-items-center">
                          <img
                            src="https://i.ibb.co/CVCp97m/FARUKH-KHAN.png"
                            alt=""
                            width="60"
                          />
                        </div>
                        <h6 className="mt-2">FARUKH KHAN</h6>
                      </div>

                      <h5 className="card-title text-center my-card-title-font ">
                        ASP.NET Web Applications
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 mt-4">
                  <div className="card w-100">
                    <img
                      src="https://i.ibb.co/KmnkbPp/PHP-Laravel.jpg"
                      className="card-img-top w-100"
                      style={{ borderRadius: 0, height: 130 }}
                      alt="..."
                    />
                    <div className="card-body d-flex flex-column align-items-center">
                      <div className="d-flex flex-column align-items-center img-par">
                        <div className="image d-flex flex-column align-items-center">
                          <img
                            src="https://i.ibb.co/7gfCGj5/ABDUL-BASSIT-SURAHIO.png"
                            alt=""
                            width="60"
                          />
                        </div>
                        <h6 className="mt-2 ">Name</h6>
                      </div>

                      <h5 className="card-title text-center my-card-title-font ">
                        PHP Laravel
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 mt-4">
                  <div className="card w-100">
                    <img
                      src="https://i.ibb.co/vmWqn6k/MERN-Stack.jpg"
                      className="card-img-top w-100"
                      style={{ borderRadius: 0, height: 130 }}
                      alt="..."
                    />
                    <div className="card-body d-flex flex-column align-items-center">
                      <div className="d-flex flex-column align-items-center img-par">
                        <div className="image d-flex flex-column align-items-center">
                          <img
                            src="https://i.ibb.co/JBRprYC/WAQAS-QAMAR.png"
                            alt=""
                            width="60"
                          />
                        </div>
                        <h6 className="mt-2">Name</h6>
                      </div>

                      <h5 className="card-title text-center my-card-title-font ">
                        MERN Stack
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mt-4 mt-lg-5">
              <Paper elevation={10} className="p-3 border">
                <h6 className="fw-bold mb-0 details text-center text-sm-start">
                  Instructor: <span className="text-success"></span>
                </h6>
                <h6 className="fw-bold mb-0 details text-center text-sm-start">
                  Lectures: <span className="fw-normal">18</span>
                </h6>
                <h6 className="fw-bold mb-0 details text-center text-sm-start">
                  Duration: <span className="fw-normal">18 Weeks</span>
                </h6>
                <h6 className="fw-bold mb-0 details text-center text-sm-start">
                  Enrolled: <span className="fw-normal">0 Students</span>
                </h6>
                <h6 className="fw-bold mb-0 details text-center text-sm-start">
                  Language: <span className="fw-normal">Urdu / English</span>
                </h6>
                <Button
                  // onClick={() => push("/apply-now")}
                  variant="contained"
                  fullWidth
                  className="custom-button mt-3"
                >
                  Enroll Now
                </Button>
              </Paper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ASPNET;

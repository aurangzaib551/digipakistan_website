import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import { Tab, Tabs } from "react-bootstrap";

const CertifiedInformationSystemManager = () => {
  const [key, setKey] = useState("home");

  return (
    <>
      <div className="course-outlines mt">
        <div className="bg-img">
          <div className="container pt-5">
            <h1 className="fw-bold text-white">Courses</h1>
            <p className="mb-0 small fw-bold text-white">
              Home &bull; Available Programs &bull; Fast Track &bull; Certified
              Information Security Manager
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-9 mt-4 mt-lg-5">
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="fw-bold mb-0">
                  Certified Information Security Manager
                </h2>

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
                          Orientation
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
                            <li>CISM Orientation & Introduction Part I</li>
                            <li>CISM Orientation & Introduction Part II</li>
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
                          Information Security Governance
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
                            <li>Information Security Governance Overview</li>
                            <li>Importance of IS Governance.</li>
                            <li>Outcomes of IS Governance.</li>
                            <li>Business Goals and Objective</li>
                            <li>Roles and Responsibilities.</li>
                            <li>GRC (Governance, Risk and Compliance)</li>
                            <li>
                              Information Security Concept and Technologies
                            </li>
                            <li>Governance and 3rd Party Relationship</li>
                            <li>Information Security Governance Metric</li>
                            <li>Risk Management Metrics</li>
                            <li>Performance Measurement</li>
                            <li>Information Security Strategy Overview</li>
                            <li>Information Security Strategy Development</li>
                            <li>Awareness and Trainings</li>
                            <li>Audits, Compliance and Enforcement</li>
                            <li>Threat and Vulnerability Assessment</li>
                            <li>Risk Assessment</li>
                            <li>Risk Acceptance and Tolerance</li>
                            <li>Business Impact Assessment</li>
                            <li>Legal and Regulatory Requirements</li>
                            <li>Information Security Program Objectives</li>
                            <li>
                              Quiz - Practicing Exam Sample Questions /
                              Interactive Session
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
                          Information Risk Management and Compliance
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
                            <li>Risk Management Overview</li>
                            <li>Risk Management Importance & Challenges</li>
                            <li>Risk Models</li>
                            <li>Risk Management Strategy</li>
                            <li>
                              Effective Information Security Risk Management
                            </li>
                            <li>
                              Information Security Risk Management Concepts
                            </li>
                            <li>Technologies</li>
                            <li>Implementing Risk Management</li>
                            <li>Risk Management Process</li>
                            <li>Defining Risk Management Framework</li>
                            <li>Identification of Risk</li>
                            <li>Threats, Vulnerabilities & Controls</li>
                            <li>Analysis and Evaluation of Risk</li>
                            <li>Risk Treatment Plan</li>
                            <li>Information Asset Classification.</li>
                            <li>Impact Assessment and Analysis</li>
                            <li>Business Continuity Plan (RTO & RPO)</li>
                            <li>Service Delivery Objective</li>
                            <li>Third Party Service Providers</li>
                            <li>Training and Awareness</li>
                            <li>Risk Management Documentation</li>
                            <li>Quiz – Exam Practice Questions</li>
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
                          data-bs-target="#m1"
                          aria-expanded="false"
                          aria-controls="m1"
                        >
                          Information System Acquisition, Development and
                          Implement
                        </button>
                      </h2>
                      <div
                        id="m1"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Benefit Realization</li>
                            <li>Feasibly Study</li>
                            <li>System Acquisition Factors</li>
                            <li>Software Acquisition Process</li>
                            <li>Project vs Program Management</li>
                            <li>Project Objective, Planning, Scheduling</li>
                            <li>SDLC (Software Development Lifecycle)</li>
                            <li>Business Application Development Methods</li>
                            <li>System Development Tools</li>
                            <li>Virtualization</li>
                            <li>Input and Processing Controls</li>
                            <li>Application Controls and Testing</li>
                            <li>Type of Testing</li>
                            <li>Implementation Planning</li>
                            <li>Certification and Accreditation</li>
                            <li>Change Management</li>
                            <li>Configuration Management</li>
                            <li>Quiz – Sample Exam Question Review</li>
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
                          data-bs-target="#m2"
                          aria-expanded="false"
                          aria-controls="m2"
                        >
                          Information Security Program Development and
                          Management
                        </button>
                      </h2>
                      <div
                        id="m2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>
                              Information Security Program Development Overview
                            </li>
                            <li>
                              Outcome of Information Security Program
                              Development
                            </li>
                            <li>Information Security Program Objective</li>
                            <li>Information Security Program Concepts</li>
                            <li>
                              The Information Security Management Framework
                            </li>
                            <li>
                              Operational, Management and Administrative
                              Components
                            </li>
                            <li>
                              Defining and Information Security Program Road Map
                            </li>
                            <li>
                              Objective of Information Security Architecture
                            </li>
                            <li>
                              Enterprise Information Security Architecture
                            </li>
                            <li>Security Awareness, Training and Education</li>
                            <li>Program Development and Project Management</li>
                            <li>Risk Management</li>
                            <li>Business Case Development</li>
                            <li>Program Budgeting</li>
                            <li>
                              Information Security Problem Management Practices
                            </li>
                            <li>Vendor Management</li>
                            <li>Program Management Evaluation</li>
                            <li>
                              Controls, Controls and Technologies Categories.
                            </li>
                            <li>
                              Information Security Liaison Responsibilities
                            </li>
                            <li>
                              Technical Control Components and Architecture
                            </li>
                            <li>Security Program Metrics and Monitoring</li>
                            <li>Quiz – Exam Sample Questions</li>
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
                          data-bs-target="#m2"
                          aria-expanded="false"
                          aria-controls="m2"
                        >
                          Information Security Incident Management
                        </button>
                      </h2>
                      <div
                        id="m2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Incident Management Overview</li>
                            <li>Incident Response Procedure</li>
                            <li>Important of Incident Management</li>
                            <li>Incident Management Systems</li>
                            <li>Incident Response Technology Concept</li>
                            <li>Audit, Risk Management and Value Delivery</li>
                            <li>Resource and Performance Management</li>
                            <li>
                              Detail Plan of Action for Incident Management
                            </li>
                            <li>
                              Challenges in Developing and Incident Management
                              Plan
                            </li>
                            <li>Developing and Incident Response Plan</li>
                            <li>Business Impact Analysis</li>
                            <li>
                              Escalation Process for Effective Incident
                              Management
                            </li>
                            <li>
                              Business continuity and Disaster Recovery
                              Procedures
                            </li>
                            <li>Incident Management and Response Team</li>
                            <li>
                              Recovery Planning and Business Recovery Process
                            </li>
                            <li>Recovery Strategies & Recovery Sites</li>
                            <li>Reciprocal Agreements</li>
                            <li>Strategy Implementation</li>
                            <li>
                              Periodic Testing of the Response and Recovery
                              Plans
                            </li>
                            <li>
                              Testing for Infrastructure and Critical Busines
                              Application
                            </li>
                            <li>Post Incident Activities and Investigation</li>
                            <li>Quiz – Exam Sample Questions</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="contact" title="Instructor">
                  <div className="d-flex flex-sm-row flex-column px-3 justify-content-center align-items-center mb-5">
                    <img
                      src="https://i.ibb.co/SNsXX9Q/SAAD-MOTEN.png"
                      alt="SAAD MOTEN"
                      width="200"
                      height="200"
                    />

                    <div className="ms-3">
                      <h5 className="fw-bold">SAAD MOTEN</h5>
                      <p>Instructor</p>
                      <p className="mb-0">
                        20+ Years of Experience | CISSP, CISM, CISA, PMP, CLFE,
                        ISO 27001LA
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

export default CertifiedInformationSystemManager;

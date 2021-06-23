import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import { Tab, Tabs } from "react-bootstrap";

const CertifiedInformationSystemAuditor = () => {
  const [key, setKey] = useState("home");

  return (
    <>
      <div className="course-outlines mt">
        <div className="bg-img">
          <div className="container pt-5">
            <h1 className="fw-bold text-white">Courses</h1>
            <p className="mb-0 small fw-bold text-white">
              Home &bull; Available Programs &bull; Fast Track &bull; Certified
              Information Security Auditor
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-9 mt-4 mt-lg-5">
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="fw-bold mb-0">
                  Certified Information Security Auditor
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
                            <li>CISA Orientation & Introduction Part I</li>
                            <li>CISA Orientation & Introduction Part II</li>
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
                          The Process of Auditing of Information System
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
                            <li>IS Audit Objective and Functions</li>
                            <li>
                              IS Auditor Code of Professional Ethics Standard
                              and Guidelines Laws and Regulations
                            </li>
                            <li>CSA (Control Self – Assessment)</li>
                            <li>Audit Planning & Considerations</li>
                            <li>Risk Analysis and Risk Management Process</li>
                            <li>Control Classifications & Internal Controls</li>
                            <li>Information System Control Objective</li>
                            <li>Type of Audits Internal vs External</li>
                            <li>Audit Methodology and Audit Phases/Steps</li>
                            <li>Audit Objective and Audit Risk</li>
                            <li>Audit Programs & Procedures</li>
                            <li>Testing Methods and Process</li>
                            <li>Evidences Collection and Sampling</li>
                            <li>Interview and Observations</li>
                            <li>CAATs</li>
                            <li>Audit Reporting and Documentation</li>
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
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Governance and Management of Information Technology
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
                            <li>Governance of Enterprise IT</li>
                            <li>Get IT Implementation and Good Practices</li>
                            <li>Information Security Governance Issue</li>
                            <li>Cloud Computing</li>
                            <li>IT Functions</li>
                            <li>Segregation of Duties</li>
                            <li>Change Management</li>
                            <li>Information Security Strategy</li>
                            <li>Polices, Standard, Procedures</li>
                            <li>IT Balance Scorecard</li>
                            <li>IT Portfolio Management</li>
                            <li>Risk Management Program</li>
                            <li>Business Impact Analysis</li>
                            <li>Process Maturity Frameworks</li>
                            <li>Financial Management</li>
                            <li>Tools and Techniques</li>
                            <li>Policy Management</li>
                            <li>BCP/DR Overview</li>
                            <li>BCP Components and Auditing</li>
                            <li>Quiz – Sample Example Question</li>
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
                            <li>IT Service Management</li>
                            <li>ITSM Frameworks</li>
                            <li>SLA Tools</li>
                            <li>OS and DB Review</li>
                            <li>Network and IS Operations Review</li>
                            <li>Capacity, Release, Patch Management</li>
                            <li>Database Management System & Controls</li>
                            <li>IT Asset Management</li>
                            <li>Incident Management</li>
                            <li>Problem Management</li>
                            <li>Change Management</li>
                            <li>End-user Computing</li>
                            <li>BCP/DR Recovery Strategies</li>
                            <li>Data Storage Resiliency</li>
                            <li>Network Protection</li>
                            <li>Quiz – Exam Sample Question Review</li>
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
                          Protection of Information Assets
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
                            <li>Information Security Management System</li>
                            <li>Security Controls</li>
                            <li>Security Awareness Training</li>
                            <li>Control Methods</li>
                            <li>Physical Access Controls and Audits</li>
                            <li>Logical Access Controls and Audits</li>
                            <li>Network and Infrastructure Security</li>
                            <li>Data Classification</li>
                            <li>DLP Solutions</li>
                            <li>Authentication, Authorization and Access</li>
                            <li>
                              Mobile Computing Controls and Data Access Controls
                            </li>
                            <li>Computer Crimes</li>
                            <li>Security Incident Handling</li>
                            <li>Auditing ISM Framework</li>
                            <li>Security Testing Techniques</li>
                            <li>Investigation Techniques</li>
                            <li>Auditing Network Infrastructure</li>
                            <li>Penetration Testing</li>
                            <li>Quiz – Sample Exam Question Review</li>
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

export default CertifiedInformationSystemAuditor;

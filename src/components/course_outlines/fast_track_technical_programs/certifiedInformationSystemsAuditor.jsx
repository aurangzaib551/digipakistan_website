import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useMediaQuery } from "react-responsive";
import Button from "@material-ui/core/Button";
import Copyright from "../../common/copyright/copyright";

const CertifiedInformationSystemsAuditor = () => {
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
        <h1 className="text-center fw-bold mx-3">
          Certified Information Systems Auditor (CISA)
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
                  The Certified Information Systems Auditor (CISA) course covers
                  all the six domains of the CISA exam offered by the
                  Information Systems Audit and Control Association (ISACA).
                  CISA exam has become the industry standard for the IT
                  auditing, control and security. The course helps the students
                  to gain relevant, up-to-date and concise knowledge along with
                  hands-on practice exams to prepare for the CISA certification
                  exam.
                </p>

                <p className="text-justify">
                  CISA is one of the most popular and high-demand IT
                  certifications available in the market, approximately, more
                  than 60,000 professionals hold CISA certification. The CISA
                  certification is also consistently named one of the best
                  professional certifications to have by the leading analysts
                  around the world. The course offers the students to gain
                  comprehensive knowledge and concepts that are required to pass
                  the CISA certification exam.
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
                <ul className="list-unstyled">
                  <li className="fw-bold">
                    General Information About the Exam
                    <ul className="fw-normal">
                      <li>About the CISA Exam</li>
                      <li>Answering Questions</li>
                      <li>Exam Scoring</li>
                      <li>Certification Steps</li>
                      <li>Example Questions</li>
                    </ul>
                  </li>
                  <li className="fw-bold mt-3">
                    Domain 1: Information System Auditing Process
                    <ul className="fw-normal">
                      <li>
                        Planning
                        <ul>
                          <li>
                            IS Audit Standards, Guidelines and Codes of Ethics
                          </li>
                          <li>Business Processes</li>
                          <li>Types of Controls</li>
                          <li>Risk-based Audit Planning</li>
                          <li>Types of Audits and Assessments</li>
                        </ul>
                      </li>
                    </ul>
                    <ul className="fw-normal">
                      <li>
                        Execution
                        <ul>
                          <li>Audit Project Management</li>
                          <li>Sampling Methodology</li>
                          <li>Audit Evidence Collection Techniques</li>
                          <li>Data Analytics</li>
                          <li>Reporting and Communication Techniques</li>
                          <li>
                            Quality Assurance and Improvement of the Audit
                            Process
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="fw-bold mt-3">
                    Domain 2: Governance and Management of IT
                    <ul className="fw-normal">
                      <li>
                        IT Governance and IT Strategy
                        <ul>
                          <li>IT-related Frameworks</li>
                          <li>IT Standards, Policies and Procedures</li>
                          <li>Organizational Structure</li>
                          <li>Enterprise Architecture</li>
                          <li>Enterprise Risk Management</li>
                          <li>Maturity Models</li>
                          <li>
                            Laws, Regulations and Industry Standards Affecting
                            the Organization
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <ul className="fw-normal">
                      <li>
                        IT Management
                        <ul>
                          <li>IT Resource Management</li>
                          <li>
                            IT Service Provider Acquisition and Management
                          </li>
                          <li>IT Performance Monitoring and Reporting</li>
                          <li>
                            Quality Assurance and Quality Management of IT
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="fw-bold mt-3">
                    Domain 3: Information Systems Acquisition, Development and
                    Implementation
                    <ul className="fw-normal">
                      <li>
                        Information Systems Acquisition and Development
                        <ul>
                          <li>Project Governance and Management</li>
                          <li>Business Case and Feasibility Analysis</li>
                          <li>System Development Methodologies</li>
                          <li>Control Identification and Design</li>
                        </ul>
                      </li>
                    </ul>
                    <ul className="fw-normal">
                      <li>
                        Information Systems Acquisition and Development
                        <ul>
                          <li>Testing Methodologies</li>
                          <li>Configuration and Release Management</li>
                          <li>
                            System Migration, Infrastructure Deployment and Data
                            Conversion
                          </li>
                          <li>Post-implementation Review</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="fw-bold mt-3">
                    Domain 4: IS Operations and Business Resilience
                    <ul className="fw-normal">
                      <li>
                        Information Systems Operations o Common Technology
                        Components
                        <ul>
                          <li>IT Asset Management</li>
                          <li>
                            Job Scheduling and Production Process Automation
                          </li>
                          <li>System Interfaces</li>
                          <li>End-user Computing</li>
                          <li>Data Governance</li>
                          <li>Systems Performance Management</li>
                          <li>Problem and Incident Management</li>
                          <li>
                            Change, Configuration, Release and Patch Management
                          </li>
                          <li>IT Service Level Management</li>
                          <li>Database Management</li>
                        </ul>
                      </li>
                    </ul>
                    <ul className="fw-normal">
                      <li>
                        Business Resilience
                        <ul>
                          <li>Business Impact Analysis</li>
                          <li>System Resiliency</li>
                          <li>Data Backup, Storage and Restoration</li>
                          <li>Business Continuity Plan</li>
                          <li>Disaster Recovery Plans</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="fw-bold mt-3">
                    Domain 5: Information Asset Security and Control
                    <ul className="fw-normal">
                      <li>
                        Information Asset Security Frameworks, Standards and
                        Guidelines
                        <ul>
                          <li>Privacy Principles</li>
                          <li>Physical Access and Environmental Controls</li>
                          <li>Identity and Access Management</li>
                          <li>Network and End-point Security</li>
                          <li>Data Classification</li>
                          <li>
                            Data Encryption and Encryption-related Techniques
                          </li>
                          <li>Public Key Infrastructure</li>
                          <li>Web-based Communication Technologies</li>
                          <li>Virtualized Environments</li>
                          <li>
                            Mobile, Wireless and Internet-of-things Devices
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <ul className="fw-normal">
                      <li>
                        Security Event Management
                        <ul>
                          <li>Security Awareness Training and Programs</li>
                          <li>
                            Information System Attack Methods and Techniques
                          </li>
                          <li>Security Testing Tools and Techniques</li>
                          <li>Security Monitoring Tools and Techniques</li>
                          <li>Incident Response Management</li>
                          <li>Evidence Collection and Forensics</li>
                        </ul>
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

export default CertifiedInformationSystemsAuditor;

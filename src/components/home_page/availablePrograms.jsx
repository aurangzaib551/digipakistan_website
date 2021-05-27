import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { useMediaQuery } from "react-responsive";
import { useHistory } from "react-router-dom";

const AvailablePrograms = () => {
  // Media Query
  const isLaptop = useMediaQuery({
    query: "(max-width: 992px)",
  });

  // Object Destructuring
  const { push } = useHistory();

  const go = (link) => {
    push(link);
  };

  return (
    <Container>
      <div className="available-programs">
        <h2 className="fw-bold h1 text-center mx-3">Available Programs</h2>
        <div className="d-flex flex-column flex-lg-row justify-content-between mb-3 flex-wrap">
          <Paper
            elevation={5}
            onClick={() => go("/fastTrackTechnicalProgram")}
            className="p-3 border mt-4 paper"
          >
            <div className="d-flex">
              <img
                src="https://i.ibb.co/9YZzbr5/technical.png"
                width="90"
                height="90"
                alt="Fast Track Technical Program"
                className="technical-img"
              />
              <div className="d-flex flex-column justify-content-center ms-3">
                <p className="mb-0 small fw-bold">
                  <small>Fast Track</small>
                </p>
                <p className="fw-bold mb-1 title">Technical Program</p>
                <div className="d-flex align-items-center total-course">
                  <img
                    src="https://i.ibb.co/DRpg1vm/book.png"
                    width="25"
                    alt="Total Course"
                  />
                  <p className="mb-0 ms-2 ms-sm-3">31 Courses</p>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column flex-sm-row flex-wrap courses mt-2">
              {isLaptop ? (
                <>
                  <p className="mb-0 mt-2 px-2">CompTIA IT Fundamentals</p>
                  <p className="mb-0 mt-2 px-2">
                    Microsoft Front End Development
                  </p>
                  <p className="mb-0 mt-2 px-2">ASP.NET Web Applications</p>
                  <p className="mb-0 mt-2 px-2">PHP Laravel</p>
                  <p className="mb-0 mt-2 px-2">MERN Stack</p>
                  <p className="mb-0 mt-2 px-2">SQL Server Specialist</p>
                  <p className="mb-0 mt-2 px-2">
                    Oracle Database Administrator (OCP : 12C DBA)
                  </p>
                  <p className="mb-0 mt-2 px-2">Android Apps Development</p>
                  <p className="mb-0 mt-2 px-2">
                    Kotlin Mobile Apps Development
                  </p>
                  <p className="mb-0 mt-2 px-2">iOS Apps Development</p>
                  <p className="mb-0 mt-2 px-2">
                    Xamarin Mobile Apps Development
                  </p>
                  <p className="mb-0 mt-2 px-2">
                    React Native Web &amp; Apps Development
                  </p>
                  <p className="mb-0 mt-2 px-2">Game Development</p>
                  <p className="mb-0 mt-2 px-2">Cisco CCNA Networking</p>
                  <p className="mb-0 mt-2 px-2">
                    CompTIA Security + (SYO - 601)
                  </p>
                  <p className="mb-0 mt-2 px-2">
                    Certified Ethical Hacking (CEH)
                  </p>
                  <p className="mb-0 mt-2 px-2">
                    Certified Hacking Forensic Investigator(CHFI)
                  </p>
                  <p className="mb-0 mt-2 px-2">
                    Penetration Testing Security Analyst (ECSA)
                  </p>
                  <p className="mb-0 mt-2 px-2">
                    Certified Information System Auditor (CISA)
                  </p>
                  <p className="mb-0 mt-2 px-2">
                    Certified Information Security Management (CISM)
                  </p>
                  <p className="mb-0 mt-2 px-2">AWS Practitioner</p>
                  <p className="mb-0 mt-2 px-2">AWS Solution Architect</p>
                  <p className="mb-0 mt-2 px-2">AWS SysOps Administrator</p>
                  <p className="mb-0 mt-2 px-2">AWS Developer Associate</p>
                  <p className="mb-0 mt-2 px-2">
                    Microsoft Azure Cloud Fundamentals
                  </p>
                  <p className="mb-0 mt-2 px-2">
                    Microsoft Cloud Administrator 103 - 104
                  </p>
                  <p className="mb-0 mt-2 px-2">Google Cloud Engineer</p>
                  <p className="mb-0 mt-2 px-2">Python for Everyone</p>
                  <p className="mb-0 mt-2 px-2">Machine Learning &amp; AI</p>
                  <p className="mb-0 mt-2 px-2">Data Science</p>
                  <p className="mb-0 mt-2 px-2">
                    Big Data &amp; Headoop Ecosystem
                  </p>
                </>
              ) : (
                <>
                  <p className="mb-0 mt-2 px-2">IT Fundamentals</p>
                  <p className="mb-0 mt-2 px-2">Microsoft Front End</p>
                  <p className="mb-0 mt-2 px-2">ASP.NET</p>
                  <p className="mb-0 mt-2 px-2">PHP Laravel</p>
                  <p className="mb-0 mt-2 px-2">MERN Stack</p>
                  <p className="mb-0 mt-2 px-2">SQL Server</p>
                  <p className="mb-0 mt-2 px-2">Oracle DBA</p>
                  <p className="mb-0 mt-2 px-2">Android Apps</p>
                  <p className="mb-0 mt-2 px-2">Kotlin Apps</p>
                  <p className="mb-0 mt-2 px-2">iOS Apps</p>
                  <p className="mb-0 mt-2 px-2">Xamarin Apps</p>
                  <p className="mb-0 mt-2 px-2">React Native</p>
                  <p className="mb-0 mt-2 px-2">Game Development</p>
                  <p className="mb-0 mt-2 px-2">CCNA</p>
                  <p className="mb-0 mt-2 px-2">CompTIA Security</p>
                  <p className="mb-0 mt-2 px-2">CEH</p>
                  <p className="mb-0 mt-2 px-2">CHFI</p>
                  <p className="mb-0 mt-2 px-2">ECSA</p>
                  <p className="mb-0 mt-2 px-2">CISA</p>
                  <p className="mb-0 mt-2 px-2">CISM</p>
                  <p className="mb-0 mt-2 px-2">AWS Practitioner</p>
                  <p className="mb-0 mt-2 px-2">AWS Sol. Architect</p>
                  <p className="mb-0 mt-2 px-2">AWS SysOps</p>
                  <p className="mb-0 mt-2 px-2">AWS Developer</p>
                  <p className="mb-0 mt-2 px-2">Azure Fundamentals</p>
                  <p className="mb-0 mt-2 px-2">
                    Microsoft Cloud Administrator
                  </p>
                  <p className="mb-0 mt-2 px-2">Google Cloud</p>
                  <p className="mb-0 mt-2 px-2">Python</p>
                  <p className="mb-0 mt-2 px-2">ML &amp; AI</p>
                  <p className="mb-0 mt-2 px-2">Data Science</p>
                  <p className="mb-0 mt-2 px-2">Big Data</p>
                </>
              )}
            </div>
          </Paper>
          <Paper
            elevation={5}
            onClick={() => go("/fastTrackNonTechnicalProgram")}
            className="p-3 mt-4 border paper"
          >
            <div className="d-flex">
              <img
                src="https://i.ibb.co/5TL95M1/non-technical.png"
                width="90"
                height="90"
                alt="Fast Track Non-Technical Program"
                className="technical-img tech-sec-img"
              />
              <div className="d-flex flex-column justify-content-center ms-3">
                <p className="mb-0 small fw-bold">
                  <small>Fast Track</small>
                </p>
                <p className="fw-bold mb-1 title">Non-Technical Program</p>
                <div className="d-flex align-items-center total-course">
                  <img
                    src="https://i.ibb.co/DRpg1vm/book.png"
                    width="25"
                    alt="Total Course"
                  />
                  <p className="mb-0 ms-2 ms-sm-3">15 Courses</p>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column flex-sm-row flex-wrap courses pb-lg-4 mt-2">
              <p className="mb-0 mt-2 px-2">QuickBooks ERP</p>
              <p className="mb-0 mt-2 px-2">SAP ERP</p>
              <p className="mb-0 mt-2 px-2">
                Project Management Professional (PMP)
              </p>
              <p className="mb-0 mt-2 px-2">Amazon FBA Business</p>
              <p className="mb-0 mt-2 px-2">
                Search Enginer Optimization (SEO)
              </p>
              <p className="mb-0 mt-2 px-2">Digital Marketing</p>
              <p className="mb-0 mt-2 px-2">Social Media Marketing (SMM)</p>
              <p className="mb-0 mt-2 px-2">Graphic Design</p>
              <p className="mb-0 mt-2 px-2">UI / UX Design</p>
              <p className="mb-0 mt-2 px-2">Interior Design</p>
              <p className="mb-0 mt-2 px-2">3D Maya Max Animation</p>
              <p className="mb-0 mt-2 px-2">Video Editing</p>
              <p className="mb-0 mt-2 px-2">AutoCad</p>
              <p className="mb-0 mt-2 px-2">Microsoft Office</p>
              <p className="mb-0 mt-2 px-2">Enterprenership</p>
            </div>
          </Paper>
          <Paper
            elevation={5}
            onClick={() => go("/associateCertificationProgram")}
            className="p-3 mt-4 border paper"
          >
            <div className="d-flex">
              <img
                src="https://i.ibb.co/8swpxtt/associate.png"
                width="80"
                height="80"
                alt="Associate Certification Program"
                className="associate-img"
              />
              <div className="d-flex flex-column justify-content-center ms-3">
                <p className="mb-0 small fw-bold">
                  <small>6 Months</small>
                </p>
                <p className="fw-bold mb-1 title associate-title">
                  Associate Certification Program
                </p>
                <div className="d-flex align-items-center total-course">
                  <img
                    src="https://i.ibb.co/DRpg1vm/book.png"
                    width="25"
                    alt="Total Course"
                  />
                  <p className="mb-0 ms-2 ms-sm-3">8 Courses</p>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column flex-sm-row flex-wrap courses mt-2">
              <p className="mb-0 mt-2 px-2">Digital Forensic Cyber Security</p>
              <p className="mb-0 mt-2 px-2">
                Penetration Testing Cyber Security
              </p>
              <p className="mb-0 mt-2 px-2">
                CISSP Cyber Security Professional
              </p>
              <p className="mb-0 mt-2 px-2">Artificial Intelligence</p>
              <p className="mb-0 mt-2 px-2">AWS Cloud Computing</p>
              <p className="mb-0 mt-2 px-2">Internet of Things (IoT)</p>
              <p className="mb-0 mt-2 px-2">BlockChain Technology</p>
              <p className="mb-0 mt-2 px-2">
                Full Stack Web Development (MCSA)
              </p>
            </div>
          </Paper>
        </div>
      </div>
    </Container>
  );
};

export default AvailablePrograms;

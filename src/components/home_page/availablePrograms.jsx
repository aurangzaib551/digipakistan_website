import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

const AvailablePrograms = () => {
  return (
    <Container className="available-programs h-100">
      <h1 className="fw-bold text-center">Available Programs</h1>
      <div className="d-flex flex-column flex-lg-row justify-content-between mb-3 flex-wrap">
        <Paper elevation={5} className="p-3 pb-2 border mt-4 paper h-100">
          <div className="d-flex">
            <img
              src="https://i.ibb.co/9YZzbr5/technical.png"
              width="90"
              alt="Fast Track Technical Program"
            />
            <div className="d-flex flex-column justify-content-center ms-3">
              <p className="mb-0 small fw-bold">
                <small>Fast Track</small>
              </p>
              <p className="fw-bold mb-1 title">Technical Program</p>
              <div className="d-flex align-items-center">
                <img
                  src="https://i.ibb.co/DRpg1vm/book.png"
                  width="25"
                  alt="Total Course"
                />
                <p className="mb-0 ms-3">31 Courses</p>
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap courses mt-2">
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
            <p className="mb-0 mt-2 px-2">Microsoft Cloud Administrator</p>
            <p className="mb-0 mt-2 px-2">Google Cloud</p>
            <p className="mb-0 mt-2 px-2">Python</p>
            <p className="mb-0 mt-2 px-2">ML &amp; AI</p>
            <p className="mb-0 mt-2 px-2">Data Science &amp; Big Data</p>
          </div>
        </Paper>
        <Paper elevation={5} className="p-3 mt-4 pb-lg-5 border paper h-100">
          <div className="d-flex">
            <img
              src="https://i.ibb.co/5TL95M1/non-technical.png"
              width="90"
              alt="Fast Track Non-Technical Program"
            />
            <div className="d-flex flex-column justify-content-center ms-3">
              <p className="mb-0 small fw-bold">
                <small>Fast Track</small>
              </p>
              <p className="fw-bold mb-1 title">Non-Technical Program</p>
              <div className="d-flex align-items-center">
                <img
                  src="https://i.ibb.co/DRpg1vm/book.png"
                  width="25"
                  alt="Total Course"
                />
                <p className="mb-0 ms-3">15 Courses</p>
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap courses pb-lg-4 mt-2">
            <p className="mb-0 mt-2 px-2">QuickBooks ERP</p>
            <p className="mb-0 mt-2 px-2">SAP ERP</p>
            <p className="mb-0 mt-2 px-2">
              Project Management Professional (PMP)
            </p>
            <p className="mb-0 mt-2 px-2">Amazon FBA Business</p>
            <p className="mb-0 mt-2 px-2">Search Enginer Optimization (SEO)</p>
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
        <Paper elevation={5} className="p-3 mt-4 border paper h-100">
          <div className="d-flex">
            <img
              src="https://i.ibb.co/8swpxtt/associate.png"
              width="80"
              alt="Associate Certification Program"
            />
            <div className="d-flex flex-column justify-content-center ms-3">
              <p className="mb-0 small fw-bold">
                <small>6 Months</small>
              </p>
              <p className="fw-bold mb-1 title">
                Associate Certification Program
              </p>
              <div className="d-flex align-items-center">
                <img
                  src="https://i.ibb.co/DRpg1vm/book.png"
                  width="25"
                  alt="Total Course"
                />
                <p className="mb-0 ms-3">8 Courses</p>
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap courses mt-2">
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
            <p className="mb-0 mt-2 px-2">Microsoft Cloud Administrator</p>
            <p className="mb-0 mt-2 px-2">Google Cloud</p>
            <p className="mb-0 mt-2 px-2">Python</p>
            <p className="mb-0 mt-2 px-2">ML &amp; AI</p>
            <p className="mb-0 mt-2 px-2">Data Science &amp; Big Data</p>
          </div>
        </Paper>
      </div>
    </Container>
  );
};

export default AvailablePrograms;

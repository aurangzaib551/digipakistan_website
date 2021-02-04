import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useMediaQuery } from "react-responsive";
import Button from "@material-ui/core/Button";
import Copyright from "../../common/copyright/copyright";

const CertifiedHackingForensicInvestigator = () => {
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
          Certified Hacking Forensic Investigator (CHFI)
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
                  A CHFI is a skilled professional trained in the application of
                  computer investigation and analysis techniques in the
                  interests of determining potential legal evidence. CHFI
                  professionals are aware of legally sound detailed
                  methodological approach to computer forensics and evidence
                  analysis.
                </p>

                <p className="text-justify">
                  Computer Hacking Forensic Investigation (CHFI) is the process
                  of detecting hacking attacks and properly extracting evidence
                  to report the crime and conduct audits to prevent future
                  attacks. Computer crime in today’s cyber world is on the rise.
                  Computer Investigation techniques are being used by police,
                  government and corporate entities globally and many of them
                  turn to EC-Council for our Computer Hacking Forensic
                  Investigator CHFI Certification Program.
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
                <ul>
                  <li>Computer Forensics in Today's World</li>
                  <li>Computer Forensics Investigation Process</li>
                  <li>Searching and Seizing Computers</li>
                  <li>Digital Evidence</li>
                  <li>First Responder Procedures</li>
                  <li>Computer Forensics Lab</li>
                  <li>Understanding Hard Disks and File Systems</li>
                  <li>Windows Forensics</li>
                  <li>Data Acquisition and Duplication</li>
                  <li>Recovering Deleted Files and Deleted Partitions</li>
                  <li>Forensics Investigation Using AccessData FTK</li>
                  <li>Forensics Investigation Using EnCase</li>
                  <li>Steganography and Image File Forensics</li>
                  <li>Application Password Crackers</li>
                  <li>Log Capturing and Event Correlation</li>
                  <li>
                    Network Forensics, Investigating Logs and Investigating
                    Network Traffic
                  </li>
                  <li>Investigating Wireless Attacks</li>
                  <li>Investigating Web Attacks</li>
                  <li>Tracking Emails and Investigating Email Crimes</li>
                  <li>Mobile Forensics</li>
                  <li>Investigative Reports</li>
                  <li>Becoming an Expert Witness</li>
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

export default CertifiedHackingForensicInvestigator;

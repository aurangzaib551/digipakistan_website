import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import Copyright from "../components/common/copyright/copyright";
import { useHistory } from "react-router-dom";

const AssociateCertificationProgram = () => {
  // Object Destructuring
  const { push } = useHistory();

  const go = (link) => {
    setTimeout(() => {
      push(link);
    }, 400);
  };
  return (
    <>
      <div className="all-programs-bg mt d-flex flex-column justify-content-center px-lg-5">
        <h2 className="fw-bold text-white text-center text-lg-start">
          Associate Certification Program
        </h2>
        <p className="mb-0 small text-white para text-center text-lg-start px-3 px-lg-0 text-justify">
          A continuously evolving stack of Information Technology Programs
          consoling the latest technologies are available at DigiPAKISTAN and
          all you have to do is to enrol yourself in your desired course.
        </p>
      </div>
      <Container className="d-flex all-programs flex-wrap justify-content-center pb-5 mb-5">
        <ButtonBase
          onClick={() =>
            go("/associateCertificationProgram/digitalForensicCyberSecurity")
          }
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 border-success align-items-center d-flex"
          >
            <i className="fas fa-shield-alt fa-2x me-3"></i>
            <p className="fw-bold mb-0">Digital Forensic Cyber Security</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() =>
            go("/associateCertificationProgram/penetrationTestingCyberSecurity")
          }
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 three-color align-items-center d-flex"
          >
            <i className="fas fa-shield-alt fa-2x me-3"></i>
            <p className="fw-bold mb-0">Penetration Testing Cyber Security</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/associateCertificationProgram/cissp")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 four-color align-items-center d-flex"
          >
            <i className="fas fa-shield-alt fa-2x me-3"></i>
            <p className="fw-bold mb-0">CISSP Cyber Security Professional</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() =>
            go("/associateCertificationProgram/artificialIntelligence")
          }
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 five-color align-items-center d-flex"
          >
            <i className="fas fa-robot fa-2x me-3"></i>
            <p className="fw-bold mb-0">Artificial Intelligence</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/associateCertificationProgram/awsCloudComputing")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 seven-color align-items-center d-flex"
          >
            <i className="fab fa-aws fa-2x me-3"></i>
            <p className="fw-bold mb-0">AWS Cloud Computing</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/associateCertificationProgram/internetOfThings")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 eight-color align-items-center d-flex"
          >
            <i className="fas fa-wifi fa-2x me-3"></i>
            <p className="fw-bold mb-0">Internet of Things (IoT)</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() =>
            go("/associateCertificationProgram/blockchainTechnology")
          }
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 nine-color align-items-center d-flex"
          >
            <i className="fab fa-hive fa-2x me-3"></i>
            <p className="fw-bold mb-0">BlockChain Technology</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() =>
            go("/associateCertificationProgram/fullStackWebDevelopment")
          }
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 thirteen-color align-items-center d-flex"
          >
            <i className="fas fa-code fa-2x me-3"></i>
            <p className="fw-bold mb-0">Full Stack Web Development (MCSA)</p>
          </Paper>
        </ButtonBase>
      </Container>
      <div className="margin-top">
        <Copyright />
      </div>
    </>
  );
};

export default AssociateCertificationProgram;

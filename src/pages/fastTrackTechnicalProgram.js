import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import Copyright from "../components/common/copyright/copyright";
import { useHistory } from "react-router-dom";

const FastTrackTechnicalProgram = () => {
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
          Fast Track Technical Programs (3 Months)
        </h2>
        <p className="mb-0 small text-white para text-center text-lg-start px-3 px-lg-0 text-justify">
          A continuously evolving stack of Information Technology Programs
          consoling the latest technologies are available at DigiPAKISTAN and
          all you have to do is to enrol yourself in your desired course.
        </p>
      </div>
      <Container className="d-flex all-programs flex-wrap justify-content-center pb-5">
        <ButtonBase
          onClick={() => go("/fastTrackTechnicalProgram/comptiaItFundamentals")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 border-success align-items-center d-flex"
          >
            <i className="fas fa-cogs fa-2x me-2"></i>
            <p className="fw-bold mb-0 ms-2">CompTIA IT Fundamentals</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() =>
            go("/fastTrackTechnicalProgram/microsoftFrontEndDevelopment")
          }
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 three-color align-items-center d-flex"
          >
            <i className="fas fa-code fa-2x me-2"></i>
            <p className="fw-bold mb-0 ms-2">Microsoft Front End Development</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() =>
            go("/fastTrackTechnicalProgram/aspDotNetWebApplications")
          }
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 four-color align-items-center d-flex"
          >
            <i className="fas fa-code fa-2x me-2"></i>
            <p className="fw-bold mb-0 ms-2">ASP.NET Web Applications</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/fastTrackTechnicalProgram/phpLaravel")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 five-color align-items-center d-flex"
          >
            <i className="fab fa-php fa-2x me-2"></i>
            <p className="fw-bold mb-0 ms-2">PHP Laravel</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/fastTrackTechnicalProgram/mernStack")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 seven-color align-items-center d-flex"
          >
            <i className="fab fa-react fa-2x me-2"></i>
            <p className="fw-bold mb-0 ms-2">MERN Stack</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/fastTrackTechnicalProgram/sqlServerSpecialist")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 eight-color align-items-center d-flex"
          >
            <i className="fas fa-database fa-2x me-2"></i>
            <p className="fw-bold mb-0 ms-2">SQL Server Specialist</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() =>
            go("/fastTrackTechnicalProgram/oracleDatabaseAdministrator")
          }
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 nine-color align-items-center d-flex"
          >
            <i className="fas fa-database fa-2x me-2"></i>
            <p className="fw-bold mb-0 ms-2">
              Oracle Database Administrator (OCP : 12C DBA)
            </p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() =>
            go("/fastTrackTechnicalProgram/androidAppsDevelopment")
          }
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 thirteen-color align-items-center d-flex"
          >
            <i className="fab fa-android fa-2x me-2"></i>
            <p className="fw-bold mb-0 ms-2">Android Apps Development</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/fastTrackTechnicalProgram/kotlinAppsDevelopment")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 ten-color align-items-center d-flex"
          >
            <i className="fas fa-mobile fa-2x me-2"></i>
            <p className="fw-bold mb-0 ms-2">Kotlin Mobile Apps Development</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/fastTrackTechnicalProgram/iOSAppsDevelopment")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 eleven-color align-items-center d-flex"
          >
            <i className="fab fa-apple fa-2x me-2"></i>
            <p className="fw-bold mb-0 ms-2">IOS Apps Development</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() =>
            go("/fastTrackTechnicalProgram/xamarinAppsDevelopment")
          }
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 twenty-color align-items-center d-flex"
          >
            <i className="fas fa-times-circle fa-2x me-2"></i>
            <p className="fw-bold mb-0 ms-2">Xamarin Mobile Apps Development</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() =>
            go("/fastTrackTechnicalProgram/reactNativeWebAndAppsDevelopment")
          }
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 twelve-color align-items-center d-flex"
          >
            <i className="fab fa-react fa-2x me-2"></i>
            <p className="fw-bold mb-0 ms-2">
              React Native Web &amp; Apps Development
            </p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/fastTrackTechnicalProgram/gameDevelopment")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 fifteen-color align-items-center d-flex"
          >
            <i className="fas fa-gamepad fa-2x me-2"></i>
            <p className="fw-bold mb-0 ms-2">Game Development</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/fastTrackTechnicalProgram/ciscoCCNANetworking")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 fourteen-color align-items-center d-flex"
          >
            <i className="fas fa-project-diagram fa-2x me-2"></i>
            <p className="fw-bold mb-0 ms-2">Cisco CCNA Networking</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/fastTrackTechnicalProgram/comptiaSecurity")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 sixteen-color align-items-center d-flex"
          >
            <i className="fas fa-shield-alt fa-2x me-2"></i>
            <p className="fw-bold mb-0 ms-2">CompTIA Security + (SYO - 601)</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/fastTrackTechnicalProgram/ceh")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 twentytwo-color align-items-center d-flex"
          >
            <i className="fas fa-shield-alt fa-2x me-2"></i>
            <p className="fw-bold mb-0 ms-2">Certified Ethical Hacking (CEH)</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/fastTrackTechnicalProgram/chfi")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 twentyone-color align-items-center d-flex"
          >
            <i className="fas fa-shield-alt fa-2x me-2"></i>
            <p className="fw-bold mb-0 ms-2">
              Certified Hacking Forensic Investigator (CHFI)
            </p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/fastTrackTechnicalProgram/ecsa")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 twentythree-color align-items-center d-flex"
          >
            <i className="fas fa-shield-alt fa-2x me-2"></i>
            <p className="fw-bold mb-0 ms-2">
              Penetration Testing Security Analyst (ECSA)
            </p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/fastTrackTechnicalProgram/cisa")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 twentyfive-color align-items-center d-flex"
          >
            <i className="fas fa-shield-alt fa-2x me-2"></i>
            <p className="fw-bold mb-0 ms-2">
              Certified Information Systems Auditor (CISA)
            </p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/fastTrackTechnicalProgram/cism")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 twentysix-color align-items-center d-flex"
          >
            <i className="fas fa-times-circle fa-2x me-2"></i>
            <p className="fw-bold mb-0 ms-2">
              Certified Information Security Manager (CISM)
            </p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/fastTrackTechnicalProgram/awsPractitioner")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 twentyfour-color align-items-center d-flex"
          >
            <i className="fab fa-aws fa-2x me-3"></i>
            <p className="fw-bold mb-0 ms-2">AWS Practitioner</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/fastTrackTechnicalProgram/awsSolutionArchitect")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 twentyseven-color align-items-center d-flex"
          >
            <i className="fab fa-aws fa-2x me-3"></i>
            <p className="fw-bold mb-0 ms-2">AWS Solution Architect</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() =>
            go("/fastTrackTechnicalProgram/awsSysOpsAdministrator")
          }
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 twentyeight-color align-items-center d-flex"
          >
            <i className="fab fa-aws fa-2x me-3"></i>
            <p className="fw-bold mb-0 ms-2">AWS SysOps Administrator</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/fastTrackTechnicalProgram/awsDeveloperAssociate")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 twentynine-color align-items-center d-flex"
          >
            <i className="fab fa-aws fa-2x me-3"></i>
            <p className="fw-bold mb-0 ms-2">AWS Developer Associate</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() =>
            go("/fastTrackTechnicalProgram/microsoftAzureCloudFundamentals")
          }
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 thirty-color align-items-center d-flex"
          >
            <i className="fab fa-microsoft fa-2x me-3"></i>
            <p className="fw-bold mb-0 ms-2">
              Microsoft Azure Cloud Fundamentals
            </p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() =>
            go("/fastTrackTechnicalProgram/microsoftCloudAdministrator")
          }
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 one-color align-items-center d-flex"
          >
            <i className="fab fa-microsoft fa-2x me-3"></i>
            <p className="fw-bold mb-0 ms-2">
              Microsoft Cloud Administrator 103 - 104
            </p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/fastTrackTechnicalProgram/googleCloudEngineer")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 two-color align-items-center d-flex"
          >
            <i className="fab fa-google fa-2x me-3"></i>
            <p className="fw-bold mb-0 ms-2">Google Cloud Engineer</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/fastTrackTechnicalProgram/pythonForEverone")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 thirtyone-color align-items-center d-flex"
          >
            <i className="fab fa-python fa-2x me-3"></i>
            <p className="fw-bold mb-0 ms-2">Python for Everyone</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/fastTrackTechnicalProgram/machineLearningAndAI")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 thirtytwo-color align-items-center d-flex"
          >
            <i className="fas fa-robot fa-2x me-3"></i>
            <p className="fw-bold mb-0 ms-2">Machine Learning &amp; AI</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/fastTrackTechnicalProgram/dataScience")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 thirtythree-color align-items-center d-flex"
          >
            <i className="fas fa-microchip fa-2x me-3"></i>
            <p className="fw-bold mb-0 ms-2">Data Science</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() =>
            go("/fastTrackTechnicalProgram/bigDataAndHeadoopEcosystem")
          }
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 thirtyfour-color align-items-center d-flex"
          >
            <i className="fas fa-database fa-2x me-2"></i>
            <p className="fw-bold mb-0 ms-2">
              Big Data &amp; Headoop Ecosystem
            </p>
          </Paper>
        </ButtonBase>
      </Container>
      <Copyright />
    </>
  );
};

export default FastTrackTechnicalProgram;

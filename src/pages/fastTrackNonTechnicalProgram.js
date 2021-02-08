import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import Copyright from "../components/common/copyright/copyright";
import { useHistory } from "react-router-dom";

const FastTrackNonTechnicalProgram = () => {
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
          Fast Track Non-Technical Programs (3 Months)
        </h2>
        <p className="mb-0 small text-white para text-center text-lg-start px-3 px-lg-0 text-justify">
          A continuously evolving stack of Information Technology Programs
          consoling the latest technologies are available at DigiPAKISTAN and
          all you have to do is to enrol yourself in your desired course.
        </p>
      </div>
      <Container className="d-flex all-programs flex-wrap justify-content-center pb-5">
        <ButtonBase
          onClick={() => go("/fastTrackNonTechnicalProgram/quickBooks")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 border-success align-items-center d-flex"
          >
            <i className="fas fa-file-invoice-dollar fa-2x me-3"></i>
            <p className="fw-bold mb-0 ms-2">QuickBooks ERP</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/fastTrackNonTechnicalProgram/saperp")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 three-color align-items-center d-flex"
          >
            <i className="fas fa-file-invoice-dollar fa-2x me-3"></i>
            <p className="fw-bold mb-0 ms-2">SAP ERP</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() =>
            go("/fastTrackNonTechnicalProgram/projectManagementProfessional")
          }
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 four-color align-items-center d-flex"
          >
            <i className="fas fa-tasks fa-2x me-3"></i>
            <p className="fw-bold mb-0 ms-2">Project Management Professional</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/fastTrackNonTechnicalProgram/amazonFBABusiness")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 five-color align-items-center d-flex"
          >
            <i className="fab fa-aws fa-2x me-3"></i>
            <p className="fw-bold mb-0 ms-2">Amazon FBA Business</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() =>
            go("/fastTrackNonTechnicalProgram/searchEngineOptimization")
          }
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 seven-color align-items-center d-flex"
          >
            <i className="fas fa-search fa-2x me-3"></i>
            <p className="fw-bold mb-0 ms-2">
              Search Engine Optimization (SEO)
            </p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/fastTrackNonTechnicalProgram/digitalMarketing")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 eight-color align-items-center d-flex"
          >
            <i className="fas fa-poll fa-2x me-3"></i>
            <p className="fw-bold mb-0 ms-2">Digital Marketing</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() =>
            go("/fastTrackNonTechnicalProgram/socialMediaMarketing")
          }
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 nine-color align-items-center d-flex"
          >
            <i className="fas fa-bullhorn fa-2x me-3"></i>
            <p className="fw-bold mb-0 ms-2">Social Media Marketing (SMM)</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/fastTrackNonTechnicalProgram/graphicDesign")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 thirteen-color align-items-center d-flex"
          >
            <i className="fas fa-pencil-ruler fa-2x me-3"></i>
            <p className="fw-bold mb-0 ms-2">Graphic Design</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/fastTrackNonTechnicalProgram/uiux")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 ten-color align-items-center d-flex"
          >
            <i className="fas fa-pencil-ruler fa-2x me-3"></i>
            <p className="fw-bold mb-0 ms-2">UI / UX Design</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/fastTrackNonTechnicalProgram/interiorDesigning")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 eleven-color align-items-center d-flex"
          >
            <i className="fas fa-pencil-ruler fa-2x me-3"></i>
            <p className="fw-bold mb-0 ms-2">Interior Designing</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/fastTrackNonTechnicalProgram/3dMayaMaxAnimation")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 twenty-color align-items-center d-flex"
          >
            <i className="fas fa-vr-cardboard fa-2x me-3"></i>
            <p className="fw-bold mb-0 ms-2">3D Maya Max Animation</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/fastTrackNonTechnicalProgram/videoEditing")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 twelve-color align-items-center d-flex"
          >
            <i className="fas fa-film fa-2x me-3"></i>
            <p className="fw-bold mb-0 ms-2">Video Editing</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/fastTrackNonTechnicalProgram/autocad")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 fifteen-color align-items-center d-flex"
          >
            <i className="fas fa-building fa-2x me-3"></i>
            <p className="fw-bold mb-0 ms-2">AutoCad</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() =>
            go("/fastTrackNonTechnicalProgram/microsfoftOffice365")
          }
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 fourteen-color align-items-center d-flex"
          >
            <i className="fab fa-microsoft fa-2x me-3"></i>
            <p className="fw-bold mb-0 ms-2">Microsoft Office 365</p>
          </Paper>
        </ButtonBase>

        <ButtonBase
          onClick={() => go("/fastTrackNonTechnicalProgram/enterpreneurship")}
          className="box mx-3 outline mt-5 "
        >
          <Paper
            elevation={10}
            className="h-100 w-100 p-3 paper border-top border-4 sixteen-color align-items-center d-flex"
          >
            <i className="fas fa-user-tie fa-2x me-3"></i>
            <p className="fw-bold mb-0 ms-2">Enterpreneurship</p>
          </Paper>
        </ButtonBase>
      </Container>
      <Copyright />
    </>
  );
};

export default FastTrackNonTechnicalProgram;

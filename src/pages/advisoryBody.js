import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Copyright from "../components/common/copyright/copyright";
import { connect } from "react-redux";
import { signOut } from "../store/actions/authActions";
import { Helmet } from "react-helmet";

const AdvisoryBody = ({ signOut }) => {
  useEffect(() => {
    signOut();
  }, [signOut]);
  return (
    <>
      <Helmet>
        <title>Advisory Body</title>
      </Helmet>
      <Container className="mt pt-4">
        <h1 className="text-center fw-bold mx-3">Advisory Body</h1>

        <div className="d-flex justify-content-center justify-content-xl-between flex-wrap mb-5">
          <div className="d-flex flex-column align-items-center pt-4 mt-sm-5 mx-3 mx-xl-0">
            <div className="about-round-circle">
              <img
                src="https://i.ibb.co/5KGFfPm/IMG-4570.jpg"
                alt="Engr. Habib Ur Rehman Qaiser"
                className="about-img"
              />
            </div>
            <h4 className="text-center title mx-2 fw-bold mt-3 mb-0">
              Engr. Habib Ur Rehman Qaiser
            </h4>
            <p className="mb-0 text-center mt-1">
              Director General DigiPAKISTAN
            </p>
          </div>
          <div className="d-flex flex-column align-items-center pt-4 mt-5 mx-3 mx-xl-0">
            <div className="about-round-circle">
              <img
                src="https://i.ibb.co/hcqbnw7/pec-img-1.jpg"
                alt="Engr. Jawed Salim Qureshi"
                className="about-img"
              />
            </div>
            <h4 className="text-center title mx-2 fw-bold mt-3 mb-0">
              Engr. Jawed Salim Qureshi
            </h4>
            <p className="mb-0 text-center mt-1">Chairman, PEC</p>
          </div>
          <div className="d-flex flex-column align-items-center pt-4 mt-5 mx-3 mx-xl-0">
            <div className="about-round-circle">
              <img
                src="https://i.ibb.co/mc6zGZf/hec.jpg"
                alt="Prof. Dr. Fazal Ahmad Khalid (SI)"
                className="about-img"
              />
            </div>
            <h4 className="text-center title mx-2 fw-bold mt-3 mb-0">
              Prof. Dr. Fazal Ahmad Khalid (SI)
            </h4>
            <p className="mb-0 text-center mt-1">Chairman, Punjab HEC</p>
          </div>
          <div className="d-flex flex-column align-items-center pt-4 mt-5 mx-3 mx-xl-0">
            <div className="about-round-circle">
              <img
                src="https://i.ibb.co/5ryQ0FP/Dr-Javed-Younis-c74b4a9a.jpg"
                alt="Engr. Dr. Javaid Younas Uppal"
                className="about-img"
              />
            </div>
            <h4 className="text-center title mx-2 fw-bold mt-3 mb-0">
              Engr. Dr. Javaid Younas Uppal
            </h4>
            <p className="mb-0 text-center mt-1">
              President, Institutions of Engineers Pakistan
            </p>
          </div>
          <div className="d-flex flex-column align-items-center pt-4 mt-5 mx-3 mx-xl-0">
            <div className="about-round-circle">
              <img
                src="https://i.ibb.co/Lny7FHf/vc-pu.jpg"
                alt="Prof. Dr. Niaz Ahmad (SI) Vice Chancellor"
                className="about-img"
              />
            </div>
            <h5 className="text-center title mx-2 fw-bold mt-3 mb-0">
              Prof. Dr. Niaz Ahmad (SI)
            </h5>
            <p className="mb-0 text-center mt-1">
              Punjab University Vice Chancellor
            </p>
          </div>
          <div className="d-flex flex-column align-items-center pt-4 mt-5 mx-3 mx-xl-0">
            <div className="about-round-circle">
              <img
                src="https://i.ibb.co/SxgSDMg/digi.jpg"
                alt="Prof. Dr. Suhail Aftab Qureshi"
                className="about-img"
              />
            </div>
            <h4 className="text-center title mx-2 fw-bold mt-3 mb-0">
              Prof. Dr. Suhail Aftab Qureshi
            </h4>
            <p className="mb-0 text-center mt-1">Governing Body PEC</p>
          </div>
          <div className="d-flex flex-column align-items-center pt-4 mt-5 mx-3 mx-xl-0">
            <div className="about-round-circle">
              <img
                src="https://i.ibb.co/nQ2cr2g/Syed-Ijaz-1dac7365.jpg"
                alt="Engr. Jawed Salim Qureshi"
                className="about-img"
              />
            </div>
            <h4 className="text-center title mx-2 fw-bold mt-3 mb-0">
              Major Mustafa Zaidi (Retd)
            </h4>
            <p className="mb-0 text-center mt-1">Executive Director</p>
          </div>
        </div>
      </Container>
      <Copyright />
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(AdvisoryBody);

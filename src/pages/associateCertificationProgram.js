import React, { useEffect } from "react";
import Copyright from "../components/common/copyright/copyright";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../store/actions/authActions";
import { Helmet } from "react-helmet";
const AssociateCertificationProgram = ({ signOut }) => {
  useEffect(() => {
    signOut();
  }, [signOut]);

  // Object Destructuring
  const { push } = useHistory();

  const go = (link) => {
    setTimeout(() => {
      push(link);
    }, 400);
  };
  return (
    <>
      <Helmet>
        <title>Associate Certification Programs</title>
      </Helmet>
      <div className="all-programs-bg mt d-flex flex-column justify-content-center px-lg-5">
        <h2 className="fw-bold text-white text-center text-lg-start">
          Associate Certification Programs (6 Months)
        </h2>
        <p className="mb-0 small text-white para text-center text-lg-start px-3 px-lg-0 text-justify">
          A continuously evolving stack of Information Technology Programs
          consoling the latest technologies are available at DigiPAKISTAN and
          all you have to do is to enrol yourself in your desired course.
        </p>
      </div>

      <div className="container all-programs mb-5">
        {/* First row 1 */}
        <div className="row">
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go(
                  "/associateCertificationProgram/digitalForensicCyberSecurity"
                )
              }
              className="card cursor w-100"
            >
              <img
                src="https://c0.wallpaperflare.com/preview/920/519/697/abstract-php-c-analytics.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/tZBBkh9/AHMED-YASIR-KHAN.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className=" mt-2">Name</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Digital Forensic Cyber Security
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go(
                  "/associateCertificationProgram/penetrationTestingCyberSecurity"
                )
              }
              className="card cursor w-100"
            >
              <img
                src="https://c0.wallpaperflare.com/preview/920/519/697/abstract-php-c-analytics.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/tZBBkh9/AHMED-YASIR-KHAN.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">Name</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Penetration Testing Cyber Security
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() => go("/associateCertificationProgram/cissp")}
              className="card cursor w-100"
            >
              <img
                src="https://c0.wallpaperflare.com/preview/920/519/697/abstract-php-c-analytics.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/0s5VH2W/MUHAMMAD-AHMAD.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">Muhammad Ahmad</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Certified Information Systems Security Professional (CISSP)
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go("/associateCertificationProgram/artificialIntelligence")
              }
              className="card cursor w-100"
            >
              <img
                src="https://c0.wallpaperflare.com/preview/920/519/697/abstract-php-c-analytics.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/JFbxTjp/MUHAMMAD-ALI.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2 ">MUHAMMAD ALI</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Artificial Intelligence
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* First row 1 end */}

        {/* First row 1 */}
        <div className="row">
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go("/associateCertificationProgram/awsCloudComputing")
              }
              className="card cursor w-100"
            >
              <img
                src="https://c0.wallpaperflare.com/preview/920/519/697/abstract-php-c-analytics.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/tZBBkh9/AHMED-YASIR-KHAN.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className=" mt-2">Name</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  AWS Cloud Computing
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go("/associateCertificationProgram/internetOfThings")
              }
              className="card cursor w-100"
            >
              <img
                src="https://c0.wallpaperflare.com/preview/920/519/697/abstract-php-c-analytics.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/P6pPFFY/M-DAWER-SAEED.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">M. DAWER SAEED</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Internet of Things
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go("/associateCertificationProgram/blockchainTechnology")
              }
              className="card cursor w-100"
            >
              <img
                src="https://c0.wallpaperflare.com/preview/920/519/697/abstract-php-c-analytics.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/0s5VH2W/MUHAMMAD-AHMAD.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">Name</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  BlockChain Technology
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go("/associateCertificationProgram/fullStackWebDevelopment")
              }
              className="card cursor w-100"
            >
              <img
                src="https://c0.wallpaperflare.com/preview/920/519/697/abstract-php-c-analytics.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/JFbxTjp/MUHAMMAD-ALI.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2 ">Name</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Full Stack Web Development
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* First row 1 end */}
      </div>
      <div className="margin-top">
        <Copyright />
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(AssociateCertificationProgram);

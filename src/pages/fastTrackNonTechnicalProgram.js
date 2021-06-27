import React, { useEffect } from "react";
import Copyright from "../components/common/copyright/Copyright";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../store/actions/authActions";
import { Helmet } from "react-helmet";

const FastTrackNonTechnicalProgram = ({ signOut }) => {
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
        <title>Fast Track Non-Technical Programs</title>
      </Helmet>
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

      <div className="container all-programs mb-5">
        {/* First row 1 */}
        <div className="row">
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() => go("/fastTrackNonTechnicalProgram/quickBooks")}
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
                  <h6 className=" mt-2">AHMED YASIR KHAN</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Quick Books ERP
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() => go("/fastTrackNonTechnicalProgram/saperp")}
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
                  <h6 className="mt-2">AHMED YASIR KHAN</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  SAP ERP
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go(
                  "/fastTrackNonTechnicalProgram/projectManagementProfessional"
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
                      src="https://i.ibb.co/CVCp97m/FARUKH-KHAN.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">Name</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Project Management Professional (PMP)
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go("/fastTrackNonTechnicalProgram/amazonFBABusiness")
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
                      src="https://i.ibb.co/Y3QSjgx/FAIZA-KHALID.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2 ">FAIZA KHALID</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Amazon FBA Business
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* First row 1 end */}

        {/* second row 2 */}
        <div className="row">
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go("/fastTrackNonTechnicalProgram/searchEngineOptimization")
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
                      src="https://i.ibb.co/vwNwRH7/ASFAND-YAR-JUNEJO.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className=" mt-2">ASFAND YAR JUNEJO</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Search Engine Optimization (SEO)
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go("/fastTrackNonTechnicalProgram/digitalMarketing")
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
                      src="https://i.ibb.co/TPyy5nL/M-ABDUL-QADEER.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">M. ABDUL QADEER</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Digital Marketing
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go("/fastTrackNonTechnicalProgram/socialMediaMarketing")
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
                      src="https://i.ibb.co/TPyy5nL/M-ABDUL-QADEER.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">M. ABDUL QADEER</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Social Media Marketing (SMM)
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() => go("/fastTrackNonTechnicalProgram/graphicDesign")}
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
                      src="https://i.ibb.co/R9zHnxc/AYFAR-KHAN.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2 ">AYFAR KHAN</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Graphic Design
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* second row 2 end */}

        {/* third 3  */}
        <div className="row">
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() => go("/fastTrackNonTechnicalProgram/uiux")}
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
                      src="https://i.ibb.co/9rC7hNJ/M-AHSAN-PERVAIZ.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className=" mt-2">M. AHSAN PERVAIZ</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  UI / UX
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go("/fastTrackNonTechnicalProgram/interiorDesigning")
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
                      src="https://i.ibb.co/TPyy5nL/M-ABDUL-QADEER.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">Name</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Interior Designing
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go("/fastTrackNonTechnicalProgram/3dMayaMaxAnimation")
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
                      src="https://i.ibb.co/tDVbSxx/SHOAIB-ALI.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">SHOAIB ALI</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  3D Maya Max Animation
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() => go("/fastTrackNonTechnicalProgram/videoEditing")}
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
                      src="https://i.ibb.co/R9zHnxc/AYFAR-KHAN.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2 ">Name</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Video Editing
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* third 3 end */}

        {/* fourth 4  */}
        <div className="row">
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() => go("/fastTrackNonTechnicalProgram/autocad")}
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
                      src="https://i.ibb.co/sFF7tpt/KAMRAN-AHMAD.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className=" mt-2">KAMRAN AHMAD</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  AutoCad
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go("/fastTrackNonTechnicalProgram/microsoftOffice365")
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
                      src="https://i.ibb.co/XpSxwYz/M-ZEESHAN-MOTIWALA.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">M. ZEESHAN MOTIWALA</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Microsoft Office 365
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go("/fastTrackNonTechnicalProgram/enterpreneurship")
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
                      src="https://i.ibb.co/jMFQXsx/IRFAD-AHMED-IMTIAZ.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">IRFAN AHMED IMTIAZ</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Enterpreneurship
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* third 3 end */}
      </div>
      <Copyright />
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(FastTrackNonTechnicalProgram);

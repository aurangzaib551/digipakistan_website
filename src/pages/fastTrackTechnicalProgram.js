import React, { useEffect } from "react";
import Copyright from "../components/common/copyright/Copyright";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../store/actions/AuthActions";
import { Helmet } from "react-helmet";

const FastTrackTechnicalProgram = ({ signOut }) => {
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
        <title>Fast Track Technical Programs</title>
      </Helmet>
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

      <div className="container all-programs mb-5">
        {/* First row 1 */}
        <div className="row">
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go("/fastTrackTechnicalProgram/comptiaItFundamentals")
              }
              className="card cursor w-100"
            >
              <img
                src="https://i.ibb.co/mzKrn8y/Comp-TIA-IT-Fundamentals.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/JBRprYC/WAQAS-QAMAR.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">WAQAS QAMAR</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  CompTIA IT Fundamentals
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go("/fastTrackTechnicalProgram/microsoftFrontEndDevelopment")
              }
              className="card cursor w-100"
            >
              <img
                src="https://i.ibb.co/HNkVgZr/Microsoft-Front-End-Development.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/r44JBBQ/JAZIB-ALEEM.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">JAZIB ALEEM</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Microsoft Front End Development
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go("/fastTrackTechnicalProgram/aspDotNetWebApplications")
              }
              className="card cursor w-100"
            >
              <img
                src="https://i.ibb.co/3pV01zc/ASP-NET-Web-Applications.jpg"
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
                  <h6 className="mt-2">FARUKH KHAN</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  ASP.NET Web Applications
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() => go("/fastTrackTechnicalProgram/phpLaravel")}
              className="card cursor w-100"
            >
              <img
                src="https://i.ibb.co/KmnkbPp/PHP-Laravel.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/7gfCGj5/ABDUL-BASSIT-SURAHIO.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2 ">Name</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  PHP Laravel
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* First row 1 end */}

        {/* second row  */}
        <div className="row">
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() => go("/fastTrackTechnicalProgram/mernStack")}
              className="card cursor w-100"
            >
              <img
                src="https://i.ibb.co/vmWqn6k/MERN-Stack.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/JBRprYC/WAQAS-QAMAR.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">Name</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  MERN Stack
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go("/fastTrackTechnicalProgram/sqlServerSpecialist")
              }
              className="card cursor w-100"
            >
              <img
                src="https://i.ibb.co/VDmh2Hq/SQL-Server-Specialist.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/BzzmCfP/ABU-BAKAR-RIAZ.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">ABU BAKAR RIAZ</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  SQL Server Specialist
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go("/fastTrackTechnicalProgram/oracleDatabaseAdministrator")
              }
              className="card cursor w-100"
            >
              <img
                src="https://i.ibb.co/gj4kJHY/Oracle-Database-Administrator.jpg"
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
                  Oracle Database Administrator
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1 cursor">
            <div
              onClick={() =>
                go("/fastTrackTechnicalProgram/androidAppsDevelopment")
              }
              className="card cursor w-100"
            >
              <img
                src="https://i.ibb.co/DrMQ6Gk/Android-Apps-Development.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/7gfCGj5/ABDUL-BASSIT-SURAHIO.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2 ">Name</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Android Apps Development
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* second row 2 end */}

        {/* Third row  */}
        <div className="row">
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go("/fastTrackTechnicalProgram/kotlinAppsDevelopment")
              }
              className="card cursor w-100"
            >
              <img
                src="https://i.ibb.co/PZrnb1y/Kotlin-Mobile-Apps-Development.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/JBRprYC/WAQAS-QAMAR.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">Name</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Kotlin Mobile Apps Development
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go("/fastTrackTechnicalProgram/iOSAppsDevelopment")
              }
              className="card cursor w-100"
            >
              <img
                src="https://i.ibb.co/58F2cv2/IOS-Apps-Development.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/BzzmCfP/ABU-BAKAR-RIAZ.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">Name</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  iOS Apps Development
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go("/fastTrackTechnicalProgram/xamarinAppsDevelopment")
              }
              className="card cursor w-100"
            >
              <img
                src="https://i.ibb.co/5sNpbpP/Xamarin-Mobile-Apps-Development.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/rQ0Vh1k/ARIF-IMRAN.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">ARIF IMRAN</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Xamarin Mobile Apps Development
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go(
                  "/fastTrackTechnicalProgram/reactNativeWebAndAppsDevelopment"
                )
              }
              className="card cursor w-100"
            >
              <img
                src="https://i.ibb.co/Hhd2GvQ/React-Native-Web-Apps-Development.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/Qf65bXv/BASIT-ELAHI.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2 ">BASIT ELAHI</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  React Native Web & Apps Development
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* third row 3 end */}

        {/* fourth row  */}
        <div className="row">
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() => go("/fastTrackTechnicalProgram/gameDevelopment")}
              className="card cursor w-100"
            >
              <img
                src="https://i.ibb.co/WBSZqKM/Game-Development.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/JBRprYC/WAQAS-QAMAR.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">Name</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Game Development
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go("/fastTrackTechnicalProgram/ciscoCCNANetworking")
              }
              className="card cursor w-100"
            >
              <img
                src="https://i.ibb.co/HGNYVTr/Cisco-CCNA-Networking.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/z42kttP/IMRAN-ISRAR.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">IMRAN ISRAR</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Cisco CCNA Networking
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() => go("/fastTrackTechnicalProgram/comptiaSecurity")}
              className="card cursor w-100"
            >
              <img
                src="https://i.ibb.co/d5Dx49T/Comp-TIA-Security.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/rQ0Vh1k/ARIF-IMRAN.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">Name</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  CompTIA Security + (SYO - 601)
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() => go("/fastTrackTechnicalProgram/ceh")}
              className="card cursor w-100"
            >
              <img
                src="https://i.ibb.co/Sm1cK8H/Certified-Ethical-Hacking-CEH.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/61PvJ7g/MUHAMMAD-ANWAR.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2 ">Muhammad Anwar</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Certified Ethical Hacking (CEH)
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* fourth 4 end */}

        {/* fifth 5 row  */}
        <div className="row">
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() => go("/fastTrackTechnicalProgram/chfi")}
              className="card cursor w-100"
            >
              <img
                src="https://i.ibb.co/kMHy167/Certified-Hacking-Forensic-Investigator-CHFI.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/zst45Nt/MALIK-MAAZ-MEHBOOB.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">Malik Maaz</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Certified Hacking Forensic Investigator (CHFI)
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() => go("/fastTrackTechnicalProgram/ecsa")}
              className="card cursor w-100"
            >
              <img
                src="https://i.ibb.co/WpSvvKY/Penetration-Testing-Security-Analyst-ECSA.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/z42kttP/IMRAN-ISRAR.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">Name</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Penetration Testing Security Analyst (ECSA)
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() => go("/fastTrackTechnicalProgram/cisa")}
              className="card cursor w-100"
            >
              <img
                src="https://i.ibb.co/yF55fFw/Certified-Information-Systems-Auditor-CISA.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/SNsXX9Q/SAAD-MOTEN.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">SAAD MOTEN</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Certified Information Systems Auditor (CISA)
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() => go("/fastTrackTechnicalProgram/cism")}
              className="card cursor w-100"
            >
              <img
                src="https://i.ibb.co/qDgwP5v/Certified-Information-Security-Manager-CISM.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/SNsXX9Q/SAAD-MOTEN.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2 ">SAAD MOTEN</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Certified Information Security Manager (CISM)
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* fifth 5 end */}

        {/* sixth 6 row  */}
        <div className="row">
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() => go("/fastTrackTechnicalProgram/awsPractitioner")}
              className="card cursor w-100"
            >
              <img
                src="https://i.ibb.co/jMg7c62/AWS-Practitioner.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/djYjLdH/AFFAN-SAIED-BAIG.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">AFFAN SAIED BAIG</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  AWS Practitioner
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go("/fastTrackTechnicalProgram/awsSolutionArchitect")
              }
              className="card cursor w-100"
            >
              <img
                src="https://i.ibb.co/8dM1sqQ/AWS-Solution-Architect.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/z42kttP/IMRAN-ISRAR.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">Name</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  AWS Solutions Architect
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go("/fastTrackTechnicalProgram/awsSysOpsAdministrator")
              }
              className="card cursor w-100"
            >
              <img
                src="https://i.ibb.co/vmfKYgj/AWS-Sys-Ops-Administrator.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/RzVcPjB/USMAN-KHAN.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">USMAN KHAN</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  AWS SysOps Administrator
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go("/fastTrackTechnicalProgram/awsDeveloperAssociate")
              }
              className="card cursor w-100"
            >
              <img
                src="https://i.ibb.co/qrxt654/AWS-Developer-Associate.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/RzVcPjB/USMAN-KHAN.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2 ">USMAN KHAN</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  AWS Developer Associate
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* sixth 6 end */}

        {/* seventh 7 row  */}
        <div className="row">
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go("/fastTrackTechnicalProgram/microsoftAzureCloudFundamentals")
              }
              className="card cursor w-100"
            >
              <img
                src="https://i.ibb.co/sv45dVr/Microsoft-Azure-Cloud-Fundamentals.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/djYjLdH/AFFAN-SAIED-BAIG.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">Name</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Microsoft Azure Cloud Fundamentals
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go("/fastTrackTechnicalProgram/microsoftCloudAdministrator")
              }
              className="card cursor w-100"
            >
              <img
                src="https://i.ibb.co/x7Y3H0F/Microsoft-Cloud-Administrator-103-104.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/T4NPfLh/MUHAMMAD-AZEEM-IRSLAN.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">MUHAMMAD AZEEM</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Microsoft Cloud Administrator 103 - 104
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go("/fastTrackTechnicalProgram/googleCloudEngineer")
              }
              className="card cursor w-100"
            >
              <img
                src="https://i.ibb.co/wrqdwkj/Google-Cloud-Engineer.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/7gfCGj5/ABDUL-BASSIT-SURAHIO.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">ABDUL BASSIT SURAHIO</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Google Cloud Engineer
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() => go("/fastTrackTechnicalProgram/pythonForEverone")}
              className="card cursor w-100"
            >
              <img
                src="https://i.ibb.co/QKzR1Z3/Python-for-Everyone.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/qrFtytB/TAIMOOR-HASSAN.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2 ">Taimoor Hassan</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Python For Everyone
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* seventh 7 end */}

        {/* eight 8 row  */}
        <div className="row">
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() =>
                go("/fastTrackTechnicalProgram/machineLearningAndAI")
              }
              className="card cursor w-100"
            >
              <img
                src="https://i.ibb.co/tQft34X/Machine-Learning-AI.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/q0ZkGZD/NOMAN-ISLAM.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">NOMAN ISLAM</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Machine Learning & AI
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1">
            <div
              onClick={() => go("/fastTrackTechnicalProgram/dataScience")}
              className="card cursor w-100"
            >
              <img
                src="https://i.ibb.co/2M0ZjtT/Data-Science.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/T4NPfLh/MUHAMMAD-AZEEM-IRSLAN.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className="mt-2">Name</h6>
                </div>

                <h5 className="card-title text-center my-card-title-font ">
                  Data Science
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-lg-5 mt-4 p-1 ">
            <div
              onClick={() =>
                go("/fastTrackTechnicalProgram/bigDataAndHeadoopEcosystem")
              }
              className="card cursor w-100"
            >
              <img
                src="https://i.ibb.co/g7VYWgw/Big-Data-Headoop-Ecosystem.jpg"
                className="card-img-top w-100"
                style={{ borderRadius: 0, height: 130 }}
                alt="..."
              />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center img-par">
                  <div className="image d-flex flex-column align-items-center">
                    <img
                      src="https://i.ibb.co/jySstWz/OZAIR-ZAFAR.png"
                      alt=""
                      width="60"
                    />
                  </div>
                  <h6 className=" mt-2">OZAIR ZAFAR</h6>
                </div>
                <div className="d-flex align-items-center justify-content-center my-card-ti-div">
                  <h5 className="card-title text-center my-card-title-font ">
                    Big Data & Headoop Ecosystem
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* eight 8 end */}
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

export default connect(null, mapDispatchToProps)(FastTrackTechnicalProgram);

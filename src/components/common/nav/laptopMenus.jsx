import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/CloseRounded";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import $ from "jquery";

const LaptopMenus = ({ closeNav }) => {
  // State
  const [availableProgram, setAvailableProgram] = useState(false);
  const [about, setAbout] = useState(false);
  const [joinDigiPakistan, setJoinDigiPAKISTAN] = useState(false);

  // Closing Nav
  const handleClose = () => {
    setTimeout(() => {
      $(".menu-laptop").removeClass("open-nav");
      setAbout(false);
      setAvailableProgram(false);
      setJoinDigiPAKISTAN(false);
    }, 400);
  };

  const closeAbout = () => {
    setAbout(false);
    closeNav();
  };

  const closeJoinDigiPAKISTAN = () => {
    setJoinDigiPAKISTAN(false);
    closeNav();
  };

  const closeAvailablePrograms = () => {
    setAvailableProgram(false);
    closeNav();
  };

  return (
    <>
      <div className="laptop-menu-items">
        <div className="menu-laptop">
          <div className="d-flex justify-content-between align-items-center my-5 mx-4">
            <h1 className="fw-bold text-white">MENU</h1>
            <img
              src="https://i.ibb.co/fHr8zCN/digipakistan-white-png.png"
              width="70"
              alt="DigiPAKISTAN"
            />
            <IconButton onClick={handleClose} className="outline close">
              <CloseIcon className="text-white" />
            </IconButton>
          </div>
          <ul className="list-unstyled items">
            <li>
              <Link to="/" onClick={handleClose} className="items-link">
                Home
              </Link>
            </li>
            <li>
              <p
                className="items-link mb-0 pointer"
                onClick={() => {
                  setAvailableProgram((prevState) => !prevState);
                  setAbout(false);
                  setJoinDigiPAKISTAN(false);
                }}
              >
                Available Programs{" "}
                {availableProgram ? (
                  <span className="fw-bold plus-minus">-</span>
                ) : (
                  <span className="fw-bold plus-minus">+</span>
                )}
              </p>
              {availableProgram && (
                <ul className="list-unstyled ul-sub mb-0">
                  <li onClick={closeAvailablePrograms}>
                    <Link
                      to="/fastTrackTechnicalProgram"
                      className="items-sub mb-3"
                    >
                      Fast Track Technical Program
                    </Link>
                  </li>
                  <li onClick={closeAvailablePrograms}>
                    <Link
                      to="/fastTrackNonTechnicalProgram"
                      className="items-sub mb-3"
                    >
                      Fast Track Non-Technical Program
                    </Link>
                  </li>
                  <li onClick={closeAvailablePrograms}>
                    <Link
                      to="/associateCertificationProgram"
                      className="items-sub"
                    >
                      Associate Certification Program
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <p
                className="items-link mb-0 pointer"
                onClick={() => {
                  setJoinDigiPAKISTAN((prevState) => !prevState);
                  setAbout(false);
                  setAvailableProgram(false);
                }}
              >
                Join DigiPAKISTAN{" "}
                {joinDigiPakistan ? (
                  <span className="fw-bold plus-minus">-</span>
                ) : (
                  <span className="fw-bold plus-minus">+</span>
                )}
              </p>
              {joinDigiPakistan && (
                <ul className="list-unstyled ul-sub mb-0">
                  <li onClick={closeJoinDigiPAKISTAN}>
                    <Link
                      to="/joinDigiPAKISTAN/becomeAnInstructor"
                      className="items-sub mb-3"
                    >
                      Become an Instructor
                    </Link>
                  </li>
                  <li onClick={closeJoinDigiPAKISTAN}>
                    <a
                      href="https://marketing.digipakistan.org"
                      className="items-sub"
                    >
                      Become a Marketing Partner
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/admissionProcess"
                onClick={handleClose}
                className={joinDigiPakistan ? "items-link mt-3" : "items-link"}
              >
                Admission Process
              </Link>
            </li>
            <li>
              <Link to="/faqs" onClick={handleClose} className="items-link">
                FAQ's
              </Link>
            </li>
            <li>
              <p
                className="items-link mb-0 pointer"
                onClick={() => {
                  setAbout((prevState) => !prevState);
                  setAvailableProgram(false);
                  setJoinDigiPAKISTAN(false);
                }}
              >
                About
                {about ? (
                  <span className="fw-bold plus-minus">-</span>
                ) : (
                  <span className="fw-bold plus-minus">+</span>
                )}
              </p>
              {about && (
                <ul className="list-unstyled ul-sub mb-0">
                  <li onClick={closeAbout}>
                    <Link
                      to="/about/provincialMinisterMessage"
                      className="items-sub mb-3"
                    >
                      Provincial Minister Message
                    </Link>
                  </li>
                  <li onClick={closeAbout}>
                    <Link
                      to="/about/directorGeneralMessage"
                      className="items-sub mb-3"
                    >
                      Director General (DG) Message
                    </Link>
                  </li>
                  <li onClick={closeAbout}>
                    <Link
                      to="/about/chairmanHECPunjabMessage"
                      className="items-sub mb-3"
                    >
                      Chairman HEC Punjab Message
                    </Link>
                  </li>
                  <li onClick={closeAbout}>
                    <Link
                      to="/about/chairmanPECMessage"
                      className="items-sub mb-3"
                    >
                      Chairman PEC Message
                    </Link>
                  </li>
                  <li onClick={closeAbout}>
                    <Link to="/about/aboutUs" className="items-sub mb-3">
                      About Us
                    </Link>
                  </li>
                  <li onClick={closeAbout}>
                    <Link to="/about/advisoryBody" className="items-sub">
                      Advisory Board
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/contactUs"
                onClick={handleClose}
                className={about ? "items-link mt-3" : "items-link"}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LaptopMenus;

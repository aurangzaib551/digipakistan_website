import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/CloseRounded";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import $ from "jquery";

const LaptopMenus = () => {
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
    }, 400);
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
              <Link to="/" className="items-link">
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
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="/" className="items-sub">
                      Fast Track Technical Program
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="items-sub">
                      Fast Track Non-Technical Program
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="items-sub">
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
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="/" className="items-sub">
                      Become an Instructor
                    </Link>
                  </li>
                  <li>
                    <a href=" " className="items-sub">
                      Become Marketing Partner
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/"
                className={joinDigiPakistan ? "items-link mt-3" : "items-link"}
              >
                Admission Process
              </Link>
            </li>
            <li>
              <Link to="/" className="items-link">
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
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="/" className="items-sub">
                      Provincial Minister Message
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="items-sub">
                      Director General (DG) Message
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="items-sub">
                      Chairman HEC Punjab Message
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="items-sub">
                      Chairman PEC Message
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="items-sub">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="items-sub">
                      Advisory Board
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/" className={about ? "items-link mt-3" : "items-link"}>
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

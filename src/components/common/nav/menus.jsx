import React from "react";
import { Link, useHistory } from "react-router-dom";
import AngleDownIcon from "@material-ui/icons/KeyboardArrowDownRounded";

const Menus = ({ firstLoad }) => {
  // Object Destructuring
  const { push } = useHistory();

  return (
    <>
      <ul className="d-flex align-items-center list-unstyled mb-0 me-4 me-xxl-0 navbar-items">
        <li
          className={
            firstLoad
              ? "navbar-items-li animate__animated animate__fadeInRight animate__slow"
              : "navbar-items-li"
          }
        >
          <Link to="/" className="item px-3 py-2 d-block">
            Home
          </Link>
        </li>
        <li
          className={
            firstLoad
              ? "px-3 py-2 d-flex navbar-items-li position-relative animate__animated animate__fadeInRight animate__slower"
              : "px-3 py-2 d-flex navbar-items-li position-relative"
          }
        >
          Available Programs <AngleDownIcon className="angle-down" />
          <ul className="sub-menus list-unstyled rounded mb-0 rounded border">
            <li
              onClick={() => push("/fastTrackTechnicalProgram")}
              className="ps-3 pe-5 py-2 sub-menus-li rounded text-nowrap"
            >
              Fast Track Technical Programs
            </li>
            <li
              onClick={() => push("/fastTrackNonTechnicalProgram")}
              className="ps-3 pe-5 py-2 sub-menus-li rounded text-nowrap"
            >
              Fast Track Non-Technical Programs
            </li>
            <li
              onClick={() => push("/associateCertificationProgram")}
              className="ps-3 pe-5 py-2 sub-menus-li rounded text-nowrap"
            >
              Associate Certification Programs
            </li>
          </ul>
        </li>
        <li
          className={
            firstLoad
              ? "px-3 py-2 navbar-items-li d-flex position-relative animate__animated animate__fadeInRight animate__slow"
              : "px-3 py-2 navbar-items-li d-flex position-relative"
          }
        >
          Join DigiPAKISTAN <AngleDownIcon className="angle-down" />
          <ul className="sub-menus list-unstyled rounded mb-0 rounded border">
            <li className="sub-menus-li rounded text-nowrap">
              <Link
                to="/joinDigiPAKISTAN/becomeAnInstructor"
                className="sub-menu-link ps-3 pe-5 py-2 d-block"
              >
                Become an Instructor
              </Link>
            </li>
            <li className="sub-menus-li rounded text-nowrap">
              <a
                href="https://marketing.digipakistan.org"
                className="sub-menu-link ps-3 pe-5 py-2 d-block"
              >
                Become a Marketing Partner
              </a>
            </li>
          </ul>
        </li>
        <li
          className={
            firstLoad
              ? "navbar-items-li animate__animated animate__fadeInRight animate__slower"
              : "navbar-items-li"
          }
        >
          <Link to="/admissionProcess" className="item px-3 py-2 d-block">
            Admission Process
          </Link>
        </li>
        <li
          className={
            firstLoad
              ? "navbar-items-li animate__animated animate__fadeInRight animate__slower"
              : "navbar-items-li"
          }
        >
          <Link to="/faqs" className="item px-3 py-2 d-block">
            FAQ's
          </Link>
        </li>
        <li
          className={
            firstLoad
              ? "px-3 py-2 navbar-items-li d-flex position-relative animate__animated animate__fadeInRight animate__slower"
              : "px-3 py-2 navbar-items-li d-flex position-relative"
          }
        >
          About <AngleDownIcon className="angle-down" />
          <ul className="sub-menus list-unstyled rounded mb-0 rounded border">
            <li className="sub-menus-li rounded text-nowrap">
              <Link
                to="/about/provincialMinisterMessage"
                className="sub-menu-link ps-3 pe-5 py-2 d-block"
              >
                Provincial Minister Message
              </Link>
            </li>
            <li className="sub-menus-li rounded text-nowrap">
              <Link
                to="/about/directorGeneralMessage"
                className="sub-menu-link ps-3 pe-5 py-2 d-block"
              >
                Director General (DG) Message
              </Link>
            </li>
            <li className="sub-menus-li rounded text-nowrap">
              <Link
                to="/about/chairmanHECPunjabMessage"
                className="sub-menu-link ps-3 pe-5 py-2 d-block"
              >
                Chairman HEC Punjab Message
              </Link>
            </li>
            <li className="sub-menus-li rounded text-nowrap">
              <Link
                to="/about/chairmanPECMessage"
                className="sub-menu-link ps-3 pe-5 py-2 d-block"
              >
                Chairman PEC Message
              </Link>
            </li>
            <li className="sub-menus-li rounded text-nowrap">
              <Link
                to="/about/aboutUs"
                className="sub-menu-link ps-3 pe-5 py-2 d-block"
              >
                About Us
              </Link>
            </li>
            <li className="sub-menus-li rounded text-nowrap">
              <Link
                to="/about/advisoryBody"
                className="sub-menu-link ps-3 pe-5 py-2 d-block"
              >
                Advisory Board
              </Link>
            </li>
            <li className="sub-menus-li rounded text-nowrap">
              <Link
                to="/about/ourTeam"
                className="sub-menu-link ps-3 pe-5 py-2 d-block"
              >
                DigiPAKISTAN Faculty
              </Link>
            </li>
          </ul>
        </li>
        <li
          className={
            firstLoad
              ? "navbar-items-li animate__animated animate__fadeInRight animate__slow"
              : "navbar-items-li"
          }
        >
          <Link to="/contactUs" className="item px-3 py-2 d-block">
            Contact Us
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Menus;

import React from "react";
import { Link, useHistory } from "react-router-dom";
import AngleDownIcon from "@material-ui/icons/KeyboardArrowDownRounded";
import AngleRightIcon from "@material-ui/icons/KeyboardArrowRightRounded";

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
          <Link to="/" className="item px-3 py-2 d-inline-block">
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
              onClick={() => push("/a")}
              className="ps-3 pe-5 sub-menus-li rounded text-nowrap"
            >
              Fast Track Technical Program{" "}
              <AngleRightIcon className="angle-right" />
              <ul className="next-sub-menus sub-menus-scroll rounded list-unstyled border">
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    CompTIA IT Fundamentals
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Microsoft Front End Web Development
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    ASP.NET Web Applications
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    PHP Laravel
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    MERN Stack
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    SQL Server Specialist
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Oracle Database Administrator (OCP : 12C DBA)
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Android Apps Development
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Kotlin Mobile Apps Development
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    iOS Apps Development
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Xamarin Mobile Apps Development
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    React Native Web &amp; Apps Development
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Game Development
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Cisco CCNA Networking
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    CompTIA Security + (SYO - 601)
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Certified Ethical Hacking (CEH)
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Certified Hacking Forensic Investigator (CHFI)
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Penetration Testing Security Analyst (ECSA)
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Certified Information Systems Auditor (CISA)
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Certified Information Security Manager (CISM)
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    AWS Practitioner
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    AWS SysOps Administrator
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    AWS Developer Associate
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Microsoft Azure Cloud Fundamentals
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Microsoft Cloud Administrator 103 - 104
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Google Cloud Engineer
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Python for Everyone
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Machine Learning &amp; AI
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Data Science
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Big Data &amp; Headoop Ecosystem
                  </Link>
                </li>
              </ul>
            </li>
            <li
              onClick={() => push("/a")}
              className="ps-3 pe-5 sub-menus-li rounded text-nowrap"
            >
              Fast Track Non-Technical Program
              <AngleRightIcon className="angle-right" />
              <ul className="next-sub-menus sub-menus-scroll rounded list-unstyled border">
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Quick Books ERP
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    SAP ERP
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Project Management Professional (PMP)
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Amazon FBA Business
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Search Engine Optimization (SEO)
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Social Media Marketing (SMM)
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Graphic Design
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    UI / UX Designing
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Interior Designing
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    3D Maya Max Animation
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Video Editing
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    AutoCad
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Microsoft Office 365
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Enterpreneurship
                  </Link>
                </li>
              </ul>
            </li>
            <li
              onClick={() => push("/a")}
              className="ps-3 pe-5 sub-menus-li rounded text-nowrap"
            >
              Associate Certification Program
              <AngleRightIcon className="angle-right" />
              <ul className="next-sub-menus rounded list-unstyled border">
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Digital Forensic Cyber Security
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Penetration Testing Cyber Security
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    CISSP Cyber Security Professional
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Artificial Intelligence
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    AWS Cloud Computing
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Internet of Things (IoT)
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    BlockChain Technology
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ps-3 pe-5 next-sub-menus-link">
                    Full Stack Web Development (MCSA)
                  </Link>
                </li>
              </ul>
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
            <li className="ps-3 pe-5 sub-menus-li rounded text-nowrap">
              <Link to="/" className="sub-menu-link d-inline-block">
                Become an Instructor
              </Link>
            </li>
            <li className="ps-3 pe-5 sub-menus-li rounded text-nowrap">
              <a href=" " className="sub-menu-link d-inline-block">
                Provincial Minister Message
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
          <Link
            to="/admissionProcess"
            className="item px-3 py-2 d-inline-block"
          >
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
          <Link to="/faqs" className="item px-3 py-2 d-inline-block">
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
            <li className="ps-3 pe-5 sub-menus-li rounded text-nowrap">
              <Link to="/" className="sub-menu-link d-inline-block">
                Provincial Minister Message
              </Link>
            </li>
            <li className="ps-3 pe-5 sub-menus-li rounded text-nowrap">
              <Link to="/" className="sub-menu-link d-inline-block">
                Director General (DG) Message
              </Link>
            </li>
            <li className="ps-3 pe-5 sub-menus-li rounded text-nowrap">
              <Link to="/" className="sub-menu-link d-inline-block">
                Chairman HEC Punjab Message
              </Link>
            </li>
            <li className="ps-3 pe-5 sub-menus-li rounded text-nowrap">
              <Link to="/" className="sub-menu-link d-inline-block">
                Chairman PEC Message
              </Link>
            </li>
            <li className="ps-3 pe-5 sub-menus-li rounded text-nowrap">
              <Link to="/" className="sub-menu-link d-inline-block">
                About Us
              </Link>
            </li>
            <li className="ps-3 pe-5 sub-menus-li rounded text-nowrap">
              <Link to="/" className="sub-menu-link d-inline-block">
                Advisory Board
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
          <Link to="/contactUs" className="item px-3 py-2 d-inline-block">
            Contact Us
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Menus;

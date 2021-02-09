import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YoutubeIcon from "@material-ui/icons/YouTube";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top py-3">
        <h4 className="text-center mx-3 text-white mb-0 fw-bold">
          DigiPAKISTAN NATIONAL SKILLS DEVELOPMENT INITIATIVE
        </h4>
      </div>
      <div className="footer-center py-5 d-flex flex-column align-items-center">
        <img
          src="https://i.ibb.co/fHr8zCN/digipakistan-white-png.png"
          alt="DigiPAKISTAN"
          width="100"
        />
        <p className="text-white text-center mt-4 para px-3 text-justify">
          To transform Pakistani Youth into productive workforce to contest the
          challenges of fourth industrial revolution through latest, demand
          driven and state of the art IT Skills with the increased access to
          high-quality education for everyone, anywhere and anytime.
        </p>
        <p className="mb-0 text-white px-3 text-center text-justify">
          In case of queries you can dial{" "}
          <a href="tel:04235974881">042-35974881</a> /{" "}
          <a href="tel:04235974882">042-35974882</a> and can email at{" "}
          <a href="mailto:helpdesk@digipakistan.org">
            helpdesk@digipakistan.org
          </a>
        </p>
        <div className="d-flex justify-content-center flex-wrap">
          <a
            href="https://www.facebook.com/digipakistan.official"
            target="_blank"
            rel="noreferrer"
            className="mx-3 icon-link pointer mt-3"
          >
            <FacebookIcon className="icon-footer" style={{ fontSize: 35 }} />
          </a>
          <a
            href="https://www.instagram.com/digipakistan.official/"
            target="_blank"
            rel="noreferrer"
            className="mx-3 icon-link pointer mt-3"
          >
            <InstagramIcon className="icon-footer" style={{ fontSize: 35 }} />
          </a>
          <a
            href="https://twitter.com/DigiPAKISTAN_"
            target="_blank"
            rel="noreferrer"
            className="mx-3 icon-link pointer mt-3"
          >
            <TwitterIcon className="icon-footer" style={{ fontSize: 35 }} />
          </a>
          <a
            href="https://www.linkedin.com/company/digipakistanofficial"
            target="_blank"
            rel="noreferrer"
            className="mx-3 icon-link pointer mt-3"
          >
            <LinkedInIcon className="icon-footer" style={{ fontSize: 35 }} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCvu0jNb7YmT7kagRfI6lWXw"
            target="_blank"
            rel="noreferrer"
            className="mx-3 icon-link pointer mt-3"
          >
            <YoutubeIcon className="icon-footer" style={{ fontSize: 35 }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

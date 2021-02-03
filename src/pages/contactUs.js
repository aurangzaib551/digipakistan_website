import React from "react";
import Container from "@material-ui/core/Container";
import Copyright from "../components/common/copyright/copyright";
import MapIcon from "@material-ui/icons/RoomOutlined";
import MailIcon from "@material-ui/icons/MailOutline";
import MobileIcon from "@material-ui/icons/PhoneAndroidRounded";
import Input from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const ContactUs = () => {
  return (
    <>
      <div className="contact-us d-flex py-5 justify-content-center align-items-center mt">
        <Container className="bg-white rounded px-0 mx-3 py-3 py-lg-4">
          <div className="row g-0">
            <div className="col-lg-4 py-5 py-lg-0 rounded mb-4 mb-lg-0 my-lg-4 address d-flex flex-column justify-content-center px-3 ps-lg-4">
              <h1 className="fw-bold text-center text-lg-start">Contact Us</h1>
              <div className="d-flex justify-content-center justify-content-lg-start align-items-center">
                <MapIcon />
                <p className="mb-0 ms-3">
                  Center 3, Pakistan Air Force (PAF) Falcon Complex, Lahore
                </p>
              </div>
              <div className="d-flex justify-content-center justify-content-lg-start align-items-center mt-3 mt-lg-2">
                <MailIcon />
                <a
                  href="mailto:helpdesk@digipakistan.org"
                  className="mb-0 ms-3 word-break link"
                >
                  helpdesk@digipakistan.org
                </a>
              </div>
              <div className="d-flex justify-content-center justify-content-lg-start align-items-center mt-3">
                <MobileIcon />
                <a href="tel:04235974881" className="ms-3 link">
                  042-35974881
                </a>
              </div>
              <div className="d-flex justify-content-center justify-content-lg-start align-items-center mt-3">
                <MobileIcon />
                <a href="tel:04235974882" className="ms-3 link">
                  042-35974882
                </a>
              </div>
            </div>
            <div className="col-lg-8 ps-sm-3 px-3 d-flex flex-column justify-content-center">
              <h1 className="fw-bold mb-sm-0 text-center">Got a Question?</h1>
              <p className="text-justify">
                Is there something you can’t find an answer to or do you have
                something else you need help with? Let us know by filling out
                the form below!
              </p>

              <form className="overflow-hidden">
                <div className="row g-4">
                  <div className="col-sm-6 pe-4 pe-sm-0">
                    <Input
                      variant="filled"
                      label="First Name"
                      id="firstName"
                      fullWidth
                    />
                  </div>
                  <div className="col-sm-6 pe-4">
                    <Input
                      variant="filled"
                      label="Last Name"
                      id="lastName"
                      fullWidth
                    />
                  </div>
                  <div className="col-sm-6 pe-4 pe-sm-0">
                    <Input
                      variant="filled"
                      label="Contact Number"
                      id="contactNumber"
                      fullWidth
                    />
                  </div>
                  <div className="col-sm-6 pe-4">
                    <Input
                      variant="filled"
                      label="Email Address"
                      id="emailAddress"
                      fullWidth
                    />
                  </div>
                  <div className="col-12 pe-4">
                    <Input
                      variant="filled"
                      label="Subject"
                      id="subject"
                      fullWidth
                    />
                  </div>
                  <div className="col-12 pe-4">
                    <Input
                      variant="filled"
                      label="Message"
                      id="message"
                      fullWidth
                      multiline
                      rows={8}
                    />
                  </div>
                  <div className="col-12 pe-4">
                    <Button
                      variant="contained"
                      fullWidth
                      className="custom-button"
                    >
                      Send
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </div>
      <Copyright />
    </>
  );
};

export default ContactUs;

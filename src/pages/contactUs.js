import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Copyright from "../components/common/copyright/copyright";
import MapIcon from "@material-ui/icons/RoomOutlined";
import MailIcon from "@material-ui/icons/MailOutline";
import MobileIcon from "@material-ui/icons/PhoneAndroidRounded";
import Input from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YoutubeIcon from "@material-ui/icons/YouTube";
import Alert from "@material-ui/lab/Alert";
import { connect } from "react-redux";
import { signOut } from "../store/actions/authActions";

const ContactUs = ({ signOut }) => {
  useEffect(() => {
    signOut();
  }, [signOut]);

  // State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    emailAddress: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Getting values from input fields and setting in state (formData)
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  // Validating the input fields
  const validate = () => {
    const errors = {};

    // Regular Expressions
    const charactersRegEx = /^[a-zA-Z. ]+$/;
    const numberRegEx = /^[+0-9]{11,}$/;
    const emailRegEx = /^[\w_.-]+@([\w-]+\.)+\w{2,4}$/;

    if (formData.firstName.trim() === "") {
      errors.firstName = "First name mustn't be empty";
    } else if (!charactersRegEx.test(formData.firstName)) {
      errors.firstName = "Invalid First Name";
    }

    if (formData.lastName.trim() === "") {
      errors.lastName = "Last name mustn't be empty";
    } else if (!charactersRegEx.test(formData.lastName)) {
      errors.lastName = "Invalid Last Name";
    }

    if (formData.contactNumber.trim() === "") {
      errors.contactNumber = "Contact number mustn't be empty";
    } else if (!numberRegEx.test(formData.contactNumber)) {
      errors.contactNumber = "Invalid Contact Number";
    }

    if (formData.emailAddress.trim() === "") {
      errors.emailAddress = "Email address mustn't be empty";
    } else if (!emailRegEx.test(formData.emailAddress)) {
      errors.emailAddress = "Invalid Email Address";
    }

    if (formData.subject.trim() === "") {
      errors.subject = "Subject mustn't be empty";
    }

    if (formData.message.trim() === "") {
      errors.message = "Message mustn't be empty";
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };

  // Sending Data
  const handleSubmit = (event) => {
    event.preventDefault();

    // Checking Errors in input fields
    const errors = validate();
    setErrors(errors || {});
    if (errors) return;

    window.location.href = `mailto:helpdesk@digipakistan.org?subject=${formData.subject}&body=${formData.message}%0D%0A%0D%0ASender Name: ${formData.firstName}%20${formData.lastName} %0D%0ASender Contact Number: ${formData.contactNumber} %0ASender Email Address: ${formData.emailAddress}%0A%0D`;
    setFormData({
      firstName: "",
      lastName: "",
      contactNumber: "",
      emailAddress: "",
      subject: "",
      message: "",
    });
  };
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
              <div className="d-flex justify-content-center flex-wrap">
                <a
                  href="https://www.facebook.com/digipakistan.org"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-3 pointer mt-3"
                >
                  <FacebookIcon
                    className="icon-contact"
                    style={{ fontSize: 35 }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/invites/contact/?i=1nd00az19t5ph&utm_content=ktn9t9y"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-3 pointer mt-3"
                >
                  <InstagramIcon
                    className="icon-contact"
                    style={{ fontSize: 35 }}
                  />
                </a>
                <a
                  href="https://twitter.com/DigipakistanP"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-3 pointer mt-3"
                >
                  <TwitterIcon
                    className="icon-contact"
                    style={{ fontSize: 35 }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/digipakistan"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-3 pointer mt-3"
                >
                  <LinkedInIcon
                    className="icon-contact"
                    style={{ fontSize: 35 }}
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCvu0jNb7YmT7kagRfI6lWXw"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-3 pointer mt-3"
                >
                  <YoutubeIcon
                    className="icon-contact"
                    style={{ fontSize: 35 }}
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-8 ps-sm-3 px-3 d-flex flex-column justify-content-center">
              <h1 className="fw-bold mb-sm-0">Got a Question?</h1>
              <p className="text-justify">
                Is there something you can’t find an answer to or do you have
                something else you need help with? Let us know by filling out
                the form below!
              </p>

              <form onSubmit={handleSubmit} className="overflow-hidden">
                <div className="row g-4">
                  <div className="col-sm-6 pe-4 pe-sm-0">
                    <Input
                      variant="standard"
                      label="First Name"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      fullWidth
                    />
                    {errors.firstName && (
                      <Alert severity="error" variant="filled">
                        {errors.firstName}
                      </Alert>
                    )}
                  </div>
                  <div className="col-sm-6 pe-4">
                    <Input
                      variant="standard"
                      label="Last Name"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      fullWidth
                    />
                    {errors.lastName && (
                      <Alert severity="error" variant="filled">
                        {errors.lastName}
                      </Alert>
                    )}
                  </div>
                  <div className="col-sm-6 pe-4 pe-sm-0">
                    <Input
                      variant="standard"
                      label="Contact Number"
                      id="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      fullWidth
                    />
                    {errors.contactNumber && (
                      <Alert severity="error" variant="filled">
                        {errors.contactNumber}
                      </Alert>
                    )}
                  </div>
                  <div className="col-sm-6 pe-4">
                    <Input
                      variant="standard"
                      label="Email Address"
                      id="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleChange}
                      fullWidth
                    />
                    {errors.emailAddress && (
                      <Alert severity="error" variant="filled">
                        {errors.emailAddress}
                      </Alert>
                    )}
                  </div>
                  <div className="col-12 pe-4">
                    <Input
                      variant="standard"
                      label="Subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      fullWidth
                    />
                    {errors.subject && (
                      <Alert severity="error" variant="filled">
                        {errors.subject}
                      </Alert>
                    )}
                  </div>
                  <div className="col-12 pe-4">
                    <Input
                      variant="standard"
                      label="Message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      fullWidth
                      multiline
                      rows={8}
                    />
                    {errors.message && (
                      <Alert severity="error" variant="filled">
                        {errors.message}
                      </Alert>
                    )}
                  </div>
                  <div className="col-12 pe-4">
                    <Button
                      type="submit"
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

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(ContactUs);

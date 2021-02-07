import React, { useState, useLayoutEffect } from "react";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Copyright from "../components/common/copyright/copyright";
import Alert from "@material-ui/lab/Alert";
import { connect } from "react-redux";
import {
  uploadInstructorCV,
  applicationForInstructor,
  clearAll,
} from "../store/actions/becomeAnInstructorActions";
import LinearProgress from "@material-ui/core/LinearProgress";
import CircularProgress from "@material-ui/core/CircularProgress";
import firebase from "../config/fbConfig";

const BecomeAnInstructor = ({
  uploadInstructorCV,
  application,
  msg,
  clearAll,
}) => {
  // State
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    typeOfCourse: "",
    expertise: "",
    bio: "",
    linkedInURL: "",
    country: "",
    city: "",
    file: "",
    cv: "",
  });
  const [errors, setErrors] = useState({});
  const [progress, setProgress] = useState(0);
  const [btnLoading, setBtnLoading] = useState(false);
  const [applicantData, setApplicantData] = useState([]);

  // Checkinf if already submited the application
  const checkApplication = async () => {
    const allInstructors = [];

    const data = await firebase
      .firestore()
      .collection("Become an instructor")
      .where("visibility", "==", "public")
      .get();

    data.forEach((doc) => {
      allInstructors.push(doc.data());
    });

    setApplicantData(allInstructors);
  };

  useLayoutEffect(() => {
    checkApplication();
  }, []);

  // Getting values from input fields
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  // Getting Upload file value
  const handleFile = (event) => {
    if (event.target.files[0]) {
      // Uploading CV in Database
      uploadInstructorCV(
        formData.fullName,
        event.target.files[0],
        setProgress,
        formData,
        setFormData
      );
    } else {
      return;
    }
  };

  // Validate the input fields
  const validate = () => {
    const errors = {};

    // Regular Expressions
    const charactersRegEx = /^[a-zA-Z ]+$/;
    const numberRegEx = /^[+0-9]{11,}$/;
    const emailRegEx = /^[\w_.-]+@([\w-]+\.)+\w{2,4}$/;

    if (formData.fullName.trim() === "") {
      errors.fullName = "Full name mustn't be empty";
    } else if (!charactersRegEx.test(formData.fullName)) {
      errors.fullName = "Invalid Full Name";
    }

    if (formData.phoneNumber.trim() === "") {
      errors.phoneNumber = "Phone number mustn't be empty";
    } else if (!numberRegEx.test(formData.phoneNumber)) {
      errors.phoneNumber = "Invalid Phone Number";
    }

    if (formData.emailAddress.trim() === "") {
      errors.emailAddress = "Email address mustn't be empty";
    } else if (!emailRegEx.test(formData.emailAddress)) {
      errors.emailAddress = "Invalid Email Address";
    }

    if (formData.typeOfCourse.trim() === "") {
      errors.typeOfCourse = "Type of course mustn't be empty";
    }

    if (formData.expertise.trim() === "") {
      errors.expertise = "Expertise mustn't be empty";
    }

    if (formData.linkedInURL.trim() === "") {
      errors.linkedInURL = "LinkedIn URL mustn't be empty";
    }

    if (formData.country.trim() === "") {
      errors.country = "Country mustn't be empty";
    }

    if (formData.city.trim() === "") {
      errors.city = "City mustn't be empty";
    }

    if (formData.file === "") {
      errors.file = "Upload CV mustn't be empty";
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };

  // Checking that the applicant have submitted the form already
  const haveData = applicantData.filter(
    (doc) => doc.emailAddress === formData.emailAddress
  );

  // Disable all the component
  let disable = true;
  if (haveData.length > 0) {
    disable = false;
  }

  // Sending Form Data
  const handleSubmit = (event) => {
    event.preventDefault();

    // Checking errors in form input fields
    const errors = validate();
    setErrors(errors || {});
    if (errors) return;

    // Checking the cv url in state
    if (!formData.cv) return;

    // When all set btn loading set to true
    setBtnLoading(true);

    // Sending application in database
    application(formData, setBtnLoading);
  };

  if (msg) {
    setTimeout(() => {
      setFormData({
        fullName: "",
        emailAddress: "",
        phoneNumber: "",
        typeOfCourse: "",
        expertise: "",
        bio: "",
        linkedInURL: "",
        country: "",
        city: "",
        file: "",
        cv: "",
      });
      clearAll();
      window.location.reload();
    }, 5000);
  }

  return disable ? (
    <>
      <Container className="mt py-4 become-an-instructor">
        <h1 className="text-center mx-3 fw-bold">Become An Instructor</h1>

        <form onSubmit={handleSubmit} className="mt-3">
          <Input
            variant="standard"
            id="fullName"
            label="Full Name *"
            fullWidth
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && (
            <Alert severity="error" variant="filled">
              {errors.fullName}
            </Alert>
          )}
          <Input
            variant="standard"
            id="emailAddress"
            label="Email Address *"
            value={formData.emailAddress}
            onChange={handleChange}
            className="mt-3"
            fullWidth
          />
          {errors.emailAddress && (
            <Alert severity="error" variant="filled">
              {errors.emailAddress}
            </Alert>
          )}
          <Input
            variant="standard"
            id="phoneNumber"
            label="Phone Number *"
            value={formData.phoneNumber}
            onChange={handleChange}
            fullWidth
            className="mt-3"
          />
          {errors.phoneNumber && (
            <Alert severity="error" variant="filled">
              {errors.phoneNumber}
            </Alert>
          )}
          <Input
            variant="standard"
            id="typeOfCourse"
            value={formData.typeOfCourse}
            onChange={handleChange}
            label="Which type of course / courses you want to teach? *"
            fullWidth
            className="mt-3"
            multiline
            rows={7}
          />
          {errors.typeOfCourse && (
            <Alert severity="error" variant="filled">
              {errors.typeOfCourse}
            </Alert>
          )}
          <Input
            variant="standard"
            id="expertise"
            value={formData.expertise}
            onChange={handleChange}
            label="Describe your expertise? *"
            fullWidth
            className="mt-3"
            multiline
            rows={7}
          />
          {errors.expertise && (
            <Alert severity="error" variant="filled">
              {errors.expertise}
            </Alert>
          )}
          <Input
            variant="standard"
            id="bio"
            value={formData.bio}
            onChange={handleChange}
            label="Write a short bio? (Optional)"
            fullWidth
            className="mt-3"
            multiline
            rows={7}
          />
          <Input
            variant="standard"
            id="linkedInURL"
            value={formData.linkedInURL}
            onChange={handleChange}
            label="LinkedIn URL (Optional)"
            fullWidth
            className="mt-3"
          />
          {errors.linkedInURL && (
            <Alert severity="error" variant="filled">
              {errors.linkedInURL}
            </Alert>
          )}
          <Input
            variant="standard"
            id="country"
            value={formData.country}
            onChange={handleChange}
            label="Country *"
            fullWidth
            className="mt-3"
          />
          {errors.country && (
            <Alert severity="error" variant="filled">
              {errors.country}
            </Alert>
          )}
          <Input
            variant="standard"
            id="city"
            label="City *"
            value={formData.city}
            onChange={handleChange}
            fullWidth
            className="mt-3"
          />
          {errors.city && (
            <Alert severity="error" variant="filled">
              {errors.city}
            </Alert>
          )}
          <div className="my-3">
            <label htmlFor="file" className="mb-2 fw-bold">
              Upload Your CV
            </label>
            <input
              type="file"
              id="file"
              onChange={handleFile}
              accept="application/msword, .docx, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.presentationml.presentation, application/vnd.ms-powerpoint, text/plain, application/pdf, image/*"
              className="form-control"
              aria-describedby="emailHelp"
              disabled={
                formData.fullName && formData.emailAddress ? false : true
              }
            />
            <div id="emailHelp" className="form-text">
              {formData.fullName && formData.emailAddress
                ? "Now, upload you cv. Extensions are pdf, word, excel, powerpoint and image"
                : `Firstly, write your ${formData.fullName ? "" : "name "} ${
                    formData.fullName || formData.emailAddress ? "" : " and "
                  }  ${
                    formData.emailAddress ? "" : "email "
                  } then you're able upload your CV`}
            </div>
          </div>

          <div className="d-flex justify-content-center fw-bold">
            {progress + "%"}
          </div>
          <LinearProgress
            variant="determinate"
            className="mb-3"
            value={progress}
          />

          {errors.file && (
            <Alert severity="error" variant="filled">
              {errors.file}
            </Alert>
          )}

          {Object.keys(errors).length > 0 && (
            <Alert severity="info" className="my-3" variant="filled">
              Some fields are missing. Check it.
            </Alert>
          )}

          {msg && (
            <Alert severity="success" className="my-3" variant="filled">
              {msg}
            </Alert>
          )}

          <Button
            type="submit"
            disabled={btnLoading}
            variant="contained"
            className="custom-button"
            fullWidth
          >
            {btnLoading && <CircularProgress className="loader" />}
            {btnLoading ? <span className="ms-3">Sending...</span> : "Submit"}
          </Button>
        </form>
      </Container>
      <Copyright />
    </>
  ) : (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <h3 className="fw-bold mx-3 text-center">
        Dear Applicant, You have already submitted your application
      </h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    msg: state.becomeAnInstructor.msg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadInstructorCV: (fullName, file, setProgress, formData, setFormData) =>
      dispatch(
        uploadInstructorCV(fullName, file, setProgress, formData, setFormData)
      ),
    application: (formData, setBtnLoading) =>
      dispatch(applicationForInstructor(formData, setBtnLoading)),
    clearAll: () => dispatch(clearAll()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BecomeAnInstructor);

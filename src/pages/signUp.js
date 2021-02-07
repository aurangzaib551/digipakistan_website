import React, { useState, useLayoutEffect } from "react";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import Copyright from "../components/common/copyright/copyright";
import { connect } from "react-redux";
import { signUp, clearAll } from "../store/actions/authActions";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import ToastServive from "react-material-toast";

const toast = ToastServive.new({
  place: "topRight",
  duration: 2,
  maxCount: 1,
});

const SignUp = ({ registerUser, msg, clearAll }) => {
  // State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [btnLoading, setBtnLoading] = useState(false);

  // Object Destructuring
  const { replace } = useHistory();

  // Getting values from input fields
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  // Validation on input fields
  const validate = () => {
    const errors = {};

    // Regular Expressions
    const charactersRegEx = /^[a-zA-Z ]+$/;
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

    if (formData.emailAddress.trim() === "") {
      errors.emailAddress = "Email address mustn't be empty";
    } else if (!emailRegEx.test(formData.emailAddress)) {
      errors.emailAddress = "Invalid Email Address";
    }

    if (formData.password.trim() === "") {
      errors.password = "Password mustn't be empty";
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

    setBtnLoading(true);

    // Registering User in DB
    registerUser(formData, setBtnLoading);
  };

  useLayoutEffect(() => {
    // Resetting all
    if (msg) {
      if (msg === "Your account has been successfully created.") {
        toast.success(msg, () => {
          setFormData({
            firstName: "",
            lastName: "",
            emailAddress: "",
            password: "",
          });
          clearAll();
          replace("/apply-now/login");
        });
      } else if (msg) {
        toast.error(msg, () => {
          clearAll();
        });
      }
    }
  }, [clearAll, msg, replace]);

  return (
    <>
      <div className="signup mt d-flex justify-content-center align-items-center">
        <Container className="d-flex flex-column justify-content-center align-items-center">
          <img
            src="https://i.ibb.co/LYC7rpt/logoPNG.png"
            alt="DigiPAKISTAN"
            width="200"
          />

          <form onSubmit={handleSubmit} className="form">
            <h1 className="fw-bold text-center mx-3">Registeration</h1>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
              label="First Name *"
              variant="standard"
              className="mt-2"
            />
            {errors.firstName && (
              <Alert severity="error" variant="filled">
                {errors.firstName}
              </Alert>
            )}
            <Input
              id="lastName"
              fullWidth
              label="Last Name *"
              value={formData.lastName}
              onChange={handleChange}
              variant="standard"
              className="mt-3"
            />
            {errors.lastName && (
              <Alert severity="error" variant="filled">
                {errors.lastName}
              </Alert>
            )}
            <Input
              id="emailAddress"
              fullWidth
              value={formData.emailAddress}
              onChange={handleChange}
              label="Email Address *"
              variant="standard"
              className="mt-3"
            />
            {errors.emailAddress && (
              <Alert severity="error" variant="filled">
                {errors.emailAddress}
              </Alert>
            )}
            <Input
              id="password"
              fullWidth
              label="Password *"
              type="password"
              value={formData.password}
              onChange={handleChange}
              variant="standard"
              className="mt-3"
            />
            {errors.password && (
              <Alert severity="error" variant="filled">
                {errors.password}
              </Alert>
            )}

            <Button
              disabled={btnLoading}
              type="submit"
              variant="contained"
              className="custom-button mt-3"
              fullWidth
            >
              {btnLoading && <CircularProgress className="loader" />}
              {btnLoading ? (
                <span className="ms-3">Registering...</span>
              ) : (
                "Register"
              )}
            </Button>
          </form>
          <p className="mb-0 mt-3 fw-bold">
            Have an account?{" "}
            <Link to="/apply-now/login" className="custom-link">
              Log In
            </Link>
          </p>
        </Container>
      </div>
      <Copyright />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    msg: state.auth.msg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (formData, setBtnLoading) =>
      dispatch(signUp(formData, setBtnLoading)),
    clearAll: () => dispatch(clearAll()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

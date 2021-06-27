import React, { useState, useLayoutEffect } from "react";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import Copyright from "../components/common/copyright/Copyright";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import { connect } from "react-redux";
import { logIn, clearAll } from "../store/actions/AuthActions";
import ToastServive from "react-material-toast";
import { Helmet } from "react-helmet";

const toast = ToastServive.new({
  place: "topRight",
  duration: 2,
  maxCount: 1,
});

const LogIn = ({ logIn, clearAll, msg }) => {
  const [formData, setFormData] = useState({
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
    const emailRegEx = /^[\w_.-]+@([\w-]+\.)+\w{2,4}$/;

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

    // Logging in user
    logIn(formData, setBtnLoading);
  };

  // Resetting all
  useLayoutEffect(() => {
    if (msg) {
      if (msg === "Successfully logged in") {
        toast.success(msg, () => {
          setFormData({
            emailAddress: "",
            password: "",
          });
          clearAll();
          replace("/apply-now/emailVerification");
        });
      } else if (msg === "Successfully log out") {
        toast.success(msg, () => {
          clearAll();
        });
      } else if (msg) {
        toast.error(msg, () => {
          clearAll();
        });
      }
    }
  }, [msg, clearAll, replace]);

  return (
    <>
      <Helmet>
        <title>Log In</title>
      </Helmet>
      <div className="signup mt d-flex justify-content-center align-items-center">
        <Container className="d-flex flex-column justify-content-center align-items-center">
          <img
            src="https://i.ibb.co/LYC7rpt/logoPNG.png"
            alt="DigiPAKISTAN"
            width="200"
            height="200"
          />

          <form onSubmit={handleSubmit} className="form">
            <h1 className="fw-bold text-center mx-3">Log In</h1>
            <Input
              id="emailAddress"
              fullWidth
              value={formData.emailAddress}
              onChange={handleChange}
              label="Email Address"
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
              type="password"
              value={formData.password}
              onChange={handleChange}
              label="Password"
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
                <span className="ms-3">Logging In...</span>
              ) : (
                "Log In"
              )}
            </Button>
          </form>
          <p className="mb-0 mt-3 fw-bold">
            Forgot{" "}
            <Link to="/apply-now/forgotPassword" className="custom-link">
              Password
            </Link>
          </p>
          <p className="mb-0">Or</p>
          <p className="mb-0 fw-bold">
            Don't have an account?{" "}
            <Link to="/apply-now/signup" className="custom-link">
              Sign Up
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
    msg: state.auth.loginMsg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (formData, setBtnLoading) =>
      dispatch(logIn(formData, setBtnLoading)),
    clearAll: () => dispatch(clearAll()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);

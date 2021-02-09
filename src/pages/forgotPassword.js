import React, { useState, useLayoutEffect } from "react";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { clearAll, forgotPassword } from "../store/actions/authActions";
import ToastServive from "react-material-toast";
import Alert from "@material-ui/lab/Alert";
import { Helmet } from "react-helmet";

const toast = ToastServive.new({
  place: "topRight",
  duration: 2,
  maxCount: 1,
});

const ForgotPassword = ({ forgotPassword, msg, clearAll }) => {
  // State
  const [btnLoading, setBtnLoading] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [errors, setErrors] = useState({});

  //   Validating the input fields
  const validate = () => {
    const errors = {};

    // Regular Expressions
    const emailRegEx = /^[\w_.-]+@([\w-]+\.)+\w{2,4}$/;

    if (emailAddress.trim() === "") {
      errors.emailAddress = "Email address mustn't be empty";
    } else if (!emailRegEx.test(emailAddress)) {
      errors.emailAddress = "Invalid Email Address";
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };

  //   Resetting Password
  const handleSubmit = (event) => {
    event.preventDefault();

    // Checking Errors in input fields
    const errors = validate();
    setErrors(errors || {});
    if (errors) return;

    setBtnLoading(true);
    //   Resetting password

    forgotPassword(emailAddress, setBtnLoading);
  };

  // Resetting all
  useLayoutEffect(() => {
    if (msg) {
      if (
        msg ===
        `An email is sent to your ${emailAddress} for resetting the password`
      ) {
        toast.success(msg, () => {
          clearAll();
          setEmailAddress("");
        });
      } else if (msg) {
        toast.error(msg, () => {
          clearAll();
        });
      }
    }
  }, [msg, clearAll, emailAddress]);

  return (
    <>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <Container className="mt signup d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex justify-content-center">
          <img
            src="https://i.ibb.co/LYC7rpt/logoPNG.png"
            alt="DigiPAKISTAN"
            width="200"
            height="200"
          />
        </div>
        <form onSubmit={handleSubmit} className="form d-flex flex-column">
          <Input
            id="forgotPassword"
            value={emailAddress}
            variant="standard"
            onChange={(e) => setEmailAddress(e.target.value)}
            label="Email Address *"
          />
          {errors.emailAddress && (
            <Alert severity="error" variant="filled">
              {errors.emailAddress}
            </Alert>
          )}
          <Button
            type="submit"
            disabled={btnLoading}
            variant="contained"
            className="custom-button mt-3"
          >
            {btnLoading && <CircularProgress className="loader" />}
            {btnLoading ? (
              <span className="ms-3">Resetting Password...</span>
            ) : (
              "Reset Password"
            )}
          </Button>
        </form>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    msg: state.auth.resetPasswordMsg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    forgotPassword: (emailAddress, setBtnLoading) =>
      dispatch(forgotPassword(emailAddress, setBtnLoading)),
    clearAll: () => dispatch(clearAll()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);

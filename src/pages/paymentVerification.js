import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import data from "../components/bank_challan/bankData";

const PaymentVerification = (props) => {
  // Object Destructuring
  const { uid, emailVerified, applicationSubmitted, status } = props;

  // State
  const [formData, setFormData] = useState({
    paid: "",
    firstCourseName: "",
    secondCourseName: "",
    thirdCourseName: "",
    firstChallanNo: "",
    secondChallanNo: "",
    thirdChallanNo: "",
    accountNo: "",
    tid: "",
    referenceID: "",
  });
  const [verify, setVerify] = useState(false);
  const [notVerify, setNotVerify] = useState(false);

  // User is logged in or not
  if (!uid) return <Redirect to="/apply-now/login" />;
  // Checking email is verified or not
  if (!emailVerified) return <Redirect to="/apply-now/emailVerification" />;
  // Checking application is submitted or not
  if (!applicationSubmitted)
    return <Redirect to="/apply-now/applicationForm" />;
  if (!status) return <Redirect to="/apply-now/admissionStatus" />;

  // Getting values from input fields
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelect = (event) => {
    setFormData({
      ...formData,
      paid: event.target.value,
      firstChallanNo: "",
      firstCourseName: "",
      secondChallanNo: "",
      secondCourseName: "",
      thirdChallanNo: "",
      thirdCourseName: "",
      accountNo: "",
      tid: "",
      referenceID: "",
    });
  };

  const handleClick = () => {
    if (formData.firstChallanNo) {
      const bankData = data.includes(formData.firstChallanNo.toString());
      if (bankData) {
        setVerify(true);
        setNotVerify(false);
      } else if (bankData === false) {
        setNotVerify(true);
        setVerify(false);
      }
    }
    if (formData.secondChallanNo) {
      const bankData = data.includes(formData.secondChallanNo.toString());
      if (bankData) {
        setVerify(true);
        setNotVerify(false);
      } else if (bankData === false) {
        setNotVerify(true);
        setVerify(false);
      }
    }
    if (formData.thirdChallanNo) {
      const bankData = data.includes(formData.thirdChallanNo.toString());
      if (bankData) {
        setVerify(true);
        setNotVerify(false);
      } else if (bankData === false) {
        setNotVerify(true);
        setVerify(false);
      }
    }
    if (formData.accountNo) {
      const bankData = data.includes(formData.accountNo.toString());
      if (bankData) {
        setVerify(true);
        setNotVerify(false);
      } else if (bankData === false) {
        setNotVerify(true);
        setVerify(false);
      }
    }
    if (formData.tid) {
      const bankData = data.includes(formData.tid.toString());
      if (bankData) {
        setVerify(true);
        setNotVerify(false);
      } else if (bankData === false) {
        setNotVerify(true);
        setVerify(false);
      }
    }
    if (formData.referenceID) {
      const bankData = data.includes(formData.referenceID.toString());
      if (bankData) {
        setVerify(true);
        setNotVerify(false);
      } else if (bankData === false) {
        setNotVerify(true);
        setVerify(false);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Payment Verification Portal</title>
      </Helmet>
      <div className="mt pt-4 payment-verification">
        <h1 className="text-center fw-bold mx-3">
          Payment Verification Portal
        </h1>
        <Container className="d-flex flex-column align-items-center">
          <h4 className="fw-bold">
            Name: <span className="fw-normal">{props.match.params.name}</span>
          </h4>
          <h4 className="fw-bold">
            Roll #:{" "}
            <span className="fw-normal">{props.match.params.fatherName}</span>
          </h4>
          <h4 className="fw-bold">
            Applicant:{" "}
            <span className="fw-normal">{props.match.params.applicant}</span>
          </h4>

          <Input
            className="mt-3"
            id="paid"
            name="paid"
            value={formData.paid}
            onChange={handleSelect}
            label="Select option by which you paid registeration charges?"
            fullWidth
            select
          >
            <MenuItem value="HBL Challan Deposit">HBL Challan Deposit</MenuItem>
            <MenuItem value="Online Banking">Online Banking</MenuItem>
            <MenuItem value="eService for Overseas">
              eService for Overseas
            </MenuItem>
          </Input>

          {formData.paid === "HBL Challan Deposit" && (
            <>
              <Input
                className="mt-3"
                id="firstCourseName"
                name="firstCourseName"
                label="First Course Name"
                value={formData.firstCourseName}
                onChange={handleChange}
                fullWidth
              />

              <Input
                className="mt-3"
                id="firstChallanNo"
                name="firstChallanNo"
                value={formData.firstChallanNo}
                onChange={handleChange}
                label="Challan # 1"
                helperText="Enter your first course challan number here"
                fullWidth
              />

              <Input
                className="mt-3"
                id="secondCourseName"
                name="secondCourseName"
                value={formData.secondCourseName}
                onChange={handleChange}
                label="Second Course Name (Optional)"
                fullWidth
              />

              <Input
                className="mt-3"
                id="secondChallanNo"
                name="secondChallanNo"
                value={formData.secondChallanNo}
                onChange={handleChange}
                label="Challan # 2 (Optional)"
                helperText="Enter your second course challan number here"
                fullWidth
              />

              <Input
                className="mt-3"
                id="thirdCourseName"
                name="thirdCourseName"
                value={formData.thirdCourseName}
                onChange={handleChange}
                label="Third Course Name (Optional)"
                fullWidth
              />

              <Input
                className="mt-3"
                id="thirdChallanNo"
                name="thirdChallanNo"
                value={formData.thirdChallanNo}
                onChange={handleChange}
                label="Challan # 3 (Optional)"
                helperText="Enter your third course challan number here"
                fullWidth
              />
            </>
          )}

          {formData.paid === "Online Banking" && (
            <>
              <Input
                className="mt-3"
                id="accountNo"
                name="accountNo"
                value={formData.accountNo}
                onChange={handleChange}
                label="From Account"
                helperText="Add account number by which you transfer registeration charges"
                fullWidth
              />

              <Input
                className="mt-3"
                id="tid"
                name="tid"
                value={formData.tid}
                onChange={handleChange}
                label="Transaction ID"
                helperText="Enter your Transaction ID"
                fullWidth
              />

              <Input
                className="mt-3"
                id="referenceID"
                name="referenceID"
                value={formData.referenceID}
                onChange={handleChange}
                label="Reference ID (Optional)"
                helperText="Enter your third course challan number here"
                fullWidth
              />

              <Input
                className="mt-3"
                id="firstCourseName"
                name="firstCourseName"
                label="First Course Name"
                value={formData.firstCourseName}
                onChange={handleChange}
                fullWidth
              />
              <Input
                className="mt-3"
                id="secondCourseName"
                name="secondCourseName"
                value={formData.secondCourseName}
                onChange={handleChange}
                label="Second Course Name (Optional)"
                fullWidth
              />
              <Input
                className="mt-3"
                id="thirdCourseName"
                name="thirdCourseName"
                value={formData.thirdCourseName}
                onChange={handleChange}
                label="Third Course Name (Optional)"
                fullWidth
              />
            </>
          )}

          <p className="mb-0 mt-3">{verify && "Payment is verified"}</p>
          <p className="mb-0 mt-3">{notVerify && "Payment is not verified"}</p>

          <Button
            onClick={handleClick}
            variant="contained"
            className="custom-button mt-3"
          >
            Submit
          </Button>
        </Container>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    status: state.firebase.profile.admissionStatus,
    uid: state.firebase.auth.uid,
    emailVerified: state.firebase.auth.emailVerified,
    applicationSubmitted: state.firebase.profile.applicationSubmitted,
  };
};

export default connect(mapStateToProps)(PaymentVerification);

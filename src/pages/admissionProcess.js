import React, { useEffect } from "react";
import AdmissionProcessImage from "../components/admission_process/admissionProcessImage";
import Process from "../components/admission_process/process";
import Copyright from "../components/common/copyright/copyright";
import { connect } from "react-redux";
import { signOut } from "../store/actions/authActions";
import { Helmet } from "react-helmet";

const AdmissionProcess = ({ signOut }) => {
  useEffect(() => {
    signOut();
  }, [signOut]);
  return (
    <>
      <Helmet>
        <title>Admission Process</title>
      </Helmet>
      <AdmissionProcessImage />
      <Process />
      <Copyright />
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(AdmissionProcess);

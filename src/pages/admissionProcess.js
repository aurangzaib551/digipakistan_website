import React, { useEffect } from "react";
import AdmissionProcessImage from "../components/admission_process/AdmissionProcessImage";
import Process from "../components/admission_process/Process";
import Copyright from "../components/common/copyright/Copyright";
import { connect } from "react-redux";
import { signOut } from "../store/actions/AuthActions";
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

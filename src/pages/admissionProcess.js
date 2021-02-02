import React from "react";
import AdmissionProcessImage from "../components/admission_process/admissionProcessImage";
import Process from "../components/admission_process/process";
import Copyright from "../components/common/copyright/copyright";

const AdmissionProcess = () => {
  return (
    <>
      <AdmissionProcessImage />
      <Process />
      <Copyright />
    </>
  );
};

export default AdmissionProcess;

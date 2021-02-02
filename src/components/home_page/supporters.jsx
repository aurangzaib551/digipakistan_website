import React from "react";
import Container from "@material-ui/core/Container";

const Supporters = () => {
  return (
    <Container>
      <h1 className="fw-bold text-center mx-3">Supporting Institutions</h1>
      <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-md-between align-items-md-stretch flex-wrap mb-5">
        <img
          src="https://i.ibb.co/d6SCLDg/higher-education-commission-pakistan-logo-5-BB6-E752-C3-seeklogo-com.png"
          alt="Higher Education Commission (HEC)"
          width="180"
          className="mx-3 mt-5"
        />
        <img
          src="https://i.ibb.co/DLrrWvL/1.jpg"
          alt="Pakistan Engineering Council (PEC)"
          width="210"
          className="mx-3 mt-5"
        />
        <img
          src="https://i.ibb.co/5W3FnhR/University-of-the-Punjab-logo.png"
          alt="Punjab University (PU)"
          width="150"
          className="mx-3 mt-5"
        />
        <img
          src="https://i.ibb.co/mhhjcXM/IEP.png"
          alt="IEP"
          width="150"
          className="mx-3 mt-5"
        />
      </div>
    </Container>
  );
};

export default Supporters;

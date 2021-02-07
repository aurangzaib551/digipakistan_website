import React from "react";
import Container from "@material-ui/core/Container";
import { useMediaQuery } from "react-responsive";

const Supporters = () => {
  // Media Queries
  const isSmall = useMediaQuery({
    query: "(max-width: 576px)",
  });

  return (
    <Container>
      <h1 className="fw-bold text-center mx-3">Supporting Institutions</h1>
      <div className="d-flex align-items-center justify-content-center justify-content-md-between align-items-md-stretch flex-wrap mb-5">
        <img
          src="https://i.ibb.co/d6SCLDg/higher-education-commission-pakistan-logo-5-BB6-E752-C3-seeklogo-com.png"
          alt="Higher Education Commission (HEC)"
          width={isSmall ? "120" : "180"}
          className="mx-3 mt-5"
        />
        <img
          src="https://i.ibb.co/DLrrWvL/1.jpg"
          alt="Pakistan Engineering Council (PEC)"
          width={isSmall ? "130" : "210"}
          className="mx-3 mt-5"
        />
        <img
          src="https://i.ibb.co/5W3FnhR/University-of-the-Punjab-logo.png"
          alt="Punjab University (PU)"
          width={isSmall ? "120" : "150"}
          height={isSmall ? "150" : "auto"}
          className="mx-3 mt-5"
        />
        <img
          src="https://i.ibb.co/mhhjcXM/IEP.png"
          alt="IEP"
          width={isSmall ? "100" : "150"}
          className="mx-3 mt-5"
        />
      </div>
    </Container>
  );
};

export default Supporters;

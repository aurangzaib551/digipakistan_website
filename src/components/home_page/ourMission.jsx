import React from "react";
import Container from "@material-ui/core/Container";

const OurMission = () => {
  return (
    <Container>
      <div className="row g-0 my-5 our-mission">
        <div className="col-lg-6">
          <h1 className="fw-bold">Our Mission</h1>
          <p>
            To transform Pakistani Youth into productive workforce to contest
            the challenges of fourth industrial revolution through latest,
            demand driven and state of the art IT Skills with the increased
            access to high-quality education for everyone, anywhere and anytime.
          </p>
          <p>
            <strong>DigiPAKISTAN</strong> Vision is to become leader in building
            a highly skilled human resource in diversified IT domains and
            contribute in nation building towards a knowledge-based economy. In
            order to bring this vision, a comprehensive{" "}
            <strong>DigiPAKISTAN National Skills Development Initiative</strong>{" "}
            has been designed which provides contemporary online training of{" "}
            <strong>
              Information Technology in Technical, Non-Technical &amp; High Tech
              Domains
            </strong>{" "}
            across all provinces of Pakistan &amp; overseas Pakistanis to
            empower youth of the nation.
          </p>
        </div>
        <div className="col-lg-6 ps-lg-3 d-flex justify-content-center">
          <iframe
            title="DG"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/bMGzyml4HMY?rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Container>
  );
};

export default OurMission;

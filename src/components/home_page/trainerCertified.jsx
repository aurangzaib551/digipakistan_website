import React from "react";
import Container from "@material-ui/core/Container";

const TrainerCertified = () => {
  return (
    <Container className="mt-5">
      <h1 className="fw-bold mx-3 text-center mb-0">
        Our Trainers Certified From
      </h1>
      <div className="d-flex flex-wrap align-items-center justify-content-around">
        <img
          src="https://i.ibb.co/z5q7VJY/aws.png"
          className="mx-3 mt-4"
          width="100"
          alt="aws"
        />
        <img
          src="https://i.ibb.co/jrdPzpn/cisco.png"
          className="mx-3 mt-4"
          width="100"
          alt="cisco"
        />
        <img
          src="https://i.ibb.co/nB6x7Bp/google-logo.png"
          className="mx-3 mt-4"
          width="200"
          alt="google"
        />
        <img
          src="https://i.ibb.co/0GvKT5B/microsoft-logo.png"
          alt="microsoft"
          className="mx-3 mt-4"
          width="200"
        />
        <img
          src="https://i.ibb.co/5R5Wqdv/EC-Council-logo.png"
          alt="ec-council"
          className="mx-3 mt-4"
          width="200"
        />
        <img
          src="https://i.ibb.co/g93s0Lv/oracle.png"
          className="mx-3 mt-4"
          width="200"
          alt="oracle"
        />
      </div>
      <div className="my-5">
        <p className="text-justify">
          <strong>DigiPAKISTAN National Skills Development Program</strong> is
          an <strong>IT initiative</strong> launched with the vision of
          Pakistan’s digital ambition and to work towards a digitally
          progressive and inclusive Pakistan. It will unleash the potential of
          the youth. Pakistan has the second biggest population of youth and it
          can be turned into strength through digital work. Women can also
          contribute to the sector as well, aimed at helping young career
          seekers understand the basic information technology functioning of the
          sector and the job role they aspire to take on. Today's highly
          competitive and demanding employment market is looking for only
          talented and skilled manpower with enough command on the information
          technology industry essentials.
        </p>
        <p className="mb-0 text-justify">
          There are so many Information Technology Programs available at{" "}
          <strong>DigiPAKISTAN</strong> and all you have to do is to enroll
          yourself in your desired course.
        </p>
      </div>
    </Container>
  );
};

export default TrainerCertified;

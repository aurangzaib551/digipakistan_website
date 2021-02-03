import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const JoinDigiPAKISTAN = () => {
  // Object Destructuring
  const { push } = useHistory();

  const go = (link) => {
    setTimeout(() => {
      push(link);
    }, 400);
  };
  return (
    <Container>
      <div className="row pb-5">
        <div className="col-lg-6 d-flex flex-column mt-5 align-items-center">
          <h3 className="fw-bold text-center">Become an Instructor</h3>
          <p className="text-center mx-lg-4 text-justify small">
            You can apply as a trainer for our available programs or you have
            the opportunity to launch a new course &amp; can earn profitable
            income. Become a Marketing Partner Promote DigiPakistan Programs on
            different social media platforms &amp; earn{" "}
          </p>
          <Button
            onClick={() => go("/joinDigiPAKISTAN/becomeAnInstructor")}
            variant="contained"
            className="custom-button"
          >
            Start Teaching
          </Button>
        </div>
        <div className="col-lg-6 d-flex mt-5 flex-column align-items-center">
          <h3 className="fw-bold text-center">Become a Marketing Partner</h3>
          <p className="text-center mx-lg-2 text-justify small">
            Promote DigiPakistan Programs on different social media platforms
            &amp; earn profitable income and exciting incentives on achieving
            different targets.
          </p>
          <Button variant="contained" className="custom-button">
            Start Earning
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default JoinDigiPAKISTAN;

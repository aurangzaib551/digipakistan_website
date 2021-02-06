import React from "react";
import Container from "@material-ui/core/Container";
import Copyright from "../components/common/copyright/copyright";

const AboutUs = () => {
  return (
    <>
      <Container className="mt pt-4 mb-5">
        <h1 className="fw-bold text-center mx-3">
          ڈیجی پاکستان قومی ہنر مند ترقیاتی پروگرام
        </h1>
        <div className="mt-3">
          <h3 className="fw-bold">Mission</h3>
          <p>
            To transform Pakistani Youth into productive workforce to contest
            the challenges of fourth industrial revolution through latest,
            demand driven and state of the art IT Skills with the increased
            access to{" "}
            <strong>
              high-quality education for everyone, anywhere and anytime
            </strong>
            .
          </p>
        </div>
        <div className="mt-3">
          <h3 className="fw-bold">Vision</h3>
          <p>
            To become leader in building a highly skilled human resource in
            diversified IT domains and contribute in nation building towards a
            knowledge- based economy.
          </p>
        </div>
        <div className="mt-3 pb-5">
          <h3 className="fw-bold">Scope</h3>
          <p>
            <strong>DigiPAKISTAN National Skills Development Program</strong> is
            an IT initiative launched in line with the vision of Pakistan’s
            ambitions towards a digitally progressive Pakistan to unleash the
            potential of youth. Pakistan has the second largest population of
            youth that can be turned into positive strength through digital
            skills. Unemployment and directionless wandering is now becoming a
            main threat to the society and it can only be countered through
            knowledge economy. DigiPAKISTAN is endeavouring to channelize,
            concentrate and converge our youth to be the leaders in the fourth
            industrial revolution, where IT Skills and creativity are the
            winning tools.
          </p>
          <p>
            <strong>DigiPAKISTAN</strong> is focused at helping young career
            seekers to realise the job market trends and understand that now IT
            Skills are given more importance over the conventional education. In
            order to compete and become success in today’s highly competitive,
            demanding and fast changing job environments, you need to be smart
            and equipped with the latest digital skills as early as possible.
          </p>
          <p>
            Women at home also constitute a major portion of the society and if
            given opportunity can do miracles in the nation’s economic growth.{" "}
            <strong>DigiPAKISTAN</strong> provides equal opportunity to this
            segment also through flexible timings and location of own choice.
          </p>
          <p className="pb-5 mb-5">
            A continuously evolving stack of Information Technology Programs
            consoling the latest technologies are available at{" "}
            <strong>DigiPAKISTAN</strong> and all you have to do is to{" "}
            <strong>enroll yourself in your desired course</strong>.
          </p>
        </div>
      </Container>
      <div className="pt-5">
        <Copyright />
      </div>
    </>
  );
};

export default AboutUs;

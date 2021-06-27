import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Copyright from "../components/common/copyright/Copyright";
import { connect } from "react-redux";
import { signOut } from "../store/actions/authActions";
import { Helmet } from "react-helmet";

const ChairmanHECPunjabMessage = ({ signOut }) => {
  useEffect(() => {
    signOut();
  }, [signOut]);
  return (
    <>
      <Helmet>
        <title>Chairman HEC Punjab</title>
      </Helmet>
      <Container className="mt provincial-minister">
        <div className="d-flex flex-column align-items-center pt-4">
          <img
            src="https://i.ibb.co/mc6zGZf/hec.jpg"
            alt="Prof. Dr. Fazal Ahmad Khalid (SI)"
            className="about-img"
          />
          <h1 className="text-center title mx-3 fw-bold mt-3 mb-0">
            Prof. Dr. Fazal Ahmad Khalid (SI)
          </h1>
          <p className="mb-1">Chairman</p>
          <p className="text-center">
            Punjab Higher Education Commission{" "}
            <span className="fw-bold">(HEC Punjab)</span>
          </p>
        </div>

        <p>Assalam O Alaikum!</p>
        <p className="text-justify">
          Its privilege for me to announce a new program{" "}
          <strong>DigiPAKISTAN</strong> launched to train youth of Pakistan in{" "}
          <strong>Information Technology Skills Development</strong>, to support
          the <strong>government initiative</strong> in capacity building, in
          increasing the competencies of our graduates, particularly online
          education and providing them the skills which are very important to
          enhance the capabilities for further employment.{" "}
          <strong>DigiPakistan initiative</strong> is doing quite well and I am
          sure that the programs, short courses, lectures, webinars and other
          modules of training would be very useful for the youth of our country.
        </p>
        <p className="text-justify">
          We have to see that how we can create opportunities at{" "}
          <strong>Government level</strong> and at{" "}
          <strong>private sector level</strong> to enhance the employment
          opportunities. This is one of the big, I would say, policy
          requirements of the government that how we can increase employment
          opportunities not only within the country but also outside Pakistan.
          We are living in a world which is changing very fast, now with the{" "}
          <strong>
            digital platform and e-Learning, smart learning and from that
            perspective, online education
          </strong>{" "}
          with the recent pandemic situation has facilitated and allowed us to
          create new opportunities for the education technology and provide them
          the facilities so that we can create different platforms for the
          students, for the graduates so that they can improve their skills.
        </p>
        <p className="text-justify">
          We all know that in the modern time, knowledge is very important, but
          at the same time skills and attitude is also very critical and we have
          to see that our curriculum, our programs, our degree programs should
          have that element and this is where we are trying to focus at
          different level in{" "}
          <strong>Punjab Higher Education Commission (HEC Punjab)</strong> and
          in <strong>Pakistan Engineering Council</strong> to create
          opportunities for our Institutions and also provide training to our
          teachers so that their professional competency is up to the mark to
          impart quality education within the country and I'm sure that this{" "}
          <strong>DigiPAKISTAN</strong> will be another{" "}
          <strong>important initiative</strong> which will create opportunities
          for the youth of our country.
        </p>
        <p className="text-justify">
          <strong>DigiPAKISTAN</strong> is providing our youth an opportunity of
          sharing the experience and providing a platform where resource persons
          from different sectors of life economy, education, health,
          manufacturing, engineering, technology, science can impart their
          knowledge and experience. We have to see that how we can create this
          opportunity so that we can learn, we can create a learning environment
          for the students and for the graduates of our country.
        </p>
      </Container>
      <Copyright />
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(ChairmanHECPunjabMessage);

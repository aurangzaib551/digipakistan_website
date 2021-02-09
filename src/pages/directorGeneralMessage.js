import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Copyright from "../components/common/copyright/copyright";
import { connect } from "react-redux";
import { signOut } from "../store/actions/authActions";
import { Helmet } from "react-helmet";

const DirectorGeneralMessage = ({ signOut }) => {
  useEffect(() => {
    signOut();
  }, [signOut]);
  return (
    <>
      <Helmet>
        <title>Director General</title>
      </Helmet>
      <Container className="mt provincial-minister">
        <div className="d-flex flex-column align-items-center pt-4">
          <img
            src="https://i.ibb.co/5KGFfPm/IMG-4570.jpg"
            alt="Lt Col (R) Engr. Habib Ur Rehman Qaiser (TI)"
            className="about-img"
          />
          <h1 className="text-center title mx-3 fw-bold mt-3 mb-0">
            Lt Col (R) Engr. Habib Ur Rehman Qaiser (TI)
          </h1>
          <p className="mb-1">Member Governing Body</p>
          <p>
            Pakistan Engineering Council <span className="fw-bold">(PEC)</span>
          </p>
        </div>
        <h1 className="fw-bold text-center m-3">
          ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ
        </h1>
        <p className="lh-lg text-justify">
          We as a nation have to focus on future IT skills required to flourish
          in this new digitalised, interconnected global marketplace. World is
          moving very fast towards an increasingly digitalised global village,
          with an ever-growing reliance on advanced technologies. Our
          proficiency with such technologies and processes will help us
          diversify our economy, attract new investments and increase our
          productivity. DigiPAKISTAN is a National Skills Development Program
          aimed to prepare our youth for the challenges of fast changing job
          market. A national workforce equipped with world-class, future-proof
          skills and attitudes will underpin the delivery of greater economic
          and social value for generations to come. It is a matter of great
          privilege and pride that DigiPAKISTAN has accepted the responsibility
          to equip our youth with latest skills in the cutting edge technologies
          to grab their place at leading positions in the digitized world. This
          National Skills Development Initiative will identify the bundles of
          skills, abilities, and knowledge that are most likely to be important
          in the near future, as well as the skills investments that will have
          the greatest impact on occupational demand. I feel very proud and
          satisfied that we have initiated our part of nation building but it
          will reach its pinnacle with your support and contributions. So don't
          wait and join the just cause of driving our youth through the
          hardships of unemployment towards a prosperous, self-sustaining and
          dignified future. May Allah Almighty accept our endeavours and guide
          us towards the right path, Ameen. DigiPAKISTAN Zindabad, Pakistan
          Paindabad.
        </p>
        <h6 className="fw-bold">Engr. Habib Ur Rehman Qaiser</h6>
        <h6 className="fw-bold mb-3">Director General (DG), DigiPAKISTAN</h6>
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

export default connect(null, mapDispatchToProps)(DirectorGeneralMessage);

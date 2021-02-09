import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useMediaQuery } from "react-responsive";
import Button from "@material-ui/core/Button";
import Copyright from "../../common/copyright/copyright";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/authActions";
import { Helmet } from "react-helmet";

const MAYAMAXANIMATION = ({ signOut }) => {
  useEffect(() => {
    signOut();
  }, [signOut]);

  // State
  const [tabValue, setTabValue] = useState(0);

  // Object Destructuring
  const { push } = useHistory();

  const handleTab = (obj, ind) => {
    setTabValue(ind);
  };

  //   Media Query
  const isSmall = useMediaQuery({
    query: "(max-width: 400px)",
  });
  return (
    <>
      <Helmet>
        <title>3D Maya Max Animation</title>
      </Helmet>
      <Container className="mt overflow-hidden pt-4 course-outlines mb-5 pb-5">
        <h1 className="text-center fw-bold mx-3">3D Maya Max Animation</h1>
        <div className="row g-4 mb-5 pb-5">
          <div className="col-lg-8">
            <Paper square>
              <Tabs
                value={tabValue}
                variant={isSmall ? "scrollable" : "standard"}
                onChange={handleTab}
                scrollButtons={isSmall ? "on" : "off"}
                centered={isSmall ? false : true}
              >
                <Tab label="Overview" className="outline" />
                <Tab label="Curriculum" className="outline" />
                <Tab label="Instructor" className="outline" />
              </Tabs>
            </Paper>
            {tabValue === 0 && (
              <div className="my-3">
                <h3 className="fw-bold">Course Description</h3>
                <p className="text-justify">
                  The Autodesk's Max 3D modeling software and Maya 3D are among
                  the widely used software in the field of 3D animation,
                  modeling, simulation and rendering. These are fundamentals for
                  those with the aspiration to a land a career as art directors,
                  modelers, 3D Character designers and more.
                </p>

                <p className="text-justify">
                  3D modeling is a highly specialized field. As such, there is a
                  high demand for 3D Modelers in all industries. According to
                  the Bureau of Labor Statistics (BLS), depending on the
                  specialization, employment in this field had grown by 8-14% by
                  2018.
                </p>

                <h3 className="fw-bold">Certificate</h3>
                <p className="text-justify">
                  On successful completion of the course participants will be
                  awarded participation certificate from DigiPAKISTAN. Also
                  prepare for International Exam.
                </p>
                <h3 className="fw-bold">Duration &amp; Frequency</h3>
                <p className="mb-0">Total Duration of the course is 3 months</p>
              </div>
            )}
            {tabValue === 1 && (
              <div className="my-3">
                <ul className="fw-bold list-unstyled">
                  <li>
                    INTRODUCTION TO MAYA
                    <ul className="fw-normal">
                      <li>WHAT IS MAYA?</li>
                      <li>FAMILIARIZATION WITH THE MAYA INTERFACE</li>
                      <li>JUMPING FROM 2D TO 3D</li>
                      <li>MOVING AROUND IN 3D SPACE</li>
                      <li>SETTING UP A PROJECT</li>
                      <li>THE BASICS OF MODELING USING POLYGONS</li>
                      <li>THE BASICS OF MODELING USING NURBS</li>
                      <li>THE BASICS OF MODELING USING SUBDIVISION SURFACES</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    QUICK START: ANIMATING A SIMPLE OBJECT
                    <ul className="fw-normal">
                      <li>MODELING SIMPLE GEOMETRY</li>
                      <li>PARENTING OBJECTS TO ONE ANOTHER</li>
                      <li>PIVOTS</li>
                      <li>KEYFRAMING</li>
                      <li>QUICK RENDERING USING THE DEFAULT MAYA SETTINGS</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    CUSTOMIZING MAYA
                    <ul className="fw-normal">
                      <li>ADJUSTING THE USER INTERFACE</li>
                      <li>ALTERING THE INTERNAL SETTINGS</li>
                      <li>WORKING WITH SHELVES</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    CREATING A ROOM
                    <ul className="fw-normal">
                      <li>MODELING THE FOUNDATIONS OF A ROOM</li>
                      <li>
                        FILLING AN EMPTY ROOM WITH NEW OBJECTS MADE USING A WIDE
                        RANGE OF TECHNIQUES
                      </li>
                      <li>APPLYING SIMPLE MATERIALS TO OBJECTS</li>
                      <li>LIGHTS AND SHADOWS</li>
                      <li>BACKGROUNDS (EXTERIORS OUTSIDE WINDOWS)</li>
                      <li>ANIMATING THE CAMERA</li>
                      <li>RENDERING WITH MAYA SOFTWARE</li>
                      <li>RENDERING WITH MENTAL RAY</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    BASICS OF ANIMATION
                    <ul className="fw-normal">
                      <li>SETTING KEYFRAMES</li>
                      <li>ADJUSTING KEYFRAMES</li>
                      <li>UTILIZING ANIMATION TOOLS</li>
                      <li>THE GRAPH EDITOR</li>
                      <li>CURVES AND TANGENTS</li>
                    </ul>
                  </li>

                  <li className="mt-3">FINAL PROJECT</li>

                  <li className="mt-3">
                    IMPORTING 2D PLANS FROM AUTOCAD AND MODELING IN 3DS MAX
                    <ul className="fw-normal">
                      <li>IMPORTING A 2D PLAN FROM AUTOCAD</li>
                      <li>
                        USING SHAPED AND EXTRUDE MODIFIER TO MODEL IN 3DS MAX
                      </li>
                      <li>
                        USING AUTOCAD POLYLINES AND OTHER TECHNIQUES TO MODEL A
                        HOUSE IN 3DS MAX.
                      </li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    ANIMATION ESSENTIALS
                    <ul className="fw-normal">
                      <li>CREATING AND ANIMATING A BOUNCING BALL</li>
                      <li>INTRODUCTION TO KEYFRAMES AND CONTROLLING SPEED</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    EXTRAS
                    <ul className="fw-normal">
                      <li>TIPS AND QUICK TRICKS</li>
                      <li>RECOGNIZING PROBLEMS AND SOLVING THEM</li>
                      <li>
                        PREPARING RESULTS FROM MAYA FOR USE WITH OTHER SOFTWARE
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="col-lg-4">
            <Paper elevation={10} className="p-3 border">
              <h6 className="fw-bold mb-0 details text-center text-sm-start">
                Total No. of Seats in Batch-01:{" "}
                <span className="text-success">1000 Students Only</span>
              </h6>
              <h6 className="fw-bold mb-0 details text-center text-sm-start">
                Course Type:{" "}
                <span className="fw-normal">
                  Fast Track Non-Technical Program
                </span>
              </h6>
              <h6 className="fw-bold mb-0 details text-center text-sm-start">
                Duration: <span className="fw-normal">3 Months</span>
              </h6>
              <h6 className="fw-bold mb-0 details text-center text-sm-start">
                Language: <span className="fw-normal">Urdu / English</span>
              </h6>
              <Button
                onClick={() => push("/apply-now")}
                variant="contained"
                fullWidth
                className="custom-button mt-3"
              >
                Apply Now
              </Button>
            </Paper>
          </div>
        </div>
      </Container>
      <div className="pt-5">
        <Copyright />
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(MAYAMAXANIMATION);

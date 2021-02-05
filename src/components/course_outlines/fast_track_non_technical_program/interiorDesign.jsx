import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useMediaQuery } from "react-responsive";
import Button from "@material-ui/core/Button";
import Copyright from "../../common/copyright/copyright";

const InteriorDesign = () => {
  // State
  const [tabValue, setTabValue] = useState(0);

  const handleTab = (obj, ind) => {
    setTabValue(ind);
  };

  //   Media Query
  const isSmall = useMediaQuery({
    query: "(max-width: 400px)",
  });
  return (
    <>
      <Container className="mt overflow-hidden pt-4 course-outlines mb-5 pb-5">
        <h1 className="text-center fw-bold mx-3">Interior Designing</h1>
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
                  Interior Design and Management is a skilful programme that
                  comprises of computer-aided designs and drawing while being
                  relevant to the Architecture. Additionally, Interior Design
                  Course is not merely about decorating a place rather managing
                  it.
                </p>

                <p className="text-justify">
                  Interior design is becoming an increasingly viable career
                  option for creative individuals who have a flair for home or
                  office design and decor. However, there’s more to it than just
                  the inclination; there’s also the ability. Love for decorating
                  the spaces is in the nature of every human. To be a good
                  designer, you need several skills – some are inbuilt and some
                  can be acquired. This program will help the individuals to
                  sharpen their skills, prepare them to join the design industry
                  as event and interior designers, and to have sufficient
                  knowledge of new trends in market.
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
                    Introduction to Interior Design
                    <ul className="fw-normal">
                      <li>Learning how to create conceptual drawings</li>
                      <li>Choosing your site</li>
                      <li>Learning how to create an interior layout</li>
                      <li>Understanding space and proportion</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Making Mood Boards
                    <ul className="fw-normal">
                      <li>Understanding Color theory and color psychology</li>
                      <li>Exploring materials in your environment</li>
                      <li>Playing with collages and textures</li>
                      <li>Case Studies Presentation</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Choosing Your Key Module
                    <ul className="fw-normal">
                      <li>Exploring 2D and 3D forms</li>
                      <li>Learning how to make study models</li>
                      <li>
                        Learning the method of modular design (presentation
                        &amp; Guest lecture)
                      </li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Spatial Arrangements
                    <ul className="fw-normal">
                      <li>Form developments</li>
                      <li>2D and 3D drawings</li>
                      <li>Investigating forms in space</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Incorporating Design on Site
                    <ul className="fw-normal">
                      <li>Developing 3D design on site</li>
                      <li>3D Modelling/ Physical 3D</li>
                      <li>Learning how to build your project</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Juries with professional designers for work critique and
                    project evaluation
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

export default InteriorDesign;

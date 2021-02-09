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

const GraphicDesign = ({ signOut }) => {
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
        <title>Graphic Design</title>
      </Helmet>
      <Container className="mt overflow-hidden pt-4 course-outlines mb-5 pb-5">
        <h1 className="text-center fw-bold mx-3">Graphic Design</h1>
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
                  In the era of globalization, global trends in science and
                  technology are changing faster with the passage of time. The
                  competition is becoming more intense due to an increase in the
                  number of businesses in the market. Only design has an ability
                  to communicate ideas effectively. Therefore, design must be
                  simple, creative and eye-catching. Graphic design that changed
                  the world helps in dealing competition by grabbing the
                  attention of the audience.
                </p>

                <p className="text-justify">
                  It has now become difficult to ignore the role of graphic
                  designer in today’s world. Due to graphic designers, people
                  are able to see the designs such as billboards, advertisements
                  on television or mobile devices, videos etc as these things
                  are designed to attract the audience. Once you avail Graphic
                  Designing course, it will open a door to numerous careers in
                  the form of graphic designer, creative director, logo
                  designer, brand designer, marketing manager etc. and all of
                  these job opportunities are easily available in the market
                  these days. Tools used for graphic design are Photoshop,
                  Illustrator, CorelDraw, InPage which will cover from scratch
                  till advance level.
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
                <ul className="list-unstyled fw-bold">
                  <li>
                    Lesson 1: Introduction to Graphic Design
                    <ul className="fw-normal">
                      <li>History of Graphic Design</li>
                      <li>Evolution of Graphic Design</li>
                      <li>Scope of Graphic Design</li>
                      <li>Famous Designers around the globe</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Lesson 2: Introduction to Design, Creative thinking &amp;
                    Color
                    <ul className="fw-normal">
                      <li>Understanding Color</li>
                      <li>Color Wheel</li>
                      <li>Types of Color</li>
                      <li>Warm &amp; Cool Col or</li>
                      <li>Color Psychology</li>
                      <li>Introduction to Design elements</li>
                      <li>Introduction to design principles</li>
                      <li>
                        Differences between vector-based graphics and
                        pixel-based graphics
                      </li>
                      <li>Photoshop walk through</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Lesson 3: Working with Adobe Photoshop
                    <ul className="fw-normal">
                      <li>Introduction to Photoshop CS6</li>
                      <li>Image Size and Resolution.</li>
                      <li>Creating a New Document</li>
                      <li>Opening and Closing a Document</li>
                      <li>Creating a Workspace</li>
                      <li>Understanding tool Bar</li>
                      <li>Cropping images</li>
                      <li>Working with Canvas Size10.</li>
                      <li>Transforming Objects</li>
                      <li>Copy Paste</li>
                      <li>Image Modes</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Lesson 4: Introduction to Typography
                    <ul className="fw-normal">
                      <li>Introduction to Typographic Terms</li>
                      <li>Text Tools In Photoshop</li>
                      <li>Stroking text in Photoshop</li>
                      <li>How to outline text</li>
                      <li>Font Selection</li>
                      <li>Creating a Font Logo.</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Lesson 5: Working with Photoshop Layers
                    <ul className="fw-normal">
                      <li>Layer Blending options</li>
                      <li>How to make a new layer</li>
                      <li>Add Layer Mask</li>
                      <li>How to make Groups</li>
                      <li>Layer Modes</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Lesson 6: Working with text in photoshop
                    <ul className="fw-normal">
                      <li>Layer Blending options on text</li>
                      <li>Text Layer Masking in Photoshop</li>
                      <li>Text Wrap options, Circular, Shape and with image</li>
                      <li>Understanding text arrangement in paragraph</li>
                      <li>Basic Layout Understanding</li>
                      <li>Book Cover Assignment</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Lesson 7: Working with Adobe Photoshop (Exploring Tool Bar)
                    <ul className="fw-normal">
                      <li>Selection Tool</li>
                      <li>Brush Tool</li>
                      <li>Paint Bucket Tool</li>
                      <li>Burn Tool</li>
                      <li>Pen Tool</li>
                      <li>Shape Tool</li>
                      <li>Crop Tool</li>
                      <li>Gradient Tool</li>
                      <li>
                        (Assignment for the Students prior to the understanding
                        of lecture)
                      </li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Lesson 8: Image Editing in photoshop
                    <ul className="fw-normal">
                      <li>Black and white treatment to image</li>
                      <li>Hue/Saturation</li>
                      <li>Image halftone</li>
                      <li>Adding Filters to image</li>
                      <li>Adding Colors to Image</li>
                      <li>Adding posturized effects to images</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Lesson 9: What is Advertising
                    <ul className="fw-normal">
                      <li>Types of Advertising</li>
                      <li>What is Poster Design</li>
                      <li>Copywriting in Advertising</li>
                      <li>Adaptation of Advertising Collaterals</li>
                      <li>
                        Create a Poster design (Product ) and its adaptation
                      </li>
                      <li>Creating Website/Facebook Posts/Web Ads</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Lesson 10: Working with 3d Effects in Photoshop
                    <ul className="fw-normal">
                      <li>Creating Slice portrait in Photoshop</li>
                      <li>3d effect on Photoshop</li>
                      <li>Image Manipulation</li>
                      <li>Creating Mockups</li>
                      <li>Creating Giffs</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Lesson 11: Working with Adobe Illustrator (Vector Based
                    Software)
                    <ul className="fw-normal">
                      <li>
                        Illustrator Workspace Environment and understanding as
                        vector based software
                      </li>
                      <li>Creating Documents</li>
                      <li>Creating Art board</li>
                      <li>File Formats</li>
                      <li>Opening and Saving File</li>
                      <li>Understanding Tool Bar</li>
                      <li>Modifying Fill and Stroke Attributes</li>
                      <li>Pathfinder</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Lesson 12: Working with Adobe Illustrator (Drawing Tool
                    &amp; Fill Option)
                    <ul className="fw-normal">
                      <li>Magic wand tool and Lasso tool</li>
                      <li>Understanding of pen tool</li>
                      <li>Drawing through pen tool</li>
                      <li>Creating Path Through Pen tool</li>
                      <li>Clipping Mask</li>
                      <li>Shape Builder tool</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Lesson 13: Working with Adobe Illustrator (Creating Text
                    Effects)
                    <ul className="fw-normal">
                      <li>Text tools in Illustrator</li>
                      <li>Stroking text</li>
                      <li>Outlining text</li>
                      <li>Text in round shape</li>
                      <li>Creating 3d Effects to Illustrator</li>
                      <li>Text Wrap</li>
                      <li>Creating a News Paper Ad with Text wrap</li>
                      <li>Text in Perspective</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Lesson 14: Illustration Design
                    <ul className="fw-normal">
                      <li>Creating illustrations in Illustrator</li>
                      <li>Vector Art Using Pen Tool</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Lesson 15
                    <ul className="fw-normal">
                      <li>Working with 3D Shapes illustrator</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Lesson 16
                    <ul className="fw-normal">
                      <li>
                        Designing a Packaging Design with help of photoshop
                        &amp; Illustrator
                      </li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Lesson 17: Designing Corporate Identify
                    <ul className="fw-normal">
                      <li>Logo</li>
                      <li>Visiting Card</li>
                      <li>Letter Head</li>
                      <li>Envelopes</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Lesson 18
                    <ul className="fw-normal">
                      <li>Publication Design</li>
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

export default connect(null, mapDispatchToProps)(GraphicDesign);

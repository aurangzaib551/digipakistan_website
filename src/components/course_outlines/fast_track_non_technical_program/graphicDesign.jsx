import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import { Tab, Tabs } from "react-bootstrap";

const GraphicDesign = () => {
  const [key, setKey] = useState("home");

  return (
    <>
      <div className="course-outlines mt">
        <div className="bg-img">
          <div className="container pt-5">
            <h1 className="fw-bold text-white">Courses</h1>
            <p className="mb-0 small fw-bold text-white">
              Home &bull; Available Programs &bull; Fast Track &bull; Graphic
              Design
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-9 mt-4 mt-lg-5">
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="fw-bold mb-0">3D Maya Max Animation</h2>

                <div>
                  <Button
                    // onClick={() => push("/apply-now")}
                    variant="contained"
                    fullWidth
                    className="custom-button mt-3"
                  >
                    Apply Now
                  </Button>
                </div>
              </div>

              <div className="my-3">
                <img
                  src="https://c1.wallpaperflare.com/preview/763/123/778/technology-lumia-mobile-smartphone.jpg"
                  alt=""
                  width="100%"
                  className="rounded "
                  height="400"
                />
              </div>

              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
              >
                <Tab eventKey="home" title="Overview">
                  <h3 className="fw-bold">Course Description</h3>
                  <p className="text-justify">
                    In the era of globalization, global trends in science and
                    technology are changing faster with the passage of time. The
                    competition is becoming more intense due to an increase in
                    the number of businesses in the market. Only design has an
                    ability to communicate ideas effectively. Therefore, design
                    must be simple, creative and eye-catching. Graphic design
                    that changed the world helps in dealing competition by
                    grabbing the attention of the audience.
                  </p>

                  <p className="text-justify">
                    It has now become difficult to ignore the role of graphic
                    designer in today’s world. Due to graphic designers, people
                    are able to see the designs such as billboards,
                    advertisements on television or mobile devices, videos etc
                    as these things are designed to attract the audience. Once
                    you avail Graphic Designing course, it will open a door to
                    numerous careers in the form of graphic designer, creative
                    director, logo designer, brand designer, marketing manager
                    etc. and all of these job opportunities are easily available
                    in the market these days. Tools used for graphic design are
                    Photoshop, Illustrator, CorelDraw, InPage which will cover
                    from scratch till advance level.
                  </p>

                  <h3 className="fw-bold">Certificate</h3>
                  <p className="text-justify">
                    On successful completion of the course participants will be
                    awarded participation certificate from DigiPAKISTAN. Also
                    prepare for International Exam.
                  </p>
                  <h3 className="fw-bold">Duration &amp; Frequency</h3>
                  <p className="mb-0">
                    Total Duration of the course is 3 months
                  </p>
                </Tab>
                <Tab eventKey="requi" title="Prerequisite"></Tab>
                <Tab eventKey="profile" title="Curriculum">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Lesson 1: Introduction to Graphic Design
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>History of Graphic Design</li>
                            <li>Evolution of Graphic Design</li>
                            <li>Scope of Graphic Design</li>
                            <li>Famous Designers around the globe</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Lesson 2: Introduction to Design, Creative thinking
                          &amp; Color
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
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
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Lesson 3: Working with Adobe Photoshop
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
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
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#m1"
                          aria-expanded="false"
                          aria-controls="m1"
                        >
                          Lesson 4: Introduction to Typography
                        </button>
                      </h2>
                      <div
                        id="m1"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Introduction to Typographic Terms</li>
                            <li>Text Tools In Photoshop</li>
                            <li>Stroking text in Photoshop</li>
                            <li>How to outline text</li>
                            <li>Font Selection</li>
                            <li>Creating a Font Logo.</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#m2"
                          aria-expanded="false"
                          aria-controls="m2"
                        >
                          Lesson 5: Working with Photoshop Layers
                        </button>
                      </h2>
                      <div
                        id="m2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Layer Blending options</li>
                            <li>How to make a new layer</li>
                            <li>Add Layer Mask</li>
                            <li>How to make Groups</li>
                            <li>Layer Modes</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#m3"
                          aria-expanded="false"
                          aria-controls="m3"
                        >
                          Lesson 6: Working with text in photoshop
                        </button>
                      </h2>
                      <div
                        id="m3"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Layer Blending options on text</li>
                            <li>Text Layer Masking in Photoshop</li>
                            <li>
                              Text Wrap options, Circular, Shape and with image
                            </li>
                            <li>Understanding text arrangement in paragraph</li>
                            <li>Basic Layout Understanding</li>
                            <li>Book Cover Assignment</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#m4"
                          aria-expanded="false"
                          aria-controls="m4"
                        >
                          Lesson 7: Working with Adobe Photoshop (Exploring Tool
                          Bar)
                        </button>
                      </h2>
                      <div
                        id="m4"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Selection Tool</li>
                            <li>Brush Tool</li>
                            <li>Paint Bucket Tool</li>
                            <li>Burn Tool</li>
                            <li>Pen Tool</li>
                            <li>Shape Tool</li>
                            <li>Crop Tool</li>
                            <li>Gradient Tool</li>
                            <li>
                              (Assignment for the Students prior to the
                              understanding of lecture)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#m5"
                          aria-expanded="false"
                          aria-controls="m5"
                        >
                          Lesson 8: Image Editing in photoshop
                        </button>
                      </h2>
                      <div
                        id="m5"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Black and white treatment to image</li>
                            <li>Hue/Saturation</li>
                            <li>Image halftone</li>
                            <li>Adding Filters to image</li>
                            <li>Adding Colors to Image</li>
                            <li>Adding posturized effects to images</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#m6"
                          aria-expanded="false"
                          aria-controls="m6"
                        >
                          Lesson 9: What is Advertising
                        </button>
                      </h2>
                      <div
                        id="m6"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Types of Advertising</li>
                            <li>What is Poster Design</li>
                            <li>Copywriting in Advertising</li>
                            <li>Adaptation of Advertising Collaterals</li>
                            <li>
                              Create a Poster design (Product ) and its
                              adaptation
                            </li>
                            <li>Creating Website/Facebook Posts/Web Ads</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#m7"
                          aria-expanded="false"
                          aria-controls="m7"
                        >
                          Lesson 10: Working with 3d Effects in Photoshop
                        </button>
                      </h2>
                      <div
                        id="m7"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Creating Slice portrait in Photoshop</li>
                            <li>3d effect on Photoshop</li>
                            <li>Image Manipulation</li>
                            <li>Creating Mockups</li>
                            <li>Creating Giffs</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#m8"
                          aria-expanded="false"
                          aria-controls="m8"
                        >
                          Lesson 11: Working with Adobe Illustrator (Vector
                          Based Software)
                        </button>
                      </h2>
                      <div
                        id="m8"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>
                              Illustrator Workspace Environment and
                              understanding as vector based software
                            </li>
                            <li>Creating Documents</li>
                            <li>Creating Art board</li>
                            <li>File Formats</li>
                            <li>Opening and Saving File</li>
                            <li>Understanding Tool Bar</li>
                            <li>Modifying Fill and Stroke Attributes</li>
                            <li>Pathfinder</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#m9"
                          aria-expanded="false"
                          aria-controls="m9"
                        >
                          Lesson 12: Working with Adobe Illustrator (Drawing
                          Tool &amp; Fill Option)
                        </button>
                      </h2>
                      <div
                        id="m9"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Magic wand tool and Lasso tool</li>
                            <li>Understanding of pen tool</li>
                            <li>Drawing through pen tool</li>
                            <li>Creating Path Through Pen tool</li>
                            <li>Clipping Mask</li>
                            <li>Shape Builder tool</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#m10"
                          aria-expanded="false"
                          aria-controls="m10"
                        >
                          Lesson 13: Working with Adobe Illustrator (Creating
                          Text Effects)
                        </button>
                      </h2>
                      <div
                        id="m10"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Text tools in Illustrator</li>
                            <li>Stroking text</li>
                            <li>Outlining text</li>
                            <li>Text in round shape</li>
                            <li>Creating 3d Effects to Illustrator</li>
                            <li>Text Wrap</li>
                            <li>Creating a News Paper Ad with Text wrap</li>
                            <li>Text in Perspective</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#m11"
                          aria-expanded="false"
                          aria-controls="m11"
                        >
                          Lesson 14: Illustration Design
                        </button>
                      </h2>
                      <div
                        id="m11"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Creating illustrations in Illustrator</li>
                            <li>Vector Art Using Pen Tool</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#m12"
                          aria-expanded="false"
                          aria-controls="m12"
                        >
                          Lesson 15
                        </button>
                      </h2>
                      <div
                        id="m12"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Working with 3D Shapes illustrator</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#m13"
                          aria-expanded="false"
                          aria-controls="m13"
                        >
                          Lesson 16
                        </button>
                      </h2>
                      <div
                        id="m13"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>
                              Designing a Packaging Design with help of
                              photoshop &amp; Illustrator
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#m14"
                          aria-expanded="false"
                          aria-controls="m14"
                        >
                          Lesson 17: Designing Corporate Identify
                        </button>
                      </h2>
                      <div
                        id="m14"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Logo</li>
                            <li>Visiting Card</li>
                            <li>Letter Head</li>
                            <li>Envelopes</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#m15"
                          aria-expanded="false"
                          aria-controls="m15"
                        >
                          Lesson 18
                        </button>
                      </h2>
                      <div
                        id="m15"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Publication Design</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="contact" title="Instructor">
                  <div className="d-flex flex-sm-row flex-column px-3 justify-content-center align-items-center mb-5">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      width="200"
                      height="200"
                    />

                    <div className="ms-3">
                      <h5 className="fw-bold">Name</h5>
                      <p>Instructor</p>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laudantium maiores laborum laboriosam placeat vitae quae
                        blanditiis facilis impedit! Placeat nihil temporibus
                        magnam est autem quis ex aperiam inventore, voluptatem
                        quae!
                      </p>
                    </div>
                  </div>
                </Tab>
              </Tabs>

              <h3 className="fw-bold mb-0">Related</h3>
              <div className="row">
                <div className="col-sm-6 col-md-4 mt-4">
                  <div className="card w-100">
                    <img
                      src="https://i.ibb.co/3pV01zc/ASP-NET-Web-Applications.jpg"
                      className="card-img-top w-100"
                      style={{ borderRadius: 0, height: 130 }}
                      alt="..."
                    />
                    <div className="card-body d-flex flex-column align-items-center">
                      <div className="d-flex flex-column align-items-center img-par">
                        <div className="image d-flex flex-column align-items-center">
                          <img
                            src="https://i.ibb.co/CVCp97m/FARUKH-KHAN.png"
                            alt=""
                            width="60"
                          />
                        </div>
                        <h6 className="mt-2">FARUKH KHAN</h6>
                      </div>

                      <h5 className="card-title text-center my-card-title-font ">
                        ASP.NET Web Applications
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 mt-4">
                  <div className="card w-100">
                    <img
                      src="https://i.ibb.co/KmnkbPp/PHP-Laravel.jpg"
                      className="card-img-top w-100"
                      style={{ borderRadius: 0, height: 130 }}
                      alt="..."
                    />
                    <div className="card-body d-flex flex-column align-items-center">
                      <div className="d-flex flex-column align-items-center img-par">
                        <div className="image d-flex flex-column align-items-center">
                          <img
                            src="https://i.ibb.co/7gfCGj5/ABDUL-BASSIT-SURAHIO.png"
                            alt=""
                            width="60"
                          />
                        </div>
                        <h6 className="mt-2 ">Name</h6>
                      </div>

                      <h5 className="card-title text-center my-card-title-font ">
                        PHP Laravel
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 mt-4">
                  <div className="card w-100">
                    <img
                      src="https://i.ibb.co/vmWqn6k/MERN-Stack.jpg"
                      className="card-img-top w-100"
                      style={{ borderRadius: 0, height: 130 }}
                      alt="..."
                    />
                    <div className="card-body d-flex flex-column align-items-center">
                      <div className="d-flex flex-column align-items-center img-par">
                        <div className="image d-flex flex-column align-items-center">
                          <img
                            src="https://i.ibb.co/JBRprYC/WAQAS-QAMAR.png"
                            alt=""
                            width="60"
                          />
                        </div>
                        <h6 className="mt-2">Name</h6>
                      </div>

                      <h5 className="card-title text-center my-card-title-font ">
                        MERN Stack
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mt-4 mt-lg-5">
              <Paper elevation={10} className="p-3 border">
                <h6 className="fw-bold mb-0 details text-center text-sm-start">
                  Instructor: <span className="text-success"></span>
                </h6>
                <h6 className="fw-bold mb-0 details text-center text-sm-start">
                  Lectures: <span className="fw-normal">18</span>
                </h6>
                <h6 className="fw-bold mb-0 details text-center text-sm-start">
                  Duration: <span className="fw-normal">18 Weeks</span>
                </h6>
                <h6 className="fw-bold mb-0 details text-center text-sm-start">
                  Enrolled: <span className="fw-normal">0 Students</span>
                </h6>
                <h6 className="fw-bold mb-0 details text-center text-sm-start">
                  Language: <span className="fw-normal">Urdu / English</span>
                </h6>
                <Button
                  // onClick={() => push("/apply-now")}
                  variant="contained"
                  fullWidth
                  className="custom-button mt-3"
                >
                  Enroll Now
                </Button>
              </Paper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphicDesign;

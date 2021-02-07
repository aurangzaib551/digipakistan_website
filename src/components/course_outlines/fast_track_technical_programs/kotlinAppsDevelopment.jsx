import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useMediaQuery } from "react-responsive";
import Button from "@material-ui/core/Button";
import Copyright from "../../common/copyright/copyright";
import { useHistory } from "react-router-dom";

const KotlinAppsDevelopment = () => {
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
      <Container className="mt overflow-hidden pt-4 course-outlines mb-5 pb-5">
        <h1 className="text-center fw-bold mx-3">
          Kotlin Mobile Apps Development
        </h1>
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
                  You will learn the fundamentals of building Android
                  applications using Kotlin. The course covers architecture
                  components, multi-screen navigation, data persistence, RESTful
                  APIs and Material Design. By the end of the course, you’ll be
                  able to create well-designed Android applications using Kotlin
                  that can connect to the internet, store data and navigate
                  between screens.
                </p>
                <p className="text-justify">
                  Kotlin is an open-source, modern programming language that
                  lets developers use both object-oriented and functional
                  programming techniques. It is concise, safe, and fully
                  interoperable with Java. Kotlin is an official language for
                  Android development and the community of Kotlin developers is
                  growing rapidly, with major companies like Netflix, Pinterest,
                  and Google using Kotlin.
                </p>
                <p className="text-justify">
                  Kotlin is a modern statically typed programming language used
                  by over 60% of professional Android developers that helps
                  boost productivity, developer satisfaction, and code safety.
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
                <ul className="list-unstyled">
                  <li className="fw-bold">
                    Build Your First App
                    <ul className="fw-normal list-style-roman">
                      <li>Explore the basics of Android</li>
                      <li>such as creating text</li>
                      <li>Images</li>
                      <li>and interactive buttons</li>
                      <li>
                        Set up the development environment and create a Dice
                        Roller Android app
                      </li>
                      <li>Navigate the Main Map Anatomy of an Android app</li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    Layouts
                    <ul className="fw-normal list-style-roman">
                      <li>Learn different kinds of views and resources</li>
                      <li>
                        Explore arranging elements with the Android Studio's
                        Layout Editor
                      </li>
                      <li>Connect views with data through data binding</li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    App Navigation
                    <ul className="fw-normal list-style-roman">
                      <li>
                        Learn how to build apps that contain multiple screens
                        known as destinations
                      </li>
                      <li>
                        Use Android Studio tools to create and visualize a map
                      </li>
                      <li>or graph</li>
                      <li>
                        of destinations that show navigation paths in your app
                      </li>
                      <li>
                        Learn the navigation patterns and user interface that
                        Android users expect to see
                      </li>
                      <li>so that your app will be intuitive and familiar</li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    Activity &amp; Fragment Lifecycle
                    <ul className="fw-normal list-style-roman">
                      <li>Learn all about the Android Activity Lifecycle</li>
                      <li>Create a one-screen app called Dessert pusher</li>
                      <li>App Architecture (UI Layer)</li>
                      <li>
                        Learn one way to structure an Android app and the
                        benefits that come with this design
                      </li>
                      <li>
                        Learn about two classes in the lifecycle library:
                        ViewModel and LiveData
                      </li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    App Architecture (Data Layer)
                    <ul className="fw-normal list-style-roman">
                      <li>
                        Build a Sleep Quality Tracker app and use a database to
                        store the data over time
                      </li>
                      <li>Use SQLite to manage your database</li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    RecyclerView
                    <ul className="fw-normal list-style-roman">
                      <li>
                        Use RecyclerView to make significant improvements in the
                        UI of your app
                      </li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    Connect to the Internet
                    <ul className="fw-normal list-style-roman">
                      <li>
                        Build an application that connects to an internet server
                        to retrieve and display live data
                      </li>
                      <li>Simplify fetching data and images</li>
                      <li>
                        to make sure the app reasonably conforms to networking
                        and image loading best practices
                      </li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    Behind the Scenes
                    <ul className="fw-normal list-style-roman">
                      <li>
                        Learn how to implement offline caching by building an
                        app that lets users watch DevByte videos
                      </li>
                      <li>
                        Take an online-only app and transform it to work offline
                        by adding offline caching
                      </li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    Designing for Everyone
                    <ul className="fw-normal list-style-roman">
                      <li>
                        Improve your app design to support multiple languages as
                        well as support multiple device sizes and orientations
                      </li>
                      <li>
                        Learn how to make your app accessible for users who
                        might need assistance navigating
                      </li>
                      <li>
                        like supporting talkback and push button navigation
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
                <span className="fw-normal">Fast Track Technical Program</span>
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

export default KotlinAppsDevelopment;

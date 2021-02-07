import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useMediaQuery } from "react-responsive";
import Button from "@material-ui/core/Button";
import Copyright from "../../common/copyright/copyright";
import { useHistory } from "react-router-dom";

const AndroidAppsDevelopment = () => {
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
        <h1 className="text-center fw-bold mx-3">Android Apps Development</h1>
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
                  Android is an open source and Linux-based operating system for
                  mobile devices such as smartphones. Android was developed by
                  the Open Handset Alliance, led by Google, and other companies.
                  This Course will teach you basic Android application
                  development and will also take you through some advanced
                  concepts related to Android application development.
                </p>

                <h3 className="fw-bold">Audience</h3>
                <p className="text-justify">
                  This Course has been prepared for the beginners to help them
                  to understand basic to advance level of Android application
                  development.
                </p>

                <h3 className="fw-bold">Prerequisites</h3>
                <p className="text-justify">
                  Android app development is based on Java programming language
                  so if you have the basic understanding of Java programming
                  then it will be fun to learn Android application development.
                </p>

                <h3 className="fw-bold">Course Learning Outcomes</h3>
                <p className="text-justify">
                  At the end on this course the students will gain enough
                  knowledge to create and publish their own Apps for Google
                  Android devices as well as ability to learn advanced topics
                  through self-study methods we will teach them.
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
                <ul className="list-style-decimal">
                  <li className="fw-bold">
                    Introduction to Mobile Apps
                    <ul className="fw-normal list-style-roman">
                      <li>Why we Need Mobile Apps</li>
                      <li>Different Kinds of Mobile Apps</li>
                      <li>Briefly about Android</li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    Introduction Android
                    <ul className="fw-normal list-style-roman">
                      <li>History behind Android Development</li>
                      <li>What is Android?</li>
                      <li>Pre-requisites to learn Android</li>
                      <li>Brief Discussion on Java Programming</li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    Android Architecture
                    <ul className="fw-normal list-style-roman">
                      <li>Overview of Android Stack</li>
                      <li>Android Features</li>
                      <li>Introduction to OS layers</li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    Deep Overview in Android
                    <ul className="fw-normal list-style-roman">
                      <li>Linux Kernel Libraries</li>
                      <li>Android Runtime</li>
                      <li>Application Framework</li>
                      <li>Dalvik VM</li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    Installing Android Machine
                    <ul className="fw-normal list-style-roman">
                      <li>Configuring Android</li>
                      <li>Setting up Android Studio</li>
                      <li>Working with Android Studio</li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    Creating First Android Application
                    <ul className="fw-normal list-style-roman">
                      <li>Creating Android Project</li>
                      <li>Debugging Application through DDMS</li>
                      <li>Setting up environment</li>
                      <li>AVD Creation</li>
                      <li>Executing Project on Android Screen</li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    Android Components
                    <ul className="fw-normal list-style-roman">
                      <li>Activities</li>
                      <li>Services</li>
                      <li>Broadcast Receivers</li>
                      <li>Content Providers</li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    Hello World App
                    <ul className="fw-normal list-style-roman">
                      <li>Creating your first project</li>
                      <li>The manifest file</li>
                      <li>Layout resource</li>
                      <li>Running your app on Emulator</li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    Building UI with Activities
                    <ul className="fw-normal list-style-roman">
                      <li>Activities</li>
                      <li>Views, layouts and Common UI components</li>
                      <li>Creating UI through code and XML</li>
                      <li>Activity lifecycle</li>
                      <li>Intents</li>
                      <li>Communicating data among Activities</li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    Advanced UI
                    <ul className="fw-normal list-style-roman">
                      <li>
                        Selection components (GridView, ListView, Spinner)
                      </li>
                      <li>Adapters, Custom Adapters</li>
                      <li>Complex UI components</li>
                      <li>Menus</li>
                      <li>Creating custom and compound Views</li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    Notifications
                    <ul className="fw-normal list-style-roman">
                      <li>Toast, Custom Toast</li>
                      <li>Dialogs</li>
                      <li>Status bar Notifications</li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    Styles and Themes
                    <ul className="fw-normal list-style-roman">
                      <li>Creating and applying simple Style</li>
                      <li>Inheriting built-in Style and User defined style</li>
                      <li>Using Styles as themes</li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    Intent, Intent Filters
                    <ul className="fw-normal list-style-roman">
                      <li>Role of filters</li>
                      <li>Intent-matching rules</li>
                      <li>Filters in your manifest</li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    Data Storage
                    <ul className="fw-normal list-style-roman">
                      <li>Shared Preferences</li>
                      <li>Android File System</li>
                      <li>Internal storage</li>
                      <li>External storage</li>
                      <li>
                        SQLite
                        <ul className="list-style-alpha">
                          <li>Introducing SQLite</li>
                          <li>SQLiteOpenHelper and creating a database</li>
                          <li>
                            working with cursors Inserts, updates, and deletes
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    Multimedia in Android
                    <ul className="fw-normal list-style-roman">
                      <li>Multimedia Supported audio formats</li>
                      <li>Simple media playback</li>
                      <li>Supported video formats</li>
                      <li>Simple video playback</li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    Location Based Services and Google Maps
                    <ul className="fw-normal list-style-roman">
                      <li>Using Location Based Services</li>
                      <li>
                        Finding current location and listening for changes in
                        location
                      </li>
                      <li>Working with Google Maps</li>
                      <li>
                        Simple video playback
                        <ul className="list-style-alpha">
                          <li>showing google map in an Activity</li>
                          <li>Map Overlays</li>
                          <li>Displaying route on map</li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    Web Services and WebView
                    <ul className="fw-normal list-style-roman">
                      <li>Consuming web services</li>
                      <li>Receiving HTTP Response (XML, JSON)</li>
                      <li>Parsing JSON and XML</li>
                      <li>Using WebView</li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    WiFi
                    <ul className="fw-normal list-style-roman">
                      <li>Monitoring and managing Internet connectivity</li>
                      <li>Managing active connections</li>
                      <li>Managing WiFi networks</li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    Camera
                    <ul className="fw-normal list-style-roman">
                      <li>Taking pictures</li>
                      <li>Media Recorder</li>
                      <li>Rendering previews</li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    More
                    <ul className="fw-normal list-style-roman">
                      <li>Fragments</li>
                      <li>Material Design</li>
                      <li>Publication on Play Store</li>
                      <li>
                        NEW TOPICS: Since each new version of Android has new
                        features, we keep extra time for adding custom topics in
                        every batch. You can request any Android Topic.
                      </li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    Android Useful Examples
                    <ul className="fw-normal list-style-roman">
                      <li>Android - Alert Dialogs</li>
                      <li>Android - Animations</li>
                      <li>Android - Audio Capture</li>
                      <li>Android - Auto Complete</li>
                      <li>Android - Google Maps</li>
                      <li>Android - Image Effects</li>
                      <li>Android - Image Switcher</li>
                      <li>Android - Loading Spinner</li>
                      <li>Android - Login Screen</li>
                      <li>Android - Progress Circle</li>
                      <li>Android - Progress Bar</li>
                      <li>Android - Push Notification</li>
                      <li>Android - SDK Manager</li>
                      <li>Android - SQLite Database</li>
                      <li>Android - PHP/MySQL</li>
                      <li>Android - JSON Parser</li>
                      <li>Android - UI Design</li>
                      <li>Android - UI Patterns</li>
                      <li>Android - Web View Layout</li>
                      <li>Android - XML Parsers</li>
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

export default AndroidAppsDevelopment;

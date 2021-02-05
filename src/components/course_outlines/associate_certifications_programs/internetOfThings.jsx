import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useMediaQuery } from "react-responsive";
import Button from "@material-ui/core/Button";
import Copyright from "../../common/copyright/copyright";

const InternetOfThings = () => {
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
        <h1 className="text-center fw-bold mx-3">Internet of Things</h1>
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
                  The Internet of things describes the network of physical
                  objects—“things”—that are embedded with sensors, software, and
                  other technologies for the purpose of connecting and
                  exchanging data with other devices and systems over the
                  Internet. IoT makes everyday objects 'smart' by enabling them
                  to transmit data and automate tasks, without requiring any
                  manual intervention. An IoT device could be something as
                  simple as a health tracking wearable, or as complex as a smart
                  city with sensors across all its regions.
                </p>

                <p className="text-justify">
                  The 9 most important applications of the Internet of Things
                  (IoT)
                </p>

                <ul>
                  <li>Wearables</li>
                  <li>Health</li>
                  <li>Traffic monitoring</li>
                  <li>Fleet management</li>
                  <li>Agriculture</li>
                  <li>Hospitality</li>
                  <li>Smart grid and energy saving</li>
                  <li>Water supply.</li>
                  <li>Maintenance management.</li>
                </ul>

                <h3 className="fw-bold">Certificate</h3>
                <p className="text-justify">
                  On successful completion of the course participants will be
                  awarded participation certificate from DigiPAKISTAN. Also
                  prepare for International Exam.
                </p>
                <h3 className="fw-bold">Duration &amp; Frequency</h3>
                <p className="mb-0">Total Duration of the course is 6 months</p>
              </div>
            )}
            {tabValue === 1 && (
              <div className="my-3">
                <ul>
                  <li>Introduction, Basic Architecture, Areas in Fog</li>
                  <li>Node MCU Development Environment</li>
                  <li>
                    Micro-Controllers vs Micro-processors, Basics of a
                    Micro-Controller
                  </li>
                  <li>Understanding Data Memory and Program Memory</li>
                  <li>Memory Sections</li>
                  <li>Processing Language and Installing Libraries</li>
                  <li>Hands on Debugging on Node MCU</li>
                  <li>DS1820B features and applications</li>
                  <li>
                    Hands on Interfacing Node MCU with DS1820B, Temperature
                    Sensor
                  </li>
                  <li>OOP and its benefits in Embedded Design</li>
                  <li>Structure of Node MCU Software Libraries</li>
                  <li>Analog Reading on Node MCU, ADCs</li>
                  <li>Analog Writing on an Node MCU, PWM</li>
                  <li>Ambient Light Sensor</li>
                  <li>Interfacing with Motion Sensor</li>
                  <li>Diagnostics and Logging in IoT</li>
                  <li>Using Wifi on Node MCU</li>
                  <li>Interfacing Node MCU with Relay Module</li>
                  <li>Embedded Linux</li>
                  <li>Introduction to Raspberry Pi</li>
                  <li>Setting up Raspberry Pi</li>
                  <li>SSH, Networking with Raspberry Pi</li>
                  <li>Blinking an LED with Raspberry Pi</li>
                  <li>Cloud connection with Raspberry Pi</li>
                  <li>Light, Sound and Motion Sensor with Raspberry Pi</li>
                  <li>Timer and Chronic Job Design on the Raspberry Pi</li>
                  <li>Edge Processing</li>
                  <li>IoT Networks</li>
                  <li>IoT Enabling Technologies(LoRa, NB-IOT, SigFox)</li>
                  <li>Cloud Basics○ Device Management</li>
                  <li>Socket Programming</li>
                  <li>Understanding Endianness</li>
                  <li>Socket Programming</li>
                  <li>Understanding Endianness</li>
                  <li>IoT Standards</li>
                  <li>IoT Protocols</li>
                  <li>IoT Platforms</li>
                  <li>Introduction to BLYNK</li>
                  <li>Interfacing Node MCU with BLYNK.</li>
                  <li>Using BLYNK apps</li>
                  <li>Communication Protocols</li>
                  <li>Binary Serialization: JSON, BSON</li>
                  <li>Deciding Data Points</li>
                  <li>IoT network Considerations</li>
                  <li>IoT Industrial Verticals</li>
                  <li>THingSpeak IoT platform</li>
                  <li>Creating Account and setting up your channel</li>
                  <li>Using Pi and Node MCU with ThingSpeak</li>
                  <li>Understanding IoT Network Operational Issues</li>
                  <li>Kaa Platform Example</li>
                  <li>Micro Services Architecture</li>
                  <li>Example Services in an IoT Network. Looking at AXEDA</li>
                  <li>Home Automation IoT Project</li>
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
                  Associate Certification Program
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

export default InternetOfThings;

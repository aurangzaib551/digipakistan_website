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

const DigitalMarketing = ({ signOut }) => {
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
      <Container className="mt overflow-hidden pt-4 course-outlines mb-5 pb-5">
        <h1 className="text-center fw-bold mx-3">Digital Marketing</h1>
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
                  Digital marketing is the component of marketing that utilizes
                  internet and online based digital technologies such as desktop
                  computers, mobile phones and other digital media and platforms
                  to promote products and services.
                </p>

                <p className="text-justify">
                  Digital marketing is now the requirement for every business
                  and marketing professional. If you ignore digital marketing
                  today, your competitors are going to take full advantage of it
                  and can easily take you out. Learning digital marketing means
                  increase in your sales, profits, traffic and brand awareness.
                  And we know that entrepreneurs are busy.
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
                    Introduction
                    <ul className="fw-normal">
                      <li>Why your Business Needs a Website</li>
                      <li>How to create your website and make it look good</li>
                      <li>Build your Online Marketing Plan</li>
                      <li>Five Smart Ways to Promote your Business Online</li>
                      <li>How to Build a Community of Loyal Fans</li>
                      <li>Google Apps for Business</li>
                      <li>Intro to Online Advertising</li>
                      <li>Case Study</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Search Engine Marketing
                    <ul className="fw-normal">
                      <li>The Search Ecosystem - the Search Landscape</li>
                      <li>
                        Getting on Google and the Benefits of Being on Google
                      </li>
                      <li>How your Website is Found on Google</li>
                      <li>Google Real-Time Insight Finder - Demo Video</li>
                      <li>Case Study: Shoplet</li>
                      <li>Resource: Essentials for new advertisers</li>
                      <li>Resource: Google Trends</li>
                      <li>Resource: Think With Google Insights</li>
                      <li>Resource: Google Alerts</li>
                      <li>Resource: Google Global Market Finder</li>
                      <li>Resource: Google Business Channel</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Display Advertising
                    <ul className="fw-normal">
                      <li>Introduction to Google Display Network</li>
                      <li>Google Display Network Case Study: The Bedder Way</li>
                      <li>Display 101 - Introduction to Display</li>
                      <li>Display 102 - Google's Display Offering</li>
                      <li>Display 201 - Topic Targeting</li>
                      <li>Display 202 - Placement Targeting</li>
                      <li>Display 203 - GDN Reserve</li>
                      <li>Display 204 - Interest Categories</li>
                      <li>Display 205 - Keyword Contextual Targeting</li>
                      <li>Display 206 - Remarketing</li>
                      <li>Case Study: Jordan Brand</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Mobiles
                    <ul className="fw-normal">
                      <li>Introduction</li>
                      <li>Mobile Ecosystem - the Mobile Landscape</li>
                      <li>Mobile 101 - Mobile Ads, Devices and Sites</li>
                      <li>
                        Mobile 102 - Mobile Search Ads Overview and Ad Formats
                      </li>
                      <li>
                        Mobile 103 - Mobile Display &amp; AdMob: Overview and Ad
                        Formats
                      </li>
                      <li>
                        Mobile 104 - Mobile Video Ads Overview and Ad Formats
                      </li>
                      <li>Local – the What, the Why, the How</li>
                      <li>Serve On-The-Go Customers via Mobile Phones</li>
                      <li>
                        Mobile 201 - Campaign Set Up: The Basics of Setting Up a
                        Campaign
                      </li>
                      <li>
                        Mobile 202 - Implementing Ad Formats: Campaign Set Up
                      </li>
                      <li>
                        Mobile 301 - Optimising Mobile Campaigns: Tools and
                        Strategies, With a Focus on Search
                      </li>
                      <li>
                        Mobile 302 - Display Optimisation Tools: Deep Dive Into
                        Display Optimisation Tools
                      </li>
                      <li>
                        Mobile 303 - Reporting Tools: Deep Dive Into Strategies
                        and Tools
                      </li>
                      <li>Case Study: EasyJet</li>
                      <li>Resource: Our Mobile Planet</li>
                      <li>Resource: Building Smartphone Optimized Websites</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Social
                    <ul className="fw-normal">
                      <li>Social Ecosystem - the Social Landscape</li>
                      <li>Social 101 - Engagement</li>
                      <li>Social 102 - Relevance</li>
                      <li>Social 103 - Hangouts</li>
                      <li>How to Use Google+ and Make Social Work for You</li>
                      <li>Social 301: Accountability</li>
                      <li>Case Study: H &amp; M</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Analytics
                    <ul className="fw-normal">
                      <li>Understand What Works Through Measurement</li>
                      <li>Google Analytics: The What, The Why, The How</li>
                      <li>Introduction to Google Analytics</li>
                      <li>How Google Analytics Works</li>
                      <li>Navigating Google Analytics, Part I</li>
                      <li>Navigating Google Analytics, Part II</li>
                      <li>Getting Started with Google Analytics</li>
                      <li>A/B Experiments with Google Website Optimizer</li>
                      <li>
                        Multivariate Experiments with Google Website Optimizer
                      </li>
                      <li>
                        Phone Webinar: Website Optimizer, What Should I Test?
                      </li>
                      <li>Case Study: HelmetTown.com Success Story</li>
                      <li>Resource: Develop Your Analysis Skills</li>
                      <li>Resource: Google Analytics</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Video
                    <ul className="fw-normal">
                      <li>YouTube Ecosystem - The Video landscape</li>
                      <li>Introduction to YouTube</li>
                      <li>YouTube Products and Solutions</li>
                      <li>
                        Auction Implementation Tools, Ad Formats and Targeting
                        Capabilities
                      </li>
                      <li>Media Strategies and Implementation (Part 1)</li>
                      <li>Media Strategies and Implementation (Part 2)</li>
                      <li>YouTube Analytics</li>
                      <li>Optimisation and Expansion</li>
                      <li>Case Study</li>
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

export default connect(null, mapDispatchToProps)(DigitalMarketing);

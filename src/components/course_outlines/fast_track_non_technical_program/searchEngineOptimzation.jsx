import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useMediaQuery } from "react-responsive";
import Button from "@material-ui/core/Button";
import Copyright from "../../common/copyright/copyright";
import { useHistory } from "react-router-dom";

const SearchEngineOptimization = () => {
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
          Search Engine Optimization (SEO)
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
                  Search Engine Optimization (SEO) empowers a business to rank
                  higher in search engine results which helps in reaching a
                  wider audience. This course is in line with international
                  curriculum standards. In this course, you will learn about
                  what Google and Bing are, how search works, how do Search
                  Engines rank websites, why Google is the ultimate search
                  engine, what does it take to be a favorite in Google’s
                  algorithm, how can you rank high for your targeted keywords,
                  which tools and techniques do you need to outrank your
                  competitors. In this course, you will also learn how to
                  optimize your content and websites to rank high in those
                  search engines, how to use tools to perform SEO, and how to
                  run an SEO project successfully. The course is based on
                  hands-on exercises with detailed video lectures, MCQs, and
                  reference learning material for detailed review.
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
                <ul>
                  <li>First of all, Introduction to SEO</li>
                  <li>Background &amp; History</li>
                  <li>Benchmarks</li>
                  <li>Most noteworthy, Industry Experts of SEO</li>
                  <li>Why is SEO so much important now?</li>
                  <li>Impact of SEO over the post/pages</li>
                  <li>Key terms of SEO</li>
                  <li>What is Page ranking?</li>
                  <li>How do search engines work?</li>
                  <li>What are the keywords?</li>
                  <li>How to do keyword research</li>
                  <li>Short Tail and Long Tail Keywords</li>
                  <li>Search Console by Google</li>
                  <li>Google Ad words</li>
                  <li>And Google Ad-sense</li>
                  <li>Unique and Plagiarism Content</li>
                  <li>All factors affecting the SEO</li>
                  <li>Search Engine Marketing (SEM)</li>
                  <li>
                    Likewise, Backlinking and its multiple techniques of
                    marketing
                  </li>
                  <li>
                    Hence, making you learn how to do a complete Site Analysis
                  </li>
                  <li>Certainly, A short project</li>
                  <li>Finally, Its completion and implementation</li>
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

export default SearchEngineOptimization;

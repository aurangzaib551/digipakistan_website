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

const AmazonFBABusiness = ({ signOut }) => {
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
        <h1 className="text-center fw-bold mx-3">Amazon FBA Business</h1>
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
                  Amazon FBA offers a great opportunity to start your part-time
                  / freelance business or do a full time eCommerce business
                  using Amazon platform
                </p>

                <p className="text-justify">
                  Amazon is one of the largest E-Commerce stores across the
                  globe. Amazon has a huge network. And as big of a platform
                  Amazon is, the potential of the marketplace on Amazon is three
                  times bigger than any other eCommerce platforms. You will be
                  shocked at how many people want to purchase your product. It
                  surely is mind blowing.
                </p>

                <p className="text-justify">
                  FBA is a business model that Amazon offers, which really is a
                  game-changer for online businesses. Through the FBA program
                  you send your product inventory in bulk to an Amazon warehouse
                  and when a customer purchases your product, Amazon packs up
                  the product and sends it to the respective customers.
                </p>

                <p className="text-justify">
                  When you are selling products via FBA you do not have to
                  fulfill individual orders, manage returns, or deal with
                  customer service on issues regarding deliveries. You can send
                  in hundreds or thousands of items to Amazon warehouse at the
                  same time instead of running to the post office every day to
                  ship your orders.
                </p>

                <p className="text-justify">
                  Out of the top 10,000 sellers on Amazon, 66% of them use FBA.
                  If you enroll in the FBA program, you can systematize order
                  fulfillment by taking advantage of Amazon’s advanced delivery
                  and fulfillment services and earn more sales from Amazon’s
                  coveted Prime customers.
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
                  <li>What is an Amazon FBA Business?</li>
                  <li>How to Source Your Products (Find Product Supplier)</li>
                  <li>How To Do Market Research On Amazon</li>
                  <li>Getting Your Stock From Alibaba to Amazon FBA</li>
                  <li>Pricing</li>
                  <li>Finding A Manufacturer</li>
                  <li>Prototyping</li>
                  <li>Negotiation and Manufacturing</li>
                  <li>Freight Forwarding, Customs &amp; Prep Centres</li>
                  <li>Amazon and Amazon FBA</li>
                  <li>Creating the Listing on Amazon</li>
                  <li>Sending Stock to Amazon FBA</li>
                  <li>Marketing</li>
                  <li>How To Get Reviews On Amazon</li>
                  <li>Expand to eBay</li>
                  <li>Expand to Different Countries</li>
                  <li>Expand to Different Products</li>
                  <li>Payments and Bank Accounts</li>
                  <li>VAT and Taxes</li>
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

export default connect(null, mapDispatchToProps)(AmazonFBABusiness);

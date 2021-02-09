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

const QuickBooks = ({ signOut }) => {
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
        <title>Quick Books ERP</title>
      </Helmet>
      <Container className="mt overflow-hidden pt-4 course-outlines mb-5 pb-5">
        <h1 className="text-center fw-bold mx-3">Quick Books ERP</h1>
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
                  The course will enable participants to setup and customize
                  QuickBooks application, understand the accounting concepts
                  associated with the application and be able to setup, organize
                  and use different course available in the application. After
                  completing this course, trainees will be able to handle
                  customers, vendors, assets, and inventory and fully benefit
                  from different functionality of the system. They will be able
                  to use available reports and create new ones. Also, they will
                  be able to participate in QuickBooks online jobs.
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
                    Basic Accounting
                    <ul className="fw-normal">
                      <li>What is Accounting?</li>
                      <li>Why Business needs Professional Accountant</li>
                      <li>Fundamental concepts of Accounting</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Chart of Accounts
                    <ul className="fw-normal">
                      <li>Level of Accounts</li>
                      <li>Accounting Codes</li>
                      <li>Import / Export Data from Excel</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    QuickBooks
                    <ul className="fw-normal">
                      <li>QuickBooks interface</li>
                      <li>Scope of QB</li>
                      <li>QuickBooks Utilities and</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    General Product Knowledge Documents
                    <ul className="fw-normal">
                      <li>Customer / Supplier – Invoices/Bills</li>
                      <li>Goods Receipt Note</li>
                      <li>Estimates</li>
                      <li>Delivery Note</li>
                      <li>Bank Statement</li>
                      <li>Supplier Statement</li>
                      <li>Sales Order Processing</li>
                      <li>Purchase Order Processing</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Reports
                    <ul className="fw-normal">
                      <li>Supplier</li>
                      <li>Customer</li>
                      <li>Customization</li>
                      <li>Jobs</li>
                      <li>Financial Information</li>
                      <li>Quick Reports</li>
                      <li>Tax Reports</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Stock Management
                    <ul className="fw-normal">
                      <li>Bill of Materials</li>
                      <li>Inventory Record</li>
                      <li>Stock Valuation Reports</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Financial Tools
                    <ul className="fw-normal">
                      <li>Closing Periods</li>
                      <li>Accountant Center</li>
                      <li>Workflow of an Organization</li>
                      <li>Job Costing</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Payroll
                    <ul className="fw-normal">
                      <li>Payroll Items Creation</li>
                      <li>Processing Paychecks</li>
                      <li>Quick-Reports Payroll</li>
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

export default connect(null, mapDispatchToProps)(QuickBooks);

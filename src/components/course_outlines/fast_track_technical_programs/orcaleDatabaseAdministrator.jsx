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

const OracleDatabaseAdministrator = ({ signOut }) => {
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
        <title>Oracle Database Administrator</title>
      </Helmet>
      <Container className="mt overflow-hidden pt-4 course-outlines mb-5 pb-5">
        <h1 className="text-center fw-bold mx-3">
          Oracle Database Administrator
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
                  It covers database development and administration using{" "}
                  <strong>Oracle 12C.</strong> It includes understanding
                  database concept;{" "}
                  <strong>
                    creating databases using Oracle 12C; querying and
                    manipulating data using PL / SQL and taking advantage of
                    Oracle’s Multitenant-Architecture for cloud computing.
                  </strong>{" "}
                  The course not only teaches the skills required to Oracle DBA
                  for performing his routine operations but also teaches him the
                  skills required to become a top-performing Oracle DBA. It
                  includes deployment of backup and recovery and its cloud
                  computing strategies.
                </p>

                <h3 className="fw-bold">Certificate</h3>
                <p className="text-justify">
                  On successful completion of the course participants will be
                  awarded participation{" "}
                  <strong>certificate from DigiPAKISTAN.</strong> Also prepare
                  for <strong>International Exam.</strong>
                </p>
                <h3 className="fw-bold">Duration &amp; Frequency</h3>
                <p className="mb-0">
                  Total Duration of the course is <strong>3 months</strong>
                </p>
              </div>
            )}
            {tabValue === 1 && (
              <div className="my-3">
                <ul className="text-justify">
                  <li>Database, Type of Databases, Data Types</li>
                  <li>Liner &amp; Non Liner Databases</li>
                  <li>
                    No SQL Database, ATL32-U Database, Object Oriented Database
                  </li>
                  <li>
                    Setup Virtual Machine, Install Database on Windows
                    Environment
                  </li>
                  <li>
                    Install Database on Linux Environment, Test Database after
                    installation
                  </li>
                  <li>Trouble Shooting During Installation</li>
                  <li>Data Structure, Table Structure</li>
                  <li>
                    Statement, Database Keys, Distinct Statement, Joining of
                    Tables
                  </li>
                  <li>Null Values, NVL Values, Table Alias</li>
                  <li>
                    Identification of Data, Identification of Primary &amp;
                    Foreign Key
                  </li>
                  <li>
                    Arithmetic Expressions, Add Running Total, Add Union
                    Intersections
                  </li>
                  <li>
                    Null If Function, Data Sorting, To Date &amp; Automatic Date
                    Calculations Formulas
                  </li>
                  <li>
                    Introduction of Sub Query, Return Single Row from Sub Query,
                  </li>
                  <li>
                    Return Multiple Row from Sub Query, Where Claus in Sub
                    Query,
                  </li>
                  <li>Inner Joins, Outer Joins,</li>
                  <li>
                    Conversion of Data, Conversion of Data Num To Char,
                    Conversion of Dates
                  </li>
                  <li>
                    Aggregation Rule, What is Group by &amp; Having Functions
                  </li>
                  <li>
                    Applying Aggregation Rules, Applying Group by Functions,
                    Apply Having Function
                  </li>
                  <li>
                    Use Multiple Tables in Group By Function, Conversion of
                    Data,
                  </li>
                  <li>
                    Conversion of Data Num To Char, Sorting of Data, Order By of
                    Data
                  </li>
                  <li>
                    Introduction of Tables, Creation of Tables, Update Table
                    Columns, Drop Table Columns
                  </li>
                  <li>Primary Key, Define Foreign Key</li>
                  <li>Star Schema, Build Star Schema, Drop Table,</li>
                  <li>
                    Update of Data , Insert of Data in Tables, Introduction of
                    Sequences
                  </li>
                  <li>
                    Build Auto Incremental Columns, How to Build Sequence in
                    Table Columns
                  </li>
                  <li>
                    Loop Functionality, Insert Data in Tables through Loop
                    Functionality
                  </li>
                  <li>
                    How to Update Data in Tables Through Loop, How to Delete
                    Data from Tables
                  </li>
                  <li>
                    How to Clone Tables, How to Fetch Query from Multiple
                    Databases Tables
                  </li>
                  <li>
                    How to Display all Tables in User, How to Check Table Space,
                  </li>
                  <li>
                    How Count Rows of Tables, Rownum Function in Tables,
                    Introduction of Functions
                  </li>
                  <li>
                    Type of Functions, How to Build Function in Database, How to
                    Run Function in Database
                  </li>
                  <li>
                    Use Data Types in Functions, Method to Create Function,
                    Method to Alter Functions
                  </li>
                  <li>
                    Purpose of Functions, Method to Call Function in Database
                    Query
                  </li>
                  <li>How to Optimize Query Through Functions</li>
                  <li>
                    Introduction of Data Views, De-Normalize Table Data in
                    Views, Hierarchy of Views
                  </li>
                  <li>
                    Method to Create Data Views, Method to Alter Data Views,
                  </li>
                  <li>
                    What is Procedure, Why we use Procedures, How to Build
                    Procedure
                  </li>
                  <li>Insert, Update &amp; Delete Data Through Procedure</li>
                  <li>Alteration of Procedure, Drop Procedures</li>
                  <li>
                    Package, How to Build Package, Purpose to Build Package
                  </li>
                  <li>How to Send E-Mail Through Database Package</li>
                  <li>
                    List of Major Architecture Components of Database, Explain
                    the Memory Structures
                  </li>
                  <li>
                    Describe the Background Process, Correlate the Logical and
                    Physical Storage Structures
                  </li>
                  <li>
                    What are Database Management Tools, How to Use Database
                    Management Tools
                  </li>
                  <li>
                    How to Install Database Management Tools, Start &amp; Shut
                    Down Database Services
                  </li>
                  <li>
                    Difference Between Immediate Start/Shutdown &amp; Immediate
                    Start/Shutdown Services
                  </li>
                  <li>View Database Logs, What is Network Environment,</li>
                  <li>How to Configure Network Environment</li>
                  <li>What is TNS Listener, How to Configure TNS Listener,</li>
                  <li>Trouble Shooting of TNS Listener Services</li>
                  <li>How to Configure Network Side Configurations</li>
                  <li>
                    What is Table Space, What is Table Partition, How to Manage
                    Table Spaces
                  </li>
                  <li>What is Undo Data, How to Apply Patches on Database,</li>
                  <li>
                    Difference Between Undo &amp; Redo Data, Space Management of
                    Databases
                  </li>
                  <li>Managing Database Roles, Changing Database Privilege</li>
                  <li>
                    Database Compressions, Describing the Locking Mode,
                    Unlocking of Data
                  </li>
                  <li>
                    Release of Expired Users, Database Backup Description, How
                    to Backup Database
                  </li>
                  <li>
                    How to Restore Database Through Dumps, Backup Database
                    without shutting it down
                  </li>
                  <li>
                    Generate Database Alerts, Small Briefing of Database
                    Auditing
                  </li>
                  <li>
                    What is Database Patch, How to Download &amp; Apply Database
                    Patches
                  </li>
                  <li>
                    What is Database Scheduler, Create Schedule of Database
                    Jobs,
                  </li>
                  <li>
                    Use Task Manager for Database Scheduler, Cloning of
                    Database, Duplication of Database
                  </li>
                  <li>Move Database From One Server to Another Server</li>
                  <li>Introduction of RMAN, How to Use RMAN from SQL Plus,</li>
                  <li>How to Connect Database with RMAN, Use SQL in RMAN</li>
                  <li>
                    What is Recovery Catalog, How to Configure Recovery Catalog
                    in RMAN
                  </li>
                  <li>
                    How to Generate Scripts for Recovery Catalog in RMAN, Export
                    &amp; Import Recovery Catalog
                  </li>
                  <li>What is Data backup Through RMAN,</li>
                  <li>
                    Create Backup Plan Strategy using RMAN Database Backup
                  </li>
                  <li>
                    Configuring Fast Recovery Data, How to Use Incremental
                    Backup
                  </li>
                  <li>
                    Manage Backups, Backup Database on No Archive &amp; Archive
                    Mode
                  </li>
                  <li>Backup Non-Database Files, Secure Backup</li>
                  <li>
                    Cloning of Database Using RMAN, Duplication Database using
                    RMAN,
                  </li>
                  <li>
                    CDB &amp; PDB Database Management, What is Flash Recovery of
                    Database
                  </li>
                  <li>Flashback Query, Use Flashback Table Operations,</li>
                  <li>Recover Table Data From Flashback Recovery,</li>
                  <li>Recover Columns Data from Flashback Recovery</li>
                  <li>
                    Restore Table from Recycle Bin, Manage Pluggable &amp;
                    Container Database
                  </li>
                  <li>Security of Database Through RMAN</li>
                  <li>Database Audit Concepts, Database Security Auditing</li>
                  <li>Generate Database Documentation From Database Tools</li>
                  <li>
                    Auditing of User Privileges, Checking of Login Audits,
                    Checking of Unused Spaces
                  </li>
                  <li>
                    Audit of Unused Memory , Query Optimization &amp; runtime
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

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(OracleDatabaseAdministrator);

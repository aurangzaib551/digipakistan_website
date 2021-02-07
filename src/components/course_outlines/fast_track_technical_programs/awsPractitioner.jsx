import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useMediaQuery } from "react-responsive";
import Button from "@material-ui/core/Button";
import Copyright from "../../common/copyright/copyright";
import { useHistory } from "react-router-dom";

const AWSPractitioner = () => {
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
        <h1 className="text-center fw-bold mx-3">AWS Practitioner</h1>
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
                  The AWS Certified Cloud Practitioner examination is intended
                  for individuals who have the knowledge and skills necessary to
                  effectively demonstrate an overall understanding of the AWS
                  Cloud, independent of specific technical roles addressed by
                  other AWS Certifications.
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
                <ul className="list-style-decimal fw-bold">
                  <li>
                    Getting Started
                    <ul className="fw-normal">
                      <li>Introduction to the Course</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Fundamentals of Cloud Computing Platform
                    <ul className="fw-normal">
                      <li>Introduction to Cloud Computing</li>
                      <li>Cloud Computing Models</li>
                      <li>Architecture of Cloud Environments</li>
                      <li>
                        On-Demand &amp; Self Service - Characteristics of Cloud
                      </li>
                      <li>Characteristic of CSP – Elasticity</li>
                      <li>Elasticity - part 02</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Understanding Core AWS Services
                    <ul className="fw-normal">
                      <li>Introduction to Amazon Web Services</li>
                      <li>AWS Global Infrastructure</li>
                      <li>Setting up Labs</li>
                      <li>Multi-Factor Authentication</li>
                      <li>Creating our first IAM user</li>
                      <li>Setting up MobaXterm</li>
                      <li>Launcing First EC2 Instance</li>
                      <li>Understanding Basics of Firewall</li>
                      <li>Network ACL</li>
                      <li>
                        Introduction to Block &amp; Object Storage Mechanism
                      </li>
                      <li>Instance Store Volumes</li>
                      <li>Introduction to Elastic Block Store</li>
                      <li>Features of EBS – Portability</li>
                      <li>Introduction to ELB</li>
                      <li>Creating our first Elastic Load Balancer</li>
                      <li>Resource Level Tags</li>
                      <li>Detailed Billing Report with Tags</li>
                      <li>Auto Scaling</li>
                      <li>Introduction to S3</li>
                      <li>S3 - Public Access Settings</li>
                      <li>S3 Storage Classes</li>
                      <li>New S3 Storage Class - Intelligent-Tiering</li>
                      <li>New S3 Storage Class - One Zone-IA</li>
                      <li>New S3 Storage Class - Glacier Deep Archive</li>
                      <li>S3 Lifecycle Policies</li>
                      <li>Introduction to Relational Databases</li>
                      <li>Understanding RDS</li>
                      <li>Connecting to RDS via CLI</li>
                      <li>Understanding NoSQL Databases</li>
                      <li>Understanding CloudWatch</li>
                      <li>Understanding Simple Notification Service</li>
                      <li>Introduction to DNS</li>
                      <li>Packet capture of DNS records through Wireshark</li>
                      <li>Understanding DNS Records</li>
                      <li>Understanding Route53</li>
                      <li>Route53 and VPC Integration</li>
                      <li>
                        Understanding Serverless Architecture &amp; Lambda
                      </li>
                      <li>Getting Started with AWS Lambda</li>
                      <li>Understanding Reverse Proxy</li>
                      <li>Introduction to Content Delivery Networks</li>
                      <li>Understanding Edge Locations</li>
                      <li>Deploying CloudFront Distribution</li>
                      <li>Deploying CloudFront Distribution - Part 02</li>
                      <li>S3 Transfer Acceleration</li>
                      <li>Infrastructure as Code</li>
                      <li>Understanding CloudFormation</li>
                      <li>Amazon Rekognition</li>
                      <li>Overview of AWS ElasticBeanstalk</li>
                      <li>AWS CodeCommit</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Billing &amp; Support Services
                    <ul className="fw-normal">
                      <li>AWS Well-Architected Framework</li>
                      <li>AWS Personal Health Dashboard</li>
                      <li>AWS Pricing Model</li>
                      <li>AWS Support Plans</li>
                      <li>The TCO calculator</li>
                      <li>AWS Whitepapers &amp; Documentations</li>
                      <li>AWS Organization &amp; Consolidated Billing</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Security Aspect
                    <ul className="fw-normal">
                      <li>Understanding Shared Responsibility Model</li>
                      <li>Understanding principle of least privilege</li>
                      <li>Identity &amp; Access Management</li>
                      <li>AWS CLI</li>
                      <li>IAM Role</li>
                      <li>Compliance</li>
                      <li>PCI DSS Compliance</li>
                      <li>AWS Artifact</li>
                      <li>AWS Trusted Advisor</li>
                      <li>Understanding CloudTrail</li>
                      <li>Understanding AWS Inspector</li>
                      <li>Real World example on DOS Implementation</li>
                      <li>AWS Shield</li>
                      <li>AWS Direct Connect</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Exam Preparation
                    <ul className="fw-normal">
                      <li>Overview of Cloud Practitioner Exam</li>
                      <li>Important Pointers - Part 01</li>
                      <li>Important Pointers - Part 02</li>
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

export default AWSPractitioner;

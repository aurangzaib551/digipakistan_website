import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useMediaQuery } from "react-responsive";
import Button from "@material-ui/core/Button";
import Copyright from "../../common/copyright/copyright";
import { useHistory } from "react-router-dom";

const AWSSolutionArchitect = () => {
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
        <h1 className="text-center fw-bold mx-3">AWS Solutions Architect</h1>
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
                  Solutions Architects (SAs, as they are known at AWS) are
                  responsible for managing an organization’s cloud computing
                  architecture. They have in-depth knowledge of the
                  architectural principles and services used to develop
                  technical cloud strategy, assist with cloud migration efforts,
                  review workload architectures, and provide guidance on how to
                  address high-risk issues.
                </p>

                <p className="text-justify">
                  AWS Certified Solutions Architect provides a structured
                  introduction to AWS and prepares you to get certified at the
                  Associate Level.This course covers services that form the
                  foundation of AWS - Network, Compute, Load Balancing, Elastic
                  Scaling, Storage, Monitoring, Security and Cost Estimation.
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
                    Introduction
                    <ul className="fw-normal">
                      <li>Course Introduction</li>
                      <li>Creating an AWS Account</li>
                      <li>AWS Budget Setup</li>
                      <li>Important Message</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    AWS Fundamentals IAM &amp; EC2
                    <ul className="fw-normal">
                      <li>AWS Fundamentals - Section Introduction</li>
                      <li>AWS Regions and AZs</li>
                      <li>IAM Introduction</li>
                      <li>IAM Hands On</li>
                      <li>EC2 Introduction</li>
                      <li>How to SSH using Linux or Mac</li>
                      <li>How to SSH using Windows</li>
                      <li>Introduction to Security Groups</li>
                      <li>Security Groups Deep Dive</li>
                      <li>Private vs Public vs Elastic IP</li>
                      <li>Private vs Public vs Elastic IP Hands On</li>
                      <li>Install Apache on EC2</li>
                      <li>EC2 User Data</li>
                      <li>EC2 Instances Launch Modes</li>
                      <li>EC2 Launch Modes Hands On</li>
                      <li>EC2 Instance Types Deep Dive</li>
                      <li>EC2 AMIs</li>
                      <li>EC2 AMI Hands On</li>
                      <li>Cross Account AMI Copy</li>
                      <li>EC2 Placement Groups</li>
                      <li>EC2 for the Solution Architect</li>
                      <li>EC2 Final Quiz</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    High Availability and Scalability ELB &amp; ASG
                    <ul className="fw-normal">
                      <li>High Availability and Scalability</li>
                      <li>Load Balancing Overview</li>
                      <li>Load Balancers Hands On</li>
                      <li>Adding Instances to our Load Balancer</li>
                      <li>Load Balancers Stickiness</li>
                      <li>Load Balancing for Solutions Architects</li>
                      <li>Auto Scaling Groups Overview</li>
                      <li>Auto Scaling Groups Hands On</li>
                      <li>Auto Scaling Groups for Solutions Architects</li>
                      <li>Fundamentals 2 Quiz</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    EC2 Storage - EBS &amp; EFS
                    <ul className="fw-normal">
                      <li>EBS Intro</li>
                      <li>EBS Intro Hands On</li>
                      <li>EBS Volume Types Deep Dive</li>
                      <li>EBS Operation Snapshots</li>
                      <li>EBS Operation Volume Migration</li>
                      <li>EBS Operation Volume Encryption</li>
                      <li>EBS vs Instance Store</li>
                      <li>EBS RAID configurations</li>
                      <li>EFS Overview</li>
                      <li>EFS Hands On</li>
                      <li>EBS &amp; EFS - Section Cleanup</li>
                      <li>EBS &amp; EFS For Solutions Architect</li>
                      <li>EC2 Data Management - EBS &amp; EFS Quiz</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    AWS Fundamentals RDS + Aurora + ElastiCache
                    <ul className="fw-normal">
                      <li>AWS RDS Overview</li>
                      <li>AWS RDS Hands On</li>
                      <li>RDS Security</li>
                      <li>RDS for Solutions Architect</li>
                      <li>Aurora Overview</li>
                      <li>Aurora Hands on</li>
                      <li>Aurora for Solution Architect</li>
                      <li>AWS ElastiCache Overview</li>
                      <li>AWS ElastiCache Hands On</li>
                      <li>ElastiCache for Solution Architect</li>
                      <li>RDS Aurora ElastiCache Quiz</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Route 53
                    <ul className="fw-normal">
                      <li>Route 53 Overview</li>
                      <li>Route 53 Hands On</li>
                      <li>Route 53 - EC2 Setup</li>
                      <li>Route 53 – TTL</li>
                      <li>CNAME vs Alias</li>
                      <li>Routing Policy – Simple</li>
                      <li>Routing Policy – Weighted</li>
                      <li>Routing Policy – Latency</li>
                      <li>Route 53 Health Checks</li>
                      <li>Routing Policy – Failover</li>
                      <li>Routing Policy – Geolocation</li>
                      <li>Routing Policy - Multi Value</li>
                      <li>3rd Party Domains &amp; Route 53</li>
                      <li>Section Cleanup</li>
                      <li>Route 53 Quiz</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Amazon S3 Introduction
                    <ul className="fw-normal">
                      <li>Amazon S3 - Section Introduction</li>
                      <li>AWS S3 Buckets and Objects</li>
                      <li>AWS S3 Versioning</li>
                      <li>AWS S3 Encryption</li>
                      <li>AWS S3 Security &amp; Bucket Policies</li>
                      <li>AWS S3 Websites</li>
                      <li>AWS S3 CORS</li>
                      <li>AWS S3 Consistency Model</li>
                      <li>AWS S3 Quiz</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    AWS CLI, SDK, IAM Roles &amp; Policies
                    <ul className="fw-normal">
                      <li>Developing on AWS Introduction</li>
                      <li>AWS CLI Setup on Windows</li>
                      <li>AWS CLI Setup on Mac OS X</li>
                      <li>AWS CLI Setup on Linux</li>
                      <li>AWS CLI Configuration</li>
                      <li>AWS CLI on EC2</li>
                      <li>AWS CLI Practice with S3</li>
                      <li>IAM Roles and Policies Hands On</li>
                      <li>AWS Policy Simulator</li>
                      <li>AWS EC2 Instance Metadata</li>
                      <li>AWS SDK Overview</li>
                      <li>CLI &amp; SDK Quiz</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Decoupling applications SQS, SNS, Kinesis, Active MQ
                    <ul className="fw-normal">
                      <li>Introduction to Messaging</li>
                      <li>AWS SQS</li>
                      <li>AWS SQS Console Hands On</li>
                      <li>AWS SQS FIFO Queues</li>
                      <li>AWS SNS</li>
                      <li>AWS SNS Hands On</li>
                      <li>AWS Kinesis Overview</li>
                      <li>AWS Kinesis Hands On</li>
                      <li>Kinesis Security, Firehose and Analytics</li>
                      <li>SQS vs SNS vs Kinesis</li>
                      <li>Amazon MQ</li>
                      <li>Messaging and Integration Quiz</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Serverless Overviews from a Solution Architect Perspective
                    <ul className="fw-normal">
                      <li>Serverless Introduction</li>
                      <li>Lambda Overview</li>
                      <li>Lambda Hands-On</li>
                      <li>Lambda Configuration</li>
                      <li>AWS Lambda Limits</li>
                      <li>AWS Lambda@Edge</li>
                      <li>DynamoDB Overview</li>
                      <li>DynamoDB Hands-On</li>
                      <li>DynamoDB Advanced Features</li>
                      <li>API Gateway Overview</li>
                      <li>API Gateway Basics Hands-On</li>
                      <li>API Gateway Stages and Deployments Hands-On</li>
                      <li>API Gateway Security</li>
                      <li>AWS Cognito Overview</li>
                      <li>Serverless Quiz</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Databases in AWS
                    <ul className="fw-normal">
                      <li>Choosing the right database</li>
                      <li>RDS</li>
                      <li>Aurora</li>
                      <li>ElastiCache</li>
                      <li>DynamoDB</li>
                      <li>S3</li>
                      <li>Athena</li>
                      <li>Redshift</li>
                      <li>Neptune</li>
                      <li>ElasticSearch</li>
                      <li>Databases Quiz</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Databases in AWS
                    <ul className="fw-normal">
                      <li>Serverless Introduction</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    AWS Monitoring &amp; Audit CloudWatch &amp; CloudTrail
                    <ul className="fw-normal">
                      <li>AWS Monitoring - Section Introduction</li>
                      <li>AWS CloudWatch Metrics</li>
                      <li>AWS CloudWatch Dashboards</li>
                      <li>AWS CloudWatch Logs</li>
                      <li>AWS CloudWatch Alarms</li>
                      <li>AWS CloudWatch Events</li>
                      <li>AWS CloudTrail</li>
                      <li>Monitoring Quiz</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    AWS Security &amp; Encryption KMS, SSM Parameter Store, IAM
                    &amp; STS
                    <ul className="fw-normal">
                      <li>AWS Security - Section Introduction</li>
                      <li>Encryption 101</li>
                      <li>KMS Overview + Encryption in Place</li>
                      <li>KMS and AWS Lambda Practice</li>
                      <li>SSM Parameter Store Overview</li>
                      <li>SSM Parameter Store Hands On (CLI)</li>
                      <li>SSM Parameter Store Hands On (AWS Lambda)</li>
                      <li>STS &amp; Cross Account Access</li>
                      <li>Identity Federation with SAML &amp; Cognito</li>
                      <li>Shared Responsibility Model</li>
                      <li>Security &amp; Encryption Quiz</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Networking – VPC
                    <ul className="fw-normal">
                      <li>Section Introduction</li>
                      <li>CIDR, Private vs Public IP</li>
                      <li>Default VPC Overview</li>
                      <li>VPC Overview and Hands On</li>
                      <li>Subnet Overview and Hands On</li>
                      <li>Internet Gateways &amp; Route Tables</li>
                      <li>NAT Instances</li>
                      <li>NAT Gateways</li>
                      <li>DNS Resolution Options</li>
                      <li>NACL &amp; Security Groups</li>
                      <li>VPC Peering</li>
                      <li>VPC Endpoints</li>
                      <li>VPC Flow Logs + Athena</li>
                      <li>Bastion Hosts</li>
                      <li>
                        Site to Site VPN, Virtual Private Gateway &amp; Customer
                        Gateway
                      </li>
                      <li>Direct Connect &amp; Direct Connect Gateway</li>
                      <li>Egress Only Internet Gateway</li>
                      <li>VPC Section Summary</li>
                      <li>Section Clean</li>
                      <li>Quiz on VPC</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Other Services
                    <ul className="fw-normal">
                      <li>Other Services Section Introduction</li>
                      <li>CICD Introduction</li>
                      <li>CloudFormation Intro</li>
                      <li>CloudFormation Hands-On</li>
                      <li>ECS Introduction</li>
                      <li>Step Functions &amp; SWF</li>
                      <li>EMR</li>
                      <li>AWS Glue</li>
                      <li>OpsWorks</li>
                      <li>ElasticTranscoder</li>
                      <li>AWS Organizations</li>
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

export default AWSSolutionArchitect;

import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Tabsi from "@material-ui/core/Tabs";
import Tabi from "@material-ui/core/Tab";
import { useMediaQuery } from "react-responsive";
import { Tab, Tabs } from "react-bootstrap";

const AWSPractitioner = () => {
  const [key, setKey] = useState("home");

  return (
    <>
      <div className="course-outlines mt">
        <div className="bg-img">
          <div className="container pt-5">
            <h1 className="fw-bold text-white">Courses</h1>
            <p className="mb-0 small fw-bold text-white">
              Home &bull; Available Programs &bull; Fast Track &bull; AWS
              Practitioner
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-9 mt-4 mt-lg-5">
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="fw-bold mb-0">AWS Practitioner</h2>

                <div>
                  <Button
                    // onClick={() => push("/apply-now")}
                    variant="contained"
                    fullWidth
                    className="custom-button mt-3"
                  >
                    Apply Now
                  </Button>
                </div>
              </div>

              <div className="my-3">
                <img
                  src="https://c1.wallpaperflare.com/preview/763/123/778/technology-lumia-mobile-smartphone.jpg"
                  alt=""
                  width="100%"
                  className="rounded "
                  height="400"
                />
              </div>

              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
              >
                <Tab eventKey="home" title="Overview">
                  <h3 className="fw-bold">Course Description</h3>
                  <p>
                    This course teaches IT Professionals how to manage their
                    Azure subscriptions, secure identities, administer the
                    infrastructure, configure virtual networking, connect Azure
                    and on-premises sites, manage network traffic, implement
                    storage solutions, create and scale virtual machines,
                    implement web apps and containers, back up and share data,
                    and monitor your solution. Level: Intermediate
                  </p>
                  <p>
                    Candidates for this exam should have subject matter
                    expertise implementing, managing, and monitoring an
                    organization’s Microsoft Azure environment.
                  </p>
                  <p>
                    Responsibilities for an Azure Administrator include
                    implementing, managing, and monitoring identity, governance,
                    storage, compute, and virtual networks in a cloud
                    environment, plus provision, size, monitor, and adjust
                    resources, when needed.
                  </p>

                  <p>
                    An Azure Administrator often serves as part of a larger team
                    dedicated to implementing your organization's cloud
                    infrastructure.
                  </p>

                  <p>
                    A candidate for this exam should have at least six months of
                    hands-on experience administering Azure, along with a strong
                    understanding of core Azure services, Azure workloads,
                    security, and governance. In addition, this role should have
                    experience using PowerShell, Azure CLI, Azure portal, and
                    Azure Resource Manager templates.
                  </p>

                  <h3 className="fw-bold">SKILLS MEASURED</h3>
                  <p>
                    NOTE: : The bullets that appear below each of the skills
                    measured are intended to illustrate how we are assessing
                    that skill. This list is not definitive or exhaustive.
                  </p>
                  <p>
                    NOTE: In most cases, exams do NOT cover preview features,
                    and some features will only be added to an exam when they
                    are GA (General Availability)
                  </p>
                </Tab>
                <Tab eventKey="requi" title="Prerequisite"></Tab>
                <Tab eventKey="profile" title="Curriculum">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          WEEK 1
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>
                              Introduction
                              <ul>
                                <li>Course Introduction</li>
                                <li>Creating an AWS Account</li>
                                <li>AWS Account Activation Troubleshooting</li>
                                <li>About instructor</li>
                              </ul>
                            </li>
                            <li>
                              What is Cloud Computing?
                              <ul>
                                <li>Traditional IT Overview</li>
                                <li>What is Cloud Computing?</li>
                                <li>The Different Types of Cloud Computing</li>
                                <li>AWS Cloud Overview</li>
                                <li>Tour of the Console & Services in AWS</li>
                                <li>About the UI changes in the course</li>
                                <li>
                                  Shared Responsibility Model & AWS Acceptable
                                  Policy
                                </li>
                                <li>Quiz questions</li>
                              </ul>
                            </li>
                            <li>
                              IAM - Identity and Access Management
                              <ul>
                                <li>
                                  IAM Introduction: Users, Groups, Policies
                                </li>
                                <li>IAM Users & Groups Hands On</li>
                                <li>IAM Policies Hands On</li>
                                <li>IAM MFA Overview</li>
                                <li>IAM MFA Hands On</li>
                                <li>AWS CLI</li>
                                <li>AWS CLI Setup on Windows</li>
                                <li>AWS CLI Setup on Mac</li>
                                <li>AWS CLI Setup on Linux</li>
                                <li>AWS CLI Hands On</li>
                                <li>AWS CloudShell</li>
                                <li>IAM Roles for AWS Services</li>
                                <li>IAM Roles Hands On</li>
                                <li>IAM Security Tools</li>
                                <li>IAM Security Tools Hands On</li>
                                <li>IAM Best Practices</li>
                                <li>Shared Responsibility Model for IAM</li>
                                <li>IAM Summary</li>
                                <li>Quiz questions</li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          WEEK 2 & 3
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>
                              EC2 - Elastic Compute Cloud
                              <ul>
                                <li>AWS Budget Setup</li>
                                <li>EC2 Basics</li>
                                <li>About the EC2 Console Changes</li>
                                <li>
                                  Create an EC2 Instance with EC2 User Data to
                                  have a Website Hands On
                                </li>
                                <li>EC2 Instance Types Basics</li>
                                <li>
                                  Security Groups & Classic Ports Overview
                                </li>
                                <li>Security Groups Hands On</li>
                                <li>SSH Overview</li>
                                <li>How to SSH using Linux or Mac</li>
                                <li>How to SSH using Windows</li>
                                <li>How to SSH using Windows 10</li>
                                <li>SSH Troubleshooting</li>
                                <li>EC2 Instance Connect</li>
                                <li>EC2 Instance Roles Demo</li>
                                <li>EC2 Instance Launch Types</li>
                                <li>Shared Responsibility Model for EC2</li>
                                <li>EC2 Summary</li>
                                <li>Quiz questions</li>
                              </ul>
                            </li>
                            <li>
                              EC2 Instance Storage
                              <ul>
                                <li>EBS Overview</li>
                                <li>EBS Hands On</li>
                                <li>EBS Snapshots Overview</li>
                                <li>EBS Snapshots Hands On</li>
                                <li>AMI Overview</li>
                                <li>AMI Hands On</li>
                                <li>EC2 Image Builder Overview</li>
                                <li>EC2 Image Builder Hands On</li>
                                <li>EC2 Instance Store</li>
                                <li>EFS Overview</li>
                                <li>
                                  Shared Responsibility Model for EC2 Storage
                                </li>
                                <li>EC2 Instance Storage Summary</li>
                                <li>Section Cleanup</li>
                                <li>Quiz questions</li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          WEEK 3 & 4
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>
                              ELB & ASG - Elastic Load Balancing & Auto Scaling
                              Groups
                              <ul>
                                <li>
                                  High Availability, Scalability, Elasticity
                                </li>
                                <li>Elastic Load Balancing (ELB) Overview</li>
                                <li>About the Gateway Load Balancer</li>
                                <li>
                                  Application Load Balancer (ALB) Hands On
                                </li>
                                <li>Auto Scaling Groups (ASG) Overview</li>
                                <li>Auto Scaling Groups (ASG) Hands On</li>
                                <li>Section Cleanup</li>
                                <li>ELB & ASG Summary</li>
                                <li>Quiz questions</li>
                              </ul>
                            </li>
                            <li>
                              S3
                              <ul>
                                <li>S3 Overview</li>
                                <li>S3 Hands On</li>
                                <li>S3 Security: Bucket Policy</li>
                                <li>S3 Security: Bucket Policy Hands On</li>
                                <li>S3 Website Overview</li>
                                <li>S3 Website Hands On</li>
                                <li>S3 Versioning Overview</li>
                                <li>S3 Versioning Hands On</li>
                                <li>S3 Server Access Logging</li>
                                <li>S3 Server Access Logging Hands On</li>
                                <li>S3 Replication Overview</li>
                                <li>S3 Replication Hands On</li>
                                <li>S3 Storage Classes Overview</li>
                                <li>S3 Storage Classes Hands On</li>
                                <li>S3 Glacier Vault Lock & S3 Object Lock</li>
                                <li>Shared Responsibility Model for S3</li>
                                <li>AWS Snow Family Overview</li>
                                <li>AWS Snow Family Hands On</li>
                                <li>Storage Gateway Overview</li>
                                <li>S3 Summary</li>
                                <li>Quiz questions</li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#m1"
                          aria-expanded="false"
                          aria-controls="m1"
                        >
                          WEEK 5
                        </button>
                      </h2>
                      <div
                        id="m1"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>
                              Databases & Analytics
                              <ul>
                                <li>Databases Introduction</li>
                                <li>RDS & Aurora Overview</li>
                                <li>RDS Hands On</li>
                                <li>RDS Deployments Options</li>
                                <li>ElastiCache Overview</li>
                                <li>DynamoDB Overview</li>
                                <li>DynamoDB Hands On</li>
                                <li>Redshift Overview</li>
                                <li>EMR Overview</li>
                                <li>Athena Overview</li>
                                <li>QuickSight Overview</li>
                                <li>DocumentDB Overview</li>
                                <li>Neptune Overview</li>
                                <li>QLDB Overview</li>
                                <li>Managed Blockchain Overview</li>
                                <li>DMS Overview</li>
                                <li>Glue Overview</li>
                                <li>Databases & Analytics Summary</li>
                                <li>Quiz questions</li>
                              </ul>
                            </li>
                            <li>
                              Other Compute Services: ECS, Lambda, Batch,
                              Lightsail
                              <ul>
                                <li>What is Docker?</li>
                                <li>ECS, Fargate & ECR Overview</li>
                                <li>Serverless Introduction</li>
                                <li>Lambda Overview</li>
                                <li>Lambda Hands On</li>
                                <li>API Gateway Overview</li>
                                <li>Batch Overview</li>
                                <li>Lightsail Overview</li>
                                <li>Lightsail Hands On</li>
                                <li>Other Compute - Summary</li>
                                <li>Quiz questions</li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#m2"
                          aria-expanded="false"
                          aria-controls="m2"
                        >
                          WEEK 6
                        </button>
                      </h2>
                      <div
                        id="m2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>
                              Deployments & Managing Infrastructure at Scale
                              <ul>
                                <li>CloudFormation Overview</li>
                                <li>CloudFormation Hands On</li>
                                <li>Beanstalk Overview</li>
                                <li>Beanstalk Hands On</li>
                                <li>CodeDeploy Overview</li>
                                <li>CodeCommit Overview</li>
                                <li>CodeBuild Overview</li>
                                <li>CodePipeline Overview</li>
                                <li>CodeArtifact Overview</li>
                                <li></li>
                                <li>CodeStar Overview</li>
                                <li>Cloud9 Overview</li>
                                <li>CodeStar & Cloud9 Hands On</li>
                                <li>Systems Manager (SSM) Overview</li>
                                <li>OpsWorks Overview</li>
                                <li>Deployment Summary</li>
                                <li>Quiz questions</li>
                              </ul>
                            </li>
                            <li>
                              Leveraging the AWS Global Infrastructure
                              <ul>
                                <li>Why Global Applications?</li>
                                <li>Route 53 Overview</li>
                                <li>Route 53 Hands On</li>
                                <li>CloudFront Overview</li>
                                <li>CloudFront Hands On</li>
                                <li>S3 Transfer Acceleration</li>
                                <li>AWS Global Accelerator</li>
                                <li>AWS Outposts</li>
                                <li>
                                  Leveraging the AWS Global Infrastructure
                                  Summary
                                </li>
                                <li>Quiz questions</li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#m3"
                          aria-expanded="false"
                          aria-controls="m3"
                        >
                          WEEK 7
                        </button>
                      </h2>
                      <div
                        id="m3"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>
                              Cloud Monitoring
                              <ul>
                                <li>
                                  CloudWatch Metrics & CloudWatch Alarms
                                  Overview
                                </li>
                                <li>
                                  CloudWatch Metrics & CloudWatch Alarms Hands
                                  On
                                </li>
                                <li>CloudWatch Logs Overview</li>
                                <li>CloudWatch Logs Hands On</li>
                                <li>
                                  CloudWatch Events / EventBridge Overview
                                </li>
                                <li>
                                  CloudWatch Events / EventBridge Hands On
                                </li>
                                <li>CloudTrail Overview</li>
                                <li>CloudTrail Hands On</li>
                                <li>X-Ray Overview</li>
                                <li>Service Health Dashboard</li>
                                <li>Personal Health Dashboard</li>
                                <li>Cloud Monitoring Summary</li>
                                <li>Quiz questions</li>
                              </ul>
                            </li>
                            <li>
                              VPC & Networking
                              <ul>
                                <li>VPC Overview</li>
                                <li>
                                  VPC, Subnet, Internet Gateway & NAT Gateways
                                </li>
                                <li>
                                  Security Groups & Network Access Control List
                                  (NACL)
                                </li>
                                <li>VPC Flow Logs & VPC Peering</li>
                                <li>
                                  VPC Endpoints - Interface & Gateway (S3 &
                                  DynamoDB)
                                </li>
                                <li>Direct Connect & Site-to-Site VPN</li>
                                <li>Transit Gateway Overview</li>
                                <li>VPC & Networking Summary</li>
                                <li>Quiz questions</li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#m4"
                          aria-expanded="false"
                          aria-controls="m4"
                        >
                          WEEK 8 & 9
                        </button>
                      </h2>
                      <div
                        id="m4"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>
                              Security & Compliance
                              <ul>
                                <li>
                                  Shared Responsibility Model: Reminders &
                                  Examples
                                </li>
                                <li>DDoS Protection: WAF & Shield</li>
                                <li>Penetration Testing</li>
                                <li>Encryption with KMS & CloudHSM</li>
                                <li>Encryption with KMS & CloudHSM Hands On</li>
                                <li>Secrets Manager Overview</li>
                                <li>Artifact Overview</li>
                                <li>GuardDuty Overview</li>
                                <li>Inspector Overview</li>
                                <li>Config Overview</li>
                                <li>Macie Overview</li>
                                <li>Security Hub Overview</li>
                                <li>Amazon Detective Overview</li>
                                <li>AWS Abuse</li>
                                <li>Root User Privileges</li>
                                <li>Security & Compliance Summary</li>
                                <li>Quiz questions</li>
                              </ul>
                            </li>
                            <li>
                              Machine Learning
                              <ul>
                                <li>Rekognition Overview</li>
                                <li>Transcribe Overview</li>
                                <li>Polly Overview</li>
                                <li>Translate Overview</li>
                                <li>Lex + Connect Overview</li>
                                <li>Comprehend Overview</li>
                                <li>SageMaker Overview</li>
                                <li>Machine Learning Summary</li>
                                <li>Quiz questions</li>
                              </ul>
                            </li>
                            <li>
                              Account Management, Billing & Support
                              <ul>
                                <li>Organizations Overview</li>
                                <li>Organizations Hands On</li>
                                <li>AWS Control Tower Overview</li>
                                <li>AWS Control Tower Hands On</li>
                                <li>Pricing Models of the Cloud</li>
                                <li>Savings Plan Overview</li>
                                <li>Billing & Costing Tools Overview</li>
                                <li>
                                  Estimating Costs in the Cloud - TCO Calculator
                                  & Pricing Calculator
                                </li>
                                <li>
                                  Tracking Costs in the Cloud - Billing
                                  Dashboard, Cost Allocation Tags, Reports
                                </li>
                                <li>
                                  Monitoring Costs in the Cloud - Billing Alarms
                                  & AWS Budgets
                                </li>
                                <li>AWS Trusted Advisor</li>
                                <li>Support Plans for AWS</li>
                                <li>Account Best Practices Summary</li>
                                <li>Billing Summary</li>
                                <li>Quiz questions</li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#m5"
                          aria-expanded="false"
                          aria-controls="m5"
                        >
                          WEEK 10
                        </button>
                      </h2>
                      <div
                        id="m5"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>
                              Advanced Identity
                              <ul>
                                <li>Cognito Overview</li>
                                <li>Directory Services Overview</li>
                                <li>Single Sign-On (SSO) Overview</li>
                                <li>Advanced Identity - Summary</li>
                                <li>Quiz questions</li>
                              </ul>
                            </li>
                            <li>
                              Other Services
                              <ul>
                                <li>Other Services - Section Intro</li>
                                <li>WorkSpaces Overview</li>
                                <li>AppStream 2.0 Overview</li>
                                <li>Sumerian Overview</li>
                                <li>IoT Core Overview</li>
                                <li>Elastic Transcoder Overview</li>
                                <li>Quiz questions</li>
                              </ul>
                            </li>
                            <li>
                              AWS Architecting & Ecosystem
                              <ul>
                                <li>
                                  AWS WhitePapers Well-Architected Framework
                                </li>
                                <li>1st pillar: Operational Excellence</li>
                                <li>2nd pillar: Security</li>
                                <li>3rd pillar: Reliability</li>
                                <li>4th pillar: Performance Efficiency</li>
                                <li>5th pillar: Cost Optimization</li>
                                <li>AWS Well-Architected Tool</li>
                                <li>AWS Ecosystem</li>
                                <li>Quiz questions</li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#m6"
                          aria-expanded="false"
                          aria-controls="m6"
                        >
                          Week 11 & 12
                        </button>
                      </h2>
                      <div
                        id="m6"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>
                              Preparing for the Exam + Practice Exam - AWS
                              Certified Cloud Practitioner
                              <ul>
                                <li>Words on Other Services</li>
                                <li>
                                  State of Learning Checkpoint - AWS Certified
                                  Cloud Practitioner
                                </li>
                                <li>Exam Sample Question Walkthrough</li>
                                <li>
                                  Exam Tips - AWS Certified Cloud Practitioner
                                </li>
                                <li>Exam Walkthrough and Signup</li>
                                <li>
                                  Trick to save a little on your AWS Exam Cost
                                </li>
                                <li>
                                  Get an Extra 30 Minutes on your AWS Exam - Non
                                  Native English Speakers only
                                </li>
                                <li>
                                  Practice Exams - AWS Certified Cloud
                                  Practitioner
                                </li>

                                <li>
                                  Congratulations - AWS Certified Cloud
                                  Practitioner
                                </li>
                                <li>
                                  Congratulations – Don’t afraid to go forward,
                                  you already got skills
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="contact" title="Instructor">
                  <div className="d-flex flex-sm-row flex-column px-3 justify-content-center align-items-center mb-5">
                    <img
                      src="https://i.ibb.co/djYjLdH/AFFAN-SAIED-BAIG.png"
                      alt="AFFAN SAIED BAIG"
                      width="200"
                      height="200"
                    />

                    <div className="ms-3">
                      <h5 className="fw-bold">AFFAN SAIED BAIG</h5>
                      <p>Instructor</p>
                      <p className="mb-0">.Net, Azure Cloud, AWS Cloud</p>
                    </div>
                  </div>
                </Tab>
              </Tabs>

              <h3 className="fw-bold mb-0">Related</h3>
              <div className="row">
                <div className="col-sm-6 col-md-4 mt-4">
                  <div className="card w-100">
                    <img
                      src="https://i.ibb.co/3pV01zc/ASP-NET-Web-Applications.jpg"
                      className="card-img-top w-100"
                      style={{ borderRadius: 0, height: 130 }}
                      alt="..."
                    />
                    <div className="card-body d-flex flex-column align-items-center">
                      <div className="d-flex flex-column align-items-center img-par">
                        <div className="image d-flex flex-column align-items-center">
                          <img
                            src="https://i.ibb.co/CVCp97m/FARUKH-KHAN.png"
                            alt=""
                            width="60"
                          />
                        </div>
                        <h6 className="mt-2">FARUKH KHAN</h6>
                      </div>

                      <h5 className="card-title text-center my-card-title-font ">
                        ASP.NET Web Applications
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 mt-4">
                  <div className="card w-100">
                    <img
                      src="https://i.ibb.co/KmnkbPp/PHP-Laravel.jpg"
                      className="card-img-top w-100"
                      style={{ borderRadius: 0, height: 130 }}
                      alt="..."
                    />
                    <div className="card-body d-flex flex-column align-items-center">
                      <div className="d-flex flex-column align-items-center img-par">
                        <div className="image d-flex flex-column align-items-center">
                          <img
                            src="https://i.ibb.co/7gfCGj5/ABDUL-BASSIT-SURAHIO.png"
                            alt=""
                            width="60"
                          />
                        </div>
                        <h6 className="mt-2 ">Name</h6>
                      </div>

                      <h5 className="card-title text-center my-card-title-font ">
                        PHP Laravel
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 mt-4">
                  <div className="card w-100">
                    <img
                      src="https://i.ibb.co/vmWqn6k/MERN-Stack.jpg"
                      className="card-img-top w-100"
                      style={{ borderRadius: 0, height: 130 }}
                      alt="..."
                    />
                    <div className="card-body d-flex flex-column align-items-center">
                      <div className="d-flex flex-column align-items-center img-par">
                        <div className="image d-flex flex-column align-items-center">
                          <img
                            src="https://i.ibb.co/JBRprYC/WAQAS-QAMAR.png"
                            alt=""
                            width="60"
                          />
                        </div>
                        <h6 className="mt-2">Name</h6>
                      </div>

                      <h5 className="card-title text-center my-card-title-font ">
                        MERN Stack
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mt-4 mt-lg-5">
              <Paper elevation={10} className="p-3 border">
                <h6 className="fw-bold mb-0 details text-center text-sm-start">
                  Instructor: <span className="text-success"></span>
                </h6>
                <h6 className="fw-bold mb-0 details text-center text-sm-start">
                  Lectures: <span className="fw-normal">18</span>
                </h6>
                <h6 className="fw-bold mb-0 details text-center text-sm-start">
                  Duration: <span className="fw-normal">18 Weeks</span>
                </h6>
                <h6 className="fw-bold mb-0 details text-center text-sm-start">
                  Enrolled: <span className="fw-normal">0 Students</span>
                </h6>
                <h6 className="fw-bold mb-0 details text-center text-sm-start">
                  Language: <span className="fw-normal">Urdu / English</span>
                </h6>
                <Button
                  // onClick={() => push("/apply-now")}
                  variant="contained"
                  fullWidth
                  className="custom-button mt-3"
                >
                  Enroll Now
                </Button>
              </Paper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AWSPractitioner;

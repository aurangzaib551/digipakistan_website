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
                      src="data:image/png;base64,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"
                      alt=""
                      width="200"
                      height="200"
                    />

                    <div className="ms-3">
                      <h5 className="fw-bold">Name</h5>
                      <p>Instructor</p>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laudantium maiores laborum laboriosam placeat vitae quae
                        blanditiis facilis impedit! Placeat nihil temporibus
                        magnam est autem quis ex aperiam inventore, voluptatem
                        quae!
                      </p>
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

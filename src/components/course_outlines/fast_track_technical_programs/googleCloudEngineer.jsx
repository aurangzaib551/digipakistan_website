import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useMediaQuery } from "react-responsive";
import Button from "@material-ui/core/Button";
import Copyright from "../../common/copyright/copyright";
import { useHistory } from "react-router-dom";

const GoogleCloudEngineer = () => {
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
        <h1 className="text-center fw-bold mx-3">Google Cloud Engineer</h1>
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
                  An Associate Cloud Engineer deploys applications, monitors
                  operations, and manages enterprise solutions. This individual
                  is able to use Google Cloud Console and the command-line
                  interface to perform common platform-based tasks to maintain
                  one or more deployed solutions that leverage Google-managed or
                  self-managed services on Google Cloud.
                </p>

                <p className="text-justify">
                  The Associate Cloud Engineer exam assesses your ability to:
                </p>

                <ul>
                  <li>Set up a cloud solution environment</li>
                  <li>Plan and configure a cloud solution</li>
                  <li>Deploy and implement a cloud solution</li>
                  <li>Ensure successful operation of a cloud solution</li>
                  <li>Configure access and security</li>
                </ul>

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
                    Chapter 1: Overview of Google Cloud Platform 1
                    <ul className="fw-normal">
                      <li>Types of Cloud Services 2</li>
                      <li>Compute Resources 3</li>
                      <li>Storage 4</li>
                      <li>Networking 7</li>
                      <li>Specialized Services 8</li>
                      <li>Cloud Computing vs. Data Center Computing 8</li>
                      <li>Rent Instead of Own Resources 8</li>
                      <li>Pay-as-You-Go-for-What-You-Use Model 9</li>
                      <li>Elastic Resource Allocation 9</li>
                      <li>Specialized Services 10</li>
                      <li>Exam Essentials 10</li>
                      <li>Review Questions 11</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Chapter 2: Google Cloud Computing Services 15
                    <ul className="fw-normal">
                      <li>Computing Components of Google Cloud Platform 16</li>
                      <li>Computing Resources 17</li>
                      <li>Storage Components of Google Cloud Platform 21</li>
                      <li>Storage Resources 21</li>
                      <li>Databases 23</li>
                      <li>Networking Components of Google Cloud Platform 26</li>
                      <li>Networking Services 26</li>
                      <li>Identity Management 28</li>
                      <li>Development Tools 28</li>
                      <li>Additional Components of Google Cloud Platform 29</li>
                      <li>Management Tools 29</li>
                      <li>Specialized Services 30</li>
                      <li>Exam Essentials 31</li>
                      <li>Review Questions 34</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Chapter 3: Projects, Service Accounts, and Billing 39
                    <ul className="fw-normal">
                      <li>How GCP Organizes Projects and Accounts 40</li>
                      <li>GCP Resource Hierarchy 40</li>
                      <li>Organization Policies 43</li>
                      <li>Managing Projects 45</li>
                      <li>Roles and Identities 47</li>
                      <li>Roles in GCP 47</li>
                      <li>Granting Roles to Identities 49</li>
                      <li>Service Accounts 50</li>
                      <li>Billing 51</li>
                      <li>Billing Accounts 51</li>
                      <li>Billing Budgets and Alerts 53</li>
                      <li>Exporting Billing Data 54</li>
                      <li>Enabling APIs 56</li>
                      <li>Provisioning Stackdriver Workspaces 58</li>
                      <li>Exam Essentials 60</li>
                      <li>Review Questions 61</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Chapter 4: Introduction to Computing in Google Cloud 67
                    <ul className="fw-normal">
                      <li>Compute Engine 68</li>
                      <li>Virtual Machine Images 68</li>
                      <li>Virtual Machines Are Contained in Projects 71</li>
                      <li>Virtual Machines Run in a Zone and Region 72</li>
                      <li>
                        Users Need Privileges to Create Virtual Machines 73
                      </li>
                      <li>Preemptible Virtual Machines 74</li>
                      <li>Custom Machine Types 76</li>
                      <li>Use Cases for Compute Engine Virtual Machines 77</li>
                      <li>App Engine 77</li>
                      <li>Structure of an App Engine Application 77</li>
                      <li>App Engine Standard and Flexible Environments 78</li>
                      <li>Use Cases for App Engine 80</li>
                      <li>Kubernetes Engine 81</li>
                      <li>Kubernetes Functionality 82</li>
                      <li>Kubernetes Cluster Architecture 82</li>
                      <li>Kubernetes High Availability 83</li>
                      <li>Kubernetes Engine Use Cases 84</li>
                      <li>Cloud Functions 84</li>
                      <li>Cloud Functions Execution Environment 84</li>
                      <li>Cloud Functions Use Cases 85</li>
                      <li>Summary 85</li>
                      <li>Exam Essentials 86</li>
                      <li>Review Questions 87</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Chapter 5: Computing with Compute Engine Virtual Machines 91
                    <ul className="fw-normal">
                      <li>
                        Creating and Configuring Virtual Machines with the
                        Console 92
                      </li>
                      <li>Main Virtual Machine Configuration Details 95</li>
                      <li>Additional Configuration Details 97</li>
                      <li>
                        Creating and Configuring Virtual Machines with Cloud SDK
                        103
                      </li>
                      <li>Installing Cloud SDK 103</li>
                      <li>Cloud SDK on Mac OS 104</li>
                      <li>Example Installation on Ubuntu Linux 104</li>
                      <li>Creating a Virtual Machine with Cloud SDK 105</li>
                      <li>Creating a Virtual Machine with Cloud Shell 106</li>
                      <li>Basic Virtual Machine Management 107</li>
                      <li>Starting and Stopping Instances 107</li>
                      <li>Network Access to Virtual Machines 108</li>
                      <li>Monitoring a Virtual Machine 109</li>
                      <li>Cost of Virtual Machines 111</li>
                      <li>
                        Guidelines for Planning, Deploying, and Managing Virtual
                        Machines 111
                      </li>
                      <li>Summary 112</li>
                      <li>Exam Essentials 112</li>
                      <li>Review Questions 113</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Chapter 6: Managing Virtual Machines 117
                    <ul className="fw-normal">
                      <li>Managing Single Virtual Machine Instances 118</li>
                      <li>
                        Managing Single Virtual Machine Instances in the Console
                        118
                      </li>
                      <li>
                        Managing a Single Virtual Machine Instance with Cloud
                        Shell and the Command Line 130
                      </li>
                      <li>Introduction to Instance Groups 134</li>
                      <li>
                        Creating and Removing Instance Groups and Templates 134
                      </li>
                      <li>
                        Instance Groups Load Balancing and Autoscaling 137
                      </li>
                      <li>Guidelines for Managing Virtual Machines 137</li>
                      <li>Summary 138</li>
                      <li>Exam Essentials 138</li>
                      <li>Review Questions 140</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Chapter 7: Computing with Kubernetes 145
                    <ul className="fw-normal">
                      <li>Introduction to Kubernetes Engine 146</li>
                      <li>Kubernetes Cluster Architecture 146</li>
                      <li>Kubernetes Objects 147</li>
                      <li>Deploying Kubernetes Clusters 149</li>
                      <li>
                        Deploying Kubernetes Clusters Using Cloud Console 149
                      </li>
                      <li>
                        Deploying Kubernetes Clusters Using Cloud Shell and
                        Cloud SDK 153
                      </li>
                      <li>Deploying Application Pods 154</li>
                      <li>Monitoring Kubernetes 157</li>
                      <li>Summary 168</li>
                      <li>Exam Essentials 168</li>
                      <li>Review Questions 170</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Chapter 8: Managing Kubernetes Clusters 175
                    <ul className="fw-normal">
                      <li>Viewing the Status of a Kubernetes Cluster 176</li>
                      <li>
                        Viewing the Status of Kubernetes Clusters Using Cloud
                        Console 176
                      </li>
                      <li>
                        Viewing the Status of Kubernetes Clusters Using Cloud
                        SDK and Cloud Shell 184
                      </li>
                      <li>Adding, Modifying, and Removing Nodes 190</li>
                      <li>
                        Adding, Modifying, and Removing Nodes with Cloud Console
                        190
                      </li>
                      <li>
                        Adding, Modifying, and Removing with Cloud SDK and Cloud
                        Shell 191
                      </li>
                      <li>Adding, Modifying, and Removing Pods 192</li>
                      <li>
                        Adding, Modifying, and Removing Pods with Cloud Console
                        192
                      </li>
                      <li>
                        Adding, Modifying, and Removing Pods with Cloud SDK and
                        Cloud Shell 195
                      </li>
                      <li>Adding, Modifying, and Removing Services 196</li>
                      <li>
                        Adding, Modifying, and Removing Services with Cloud
                        Console 196
                      </li>
                      <li>
                        Adding, Modifying, and Removing Services with Cloud SDK
                        and Cloud Shell 198
                      </li>
                      <li>
                        Viewing the Image Repository and Image Details 199
                      </li>
                      <li>
                        Viewing the Image Repository and Image Details with
                        Cloud Console 199
                      </li>
                      <li>
                        Viewing the Image Repository and Image Details with
                        Cloud SDK and Cloud Shell 202
                      </li>
                      <li>Summary 203</li>
                      <li>Exam Essentials 203</li>
                      <li>Review Questions 204</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Chapter 9: Computing with App Engine 209
                    <ul className="fw-normal">
                      <li>App Engine Components 210</li>
                      <li>Deploying an App Engine Application 211</li>
                      <li>Deploying an App Using Cloud Shell and SDK 211</li>
                      <li>Scaling App Engine Applications 215</li>
                      <li>Splitting Traffic between App Engine Versions 217</li>
                      <li>Summary 218</li>
                      <li>Exam Essentials 218</li>
                      <li>Review Questions 220</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Chapter 10: Computing with Cloud Functions 225
                    <ul className="fw-normal">
                      <li>Introduction to Cloud Functions 226</li>
                      <li>Events, Triggers, and Functions 227</li>
                      <li>Runtime Environments 227</li>
                      <li>
                        Cloud Functions Receiving Events from Cloud Storage 229
                      </li>
                      <li>
                        Deploying a Cloud Function for Cloud Storage Events
                        Using Cloud Console 229
                      </li>
                      <li>
                        Deploying a Cloud Function for Cloud Storage Events
                        Using gcloud Commands 231
                      </li>
                      <li>Cloud Functions Receiving Events from Pub/Sub 233</li>
                      <li>
                        Deploying a Cloud Function for Cloud Pub/Sub Events
                        Using Cloud Console 233
                      </li>
                      <li>
                        Deploying a Cloud Function for Cloud Pub/Sub Events
                        Using gcloud Commands 234
                      </li>
                      <li>Summary 234</li>
                      <li>Exam Essentials 235</li>
                      <li>Review Questions 237</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Chapter 11: Planning Storage in the Cloud 241
                    <ul className="fw-normal">
                      <li>Types of Storage Systems 242</li>
                      <li>Cache 243</li>
                      <li>Persistent Storage 245</li>
                      <li>Object Storage 247</li>
                      <li>
                        Storage Types When Planning a Storage Solution 253
                      </li>
                      <li>Storage Data Models 254</li>
                      <li>Object: Cloud Storage 254</li>
                      <li>
                        Relational: Cloud SQL, Cloud Spanner, and BigQuery 254
                      </li>
                      <li>
                        NoSQL: Datastore, Cloud Firestore, and Bigtable 261
                      </li>
                      <li>
                        Choosing a Storage Solution: Guidelines to Consider 268
                      </li>
                      <li>Summary 269</li>
                      <li>Exam Essentials 270</li>
                      <li>Review Questions 271</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Chapter 12: Deploying Storage in Google Cloud Platform 275
                    <ul className="fw-normal">
                      <li>Deploying and Managing Cloud SQL 276</li>
                      <li>Creating and Connecting to a MySQL Instance 276</li>
                      <li>
                        Creating a Database, Loading Data, and Querying Data 278
                      </li>
                      <li>Backing Up MySQL in Cloud SQL 279</li>
                      <li>Deploying and Managing Datastore 283</li>
                      <li>Adding Data to a Datastore Database 283</li>
                      <li>Backing Up Datastore 284</li>
                      <li>Deploying and Managing BigQuery 285</li>
                      <li>Estimating the Cost of Queries in BigQuery 285</li>
                      <li>Viewing Jobs in BigQuery 286</li>
                      <li>Deploying and Managing Cloud Spanner 288</li>
                      <li>Deploying and Managing Cloud Pub/Sub 292</li>
                      <li>Deploying and Managing Cloud Bigtable 295</li>
                      <li>Deploying and Managing Cloud Dataproc 298</li>
                      <li>Managing Cloud Storage 302</li>
                      <li>Summary 303</li>
                      <li>Exam Essentials 304</li>
                      <li>Review Questions 305</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Chapter 13: Loading Data into Storage 309
                    <ul className="fw-normal">
                      <li>Loading and Moving Data to Cloud Storage 310</li>
                      <li>
                        Loading and Moving Data to Cloud Storage Using the
                        Console 310
                      </li>
                      <li>
                        Loading and Moving Data to Cloud Storage Using the
                        Command Line 314
                      </li>
                      <li>Importing and Exporting Data 315</li>
                      <li>Importing and Exporting Data: Cloud SQL 315</li>
                      <li>Importing and Exporting Data: Cloud Datastore 319</li>
                      <li>Importing and Exporting Data: BigQuery 320</li>
                      <li>Importing and Exporting Data: Cloud Spanner 325</li>
                      <li>Importing and Exporting Data: Cloud Bigtable 327</li>
                      <li>Importing and Exporting Data: Cloud Dataproc 329</li>
                      <li>Streaming Data to Cloud Pub/Sub 330</li>
                      <li>Summary 331</li>
                      <li>Exam Essentials 332</li>
                      <li>Review Questions 333</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Chapter 14: Networking in the Cloud: Virtual Private Clouds
                    and Virtual Private Networks 337
                    <ul className="fw-normal">
                      <li>Creating a Virtual Private Cloud with Subnets 338</li>
                      <li>
                        Creating a Virtual Private Cloud with Cloud Console 338
                      </li>
                      <li>Creating a Virtual Private Cloud with gcloud 342</li>
                      <li>
                        Creating a Shared Virtual Private Cloud Using gcloud 343
                      </li>
                      <li>
                        Deploying Compute Engine with a Custom Network 344
                      </li>
                      <li>
                        Creating Firewall Rules for a Virtual Private Cloud 347
                      </li>
                      <li>Structure of Firewall Rules 347</li>
                      <li>Creating Firewall Rules Using Cloud Console 348</li>
                      <li>Creating Firewall Rules Using gcloud 350</li>
                      <li>Creating a Virtual Private Network 351</li>
                      <li>
                        Creating a Virtual Private Network Using Cloud Console
                        351
                      </li>
                      <li>
                        Creating a Virtual Private Network Using gcloud 354
                      </li>
                      <li>Summary 355</li>
                      <li>Exam Essentials 355</li>
                      <li>Review Questions 357</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Chapter 15: Networking in the Cloud: DNS, Load Balancing,
                    and IP Addressing 361
                    <ul className="fw-normal">
                      <li>Configuring Cloud DNS 362</li>
                      <li>
                        Creating DNS Managed Zones Using Cloud Console 362
                      </li>
                      <li>Creating a DNS Managed Zones Using gcloud 366</li>
                      <li>Configuring Load Balancers 367</li>
                      <li>Types of Load Balancers 367</li>
                      <li>
                        Configuring Load Balancers using Cloud Console 368
                      </li>
                      <li>Configuring Load Balancers using gcloud 374</li>
                      <li>Managing IP Addresses 375</li>
                      <li>Expanding CIDR Blocks 375</li>
                      <li>Reserving IP Addresses 375</li>
                      <li>Summary 377</li>
                      <li>Exam Essentials 378</li>
                      <li>Review Questions 379</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Chapter 16: Deploying Applications with Cloud Launcher and
                    Deployment Manager 383
                    <ul className="fw-normal">
                      <li>Deploying a Solution Using Cloud Launcher 384</li>
                      <li>Browsing Cloud Launcher and Viewing Solutions 384</li>
                      <li>Deploying Cloud Launcher Solutions 390</li>
                      <li>
                        Deploying an Application Using Deployment Manager 394
                      </li>
                      <li>Deployment Manager Configuration Files 394</li>
                      <li>Deployment Manager Template Files 397</li>
                      <li>Launching a Deployment Manager Template 398</li>
                      <li>Summary 398</li>
                      <li>Exam Essentials 399</li>
                      <li>Review Questions 400</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Chapter 17: Configuring Access and Security 405
                    <ul className="fw-normal">
                      <li>Managing Identity and Access Management 406</li>
                      <li>
                        Viewing Account Identity and Access Management
                        Assignments 406
                      </li>
                      <li>
                        Assigning Identity and Access Management Roles to
                        Accounts and Groups 408
                      </li>
                      <li>
                        Defining Custom Identity and Access Management Roles 411
                      </li>
                      <li>Managing Service Accounts 414</li>
                      <li>Managing Service Accounts with Scopes 414</li>
                      <li>
                        Assigning a Service Account to a Virtual Machine
                        Instance 416
                      </li>
                      <li>Viewing Audit Logs 417</li>
                      <li>Summary 418</li>
                      <li>Exam Essentials 418</li>
                      <li>Review Questions 420</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Chapter 18: Monitoring, Logging, and Cost Estimating 425
                    <ul className="fw-normal">
                      <li>Monitoring with Stackdriver 426</li>
                      <li>Creating Alerts Based on Resource Metrics 427</li>
                      <li>Creating Custom Metrics 437</li>
                      <li>Logging with Stackdriver 438</li>
                      <li>Configuring Log Sinks 438</li>
                      <li>Viewing and Filtering Logs 441</li>
                      <li>Viewing Message Details 444</li>
                      <li>Using Cloud Diagnostics 446</li>
                      <li>Overview of Cloud Trace 446</li>
                      <li>Overview of Cloud Debug 448</li>
                      <li>Viewing Google Cloud Platform Status 451</li>
                      <li>Using the Pricing Calculator 453</li>
                      <li>Summary 457</li>
                      <li>Exam Essentials 458</li>
                      <li>Review Questions 459</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Appendix Answers to Review Questions 463
                    <ul className="fw-normal">
                      <li>Chapter 1: Overview of Google Cloud Platform 464</li>
                      <li>Chapter 2: Google Cloud Computing Services 466</li>
                      <li>
                        Chapter 3: Projects, Service Accounts, and Billing 468
                      </li>
                      <li>
                        Chapter 4: Introduction to Computing in Google Cloud 470
                      </li>
                      <li>
                        Chapter 5: Computing with Compute Engine Virtual
                        Machines 472
                      </li>
                      <li>Chapter 6: Managing Virtual Machines 475</li>
                      <li>Chapter 7: Computing with Kubernetes 477</li>
                      <li>Chapter 8: Managing Kubernetes Clusters 479</li>
                      <li>Chapter 9: Computing with App Engine 481</li>
                      <li>Chapter 10: Computing with Cloud Functions 483</li>
                      <li>Chapter 11: Planning Storage in the Cloud 485</li>
                      <li>
                        Chapter 12: Deploying Storage in Google Cloud Platform
                        487
                      </li>
                      <li>Chapter 13: Loading Data into Storage 490</li>
                      <li>
                        Chapter 14: Networking in the Cloud Virtual Private
                        Clouds and Virtual Private Networks 492
                      </li>
                      <li>
                        Chapter 15: Networking in the Cloud: DNS, Load
                        Balancing, and IP Addressing 494
                      </li>
                      <li>
                        Chapter 16: Deploying Applications with Cloud Launcher
                        and Deployment Manager 496
                      </li>
                      <li>Chapter 17: Configuring Access and Security 498</li>
                      <li>
                        Chapter 18: Monitoring, Logging, and Cost Estimating 500
                      </li>
                      <li>Index 503</li>
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

export default GoogleCloudEngineer;

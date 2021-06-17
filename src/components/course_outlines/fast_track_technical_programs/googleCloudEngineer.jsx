import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Tabsi from "@material-ui/core/Tabs";
import Tabi from "@material-ui/core/Tab";
import { useMediaQuery } from "react-responsive";
import { Tab, Tabs } from "react-bootstrap";

const GoogleCloudEngineer = () => {
  const [key, setKey] = useState("home");

  return (
    <>
      <div className="course-outlines mt">
        <div className="bg-img">
          <div className="container pt-5">
            <h1 className="fw-bold text-white">Courses</h1>
            <p className="mb-0 small fw-bold text-white">
              Home &bull; Available Programs &bull; Fast Track &bull; Google
              Cloud Engineer
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-9 mt-4 mt-lg-5">
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="fw-bold mb-0">Google Cloud Engineer</h2>

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
                  <p className="text-justify">
                    An Associate Cloud Engineer deploys applications, monitors
                    operations, and manages enterprise solutions. This
                    individual is able to use Google Cloud Console and the
                    command-line interface to perform common platform-based
                    tasks to maintain one or more deployed solutions that
                    leverage Google-managed or self-managed services on Google
                    Cloud.
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
                  <p className="mb-0">
                    Total Duration of the course is 3 months
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
                          Chapter 1: Overview of Google Cloud Platform 1
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
                          Chapter 2: Google Cloud Computing Services 15
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
                              Computing Components of Google Cloud Platform 16
                            </li>
                            <li>Computing Resources 17</li>
                            <li>
                              Storage Components of Google Cloud Platform 21
                            </li>
                            <li>Storage Resources 21</li>
                            <li>Databases 23</li>
                            <li>
                              Networking Components of Google Cloud Platform 26
                            </li>
                            <li>Networking Services 26</li>
                            <li>Identity Management 28</li>
                            <li>Development Tools 28</li>
                            <li>
                              Additional Components of Google Cloud Platform 29
                            </li>
                            <li>Management Tools 29</li>
                            <li>Specialized Services 30</li>
                            <li>Exam Essentials 31</li>
                            <li>Review Questions 34</li>
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
                          Chapter 3: Projects, Service Accounts, and Billing 39
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
                          Chapter 4: Introduction to Computing in Google Cloud
                          67
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
                            <li>Compute Engine 68</li>
                            <li>Virtual Machine Images 68</li>
                            <li>
                              Virtual Machines Are Contained in Projects 71
                            </li>
                            <li>
                              Virtual Machines Run in a Zone and Region 72
                            </li>
                            <li>
                              Users Need Privileges to Create Virtual Machines
                              73
                            </li>
                            <li>Preemptible Virtual Machines 74</li>
                            <li>Custom Machine Types 76</li>
                            <li>
                              Use Cases for Compute Engine Virtual Machines 77
                            </li>
                            <li>App Engine 77</li>
                            <li>Structure of an App Engine Application 77</li>
                            <li>
                              App Engine Standard and Flexible Environments 78
                            </li>
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
                          Chapter 5: Computing with Compute Engine Virtual
                          Machines 91
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
                              Creating and Configuring Virtual Machines with the
                              Console 92
                            </li>
                            <li>
                              Main Virtual Machine Configuration Details 95
                            </li>
                            <li>Additional Configuration Details 97</li>
                            <li>
                              Creating and Configuring Virtual Machines with
                              Cloud SDK 103
                            </li>
                            <li>Installing Cloud SDK 103</li>
                            <li>Cloud SDK on Mac OS 104</li>
                            <li>Example Installation on Ubuntu Linux 104</li>
                            <li>
                              Creating a Virtual Machine with Cloud SDK 105
                            </li>
                            <li>
                              Creating a Virtual Machine with Cloud Shell 106
                            </li>
                            <li>Basic Virtual Machine Management 107</li>
                            <li>Starting and Stopping Instances 107</li>
                            <li>Network Access to Virtual Machines 108</li>
                            <li>Monitoring a Virtual Machine 109</li>
                            <li>Cost of Virtual Machines 111</li>
                            <li>
                              Guidelines for Planning, Deploying, and Managing
                              Virtual Machines 111
                            </li>
                            <li>Summary 112</li>
                            <li>Exam Essentials 112</li>
                            <li>Review Questions 113</li>
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
                          Chapter 6: Managing Virtual Machines 117
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
                            <li>Creating Android Project</li>
                            <li>Debugging Application through DDMS</li>
                            <li>Setting up environment</li>
                            <li>AVD Creation</li>
                            <li>Executing Project on Android Screen</li>
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
                          data-bs-target="#cm4"
                          aria-expanded="false"
                          aria-controls="cm4"
                        >
                          Chapter 7: Computing with Kubernetes 145
                        </button>
                      </h2>
                      <div
                        id="cm4"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>
                              Managing Single Virtual Machine Instances 118
                            </li>
                            <li>
                              Managing Single Virtual Machine Instances in the
                              Console 118
                            </li>
                            <li>
                              Managing a Single Virtual Machine Instance with
                              Cloud Shell and the Command Line 130
                            </li>
                            <li>Introduction to Instance Groups 134</li>
                            <li>
                              Creating and Removing Instance Groups and
                              Templates 134
                            </li>
                            <li>
                              Instance Groups Load Balancing and Autoscaling 137
                            </li>
                            <li>
                              Guidelines for Managing Virtual Machines 137
                            </li>
                            <li>Summary 138</li>
                            <li>Exam Essentials 138</li>
                            <li>Review Questions 140</li>
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
                          Chapter 8: Managing Kubernetes Clusters 175
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
                              Viewing the Status of a Kubernetes Cluster 176
                            </li>
                            <li>
                              Viewing the Status of Kubernetes Clusters Using
                              Cloud Console 176
                            </li>
                            <li>
                              Viewing the Status of Kubernetes Clusters Using
                              Cloud SDK and Cloud Shell 184
                            </li>
                            <li>Adding, Modifying, and Removing Nodes 190</li>
                            <li>
                              Adding, Modifying, and Removing Nodes with Cloud
                              Console 190
                            </li>
                            <li>
                              Adding, Modifying, and Removing with Cloud SDK and
                              Cloud Shell 191
                            </li>
                            <li>Adding, Modifying, and Removing Pods 192</li>
                            <li>
                              Adding, Modifying, and Removing Pods with Cloud
                              Console 192
                            </li>
                            <li>
                              Adding, Modifying, and Removing Pods with Cloud
                              SDK and Cloud Shell 195
                            </li>
                            <li>
                              Adding, Modifying, and Removing Services 196
                            </li>
                            <li>
                              Adding, Modifying, and Removing Services with
                              Cloud Console 196
                            </li>
                            <li>
                              Adding, Modifying, and Removing Services with
                              Cloud SDK and Cloud Shell 198
                            </li>
                            <li>
                              Viewing the Image Repository and Image Details 199
                            </li>
                            <li>
                              Viewing the Image Repository and Image Details
                              with Cloud Console 199
                            </li>
                            <li>
                              Viewing the Image Repository and Image Details
                              with Cloud SDK and Cloud Shell 202
                            </li>
                            <li>Summary 203</li>
                            <li>Exam Essentials 203</li>
                            <li>Review Questions 204</li>
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
                          Chapter 9: Computing with App Engine 209
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
                            <li>App Engine Components 210</li>
                            <li>Deploying an App Engine Application 211</li>
                            <li>
                              Deploying an App Using Cloud Shell and SDK 211
                            </li>
                            <li>Scaling App Engine Applications 215</li>
                            <li>
                              Splitting Traffic between App Engine Versions 217
                            </li>
                            <li>Summary 218</li>
                            <li>Exam Essentials 218</li>
                            <li>Review Questions 220</li>
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
                          data-bs-target="#m7"
                          aria-expanded="false"
                          aria-controls="m7"
                        >
                          Chapter 10: Computing with Cloud Functions 225
                        </button>
                      </h2>
                      <div
                        id="m7"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Introduction to Cloud Functions 226</li>
                            <li>Events, Triggers, and Functions 227</li>
                            <li>Runtime Environments 227</li>
                            <li>
                              Cloud Functions Receiving Events from Cloud
                              Storage 229
                            </li>
                            <li>
                              Deploying a Cloud Function for Cloud Storage
                              Events Using Cloud Console 229
                            </li>
                            <li>
                              Deploying a Cloud Function for Cloud Storage
                              Events Using gcloud Commands 231
                            </li>
                            <li>
                              Cloud Functions Receiving Events from Pub/Sub 233
                            </li>
                            <li>
                              Deploying a Cloud Function for Cloud Pub/Sub
                              Events Using Cloud Console 233
                            </li>
                            <li>
                              Deploying a Cloud Function for Cloud Pub/Sub
                              Events Using gcloud Commands 234
                            </li>
                            <li>Summary 234</li>
                            <li>Exam Essentials 235</li>
                            <li>Review Questions 237</li>
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
                          data-bs-target="#m8"
                          aria-expanded="false"
                          aria-controls="m8"
                        >
                          Chapter 11: Planning Storage in the Cloud 241
                        </button>
                      </h2>
                      <div
                        id="m8"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
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
                              Relational: Cloud SQL, Cloud Spanner, and BigQuery
                              254
                            </li>
                            <li>
                              NoSQL: Datastore, Cloud Firestore, and Bigtable
                              261
                            </li>
                            <li>
                              Choosing a Storage Solution: Guidelines to
                              Consider 268
                            </li>
                            <li>Summary 269</li>
                            <li>Exam Essentials 270</li>
                            <li>Review Questions 271</li>
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
                          data-bs-target="#m9"
                          aria-expanded="false"
                          aria-controls="m9"
                        >
                          Chapter 12: Deploying Storage in Google Cloud Platform
                          275
                        </button>
                      </h2>
                      <div
                        id="m9"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Deploying and Managing Cloud SQL 276</li>
                            <li>
                              Creating and Connecting to a MySQL Instance 276
                            </li>
                            <li>
                              Creating a Database, Loading Data, and Querying
                              Data 278
                            </li>
                            <li>Backing Up MySQL in Cloud SQL 279</li>
                            <li>Deploying and Managing Datastore 283</li>
                            <li>Adding Data to a Datastore Database 283</li>
                            <li>Backing Up Datastore 284</li>
                            <li>Deploying and Managing BigQuery 285</li>
                            <li>
                              Estimating the Cost of Queries in BigQuery 285
                            </li>
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
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#m10"
                          aria-expanded="false"
                          aria-controls="m10"
                        >
                          Chapter 13: Loading Data into Storage 309
                        </button>
                      </h2>
                      <div
                        id="m10"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>
                              Loading and Moving Data to Cloud Storage 310
                            </li>
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
                            <li>
                              Importing and Exporting Data: Cloud Datastore 319
                            </li>
                            <li>Importing and Exporting Data: BigQuery 320</li>
                            <li>
                              Importing and Exporting Data: Cloud Spanner 325
                            </li>
                            <li>
                              Importing and Exporting Data: Cloud Bigtable 327
                            </li>
                            <li>
                              Importing and Exporting Data: Cloud Dataproc 329
                            </li>
                            <li>Streaming Data to Cloud Pub/Sub 330</li>
                            <li>Summary 331</li>
                            <li>Exam Essentials 332</li>
                            <li>Review Questions 333</li>
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
                          data-bs-target="#m11"
                          aria-expanded="false"
                          aria-controls="m11"
                        >
                          Chapter 14: Networking in the Cloud: Virtual Private
                          Clouds and Virtual Private Networks 337
                        </button>
                      </h2>
                      <div
                        id="m11"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>
                              Creating a Virtual Private Cloud with Subnets 338
                            </li>
                            <li>
                              Creating a Virtual Private Cloud with Cloud
                              Console 338
                            </li>
                            <li>
                              Creating a Virtual Private Cloud with gcloud 342
                            </li>
                            <li>
                              Creating a Shared Virtual Private Cloud Using
                              gcloud 343
                            </li>
                            <li>
                              Deploying Compute Engine with a Custom Network 344
                            </li>
                            <li>
                              Creating Firewall Rules for a Virtual Private
                              Cloud 347
                            </li>
                            <li>Structure of Firewall Rules 347</li>
                            <li>
                              Creating Firewall Rules Using Cloud Console 348
                            </li>
                            <li>Creating Firewall Rules Using gcloud 350</li>
                            <li>Creating a Virtual Private Network 351</li>
                            <li>
                              Creating a Virtual Private Network Using Cloud
                              Console 351
                            </li>
                            <li>
                              Creating a Virtual Private Network Using gcloud
                              354
                            </li>
                            <li>Summary 355</li>
                            <li>Exam Essentials 355</li>
                            <li>Review Questions 357</li>
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
                          data-bs-target="#m12"
                          aria-expanded="false"
                          aria-controls="m12"
                        >
                          Chapter 15: Networking in the Cloud: DNS, Load
                          Balancing, and IP Addressing 361
                        </button>
                      </h2>
                      <div
                        id="m12"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Configuring Cloud DNS 362</li>
                            <li>
                              Creating DNS Managed Zones Using Cloud Console 362
                            </li>
                            <li>
                              Creating a DNS Managed Zones Using gcloud 366
                            </li>
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
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#m13"
                          aria-expanded="false"
                          aria-controls="m13"
                        >
                          Chapter 16: Deploying Applications with Cloud Launcher
                          and Deployment Manager 383
                        </button>
                      </h2>
                      <div
                        id="m13"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>
                              Deploying a Solution Using Cloud Launcher 384
                            </li>
                            <li>
                              Browsing Cloud Launcher and Viewing Solutions 384
                            </li>
                            <li>Deploying Cloud Launcher Solutions 390</li>
                            <li>
                              Deploying an Application Using Deployment Manager
                              394
                            </li>
                            <li>Deployment Manager Configuration Files 394</li>
                            <li>Deployment Manager Template Files 397</li>
                            <li>Launching a Deployment Manager Template 398</li>
                            <li>Summary 398</li>
                            <li>Exam Essentials 399</li>
                            <li>Review Questions 400</li>
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
                          data-bs-target="#m14"
                          aria-expanded="false"
                          aria-controls="m14"
                        >
                          Chapter 17: Configuring Access and Security 405
                        </button>
                      </h2>
                      <div
                        id="m14"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
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
                              Defining Custom Identity and Access Management
                              Roles 411
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
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#m15"
                          aria-expanded="false"
                          aria-controls="m15"
                        >
                          Chapter 18: Monitoring, Logging, and Cost Estimating
                          425
                        </button>
                      </h2>
                      <div
                        id="m15"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Monitoring with Stackdriver 426</li>
                            <li>
                              Creating Alerts Based on Resource Metrics 427
                            </li>
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
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#m16"
                          aria-expanded="false"
                          aria-controls="m16"
                        >
                          Appendix Answers to Review Questions 463
                        </button>
                      </h2>
                      <div
                        id="m16"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>
                              Chapter 1: Overview of Google Cloud Platform 464
                            </li>
                            <li>
                              Chapter 2: Google Cloud Computing Services 466
                            </li>
                            <li>
                              Chapter 3: Projects, Service Accounts, and Billing
                              468
                            </li>
                            <li>
                              Chapter 4: Introduction to Computing in Google
                              Cloud 470
                            </li>
                            <li>
                              Chapter 5: Computing with Compute Engine Virtual
                              Machines 472
                            </li>
                            <li>Chapter 6: Managing Virtual Machines 475</li>
                            <li>Chapter 7: Computing with Kubernetes 477</li>
                            <li>Chapter 8: Managing Kubernetes Clusters 479</li>
                            <li>Chapter 9: Computing with App Engine 481</li>
                            <li>
                              Chapter 10: Computing with Cloud Functions 483
                            </li>
                            <li>
                              Chapter 11: Planning Storage in the Cloud 485
                            </li>
                            <li>
                              Chapter 12: Deploying Storage in Google Cloud
                              Platform 487
                            </li>
                            <li>Chapter 13: Loading Data into Storage 490</li>
                            <li>
                              Chapter 14: Networking in the Cloud Virtual
                              Private Clouds and Virtual Private Networks 492
                            </li>
                            <li>
                              Chapter 15: Networking in the Cloud: DNS, Load
                              Balancing, and IP Addressing 494
                            </li>
                            <li>
                              Chapter 16: Deploying Applications with Cloud
                              Launcher and Deployment Manager 496
                            </li>
                            <li>
                              Chapter 17: Configuring Access and Security 498
                            </li>
                            <li>
                              Chapter 18: Monitoring, Logging, and Cost
                              Estimating 500
                            </li>
                            <li>Index 503</li>
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

export default GoogleCloudEngineer;

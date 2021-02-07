import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useMediaQuery } from "react-responsive";
import Button from "@material-ui/core/Button";
import Copyright from "../../common/copyright/copyright";
import { useHistory } from "react-router-dom";

const CiscoCCNANetworking = () => {
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
        <h1 className="text-center fw-bold mx-3">Cisco CCNA Networking</h1>
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
                  CCNA (Cisco Certified Network Associate) is an IT
                  certification given by Cisco which exhibits the hopeful's
                  capacity to setup various sorts of system. CCNA certification
                  covers the various employment specialization in the systems
                  administration field. For example, Cloud Computing, Data
                  Center, and Security. Associate certifications such as CCNA
                  are expected to give essential aptitudes to career experts
                  with 1-3 years of experience.
                </p>

                <p className="text-justify">
                  Cisco Certified Network Associate is a 120-minute
                  International exam associated with the CCNA certification.
                  This exam tests a candidate's knowledge and skills related to
                  network fundamentals, network access, IP connectivity, IP
                  services, security fundamentals, and automation and
                  programmability. The course, Implementing and Administering
                  Cisco Solutions (CCNA), helps candidates prepare for this
                  exam.
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
                <ul className="list-unstyled">
                  <li className="fw-bold mt-2">
                    Network Fundamentals
                    <ul className="fw-normal list-style-roman">
                      <li>
                        Explain the role and function of network components
                      </li>
                      <li>
                        Describe characteristics of network topology
                        architectures
                      </li>
                      <li>Compare physical interface and cabling types</li>
                      <li>
                        Identify interface and cable issues (collisions, errors,
                        mismatch duplex, and/or speed)
                      </li>
                      <li>Compare TCP to UDP</li>
                      <li>
                        Configure and verify IPv4 addressing and subnetting
                      </li>
                      <li>Describe the need for private IPv4 addressing</li>
                      <li>Configure and verify IPv6 addressing and prefix</li>
                      <li>Compare IPv6 address types</li>
                      <li>
                        Verify IP parameters for Client OS (Windows, Mac OS,
                        Linux)
                      </li>
                      <li>Describe wireless principles</li>
                      <li>
                        Explain virtualization fundamentals (virtual machines)
                      </li>

                      <li>Describe switching concepts</li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    Network Access
                    <ul className="fw-normal list-style-roman">
                      <li>
                        Configure and verify VLANs (normal range) spanning
                        multiple switches
                      </li>
                      <li>Configure and verify interswitch connectivity</li>
                      <li>
                        Configure and verify Layer 2 discovery protocols (Cisco
                        Discovery Protocol and LLDP)
                      </li>
                      <li>
                        Configure and verify (Layer 2/Layer 3) EtherChannel
                        (LACP)
                      </li>
                      <li>
                        Describe the need for and basic operations of Rapid
                        PVST+ Spanning Tree Protocol and identify basic
                        operations
                      </li>
                      <li>Compare Cisco Wireless Architectures and AP modes</li>
                      <li>
                        Describe physical infrastructure connections of WLAN
                        components (AP,WLC, access/trunk ports, and LAG)
                      </li>
                      <li>
                        Describe AP and WLC management access connections
                        (Telnet, SSH, HTTP,HTTPS, console, and TACACS+/RADIUS)
                      </li>
                      <li>
                        Configure the components of a wireless LAN access for
                        client connectivity using GUI only such as WLAN
                        creation, security settings, QoS profiles, and advanced
                        WLAN settings
                      </li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    IP Connectivity
                    <ul className="fw-normal list-style-roman">
                      <li>Interpret the components of routing table</li>
                      <li>
                        Determine how a router makes a forwarding decision by
                        default
                      </li>
                      <li>Configure and verify IPv4 and IPv6 static routing</li>
                      <li>Configure and verify single area OSPFv2</li>
                      <li>
                        Describe the purpose of first hop redundancy protocol
                      </li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    IP Services
                    <ul className="fw-normal list-style-roman">
                      <li>
                        Configure and verify inside source NAT using static and
                        pools
                      </li>
                      <li>
                        Configure and verify NTP operating in a client and
                        server mode
                      </li>
                      <li>
                        Explain the role of DHCP and DNS within the network
                      </li>
                      <li>
                        Explain the function of SNMP in network operations
                      </li>
                      <li>
                        Describe the use of syslog features including facilities
                        and levels
                      </li>
                      <li>Configure and verify DHCP client and relay</li>
                      <li>
                        Explain the forwarding per-hop behavior (PHB) for QoS
                        such as classification, marking, queuing, congestion,
                        policing, shaping
                      </li>
                      <li>
                        Configure network devices for remote access using SSH
                      </li>
                      <li>
                        Describe the capabilities and function of TFTP/FTP in
                        the network
                      </li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    Security Fundamentals
                    <ul className="fw-normal list-style-roman">
                      <li>
                        Define key security concepts (threats, vulnerabilities,
                        exploits, and mitigation techniques)
                      </li>
                      <li>
                        Describe security program elements (user awareness,
                        training, and physical access control)
                      </li>
                      <li>
                        Configure device access control using local passwords
                      </li>
                      <li>
                        Describe security password policies elements, such as
                        management, complexity, and password alternatives
                        (multifactor authentication, certificates, and
                        biometrics)
                      </li>
                      <li>Describe remote access and site-to-site VPNs</li>
                      <li>Configure and verify access control lists</li>
                      <li>
                        Configure Layer 2 security features (DHCP snooping,
                        dynamic ARP inspection, and port security)
                      </li>
                      <li>
                        Differentiate authentication, authorization, and
                        accounting concepts
                      </li>
                      <li>
                        Describe wireless security protocols (WPA, WPA2, and
                        WPA3)
                      </li>
                      <li>Configure WLAN using WPA2 PSK using the GUI</li>
                    </ul>
                  </li>

                  <li className="fw-bold mt-2">
                    Automation and Programmability
                    <ul className="fw-normal list-style-roman">
                      <li>Explain how automation impacts network management</li>
                      <li>
                        Compare traditional networks with controller-based
                        networking
                      </li>
                      <li>
                        Describe controller-based and software defined
                        architectures (overlay, underlay, and fabric)
                      </li>
                      <li>
                        Compare traditional campus device management with Cisco
                        DNA Center enabled device management
                      </li>
                      <li>
                        Describe characteristics of REST-based APIs (CRUD, HTTP
                        verbs, and data encoding)
                      </li>
                      <li>
                        Recognize the capabilities of configuration management
                        mechanisms Puppet, Chef, and Ansible
                      </li>
                      <li>Interpret JSON encoded data</li>
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

export default CiscoCCNANetworking;

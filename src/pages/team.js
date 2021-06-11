import React from "react";
import Button from "@material-ui/core/Button";

const Team = () => {
  return (
    <>
      <div className="container-fluid bg-img mt pt5 pb-5">
        <div className="container  pt5 pb-5 d-flex align-items-center text-white">
          <h1 className="mt-5 mb-5 pt-5 pb-5 ser-head">
            MEET OUR <span>TEAM</span>
          </h1>
        </div>
      </div>
      <div className="container team pt-5 pb-5">
        <h1 className="text-center cards-head">Team</h1>
        <div className="row me-0">
          <div className="col-md-6 col-lg-4 p-3">
            <div className="card pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/7gfCGj5/ABDUL-BASSIT-SURAHIO.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center h4">
                    ABDUL BASSIT SURAHIO
                  </h3>
                  <h6 className="card-title text-center">
                    Google Cloud Engineer
                  </h6>
                </div>
                <p className="card-text text-center">
                  Abdul Bassit Surahio is a Corporate Trainer having years of
                  experience. He is working as an Information Security ...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#first"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="first"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      ABDUL BASSIT SURAHIO
                    </h5>
                  </div>
                  <div className="modal-body">
                    <p>
                      Abdul Bassit Surahio is a Corporate Trainer having years
                      of experience. He is working as an Information Security
                      Officer at OCLITS. Also, an instructor of Cloud Computing
                      under NAVTTC, Prime Minister Hunarmand Pakistan. He is a
                      Network and Cloud Specialist working on the latest
                      technological trends. Aside from that, his Master's
                      Research was based on 5G Technology.{" "}
                    </p>
                    <p>
                      Currently working as a Cloud Developer at National Center
                      for Big Data and Cloud Computing where he is working on
                      Project entitled “Hetro-Cloud: Developing their own low
                      cost and scalable cloud with heterogeneous computing
                      resources”.
                    </p>
                    <ul>
                      <li>
                        Using OpenStack Platform to build a low-cost private
                        cloud using heterogeneous computing resources such as
                        CPUs, GPUs, and FPGAs.
                      </li>
                      <li>
                        Research on High Availability platforms to expand the
                        resources on multiple nodes.
                      </li>
                    </ul>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 p-3">
            <div className="card pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/BzzmCfP/ABU-BAKAR-RIAZ.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center h4">
                    ABU BAKAR RIAZ
                  </h3>
                  <h6 className="card-title text-center">
                    SQL Server Specialist
                  </h6>
                </div>
                <p className="card-text text-center">
                  Abubakar Riaz is a Professional Microsoft Database Trainer
                  have approx. 10 years of working experience ...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#second"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="second"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      ABU BAKAR RIAZ
                    </h5>
                  </div>
                  <div className="modal-body">
                    <p>
                      Abubakar Riaz is a Professional Microsoft Database Trainer
                      have approx. 10 years of working experience in telecom
                      sector; currently work as an Expert Solution Developer at
                      JAZZ (previously known as Mobilink).
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 p-3">
            <div className="card pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/djYjLdH/AFFAN-SAIED-BAIG.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center h4">
                    AFFAN SAIED BAIG
                  </h3>
                  <h6 className="card-title text-center">AWS Practitioner</h6>
                </div>
                <p className="card-text text-center">
                  Affan Saied Baig is Microsoft Certified .Net developer and
                  Certified AWS/Azure Cloud, having years of software ...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#third"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="third"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      AFFAN SAIED BAIG
                    </h5>
                  </div>
                  <div className="modal-body">
                    <p>
                      Affan Saied Baig is Microsoft Certified .Net developer and
                      Certified AWS/Azure Cloud, having years of software
                      industry experience including best times with
                      multinational/Blue-chip companies. He have his life
                      experiences since x86 machine model 286 and then he have
                      worked in every technology from assembler to Microsoft
                      latest frameworks and technologies and Open source Mint as
                      well.
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 p-3">
            <div className="card pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/tZBBkh9/AHMED-YASIR-KHAN.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center h4">
                    AHMED YASIR KHAN
                  </h3>
                  <h6 className="card-title text-center">
                    SAP Business One &amp; Quickbooks
                  </h6>
                </div>
                <p className="card-text text-center">
                  Ahmed Yasir Khan is a qualified MBA (MIS) and possesses 23
                  years of diversified industry exposure to educate people in
                  the technological as well as field of finance &amp; IT ...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#four"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="four"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      AHMED YASIR KHAN
                    </h5>
                  </div>
                  <div className="modal-body">
                    <p>
                      Ahmed Yasir Khan is a qualified MBA (MIS) and possesses 23
                      years of diversified industry exposure to educate people
                      in the technological as well as field of finance &amp; IT.
                      He has the capacity to deliver Technical training and
                      workshops in extremely knowledgeable manors with their
                      field of expertise and possess solid technical aptitude.
                      Additionally, he is an excellent communicator, able to
                      explain complex subjects in a clear and interesting way.
                      As an experienced trainer he has the area of training and
                      workshops as advanced Excel 2013/ 2016 /2019, Financial
                      Modeling, Oracle 10g &amp; 11g (DBA Track), Office 2013 /
                      2016 /2019, MS-Project 2013 / 2016 /2019, Share Point 365,
                      SQL SERVER 2019, CBAP, PMP, Power BI, Advanced Data
                      Analysis &amp; Dashboard Management, Big Data Analytics
                      Analyzing and Visualizing Data with Power BI Excel 2013 /
                      2016 /2019, Power BI Advanced Business Intelligence Tools
                      Using Excel 2016, Excel Master Class 2016 /2019, ERP
                      Implementation Essential, ITIL V3 &amp; SAP R3 ( FI / CO,
                      MM, SD), SAP Business One 9.2 and few more.
                    </p>
                    <p>
                      Yasir has been associated with AYK Technologies, Training
                      &amp; Consultancy in the capacity of Founder &amp; CEO
                      where he provides expertise for training and consultancy
                      various IT ERP and Implementation Project that streamlines
                      automation Business Intelligence Tools Big Data Analytics
                      and visualizing data analysis &amp; Dashboard.
                    </p>
                    <p>
                      Yasir has been associated with AYK Technologies, Training
                      &amp; Consultancy in the capacity of Founder &amp; CEO
                      where he provides expertise for training and consultancy
                      various IT ERP and Implementation Project that streamlines
                      automation Business Intelligence Tools Big Data Analytics
                      and visualizing data analysis &amp; Dashboard.
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 p-3">
            <div className="card pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/rQ0Vh1k/ARIF-IMRAN.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center h4">
                    ARIF IMRAN
                  </h3>
                  <h6 className="card-title text-center">
                    Xamarin Apps Development
                  </h6>
                </div>
                <p className="card-text text-center">
                  Arif Imran is a Certified Xamarin Mobile App Developer having
                  10+ years of experience making desktop ...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#five"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="five"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      ARIF IMRAN
                    </h5>
                  </div>
                  <div className="modal-body">
                    <p>
                      Arif Imran is a Certified Xamarin Mobile App Developer
                      having 10+ years of experience making desktop and mobile
                      apps using .Net Technologies.
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 p-3">
            <div className="card pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/vwNwRH7/ASFAND-YAR-JUNEJO.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center h4">
                    ASFAND YAR JUNEJO
                  </h3>
                  <h6 className="card-title text-center">SEO</h6>
                </div>
                <p className="card-text text-center">
                  Asfand Yar is an efficient and pro-active SEO and Digital
                  Marketing, expert. He possesses a profound understanding ...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#six"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="six"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      ASFAND YAR JUNEJO
                    </h5>
                  </div>
                  <div className="modal-body">
                    <p>
                      Asfand Yar is an efficient and pro-active SEO and Digital
                      Marketing, expert. He possesses a profound understanding
                      of research and extensive knowledge of SEO's best
                      practices on the internet. He has over eight years of
                      experience in SEO and digital marketing. He has provided
                      his services as an SEO consultant to Weskia (Trading Co.
                      Ltd.) for two years. Currently, he provides his expertise
                      as a freelancer on Upwork, Fiver and Guru.com as an SEO
                      and digital marketing specialist. Being enthusiastic,
                      result-oriented, and competent, he is adept at embracing
                      new challenges in ground improvement marketing strategies.
                      With his vast experience, he has helped many blogs,
                      websites, and online businesses grow faster with
                      guaranteed success. He has developed fine-tuned expertise
                      in SEO and digital marketing.
                    </p>
                    <p>
                      Asfand Yar is a certified instructor and has earned
                      various certifications in the digital marketing and SEO
                      field. His credentials include Microsoft Bing, Google,
                      SemRush, and Inbound Marketing from Hubspot academy. With
                      these professional achievements, he has been working in
                      this field of digital instruction since 2013. Furthermore,
                      he is also an accomplished SEO and digital marketing
                      expert, mentor and guest speaker. He has spoken as a guest
                      speaker at several conferences, including Pakistan
                      Innovation Roadshow 2021 Mehran University, Jamshoro.
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 p-3">
            <div className="card pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/R9zHnxc/AYFAR-KHAN.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center h4">
                    AYFAR KHAN
                  </h3>
                  <h6 className="card-title text-center">Graphic Design</h6>
                </div>
                <p className="card-text text-center">
                  SAyfar Khan is a Passionate Freelancer, Entrepreneur, and
                  Trainer, Mentor, Coach who worked and learn ...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#seven"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="seven"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      AYFAR KHAN
                    </h5>
                  </div>
                  <div className="modal-body">
                    <p>
                      Ayfar Khan is a Passionate Freelancer, Entrepreneur, and
                      Trainer, Mentor, Coach who worked and learn almost every
                      skill in creative industries with diverse clients from
                      national and international countries’ experience in the
                      field. She worked in almost every sector in public and
                      private Sectors included startups, medium, and
                      enterprise-level companies) Fortune 500 companies. She did
                      her bachelor’s in the subject of Fine arts and master’s in
                      film and TV production from the University of Punjab. Her
                      skills included: Graphic Design, Brand Strategist, Apparel
                      Design, Video &amp; Still photography, Interior Design,
                      Event management, and other creative industries. Her work
                      was published in Academia. Edu, Facebook events, Pakistan
                      Top Freelancers, Amazon Market, Medium, Entrepreneur &amp;
                      Tech Community in Pakistan Also worked with so many Women
                      empowering initiatives in Pakistan. Her papers are
                      referred by professors of topmost universities like Oxford
                      University, Berkeley, Cambridge University, etc. in their
                      papers of which she teach in country prestigious
                      universities. She also trained almost 600 women and men,
                      creative skills. She also part of Cultural and Creative
                      activities internationally and national level included:
                      BEHANCE PORTFOLIO REVIEW, PAYONEER PAKISTAN, UPWORK
                      COMMUNITY IN PAKISTAN, FIVERR COMMUNITY IN PAKISTAN
                      FACEBOOK DEVELOPERS, WORD PRESS MEET UP, THE MIX, ROUND
                      TABLE CONFERENCE, HERSELF, PLAN9 -STARTUP INCUBATOR,
                      CROSSOVER HIRING TOURNAMENT, OPEN SOURCE PAKISTAN MEETUP,
                      FREELANCING AND ENTREPRENEURSHIP IN GLOBALIZED WORLD,
                      UPWORK HUDDLE, FIVERR COMMUNITY PAKISTAN, DEV ART
                      COMMUNITY PAKISTAN, DRIBBLE COMMUNITY PAKISTAN, TECH HUB
                      CONNECTS HACKATHON, SUSTAINABLE DEVELOPMENT GOALS, WORLD
                      ART FESTIVAL, YOUTH FESTIVAL, THE NATIONAL FREELANCING,
                      HERSELF CONVENTION, FACEBOOK PAKISTAN, SME US AID
                      PAKISTAN, WOMEN FREELANCERS IN PAKISTAN, PAKISTAN ART
                      FORUM and international platforms like ElleTech – Women in
                      TEAMS, Women in Immersive Tech. Connect Business
                      Association, Cultural Memory Studies Initiative,, Women in
                      tech, HealthTech Women(global), Social Innovation
                      Community(SIC), Boston New Technology, Coworking France,
                      Business Lobby Talent Management Lebanon, Design sprint
                      Academy, Women Tech Network Global, Women In VR-Dallas,
                      Microsoft MR( Mixed/Virtual Reality, Women in tech
                      Belfast, Refining Women in Tech Community, Forbes 30 Under
                      30 summit, Diversity XR, Queen Margaret University
                      Creative entrepreneurs, Berklee X Creativity &amp;
                      Entrepreneurship, Marketing, and advertising Group,
                      GES2017, Amazing women entrepreneurs network, Millionaire
                      Mindset Entrepreneur Club, Women In photography( National
                      geographic) , Digital Nomad, Super Creative Mamas Global,
                      Entrepreneur Mindset Group, Women Supporting Women
                      Professionals and Entrepreneurs, ARVR Women and Allies,
                      Universe Choir, Women in wildlife Photography( National
                      geography), Women IN VR/AR, Businesswomen Network,
                      WomenIntechPK, Women Helping Women Entrepreneurs,Women
                      Investment Forum,Wealthy Female Coaches,Clubhouse
                      Community for Female entrepreneurs,Digital Entrepreneur
                      Worldwide,entrepreneurs Zimbabwe,London Business
                      Network,Connectpreneur Network. She is also a Mentor &amp;
                      Coach for creative and cultural students globally and in
                      industry and Also Part of Smart tribe, Women Tech Network,
                      Design Buddies,Designed.Org,Adplist.Org, University of
                      Hertfordshire, UK
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 p-3">
            <div className="card pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/Qf65bXv/BASIT-ELAHI.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center h4">
                    BASIT ELAHI
                  </h3>
                  <h6 className="card-title text-center">React Native</h6>
                </div>
                <p className="card-text text-center">
                  Basit Elahi has an experience of 12+ years in the IT Industry
                  &amp; is internationally recognized as Microsoft ...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#eight"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="eight"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      BASIT ELAHI
                    </h5>
                  </div>
                  <div className="modal-body">
                    <p>
                      Basit Elahi has an experience of 12+ years in the IT
                      Industry &amp; is internationally recognized as Microsoft
                      Certified Professional (MCP), SSDL Certified Professional
                      Trainer, SSDL Certified DevOps.
                    </p>
                    <p>
                      Being a Software Engineer, he has extensive hands-on
                      experience in Object Oriented Analysis &amp; Design
                      (OOAD), Database Design and Implementation using Agile,
                      .NET Framework, C#, ASP.NET, ASP.NET MVC, MySQL, SQL
                      Server, React, React Native and ExtJs. Other than that,
                      being a DevOps, he has worked on Automated builds,
                      Automated deployments, Continuous integration and
                      Continuous delivery mechanisms. Experienced and passionate
                      trainer with a demonstrated history of working in the
                      professional trainings &amp; coaching industry.
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 p-3">
            <div className="card pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/Y3QSjgx/FAIZA-KHALID.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center h4">
                    FAIZA KHALID
                  </h3>
                  <h6 className="card-title text-center">
                    Amazon FBA Business
                  </h6>
                </div>
                <p className="card-text text-center">
                  Faiza Khalid is a serial Entrepreneur and Much Passionate to
                  do something Productive for our Youth ...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#nine"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="nine"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      FAIZA KHALID
                    </h5>
                  </div>
                  <div className="modal-body">
                    <p>
                      Faiza Khalid is a serial Entrepreneur and Much Passionate
                      to do something Productive for our Youth. She is a
                      Successful Freelancer, Digital Marketer &amp; Ecommerce
                      Expert. She won the Wonder of Women Award 2021 in the
                      Field of eCommerce based on her Seven Figures Revenue data
                      on an eCommerce business.
                    </p>
                    <p>
                      She is running her two companies, one is Social Enterprise
                      (LOOP), the Second one is BIZKO INC a Growth &amp;
                      Marketing Agency Based in UK and Pakistan. She is an
                      Award-winning eCommerce Expert.
                    </p>
                    <p>
                      She is CEO/Founder of LOOP (Leadership &amp;
                      Object-Oriented Programs), LOOP is Nonprofit Organization
                      working for Youth Development in Pakistan. LOOP has
                      created the transformative services ecosystem for the
                      co-creation of digital entrepreneurship in Pakistan.
                    </p>
                    <p>
                      She is the Founder, Director &amp; CEO of BIZKO INC LTD.
                      BIZKO is a Growth Marketing agency based in London, UK,
                      and Lahore, Pakistan. BIZKO is a well-known name in the
                      services-based industry related to Amazon Marketing and
                      Launching, Branding, Ecommerce development &amp; sales
                      optimization.
                    </p>
                    <p>
                      She is the Head of Marketing in ISoft Studios (A
                      multi-National Company dealing in Digital Solutions based
                      in USA, UK &amp; Pakistan) and Leading the Growth
                      Department. She is the VC &amp; Project Manager of Growth
                      &amp; Digital Marketing at ISoft Studio.
                    </p>
                    <p>
                      She Has 10 years of Experience in Entrepreneurial
                      Development. She trained more than 5000 Young
                      Professionals, entrepreneurs, and students.
                    </p>
                    <p>
                      She is not only Experienced in her field but also has
                      professional Education in Entrepreneurship from LUMS,
                      Certification in Leadership &amp; team-building from
                      American University. Different professional Certifications
                      in Digital Marketing &amp; Growth Hacking with 10 years of
                      field experience.
                    </p>
                    <p>
                      She loves to teach and help others to change their life.
                      Her vision is to train the youth to think out of the box
                      and explore the ocean to dive with multiple opportunities.
                      She is working for digital transformation in business and
                      education. She is the founder of an ecosystem for women by
                      the name of “Empower women Global”. This platform is
                      working for women’s economic empowerment. She is the
                      Founder of an ecosystem for Pakistani Manufacturers and
                      eCommerce Sellers. Her vision is to help the economy by
                      working on the Export growth of Pakistan (Mentioned in the
                      eCommerce policy 2019. She is working for eCommerce growth
                      and development in Pakistan as per the agenda of the
                      eCommerce policies (Published in 2019) of Pakistan.
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 p-3">
            <div className="card pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/CVCp97m/FARUKH-KHAN.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center h4">
                    FARUKH KHAN
                  </h3>
                  <h6 className="card-title text-center">
                    ASP.NET Azure Fundamentals
                  </h6>
                </div>
                <p className="card-text text-center">
                  Farrukh Khan is an official Microsoft Certified Trainer.
                  Internationally Certified by Microsoft in MCT ...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#ten"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="ten"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      FARUKH KHAN
                    </h5>
                  </div>
                  <div className="modal-body">
                    <p>
                      Farrukh Khan is an official Microsoft Certified Trainer.
                      Internationally Certified by Microsoft in MCT | MCSD |
                      .Net | Javascript | Angular | Azure Cloud | Azure DevOps
                    </p>
                    <h5 className="fw-bold">Working Experiences:</h5>
                    <p>
                      Currently - Senior Software Engineer at Contour Software
                    </p>
                    <p>
                      Previous - Senior Software Engineer at Afiniti ( Trg. Tech
                      )
                    </p>
                    <p>Previous - Faculty Member at Orasoft Institute</p>
                    <p>Previous - Software Engineer at EuroSteelKr</p>
                    <p>Previous - Senior Software Engineer TPS Pvt Ltd</p>
                    <h5 className="fw-bold">Expertise Tools in:</h5>
                    <ul>
                      <li>
                        Programming : C ,C# (.Net 3.5 to 4.5),Java , Python
                      </li>
                      <li>
                        Web Development: .net Core, ASP.Net Web Forms, Asp.Net
                        MVC, Web Services, Web API, WCF Services, AngularJS ,
                        Entity Framework , PHP, JavaScript, JQuery, Ajax, HTML,
                        and CSS, Kendo UI.
                      </li>
                      <li>
                        Database: SQL Server, ORACLE 11g, MySQL and
                        SqlDeveloper.
                      </li>
                      <li>
                        Tools: Microsoft Visual Studio, SQL Server, SQL
                        Developer, NetBeans and Eclipse, Team Foundation Server
                      </li>
                      <li>
                        Others: .Net Windows Services ,.Net Web Services ,.Net
                        WCF Services , ,Selenium with .Net , Dev Express
                      </li>
                    </ul>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 p-3">
            <div className="card pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/6y3yg2h/H-M-JAHANGEER.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center h4">
                    H.M. JAHANGEER
                  </h3>
                  <h6 className="card-title text-center">Autocad Trainer</h6>
                </div>
                <p className="card-text text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#eleven"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="eleven"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      Modal title
                    </h5>
                  </div>
                  <div className="modal-body">...</div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 p-3">
            <div className="card pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/z42kttP/IMRAN-ISRAR.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center h4">
                    IMRAN ISRAR
                  </h3>
                  <h6 className="card-title text-center">CCNA</h6>
                </div>
                <p className="card-text text-center">
                  Imran Israr is a network engineering professional having 10+
                  years of experience in multinational companies in IP CORE ...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#twelve"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="twelve"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      IMRAN ISRAR
                    </h5>
                  </div>
                  <div className="modal-body">
                    <p>
                      Imran Israr is a network engineering professional having
                      10+ years of experience in multinational companies in IP
                      CORE Networks, currently working as Team Lead. Datacom
                    </p>

                    <h5 className="fw-bold">Experience Portfolio:</h5>
                    <p>Present - Team Lead. Datacom</p>
                    <p>Previous - Sr. Datacom Engineer</p>
                    <p>Previous - Resident Engineer at IBM</p>
                    <p>Previous - Resident Engineer at IBM</p>
                    <p>
                      Previous - Network and Hardware Engineer at Kallar
                      Enterprises Internationally Certified in:
                    </p>

                    <p>HCIE R&amp;S (11971)</p>
                    <p>HCNA (R&amp;S)</p>
                    <p>HCNP (R&amp;S)</p>
                    <p>HCNA (Datacom)</p>
                    <p>HCNP (Datacom)</p>
                    <p>HCNP (Security)</p>
                    <p>CCNA (R&amp;S)</p>
                    <p>JNCIA</p>
                    <p>JNCIS-ENT</p>
                    <p>JNCIP-ENT</p>
                    <p>JNCIS-SEC</p>
                    <p>JNCIP-SEC</p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 p-3">
            <div className="card pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/jMFQXsx/IRFAD-AHMED-IMTIAZ.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center h4">
                    IRFAN AHMED IMTIAZ
                  </h3>
                  <h6 className="card-title text-center">Enterpreneurship</h6>
                </div>
                <p className="card-text text-center">
                  Irfad Imtiaz is a Microsoft Certified Security Researcher with
                  his name listed in the Top Security Researchers from ...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#thirteen"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="thirteen"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      IRFAN AHMED IMTIAZ
                    </h5>
                  </div>
                  <div className="modal-body">
                    <p>
                      Irfad Imtiaz is a Microsoft Certified Security Researcher
                      with his name listed in the Top Security Researchers from
                      Pakistan in Microsoft's hall of fame. He have lead and
                      established businesses in Pakistan and abroad. Currently
                      managing a marketing firm with PR contracts of 10 esteemed
                      Hotels and Restaurants and 7 Gyms and 3 saloons. He also
                      work in Real Estate Marketing and specialize in selling
                      high value products to targeted customers. He is an
                      honorary member of Stanford Entrepreneurship Society and
                      speak 5 languages fluently. His portfolio in
                      entrepreneurship is vast and over the years have learned
                      how to recover losses, how to target customers and sell,
                      how to use online marketing tools such as Facebook,
                      Instagram, Google and Twitter ads to sell, how to manage
                      social media to engage maximum users and most importantly
                      how to communicate in a professional environment.
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 p-3">
            <div className="card pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/r44JBBQ/JAZIB-ALEEM.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center h4">
                    JAZIB ALEEM
                  </h3>
                  <h6 className="card-title text-center">
                    Microsoft Front End Development
                  </h6>
                </div>
                <p className="card-text text-center">
                  Jazib Aleem is a Corporate Trainer, CEO and Head of Full Stack
                  Development team, Experienced Formar ...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#fourteen"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="fourteen"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      JAZIB ALEEM
                    </h5>
                  </div>
                  <div className="modal-body">
                    <p>
                      Jazib Aleem is a Corporate Trainer, CEO and Head of Full
                      Stack Development team, Experienced Formar Academic Head
                      and Project Manager with a demonstrated history of working
                      in the computer software industry. Skilled in SQL
                      Database, Android and iOS, Web development, Java, C#, PHP,
                      C++,Data Migration, MongoDB, NodeJS, ReactJS, ReactNative,
                      and Laravel Strong education professional with focused in
                      Computer Software Engineering.
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 p-3">
            <div className="card pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/sFF7tpt/KAMRAN-AHMAD.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-uppercase text-center h4">
                    Kamran Ahmad
                  </h3>
                  <h6 className="card-title text-center">Autocad</h6>
                </div>
                <p className="card-text text-center">
                  Kamran Ahmad is doing Masters In Architecture from university
                  of the Punjab Lahore. He graduated ...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#fifteen"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="fifteen"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      Kamran Ahmad
                    </h5>
                  </div>
                  <div className="modal-body">
                    <p>
                      Kamran Ahmad is doing Masters In Architecture from
                      university of the Punjab Lahore. He graduated from
                      University of Management and Technology Lahore School of
                      Architecture, and following which he acquired his
                      architect’s license from the Pakistan Council of
                      Architects and Town Planners. He had also done D.A.E
                      (ARCHITECTURE) from Ahmad Hassan polytechnic institute
                      Lahore. He also have years of experience in Abbas college
                      of Technology as Instructor Architecture and instructor
                      AutoCAD in PSDF (Punjab Skills Development Fund).
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 p-3">
            <div className="card pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/XpSxwYz/M-ZEESHAN-MOTIWALA.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center h4">
                    M. ZEESHAN MOTIWALA
                  </h3>
                  <h6 className="card-title text-center">MS Office</h6>
                </div>
                <p className="card-text text-center">
                  Mr. Muhammad Zeeshan Motiwala is a well eminent HR
                  Professional and carries vast ...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#sixteen"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="sixteen"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      M. ZEESHAN MOTIWALA
                    </h5>
                  </div>
                  <div className="modal-body">
                    <p>
                      Mr. Muhammad Zeeshan Motiwala is a well eminent HR
                      Professional and carries vast management and leadership
                      experience spanning over 10 years. Currently he is working
                      as Manager HRBP Technology at PTCL. Muhammad Zeeshan has a
                      versatile corporate experience in different sectors like
                      Retail, Construction, Entertainment, Food Services, Health
                      care &amp; Telecommunication.
                    </p>
                    <p>
                      Zeeshan Motiwala has served prominent organizations in
                      leadership capacities in the function of Human Resources,
                      Organization Development, and Project Management &amp; ERP
                      Implementation. He has also worked as Leading Recruiter
                      &amp; Compensation Specialist at Bahria Town Karachi
                      (Bahria International Hospital, Cinegold Cinema, &amp;
                      Bahria Adventure Land). He has also worked with companies
                      like Zellbury, Yunus Textile Mills Limited &amp; Aman
                      Foundation. As far as education is concerned, Zeeshan
                      holds MBA degree in Human Resources. He has been honored
                      with International Certification of Human Resource
                      Business Professional from HRCI (USA). He has also
                      completed certificate course on SAP (HCM) from IBA and SAP
                      E Academy from Abacus Consulting Services. Other
                      certification courses includes Big Data, MS Excel Advance
                      Skills, Project Management, SPSS, Performance Management,
                      Dashboard Reporting, and People Analytics from Prestigious
                      Digital Certification Bodies like LinkedIn, Harvard Manage
                      Mentor and Skillsoft.
                    </p>
                    <p>
                      Zeeshan Motiwala has conducted numerous Trainings/
                      Workshop for students/ graduates of Universities/
                      Institutes on topics of Personal Branding, Mock
                      Interviews, Resume Makeover, Networking for Jobs,
                      Effectively Using LinkedIn Application, MS Office etc. He
                      has also trained 200+ corporate employees on MS Excel
                      Advance Skills.
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 p-3">
            <div className="card pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/TPyy5nL/M-ABDUL-QADEER.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center h4">
                    M. ABDUL QADEER
                  </h3>
                  <h6 className="card-title text-center">
                    Digital Marketing &amp;SMM
                  </h6>
                </div>
                <p className="card-text text-center">
                  Abdul Qadeer has years of work experience and exposure in ATL
                  and Digital MARKETING (Media Planning, Media ...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#seventeen"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="seventeen"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      M. ABDUL QADEER
                    </h5>
                  </div>
                  <div className="modal-body">
                    <p>
                      Abdul Qadeer has years of work experience and exposure in
                      ATL and Digital MARKETING (Media Planning, Media Buying,
                      and analysis, Digital Media, Marketing, Brand, Research
                      &amp; Strategy)
                    </p>
                    <h5 className="fw-bold">Experience Portfolio:</h5>
                    <p>
                      Present - Country Business Manager Pakistan at TRANSSION
                    </p>
                    <p>Previous - Brand Manager at ZRK Group</p>
                    <p>
                      Previous - Ass. Manager Brand at Orient Group Of Companies
                    </p>
                    <p>
                      Previous - Ass. Manager (Brand Management) at
                      PTCL.Official
                    </p>

                    <h5 className="fw-bold">Specialties:</h5>
                    <p>Corporate Branding and Communications</p>
                    <p>Product Positioning and Branding Methodologies</p>
                    <p>Marketing Strategies</p>
                    <p>Marketing Communications</p>
                    <p>Digital Marketing</p>
                    <p>
                      Digital Marketing Strategy SEO, PPC, SMM, LEAD GENERATION
                    </p>
                    <p>Advertising &amp; Research</p>
                    <p>Marketing Budget Management and Cost Controls</p>
                    <p>Public Relations and Agency Management</p>
                    <p>High Proﬁle Event Planning and Management</p>
                    <h5 className="fw-bold">
                      His International Certifications Includes:
                    </h5>
                    <ul>
                      <li>Fundamentals of Digital Marketing</li>
                      <li>
                        Developing Campaign with Marketing Insights from
                        Facebook IQ
                      </li>
                      <li>
                        Simplifying Lead Generation in a Cross-Device World by
                        Facebook
                      </li>
                    </ul>
                    <h5 className="fw-bold">Official</h5>
                    <ul>
                      <li>
                        Facebook - Moving Hearts and Minds with Traffic
                        Objective
                      </li>
                      <li>
                        Service Uplifting and Business Process Reengineering at
                        PTCL.Official
                      </li>
                      <li>
                        Business Intelligence and Commercial Planning at
                        PTCL.Official
                      </li>
                      <li>Google Tag Manager Fundamentals at Google</li>
                      <li>Google Ads - Measurement Certification at Google</li>
                      <li>Google Ads - Apps Certification at Google</li>
                      <li>Google Ads Display Certification at Google Ads</li>
                      <li>Google Shopping ads Certification at Google Ads</li>
                      <li>Google Ad Video Certification at Google</li>
                      <li>Google Ads Search Certification at Google</li>
                      <li>Google Analytics at Google Analytics for Business</li>
                      <li>Google Digital Tomorrow at Google</li>
                    </ul>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 p-3">
            <div className="card pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/9rC7hNJ/M-AHSAN-PERVAIZ.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center h4">
                    M. AHSAN PERVAIZ
                  </h3>
                  <h6 className="card-title text-center">UI UX Designer</h6>
                </div>
                <p className="card-text text-center">
                  Ahsan Parvez has been teaching UI UX Design from years to more
                  than 65k students from 175 countries ...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#eighteen"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="eighteen"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      M. AHSAN PERVAIZ
                    </h5>
                  </div>
                  <div className="modal-body">
                    <p>
                      Ahsan Parvez has been teaching UI UX Design from years to
                      more than 65k students from 175 countries worldwide. His
                      courses have been featured on Udemy, Skillshare, Mashable,
                      HuffPost, CNN store, StackSkills and University of Phoenix
                      (USA).
                    </p>
                    <p>
                      He started his Freelance Design Career 12 years ago and
                      learned everything the hard way myself. He went from
                      scratch to end up working for FORTUNE 500 companies like
                      INTEL, PANASONIC and Coca Cola.
                    </p>
                    <p>
                      Working with Art Directors from Coca Cola (USA) and
                      Project Managers from UK, He learned a lot in short period
                      of time. Improved User Experience of UK GP Tools Mobile
                      App, few Games and e-commerce websites and created new
                      Design patterns for showing passwords safely in password
                      fields
                    </p>
                    <p>
                      Worked from App Icon Design to App UI Design, from
                      wire-frames, prototypes and Mockups Design. I have a
                      hunger of perfecting User Interface from all aspects
                    </p>
                    <p>
                      He is multi-talented person who have won One Gold Medal,
                      won a nation-wide Poster Design competition from PANASONIC
                      and won many Landing Page design contests on 99designs.
                    </p>
                    <p>
                      Worked with Clients all over the world mostly from USA,
                      Australia, UK, and United Arab Emirates while learning a
                      lot on how to deal with clients while freelancing and how
                      to present your work to them Although He started as a UI
                      Designer 12 years ago but he is playing with Photoshop
                      since year 2002
                    </p>
                    <p>
                      His ultimate aim is to make more Awesome UI Designers and
                      ease the pain of learning from new comers in this field of
                      UI UX Design
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 p-3">
            <div className="card pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/P6pPFFY/M-DAWER-SAEED.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center h4">
                    M. DAWER SAEED
                  </h3>
                  <h6 className="card-title text-center">Internet of Things</h6>
                </div>
                <p className="card-text text-center">
                  Muhammad Dawer has a diversified experience of 12+ Years in
                  the field of IoT, currently Heading as IoT ...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#ninteen"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="ninteen"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      M. DAWER SAEED
                    </h5>
                  </div>
                  <div className="modal-body">
                    <p>
                      Muhammad Dawer has a diversified experience of 12+ Years
                      in the field of IoT, currently Heading as IoT Embedded
                      Engineer / PSE IoT Lead at Gourmet Pakistan.
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 p-3">
            <div className="card bg-light pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/zst45Nt/MALIK-MAAZ-MEHBOOB.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center">
                    Malik Maaz
                  </h3>
                  <h6 className="card-title text-center">CHFI Trainer</h6>
                </div>
                <p className="card-text text-center">
                  Malik Maaz has 17+ years of experience in Information Security
                  Domain, his Major Certifications
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#firsttt"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="firsttt"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      Malik Maaz has 17+ years of experience in Information
                      Security
                    </h5>
                  </div>
                  <div className="modal-body">
                    <li>CISM – Certified Information Security Manager</li>
                    <li>
                      CCISO – Certified Chief Information Security Officer
                      (Among Pakistan’s First 10 CCISOs)
                    </li>
                    <li>CEIv2 – Certified EC-Council Instructor</li>
                    <li>CSA – Certified SOC Analyst (EC-Council)</li>
                    <li>RHCSA in OpenStack – Cloud Computing Certification</li>
                    <li>
                      RHCVA - Red Hat Certified Virtualization Administrator
                      (First Certified Trainer In Pakistan)
                    </li>
                    <li>
                      Red Hat Certificate of Expertise in Server Hardening
                      (Training from Red Hat Inc. MEA)
                    </li>
                    <li>
                      RHCSS - Red Hat Certified Security Specialist (Training
                      from Red Hat Inc. Singapore)
                    </li>
                    <li>
                      Advance Penetration Testing of Live Networks (Training
                      from EC-Council Malaysia)
                    </li>
                    <li>
                      CISSP – Certified Information System Security Professional
                      (Training)
                    </li>
                    <li>LPT – License Penetration Tester</li>
                    <li>ECSA – EC-Council Certified Security Analyst</li>
                    <li>C|EH – Certified Ethical Hacker</li>
                    <li>CHFI – Certified Hacking Forensics Investigator</li>
                    <li>CEI – Certified EC-Council Instructor</li>
                    <li>
                      CISA – Certified Information Security Auditor (Training)
                    </li>
                    <li>
                      VCP – VMWare Certified Professional for vSphere 4
                      (Training)
                    </li>
                    <li>RHCEv7 – Red Hat Certified Engineer on RHEL-7</li>
                    <li>RHCSAv7 – Red Hat Certified Technician on RHEL-5</li>
                    <li>RHCEv5 – Red Hat Certified Engineer on RHEL-7</li>
                    <li>RHCT – Red Hat Certified Technician on RHEL-5</li>
                    <p>
                      <b>Struggling for Excellence</b>
                    </p>
                    <p>
                      <b>Team DigiPAKISTAN</b>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* first line 2 */}
          <div className="col-md-6 col-lg-4 p-3">
            <div className="card bg-light pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/tDVbSxx/SHOAIB-ALI.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center">
                    SHOAIB ALI
                  </h3>
                  <h6 className="card-title text-center">
                    3D Maya Max Animation Trainer
                  </h6>
                </div>
                <p className="card-text text-center">
                  Shoaib Ali have 20+ years of experience in the animations
                  industry, currently serving as Manager ...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#m2"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="m2"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      Shoaib Ali have 20+ years of experience in the animations
                      industry,
                    </h5>
                  </div>
                  <div className="modal-body">
                    <li>
                      Shoaib Ali have 20+ years of experience in the animations
                      industry, currently serving as Manager / Technical CG
                      Artist (Generalist) At NETSOL Technologies inc.{" "}
                    </li>
                    <p>
                      <b>Struggling for Excellence</b>
                    </p>
                    <p>
                      <b>Team DigiPAKISTAN</b>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2 line end */}

          {/* first line 3 */}
          <div className="col-md-6 col-lg-4 p-3">
            <div className="card bg-light pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/61PvJ7g/MUHAMMAD-ANWAR.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center">
                    Muhammad Anwar
                  </h3>
                  <h6 className="card-title text-center">CEH (V10) Trainer</h6>
                </div>
                <p className="card-text text-center">
                  Muhammad Anwar is an official EC Council Instructor having an
                  experience of 15+ years in the field...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#m3"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="m3"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      Shoaib Ali have 20+ years of experience in the animations
                      industry,
                    </h5>
                  </div>
                  <div className="modal-body">
                    <li>
                      Muhammad Anwar is an official EC Council Instructor having
                      an experience of 15+ years in the field of Information
                      Security, Telecom, Computing, Networks, Operations,
                      Technical support, troubleshooting and Maintenance.{" "}
                    </li>
                    <li>
                      He is an information security consultant and penetration
                      tester by Profession . He is also a EC-Council Certified
                      Instructor for CEH (Certified Ethical Hacker) and CHFI
                      (Computer Hacking Forensic Investigator) . He is also an
                      ISMS Trainer ISO27001:2013 and Lead Auditor ISMS
                      ISO27001:2013 .
                    </li>
                    <p>
                      <b>Struggling for Excellence</b>
                    </p>
                    <p>
                      <b>Team DigiPAKISTAN</b>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 3 line end */}
          <div className="col-md-6 col-lg-4 p-3">
            <div className="card bg-light pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/0s5VH2W/MUHAMMAD-AHMAD.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center">
                    Muhammad Ahmad
                  </h3>
                  <h6 className="card-title text-center">CISSP Trainer</h6>
                </div>
                <p className="card-text text-center">
                  Muhammad Ahmad is a Technically proficient, Business enabler,
                  Management professional ...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#ms1"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="ms1"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      Muhammad Ahmad
                    </h5>
                  </div>
                  <div className="modal-body">
                    <li>
                      Muhammad Ahmad is a Technically proficient, Business
                      enabler, Management professional with ~15 years of
                      experience in Commercial &amp; Microfinance
                      banks/Financial Institutes, MNCs in FMCG, and ISP. He
                      holds MS in Computer Science from LUMS, MBA from IBA-PU,
                      and B.Sc.(Hons) in Computer Science from PUCIT. He is
                      among the few Pakistanis, holding numerous leading
                      international professional industry certifications
                      including CISSP, CRISC, CISA, CISM, CGEIT, ISMS LA
                      ISO27001, ISO27005 SLRM, and ITIL. He is a regular speaker
                      at international &amp; local forums/conferences/Webinars
                      and a trainer for CISSP, CISA, CISM, CGEIT, CRISC, ITIL,
                      multiple IT/IS related topics. He has extensive experience
                      in Information/Cyber Security; IT Governance &amp;
                      Management, Risk and Compliance Management (GRC); IS Audit
                      &amp; Controls; IT Services Management; Business Solutions
                      &amp; IT Operations; Strategic Outsourcing &amp; Data
                      Center; Business Continuity &amp; DR Management; and
                      Project Management.
                    </li>
                    <p>
                      <b>Struggling for Excellence</b>
                    </p>
                    <p>
                      <b>Team DigiPAKISTAN</b>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* first line 2 */}
          <div className="col-md-6 col-lg-4 p-3">
            <div className="card bg-light pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/SNsXX9Q/SAAD-MOTEN.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center">
                    SAAD MOTEN
                  </h3>
                  <h6 className="card-title text-center">
                    CISA &amp; CISM Trainer
                  </h6>
                </div>
                <p className="card-text text-center">
                  Saad Moten is an Innovative and solutions-focused Information
                  Security Professional with 20+ years ...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#mS2"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="mS2"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      SAAD MOTEN
                    </h5>
                  </div>
                  <div className="modal-body">
                    <li>
                      Saad Moten is an Innovative and solutions-focused
                      Information Security Professional with 20+ years of
                      industry experience, having diversified experience in
                      IT/Information Security, Governance, Risk Management,
                      Compliance, IS Audit, and Business Continuity, Focused on
                      leading the development of technology projects in
                      alignment with business, operational and compliance
                      requirements. Possess multiple Information Security &amp;
                      IT-related certifications including; CISSP, CISM, CISA,
                      ISMS-27k, CDCP, CDCS, PMP, ITIL.
                    </li>
                    <li>
                      Moreover, He was appointed as a master trainer @ Audit
                      General of Pakistan for CISA &amp; CISM.{" "}
                    </li>
                    <li>
                      Saad Moten provides advisory services to senior
                      management, as well as hands-on management of IT
                      organizations, projects, and operations. He also helps IT
                      assurance professionals conduct required internal and
                      regulatory compliance assessments. As an InfoSec
                      Professional, he covers the governance, management, and
                      use of information technology, delivering core knowledge
                      and practices through various training, seminars and
                      conferences.
                    </li>
                    <p>
                      <b>Struggling for Excellence</b>
                    </p>
                    <p>
                      <b>Team DigiPAKISTAN</b>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2 line end */}

          {/* first line 3 */}
          <div className="col-md-6 col-lg-4 p-3">
            <div className="card bg-light pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/JBRprYC/WAQAS-QAMAR.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center">
                    WAQAS QAMAR
                  </h3>
                  <h6 className="card-title text-center">
                    CompTia IT Fundamentals Trainer
                  </h6>
                </div>
                <p className="card-text text-center">
                  Waqas Qamar is a Network Engineer with over 8+ years of
                  experience in routing, switching ...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#ms3"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="ms3"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      Waqas Qamar
                    </h5>
                  </div>
                  <div className="modal-body">
                    <li>
                      Waqas Qamar is a Network Engineer with over 8+ years of
                      experience in routing, switching, security and wireless
                      technologies. He is CCNA, CCNP, ITIL and JNCIA Certified
                      Instructor. He has done his masters in network systems
                      from Swinburne University of Technology Melbourne
                      Australia.{" "}
                    </li>
                    <p>
                      <b>Struggling for Excellence</b>
                    </p>
                    <p>
                      <b>Team DigiPAKISTAN</b>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Container End */}

          {/* Third Container start*/}

          <div className="col-md-6 col-lg-4 p-3">
            <div className="card bg-light pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/3sj34k7/TALHA-ALI-QASMI.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center">
                    TALHA ALI QASMI
                  </h3>
                  <h6 className="card-title text-center">PMP Trainer</h6>
                </div>
                <p className="card-text text-center">
                  Talha brings a unique blend of industry and training
                  experience of more than 10+ years ...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#mt1"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="mt1"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      Talha Ali
                    </h5>
                  </div>
                  <div className="modal-body">
                    <li>
                      Talha brings a unique blend of industry and training
                      experience of more than 10+ years. He has worked with
                      giant utilities and multi-national companies in Pakistan
                      and in abroad. His prime specialty is in the field of
                      Project Management, Project planning &amp; Scheduling and
                      site management. He has a vast training experience of
                      different professional courses like Project Management,
                      PMP Exam Preparation Course, Primavera P6 professional,
                      Autocad, Microsoft Excel &amp; Microsoft Office, MS
                      Project, etc. Currently he is working in Hutchison Ports
                      as Electrical Project engineer – Lead. He is also serving
                      as a visiting faculty at Pakistan Institute of Management.
                    </li>
                    <p>
                      <b>Struggling for Excellence</b>
                    </p>
                    <p>
                      <b>Team DigiPAKISTAN</b>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* first line 2 */}
          <div className="col-md-6 col-lg-4 p-3">
            <div className="card bg-light pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/JFbxTjp/MUHAMMAD-ALI.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center">
                    MUHAMMAD ALI
                  </h3>
                  <h6 className="card-title text-center">
                    Artificial Intelligence Trainer
                  </h6>
                </div>
                <p className="card-text text-center">
                  Muhammad Ali is serving as a full time Machine Learning
                  Engineer at Silicon Valley Company, Omdena ...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#mt2"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="mt2"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      Muhammad Ali
                    </h5>
                  </div>
                  <div className="modal-body">
                    <li>
                      Muhammad Ali is serving as a full time Machine Learning
                      Engineer at Silicon Valley Company, Omdena. He is a Lead
                      Trainer at President Arif Alvi Initaitive as an AI Faculty
                      and Coursera Guided Project Instructor. In terms of his
                      hobbies, He like to spend his free time on his opensource
                      contributions (currently, hosting 100+ GitHub
                      repositories). In opensource, He is also serving as a
                      Qiskit Translation Lead (Urdu) at IBM and Principal
                      Developer of openvino-colab python package, that allows
                      Edge AI practitioners to work on Intel's OpenVINO Edge AI
                      toolkit on Google Colab.
                    </li>
                    <p>
                      <b>Struggling for Excellence</b>
                    </p>
                    <p>
                      <b>Team DigiPAKISTAN</b>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2 line end */}

          {/* first line 3 */}
          <div className="col-md-6 col-lg-4 p-3">
            <div className="card bg-light pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/RzVcPjB/USMAN-KHAN.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center">
                    USMAN KHAN
                  </h3>
                  <h6 className="card-title text-center">
                    AWS Developer &amp; AWS Sysops Trainer
                  </h6>
                </div>
                <p className="card-text text-center">
                  Usman Khan is a professional Multicloud Corporate trainer
                  &amp; Consultant. Working on AWS ...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#mt3"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="mt3"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      Usman Khan
                    </h5>
                  </div>
                  <div className="modal-body">
                    <li>
                      Usman Khan is a professional Multicloud Corporate trainer
                      &amp; Consultant. Working on AWS | Google Cloud | Azure
                      Cloud &amp; Alibaba cloud with years of experience. As a
                      Consultant 17+ Years of Experience in designing,
                      deployment &amp; implementation of Cloud &amp; Noncloud
                      technologies like AWS, GCP, Alibaba, Azure, VMware, Cisco,
                      CWNP, SonicWALL, Dell infrastructure, Microsoft
                      technologies like AD, Exchange.{" "}
                    </li>
                    <li>
                      He has been completed 1500+ hours of Multicloud training
                      &amp; completed 50+ Multicloud projects in the last 10+
                      years. His Skills &amp; expertise are as mentioned below;
                    </li>
                    <li>
                      Certified AWS Cloud Expertise AWS VPC | EC2 | RDS | SNS |
                      SQS | Elastic Bean Stalk | CICD | S3 | Cloud Front |
                      Route53 | SSM | Cloud Watch | IAM | SSO | WorkSpace |
                      Cloud Formation | VPN | Direct Connect | KMS | Migration |
                      AWS CLI | AutoScaling &amp; Elastic Load Balancing |
                      LightSail | FSx | EFs | AWS Active Directory | Code Commit
                      |
                    </li>
                    <li>
                      Certified Google Cloud Expertise Google Network | Compute
                      Engine | App Engine | Google Kubernetes Engine | Google
                      Stack driver | Cloud storage | Load Balancer &amp;
                      Autoscaling | VPN Tunnels |
                    </li>
                    <li>
                      Certified Alibaba Cloud ECS | RDS | OSS | SLB Others
                      Microsoft Active directory | Exchange server 2013 &amp;
                      2016 | Server 2012 | Server 2016 Training Expertise AWS
                      Solution architect | AWS Sysops administrator | AWS
                      Developer | Google associate cloud engineer | Google
                      professional architect | Alibaba compute associate &amp;
                      professional
                    </li>
                    <p>
                      <b>Struggling for Excellence</b>
                    </p>
                    <p>
                      <b>Team DigiPAKISTAN</b>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 3 line end */}

          {/* Third Container End */}

          {/* Fourth Container start*/}

          <div className="col-md-6 col-lg-4 p-3">
            <div className="card bg-light pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/q0ZkGZD/NOMAN-ISLAM.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center">
                    NOMAN ISLAM
                  </h3>
                  <h6 className="card-title text-center">
                    ML &amp; AI Trainer
                  </h6>
                </div>
                <p className="card-text text-center">
                  Dr. Noman Islam is a Lead Trainer at President of Pakistan
                  Arif Alvi Initiative, Winner of ...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#mf1"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="mf1"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      NOMAN ISLAM
                    </h5>
                  </div>
                  <div className="modal-body">
                    <li>
                      Dr. Noman Islam is a Lead Trainer at President of Pakistan
                      Arif Alvi Initiative, Winner of Technology Award,
                      Technovation AI International Competition, 2020 (out of
                      300 submissions world-wide,
                      https://www.technovation.org/.../technovation-families...
                      Professor, Head MS/ PhD Program and Head of Department
                      (HoD), Iqra University (http://iqra.edu.pk/iuk) - Data
                      Scientist, ALADIN Solutions - Program Evaluator, Higher
                      Education Commission(HEC), NCEAC - Project Evaluator,
                      Ignite (formerly ICT Rnd) - Member BoS, BoF, BASR and
                      Academic Council, Iqra University, Indus University,
                      Jinnah University, Usman Institute of Technology, and
                      Institute of Business and Technology (IBT) - HEC Approved
                      PhD Supervisor, - Continued Professional Development (CPD)
                      Trainer, Pakistan Engineering Council(PEC) - Microsoft
                      Certified Professional (MCP) HTML5/ JavaScript - OESF
                      Certified Android Engineer - Microsoft Technology
                      Associate, Python - Founding Member, Center for Research
                      in Ubiquitous Computing (CRUC), Karachi
                    </li>
                    <p>
                      <b>Struggling for Excellence</b>
                    </p>
                    <p>
                      <b>Team DigiPAKISTAN</b>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* first line 2 */}
          <div className="col-md-6 col-lg-4 p-3">
            <div className="card bg-light pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/jySstWz/OZAIR-ZAFAR.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center">
                    OZAIR ZAFAR
                  </h3>
                  <h6 className="card-title text-center">Big Data Trainer</h6>
                </div>
                <p className="card-text text-center">
                  Ozair Zafar is a proficient individual currently working at
                  Systems Ltd. with sterling experience ...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#mf2"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="mf2"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      Ozair Zafar
                    </h5>
                  </div>
                  <div className="modal-body">
                    <li>
                      Ozair Zafar is a proficient individual currently working
                      at Systems Ltd. with sterling experience in collecting,
                      managing, analyzing and visualizing large sets of data to
                      turn information into insights using multiple platforms.
                      Strong hold on Hadoop ecosystem, adhere to clients
                      requirements and integrating different set of tools like
                      ETL, Hive, Data Ingestion, Sqoop-Import and Importing Data
                      into hive to come up with the best solution. Over years of
                      experience as Big Data Consultant • Experience in
                      collecting, managing, analyzing, and visualizing large
                      sets of data to turn information into insights using
                      multiple platforms • Stronghold on Hadoop ecosystem •
                      Worked on different databases and have expertise in SQL
                      query writing • Hands-on with query optimizations in
                      various databases • Stronghold on Hadoop ecosystem, adhere
                      to client’s requirements and integrating a different set
                      of tools like NIFI, ETL pipelines, Hive, Pentaho, spark,
                      talent, Data Ingestion, Sqoop-Import, and Importing Data
                      into the hive to come up with the best solution ETL Design
                      and Development • Having excellent knowledge of Big Data
                      tools and administration. • Strong PL/SQL Query writing
                      skills • Team Leadership and Management capabilities •
                      Technical problem-solving skills • Understanding client
                      issues/use-cases to develop strategies to overcome these
                      issues • Good communication and presentation skills • An
                      experienced team player with excellent communication and
                      interpersonal skills who has the ability to work
                      independently under pressure can lead, motivate and work
                      as a team player Tools and Technologies: Oracle, sqoop,
                      SQL Server, Pentaho data integrator, Oracle Data
                      Integrator Hive Query Language, Installation,
                      configuration, and management of multi-node cluster
                      Responsibilities Technical Assistance to Team • Client
                      Communication • Assuring Development Standards &amp;
                      Guidelines • Improved deliverable qualities • Cloudera
                      Cluster Management
                    </li>
                    <p>
                      <b>Struggling for Excellence</b>
                    </p>
                    <p>
                      <b>Team DigiPAKISTAN</b>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2 line end */}

          {/* first line 3 */}
          <div className="col-md-6 col-lg-4 p-3">
            <div className="card bg-light pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/T4NPfLh/MUHAMMAD-AZEEM-IRSLAN.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center">
                    MUHAMMAD AZEEM
                  </h3>
                  <h6 className="card-title text-center">
                    Microsoft Cloud Administrator Trainer
                  </h6>
                </div>
                <p className="card-text text-center">
                  Azeem Irslan is Microsoft Official Certified Trainer from
                  Gujranwala. He is multi-certified A Target-Driven ...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#mf3"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="mf3"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      MUHAMMAD AZEEM IRSLAN
                    </h5>
                  </div>
                  <div className="modal-body">
                    <li>
                      Azeem Irslan is Microsoft Official Certified Trainer from
                      Gujranwala. He is multi-certified A Target-Driven &amp;
                      Result-Oriented Azure Solution Architect Expert, Azure
                      Administrator and Microsoft Multi-Certified Systems
                      Administrator (MCSA, CCNA, HCIA, MCT, MOS) With Years of
                      Relevant Experience in Managing Server Infrastructures and
                      Data Centre Operations on Windows Platform. Ability to
                      Create and Deliver Solutions tied to Business Growth,
                      Organizational Development and Systems/Network
                      Optimization. Skilled Problem Identifier and
                      Trouble-Shooter Comfortable Managing Systems, Projects,
                      and Teams in a Range of IT Environments. His International
                      Certifications Include: Microsoft Certified Trainer
                      Microsoft Certified Azure Solutions Architect Expert
                      Microsoft Certified Azure Administrator Associate
                      HCIA-Routing &amp; Switching Microsoft Office Specialist
                      Microsoft Certified Solutions Associate Windows Server
                      Microsoft Certified Professional Cisco Certified Network
                      Associate Routing and Switching
                    </li>
                    <p>
                      <b>Struggling for Excellence</b>
                    </p>
                    <p>
                      <b>Team DigiPAKISTAN</b>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 3 line end */}

          {/* Fourth Container End */}

          {/* Fifth Container start*/}

          <div className="col-md-6 col-lg-4 p-3">
            <div className="card bg-light pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/qrFtytB/TAIMOOR-HASSAN.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center">
                    Taimoor Hassan
                  </h3>
                  <h6 className="card-title text-center">
                    Python For Everyone Trainer
                  </h6>
                </div>
                <p className="card-text text-center">
                  Taimoor Hassan have been a Team Lead Core Microfinance Banking
                  System at Systems Ltd. now working ...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#mf1"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="mf1"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      Taimoor Hassan
                    </h5>
                  </div>
                  <div className="modal-body">
                    <li>
                      Taimoor Hassan have been a Team Lead Core Microfinance
                      Banking System at Systems Ltd. &amp; now working as a Sr.
                      Developer Lead at Engineering Group. An outstanding,
                      self-motivated professional with around years of
                      experience in delivering enterprise solutions in domains
                      like Banking, e-Commerce, and telecommunications.
                      Expertise in conceptualizing, designing, and coding
                      technical solutions. Experience working with SDLC
                      methodologies based on Agile, Scrum, Waterfall, and
                      Iterative Development. Expertise in the design and
                      development of various web and enterprise-level
                      applications. His expertise include: Java | Spring Boot |
                      Microservices | Python | API Design &amp; Integration |
                      Fintech | DevOps | | Python | eRecharge Systems | Agile
                      Development | SQL &amp; NoSQL | Big Data | Data Science |
                      ML &amp; AI
                    </li>
                    <p>
                      <b>Struggling for Excellence</b>
                    </p>
                    <p>
                      <b>Team DigiPAKISTAN</b>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* first line 2 */}
          <div className="col-md-6 col-lg-4 p-3">
            <div className="card bg-light pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/jySstWz/OZAIR-ZAFAR.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center">
                    OZAIR ZAFAR
                  </h3>
                  <h6 className="card-title text-center">Big Data Trainer</h6>
                </div>
                <p className="card-text text-center">
                  Ozair Zafar is a proficient individual currently working at
                  Systems Ltd. with sterling experience ...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#mf2"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="mf2"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      Ozair Zafar
                    </h5>
                  </div>
                  <div className="modal-body">
                    <li>
                      Ozair Zafar is a proficient individual currently working
                      at Systems Ltd. with sterling experience in collecting,
                      managing, analyzing and visualizing large sets of data to
                      turn information into insights using multiple platforms.
                      Strong hold on Hadoop ecosystem, adhere to clients
                      requirements and integrating different set of tools like
                      ETL, Hive, Data Ingestion, Sqoop-Import and Importing Data
                      into hive to come up with the best solution. Over years of
                      experience as Big Data Consultant • Experience in
                      collecting, managing, analyzing, and visualizing large
                      sets of data to turn information into insights using
                      multiple platforms • Stronghold on Hadoop ecosystem •
                      Worked on different databases and have expertise in SQL
                      query writing • Hands-on with query optimizations in
                      various databases • Stronghold on Hadoop ecosystem, adhere
                      to client’s requirements and integrating a different set
                      of tools like NIFI, ETL pipelines, Hive, Pentaho, spark,
                      talent, Data Ingestion, Sqoop-Import, and Importing Data
                      into the hive to come up with the best solution ETL Design
                      and Development • Having excellent knowledge of Big Data
                      tools and administration. • Strong PL/SQL Query writing
                      skills • Team Leadership and Management capabilities •
                      Technical problem-solving skills • Understanding client
                      issues/use-cases to develop strategies to overcome these
                      issues • Good communication and presentation skills • An
                      experienced team player with excellent communication and
                      interpersonal skills who has the ability to work
                      independently under pressure can lead, motivate and work
                      as a team player Tools and Technologies: Oracle, sqoop,
                      SQL Server, Pentaho data integrator, Oracle Data
                      Integrator Hive Query Language, Installation,
                      configuration, and management of multi-node cluster
                      Responsibilities Technical Assistance to Team • Client
                      Communication • Assuring Development Standards &amp;
                      Guidelines • Improved deliverable qualities • Cloudera
                      Cluster Management
                    </li>
                    <p>
                      <b>Struggling for Excellence</b>
                    </p>
                    <p>
                      <b>Team DigiPAKISTAN</b>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2 line end */}

          {/* first line 3 */}
          <div className="col-md-6 col-lg-4 p-3">
            <div className="card bg-light pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/T4NPfLh/MUHAMMAD-AZEEM-IRSLAN.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center">
                    MUHAMMAD AZEEM
                  </h3>
                  <h6 className="card-title text-center">
                    Microsoft Cloud Administrator Trainer
                  </h6>
                </div>
                <p className="card-text text-center">
                  Azeem Irslan is Microsoft Official Certified Trainer from
                  Gujranwala. He is multi-certified A Target-Driven ...
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#mf3"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="mf3"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      MUHAMMAD AZEEM IRSLAN
                    </h5>
                  </div>
                  <div className="modal-body">
                    <li>
                      Azeem Irslan is Microsoft Official Certified Trainer from
                      Gujranwala. He is multi-certified A Target-Driven &amp;
                      Result-Oriented Azure Solution Architect Expert, Azure
                      Administrator and Microsoft Multi-Certified Systems
                      Administrator (MCSA, CCNA, HCIA, MCT, MOS) With Years of
                      Relevant Experience in Managing Server Infrastructures and
                      Data Centre Operations on Windows Platform. Ability to
                      Create and Deliver Solutions tied to Business Growth,
                      Organizational Development and Systems/Network
                      Optimization. Skilled Problem Identifier and
                      Trouble-Shooter Comfortable Managing Systems, Projects,
                      and Teams in a Range of IT Environments. His International
                      Certifications Include: Microsoft Certified Trainer
                      Microsoft Certified Azure Solutions Architect Expert
                      Microsoft Certified Azure Administrator Associate
                      HCIA-Routing &amp; Switching Microsoft Office Specialist
                      Microsoft Certified Solutions Associate Windows Server
                      Microsoft Certified Professional Cisco Certified Network
                      Associate Routing and Switching
                    </li>
                    <p>
                      <b>Struggling for Excellence</b>
                    </p>
                    <p>
                      <b>Team DigiPAKISTAN</b>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Container start*/}
    </>
  );
};

export default Team;

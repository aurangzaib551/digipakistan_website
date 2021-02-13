import React from "react";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

const QuestionsAndAnswers = () => {
  return (
    <Container className="mt-5 faqs-questions-and-answers">
      <h1 className="fw-bold text-center mx-3">Frequently Asked Questions</h1>
      <div className="question d-flex mt-5 p-4 rounded">
        <h3 className="fw-bold mb-0 q">Q.</h3>
        <h3 className="ms-3 mb-0 fw-bold">What is DigiPakistan Initiative?</h3>
      </div>
      <div className="answer d-flex mt-2 p-4 rounded">
        <h3 className="fw-bold mb-0 a">A.</h3>
        <p className="ms-3 mb-0 text-justify">
          <strong>DigiPakistan</strong> is the First Online{" "}
          <strong>National Initiative</strong> launched with the aim to provide
          Skill Development Training to empower youth of the nation. In order to
          bring this vision, a comprehensive DigiPAKISTAN National Skills
          Development Initaitive has been designed which provides contemporary
          online training across all provinces of Pakistan &amp; for overseas
          Pakistanis. The vision is to become leader in building a highly
          skilled human resource in diversified IT domains and contribute in
          nation building towards a knowledge-based economy.
        </p>
      </div>

      <div className="question d-flex mt-4 p-4 rounded">
        <h3 className="fw-bold mb-0 q">Q.</h3>
        <h3 className="ms-3 mb-0 fw-bold">Why should I join this program?</h3>
      </div>
      <div className="answer d-flex mt-2 p-4 rounded">
        <h3 className="fw-bold mb-0 a">A.</h3>
        <p className="ms-3 mb-0 text-justify">
          It is a great opportunity for you to get hands on training on
          invaluable courses that are taught by expert trainers. This training
          will equip you with knowledge and skills to be self-sustainable by
          earning from online platforms.
        </p>
      </div>

      <div className="question d-flex mt-4 p-4 rounded">
        <h3 className="fw-bold mb-0 q">Q.</h3>
        <h3 className="ms-3 mb-0 fw-bold">
          Which courses are being offered at this program?
        </h3>
      </div>
      <div className="answer d-flex mt-2 p-4 rounded">
        <h3 className="fw-bold mb-0 a">A.</h3>
        <div className="mt-1">
          <p className="ms-3 mb-0 text-justify">
            There are three Modules offered by us:
          </p>
          <ul className="m-3">
            <li>Technical Programs (3 Months)</li>
            <li>Non-Technical Programs (3 Months)</li>
            <li>Associate Certification Programs (6 Months)</li>
          </ul>
          <p className="ms-3 mb-0 text-justify">
            We'll continuously update maximum high tech programs at DigiPAKISTAN
            Initiative with time. As we are searching for best Trainers in
            Pakistan to teach you.
          </p>
        </div>
      </div>

      <div className="question d-flex mt-4 p-4 rounded">
        <h3 className="fw-bold mb-0 q">Q.</h3>
        <h3 className="ms-3 mb-0 fw-bold">
          After successfully completing the training, will I be given
          certificate?
        </h3>
      </div>
      <div className="answer d-flex mt-2 p-4 rounded">
        <h3 className="fw-bold mb-0 a">A.</h3>
        <p className="ms-3 mb-0 mt-1 text-justify">
          Yes, All trainees who successfully complete training will be awarded a
          training certificate.
        </p>
      </div>

      <div className="question d-flex mt-4 p-4 rounded">
        <h3 className="fw-bold mb-0 q">Q.</h3>
        <h3 className="ms-3 mb-0 fw-bold">
          What are the eligibility criteria required to apply?
        </h3>
      </div>
      <div className="answer d-flex mt-2 p-4 rounded">
        <h3 className="fw-bold mb-0 a">A.</h3>
        <p className="ms-3 mb-0 mt-1 text-justify">
          Minimum Matric can apply to this program for Digital &amp; Prosperous
          Pakistan.
        </p>
      </div>

      <div className="question d-flex mt-4 p-4 rounded">
        <h3 className="fw-bold mb-0 q">Q.</h3>
        <h3 className="ms-3 mb-0 fw-bold">How to apply?</h3>
      </div>
      <div className="answer d-flex mt-2 p-4 rounded">
        <h3 className="fw-bold mb-0 a">A.</h3>
        <div className="mt-1">
          <p className="ms-3 mb-0 ">You can apply through these easy steps:</p>
          <div className="ms-3 ms-sm-5">
            <p className="small mt-3 mb-0 text-justify">
              <span className="fw-bold text-start d-inline-block">Step 1:</span>{" "}
              Go to <Link to="/apply-now">Apply Now</Link> page. Register
              yourself as a new applicant.
            </p>
            <p className="small mb-0 text-justify">
              <span className="fw-bold text-start d-inline-block">Step 2:</span>{" "}
              (Candidate Login): After successfully sign up. Go to candidate{" "}
              <Link to="/apply-now/login">login</Link> page. Enter your login
              details (Type your email &amp; password which you have enter
              during signing up). You will be successfully logged into the
              Candidate Portal.
            </p>
            <p className="small mb-0 text-justify">
              <span className="fw-bold text-start d-inline-block">Step 3:</span>{" "}
              (Candidate Undertaking Terms): First of all Terms &amp; Conditions
              will appear, read carefully and click agree to continue further.
            </p>
            <p className="small mb-0 text-justify">
              <span className="fw-bold text-start d-inline-block">Step 4:</span>{" "}
              (Application Form): Fill the application form carefully and
              accurately. Select your domain and submit the application form.
              You can enrol up to three programs at the same time.
            </p>
            <p className="small mb-0 text-justify">
              <span className="fw-bold text-start d-inline-block">Step 5:</span>{" "}
              Your application will be examined against the eligibility
              criteria. The admission status will be updated through the portal
              within 24 hours of submitting the application on the candidate
              portal.
            </p>
            <p className="small mb-0 text-justify">
              <span className="fw-bold text-start d-inline-block">Step 6:</span>{" "}
              On admission confirmation, registration challan will be generated
              with nominal registration fee for seat confirmation. Applicants
              have to follow further instructions given in the portal.
            </p>
            <p className="small mb-0 text-justify">
              <span className="fw-bold text-start d-inline-block">Step 7:</span>{" "}
              As challan is paid. Fill Verification form at candidate portal and
              upload your CNIC &amp; last Degree documents online at portal.
            </p>
            <p className="small mb-0 text-justify">
              <span className="fw-bold text-start d-inline-block">Step 8:</span>{" "}
              Applicant will now be enrolled in DigiPAKISTAN program.
            </p>
          </div>
        </div>
      </div>

      <div className="question d-flex mt-4 p-4 rounded">
        <h3 className="fw-bold mb-0 q">Q.</h3>
        <h3 className="ms-3 mb-0 fw-bold">
          Can I apply in more than 1 courses?
        </h3>
      </div>
      <div className="answer d-flex mt-2 p-4 rounded">
        <h3 className="fw-bold mb-0 a">A.</h3>
        <p className="ms-3 mb-0 mt-1 text-justify">
          Yes Students can apply in maximum 3 programs at the same time.
        </p>
      </div>

      <div className="question d-flex mt-4 p-4 rounded">
        <h3 className="fw-bold mb-0 q">Q.</h3>
        <h3 className="ms-3 mb-0 fw-bold">
          Do I have to pay for this training?
        </h3>
      </div>
      <div className="answer d-flex mt-2 p-4 rounded">
        <h3 className="fw-bold mb-0 a">A.</h3>
        <p className="ms-3 mb-0 mt-1 text-justify">
          All you have to pay is one time nominal registration charges for seat
          confirmation of each course.
        </p>
      </div>

      <div className="question d-flex mt-4 p-4 rounded">
        <h3 className="fw-bold mb-0 q">Q.</h3>
        <h3 className="ms-3 mb-0 fw-bold">What is duration of course?</h3>
      </div>
      <div className="answer d-flex mt-2 p-4 rounded">
        <h3 className="fw-bold mb-0 a">A.</h3>
        <p className="ms-3 mb-0 mt-1 text-justify">
          Duration of Fast Track Technical &amp; Non-Technical Programs are 3
          months. And Associate Certification Program is 6 Months.
        </p>
      </div>

      <div className="question d-flex mt-4 p-4 rounded">
        <h3 className="fw-bold mb-0 q">Q.</h3>
        <h3 className="ms-3 mb-0 fw-bold">Will there be any test?</h3>
      </div>
      <div className="answer d-flex mt-2 p-4 rounded">
        <h3 className="fw-bold mb-0 a">A.</h3>
        <p className="ms-3 mb-0 mt-1 text-justify">
          No, there will not be any entry test due to Covid19.
        </p>
      </div>

      <div className="question d-flex mt-4 p-4 rounded">
        <h3 className="fw-bold mb-0 q">Q.</h3>
        <h3 className="ms-3 mb-0 fw-bold">
          Can I change the course after registration or shortlisting?
        </h3>
      </div>
      <div className="answer d-flex mt-2 p-4 rounded">
        <h3 className="fw-bold mb-0 a">A.</h3>
        <p className="ms-3 mb-0 mt-1 text-justify">
          No. You cannot change course after registration or shortlisting.
          Please choose your course carefully while registering online.
        </p>
      </div>

      <div className="question d-flex mt-4 p-4 rounded">
        <h3 className="fw-bold mb-0 q">Q.</h3>
        <h3 className="ms-3 mb-0 fw-bold">
          Are there limited Seats to Join DigiPAKISTAN?
        </h3>
      </div>
      <div className="answer d-flex mt-2 p-4 rounded">
        <h3 className="fw-bold mb-0 a">A.</h3>
        <p className="ms-3 mb-0 mt-1 text-justify">
          Yes there will be limited seats in this program which will be on first
          come first serve bases. In the First Batch, DigiPAKISTAN have only
          50,000 seats for Students across the country & Overseas Pakistanis.
        </p>
      </div>

      <div className="question d-flex mt-4 p-4 rounded">
        <h3 className="fw-bold mb-0 q">Q.</h3>
        <h3 className="ms-3 mb-0 fw-bold">
          What is the minimum educational qualification required for this
          program?
        </h3>
      </div>
      <div className="answer d-flex mt-2 p-4 rounded">
        <h3 className="fw-bold mb-0 a">A.</h3>
        <p className="ms-3 mb-0 mt-1 text-justify">
          There is minimum Matric educational requirement to take the
          DigiPAKISTAN training and we encourage everyone who can read, write
          and understand English or know a little bit use of Computer to take
          the training to build their future as a freelancer. We need your time
          &amp; passion for making you Expert in the Security Field.
        </p>
      </div>

      <div className="question d-flex mt-4 p-4 rounded">
        <h3 className="fw-bold mb-0 q">Q.</h3>
        <h3 className="ms-3 mb-0 fw-bold">Will I be offered any stipend?</h3>
      </div>
      <div className="answer d-flex mt-2 p-4 rounded">
        <h3 className="fw-bold mb-0 a">A.</h3>
        <p className="ms-3 mb-0 mt-1 text-justify">No stipend will be given.</p>
      </div>

      <div className="question d-flex mt-4 p-4 rounded">
        <h3 className="fw-bold mb-0 q">Q.</h3>
        <h3 className="ms-3 mb-0 fw-bold">
          I am currently doing a job. Can I still apply for the training?
        </h3>
      </div>
      <div className="answer d-flex mt-2 p-4 rounded">
        <h3 className="fw-bold mb-0 a">A.</h3>
        <p className="ms-3 mb-0 mt-1 text-justify">
          Yes, because we are training youth online.
        </p>
      </div>

      <div className="question d-flex mt-4 p-4 rounded">
        <h3 className="fw-bold mb-0 q">Q.</h3>
        <h3 className="ms-3 mb-0 fw-bold">
          Can Overseas Pakistanis can also apply?
        </h3>
      </div>
      <div className="answer d-flex mt-2 p-4 rounded">
        <h3 className="fw-bold mb-0 a">A.</h3>
        <p className="ms-3 mb-0 mt-1 text-justify">
          Yes, Overseas can also apply for this National Program &amp; can
          Secure there Seat.
        </p>
      </div>

      <div className="question d-flex mt-4 p-4 rounded">
        <h3 className="fw-bold mb-0 q">Q.</h3>
        <h3 className="ms-3 mb-0 fw-bold">
          In how many programs students can enroll at the same time?
        </h3>
      </div>
      <div className="answer d-flex mt-2 p-4 rounded">
        <h3 className="fw-bold mb-0 a">A.</h3>
        <p className="ms-3 mb-0 mt-1 text-justify">
          A student can enrol up to three programs at the same time.
        </p>
      </div>

      <div className="question d-flex mt-4 p-4 rounded">
        <h3 className="fw-bold mb-0 q">Q.</h3>
        <h3 className="ms-3 mb-0 fw-bold">
          What is the completion criteria to get Certificate from DigiPAKISTAN?
        </h3>
      </div>
      <div className="answer d-flex mt-2 p-4 rounded">
        <h3 className="fw-bold mb-0 a">A.</h3>
        <div className="mt-1">
          <p className="ms-3 mb-0 text-justify">
            According to course completion criteria, trainees will need to
            secure 70% score to become eligible for Certificate. Each component
            (Video, Quiz and Hands-on Exercise) carries a certain percentage of
            the total score of 100 as given below:
          </p>
          <ul className="ms-3 mt-3 ms-sm-5">
            <li>Watching Topic Videos through LMS = 50%</li>
            <li>Quizzes = 25%</li>
            <li>Assignments = 15%</li>
            <li>Hands on Excercise = 10%</li>
          </ul>
          <p className="mb-0 ms-3">
            Trainees will get Certificates after successful completion of
            course.
          </p>
        </div>
      </div>

      <div className="question d-flex mt-4 p-4 rounded">
        <h3 className="fw-bold mb-0 q">Q.</h3>
        <h3 className="ms-3 mb-0 fw-bold">
          What are the technical requirements of this program?
        </h3>
      </div>
      <div className="answer d-flex mt-2 p-4 rounded">
        <h3 className="fw-bold mb-0 a">A.</h3>
        <p className="ms-3 mb-0 mt-1 text-justify">
          To access the DigiPAKISTAN program, you need to have a good stable
          internet connection at home along with a desktop, laptop, or an
          android phone.
        </p>
      </div>

      <div className="question d-flex mt-4 p-4 rounded">
        <h3 className="fw-bold mb-0 q">Q.</h3>
        <h3 className="ms-3 mb-0 fw-bold">Where do I get this training?</h3>
      </div>
      <div className="answer d-flex mt-2 p-4 rounded">
        <h3 className="fw-bold mb-0 a">A.</h3>
        <p className="ms-3 mb-0 mt-1 text-justify">
          This is an online training program, Once you get enrolled you will be
          able to access DigiPAKISTAN online learning management system.
        </p>
      </div>

      <div className="question d-flex mt-4 p-4 rounded">
        <h3 className="fw-bold mb-0 q">Q.</h3>
        <h3 className="ms-3 mb-0 fw-bold">How do I study?</h3>
      </div>
      <div className="answer d-flex mt-2 p-4 rounded">
        <h3 className="fw-bold mb-0 a">A.</h3>
        <p className="ms-3 mb-0 mt-1 text-justify">
          All the videos and learning material for each module will be available
          on Online Learning Platform. You can self-pace the training or you can
          follow the announced time table which will be available on Portal.
        </p>
      </div>

      <div className="question d-flex mt-4 p-4 rounded">
        <h3 className="fw-bold mb-0 q">Q.</h3>
        <h3 className="ms-3 mb-0 fw-bold">
          Will this initiative offer jobs or is it just to train them?
        </h3>
      </div>
      <div className="answer d-flex mt-2 p-4 rounded">
        <h3 className="fw-bold mb-0 a">A.</h3>
        <p className="ms-3 mb-0 mt-1 text-justify">
          It will not offer jobs to trainees, rather, it will offer skill-based
          trainings, which will enable them to get projects from freelance
          markets or will be enough to get jobs internationally.
        </p>
      </div>

      <div className="question d-flex mt-4 p-4 rounded">
        <h3 className="fw-bold mb-0 q">Q.</h3>
        <h3 className="ms-3 mb-0 fw-bold">
          Where to contact in case of queries?
        </h3>
      </div>
      <div className="answer d-flex mt-2 p-4 rounded mb-5">
        <h3 className="fw-bold mb-0 a">A.</h3>
        <p className="ms-3 mb-0 mt-1 word-break text-justify">
          In case of queries you can dial{" "}
          <a href="tel:04235974881">042-35974881</a> /{" "}
          <a href="tel:04235974882">042-35974882</a> and can email at{" "}
          <a href="mailto:helpdesk@digipakistan.org">
            helpdesk@digipakistan.org
          </a>
        </p>
      </div>
    </Container>
  );
};

export default QuestionsAndAnswers;

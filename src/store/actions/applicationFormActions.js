import axios from "axios";

export const termsAndConditions = (agree) => {
  return {
    type: "TERMS_AND_CONDITIONS",
    payload: agree
      ? "I have agreed to your terms and conditions."
      : "Doesn't agree to your terms and conditions.",
  };
};

export const application = (formData, setBtnLoading, uid) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    // Date

    const date = new Date();

    const getDays = date.getDay();

    const daysArray = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const days = daysArray[getDays];

    const todayDate = date.getDate();

    const year = date.getFullYear();

    const getMonth = date.getMonth();

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const month = monthNames[getMonth];

    // Time

    function time(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      var strTime = hours + ":" + minutes + " " + ampm;
      return strTime;
    }

    firestore
      .collection("Applications")
      .doc(uid)
      .set({
        "Full Name": formData.fullName,
        "Father Name": formData.fatherName,
        CNIC: formData.cnic,
        Email: formData.emailAddress,
        Applicant: formData.applicant,
        "Mobile Number": formData.mobileNumber || formData.overseasMobileNumber,
        "Date of Birth": formData.dob,
        Gender: formData.gender,
        "First Course": formData.firstCourseTitle,
        "First Course Category": formData.firstCourseName,
        "Second Course": formData.secondCourseTitle,
        "Second Course Category": formData.secondCourseName,
        "Third Course": formData.thirdCourseTitle,
        "Third Course Category": formData.thirdCourseName,
        Qualification: formData.qualification,
        Education: formData.education,
        "Institute Name": formData.instituteName,
        Province: formData.province,
        City: formData.city,
        Address: formData.address,
        "Reference Code": formData.referenceCode,
        "Know About Us": formData.knowAboutUs,
        "Roll Number": formData.rollNumber,
        "Terms & Conditions": formData.termsAndConditions,
        "Form Submit Date": `${days}, ${month} ${todayDate}, ${year}`,
        "Form Submit Time": time(new Date()),
        "Overseas CNIC": formData.overseasCNIC,
        visibility: "public",
      })
      .then(() => {
        let course = [];
        if (formData.firstCourseTitle) {
          course.push({
            "First Course Title": formData.firstCourseTitle,
            "First Course Name": {
              name: formData.firstCourseName,
              status: false,
              link: formData.firstCourseLink,
            },
          });
        }

        if (formData.secondCourseTitle) {
          course.push({
            "Second Course Title": formData.secondCourseTitle,
            "Second Course Name": {
              name: formData.secondCourseName,
              status: false,
              link: formData.secondCourseLink,
            },
          });
        }

        if (formData.thirdCourseTitle) {
          course.push({
            "Third Course Title": formData.thirdCourseTitle,
            "Third Course Name": {
              name: formData.thirdCourseName,
              status: false,
              link: formData.thirdCourseLink,
            },
          });
        }

        // Seven date last for fee submission
        let feeDate;
        if (date.getDate() === 20) {
          feeDate = 28;
        } else if (date.getDate() === 21) {
          feeDate = 29;
        } else if (date.getDate() === 22) {
          feeDate = 1;
        } else if (date.getDate() === 23) {
          feeDate = 2;
        } else if (date.getDate() === 24) {
          feeDate = 3;
        } else if (date.getDate() === 25) {
          feeDate = 4;
        } else if (date.getDate() === 26) {
          feeDate = 5;
        } else if (date.getDate() === 27) {
          feeDate = 6;
        } else if (date.getDate() === 28) {
          feeDate = 7;
        } else if (date.getDate() === 29) {
          feeDate = 8;
        } else if (date.getDate() === 30) {
          feeDate = 9;
        } else if (date.getDate() === 31) {
          feeDate = 10;
        } else {
          feeDate = date.getDate() + 7;
        }

        // February Month
        if (date.getDate() === 20 && date.getMonth() === 1) {
          feeDate = 1;
        } else if (date.getDate() === 21 && date.getMonth() === 1) {
          feeDate = 2;
        } else if (date.getDate() === 22 && date.getMonth() === 1) {
          feeDate = 3;
        } else if (date.getDate() === 23 && date.getMonth() === 1) {
          feeDate = 4;
        } else if (date.getDate() === 24 && date.getMonth() === 1) {
          feeDate = 5;
        } else if (date.getDate() === 25 && date.getMonth() === 1) {
          feeDate = 6;
        } else if (date.getDate() === 26 && date.getMonth() === 1) {
          feeDate = 7;
        } else if (date.getDate() === 27 && date.getMonth() === 1) {
          feeDate = 8;
        } else if (date.getDate() === 28 && date.getMonth() === 1) {
          feeDate = 9;
        } else {
          feeDate = date.getDate() + 7;
        }

        let feeMonth;
        if (
          date.getDate() === 20 ||
          date.getDate() === 21 ||
          date.getDate() === 22 ||
          date.getDate() === 23 ||
          date.getDate() === 24 ||
          date.getDate() === 25 ||
          date.getDate() === 26 ||
          date.getDate() === 27 ||
          date.getDate() === 28 ||
          date.getDate() === 29 ||
          date.getDate() === 30 ||
          date.getDate() === 31
        ) {
          feeMonth = date.getMonth() + 1;
        } else {
          feeMonth = date.getMonth();
        }

        if (date.getDate() === 20 && date.getMonth() === 11) {
          feeMonth = 0;
        } else if (date.getDate() === 21 && date.getMonth() === 11) {
          feeMonth = 0;
        } else if (date.getDate() === 22 && date.getMonth() === 11) {
          feeMonth = 0;
        } else if (date.getDate() === 23 && date.getMonth() === 11) {
          feeMonth = 0;
        } else if (date.getDate() === 24 && date.getMonth() === 11) {
          feeMonth = 0;
        } else if (date.getDate() === 25 && date.getMonth() === 11) {
          feeMonth = 0;
        } else if (date.getDate() === 26 && date.getMonth() === 11) {
          feeMonth = 0;
        } else if (date.getDate() === 27 && date.getMonth() === 11) {
          feeMonth = 0;
        } else if (date.getDate() === 28 && date.getMonth() === 11) {
          feeMonth = 0;
        } else if (date.getDate() === 29 && date.getMonth() === 11) {
          feeMonth = 0;
        } else if (date.getDate() === 30 && date.getMonth() === 11) {
          feeMonth = 0;
        } else if (date.getDate() === 31 && date.getMonth() === 11) {
          feeMonth = 0;
        }

        let feeYear;
        if (date.getMonth() === 11 && date.getDate() === 20) {
          feeYear = date.getFullYear() + 1;
        } else if (date.getMonth() === 11 && date.getDate() === 21) {
          feeYear = date.getFullYear() + 1;
        } else if (date.getMonth() === 11 && date.getDate() === 22) {
          feeYear = date.getFullYear() + 1;
        } else if (date.getMonth() === 11 && date.getDate() === 23) {
          feeYear = date.getFullYear() + 1;
        } else if (date.getMonth() === 11 && date.getDate() === 24) {
          feeYear = date.getFullYear() + 1;
        } else if (date.getMonth() === 11 && date.getDate() === 25) {
          feeYear = date.getFullYear() + 1;
        } else if (date.getMonth() === 11 && date.getDate() === 26) {
          feeYear = date.getFullYear() + 1;
        } else if (date.getMonth() === 11 && date.getDate() === 27) {
          feeYear = date.getFullYear() + 1;
        } else if (date.getMonth() === 11 && date.getDate() === 28) {
          feeYear = date.getFullYear() + 1;
        } else if (date.getMonth() === 11 && date.getDate() === 29) {
          feeYear = date.getFullYear() + 1;
        } else if (date.getMonth() === 11 && date.getDate() === 30) {
          feeYear = date.getFullYear() + 1;
        } else if (date.getMonth() === 11 && date.getDate() === 31) {
          feeYear = date.getFullYear() + 1;
        } else {
          feeYear = date.getFullYear();
        }

        const monthNames = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];

        const feeMonthName = monthNames[feeMonth];

        firestore
          .collection("users")
          .doc(uid)
          .update({
            fatherName: formData.fatherName,
            applicationSubmitted: true,
            admissionStatus: false,
            approvalDate: `${days}, ${month} ${todayDate}, ${year}`,
            course,
            lms: false,
            issueDateOfFeeSubmission: `${month} ${todayDate}, ${year}`,
            lastDateOfFeeSubmission: `${feeMonthName} ${feeDate}, ${feeYear}`,
          });
      })
      .then(() => {
        if (formData.referenceCode) {
          firestore.collection("Scholarship Students").add({
            "Full Name": formData.fullName,
            "Father Name": formData.fatherName,
            CNIC: formData.cnic,
            Email: formData.emailAddress,
            Applicant: formData.applicant,
            "Mobile Number":
              `${formData.mobileNumber}` || `${formData.overseasMobileNumber}`,
            "Date of Birth": formData.dob,
            Gender: formData.gender,
            "First Course": formData.firstCourseTitle,
            "First Course Category": formData.firstCourseName,
            "Second Course": formData.secondCourseTitle,
            "Second Course Category": formData.secondCourseName,
            "Third Course": formData.thirdCourseTitle,
            "Third Course Category": formData.thirdCourseName,
            Qualification: formData.qualification,
            Education: formData.education,
            "Institute Name": formData.instituteName,
            Province: formData.province,
            City: formData.city,
            Address: formData.address,
            "Reference Code": formData.referenceCode,
            "Know About Us": formData.knowAboutUs,
            "Roll Number": formData.rollNumber,
            "Terms & Conditions": formData.termsAndConditions,
            "Form Submit Date": `${days}, ${month} ${todayDate}, ${year}`,
            "Form Submit Time": time(new Date()),
            "Overseas CNIC": formData.overseasCNIC,
            visibility: "public",
            paymentStatus: false,
          });
        }
      })
      .then(() => {
        const message =
          "Your application has been submitted successfully. Our admission department is currently evaluating your application and we will inform you as your application is approved. In case you didn't receive notification by DigiPAKISTAN within next 24hrs, you can check your application status by logging to this link: digipakistan.org/apply-now/login ";

        axios.post(
          `https://secure.h3techs.com/sms/api/send?email=digipakistan.org@gmail.com&key=02813f09b8ea5a5be950bb7ec26e9ae986&mask=Digi Alert&to=${formData.messageNumber}&message=${message}`
        );
      })
      .then(() => {
        dispatch({
          type: "APPLICATION_SUBMITTED",
          payload: "Your application has been submitted successfully",
        });
        setBtnLoading(false);
      });
  };
};

export const statusOfAdmission = (uid) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore.collection("users").doc(uid).update({
      admissionStatus: true,
    });
  };
};

export const clearAll = () => {
  return {
    type: "CLEAR_ALL",
  };
};

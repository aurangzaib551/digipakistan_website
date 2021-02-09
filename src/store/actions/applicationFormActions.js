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

        let feeDate;
        if (date.getDate() === 27) {
          feeDate = 1;
        } else if (date.getDate() === 28) {
          feeDate = 2;
        } else if (date.getDate() === 29) {
          feeDate = 3;
        } else if (date.getDate() === 30) {
          feeDate = 4;
        } else if (date.getDate() === 31) {
          feeDate = 5;
        } else {
          feeDate = date.getDate() + 4;
        }

        if (date.getDate() === 24 && date.getMonth() === 1) {
          feeDate = 1;
        } else if (date.getDate() === 25 && date.getMonth() === 1) {
          feeDate = 2;
        } else if (date.getDate() === 26 && date.getMonth() === 1) {
          feeDate = 3;
        } else if (date.getDate() === 27 && date.getMonth() === 1) {
          feeDate = 4;
        } else if (date.getDate() === 28 && date.getMonth() === 1) {
          feeDate = 5;
        }

        let feeMonth;
        if (
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

        let feeYear;
        if (date.getMonth() === 11 && date.getDate() === 27) {
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
          });
        }
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

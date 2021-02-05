export const applicationForInstructor = (formData, setBtnLoading) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    // Object Destructuring
    const {
      fullName,
      emailAddress,
      phoneNumber,
      typeOfCourse,
      expertise,
      bio,
      linkedInURL,
      city,
      country,
      cv,
    } = formData;

    firestore
      .collection("Become an instructor")
      .add({
        instructorName: fullName,
        emailAddress,
        phoneNumber,
        typeOfCourse,
        expertise,
        bio,
        linkedInURL,
        country,
        city,
        cv,
        visibility: "public",
      })
      .then(() => {
        dispatch({
          type: "APPLICATION_SENT",
          payload:
            "Your application for becoming an instructor in DigiPAKISTAN has been submitted successfully",
        });
        setBtnLoading(false);
      });
  };
};

export const uploadInstructorCV = (
  instructorName,
  CV,
  setProgress,
  formData,
  setFormData
) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    // Set file type of specific files
    let type;
    if (
      CV.type ===
      "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    ) {
      type = "application/vnd.ms-powerpoint";
    } else if (
      CV.type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      type = "application/msword";
    }

    // File types
    const metadata = { contentType: type };

    // Storage
    const upload = firebase
      .storage()
      .ref(`Become an instructor/${instructorName}`)
      .put(CV, metadata);
    upload.on(
      "state_changed",
      (snapshot) => {
        const progress =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {},
      () => {
        firebase
          .storage()
          .ref("Become an instructor")
          .child(instructorName)
          .getDownloadURL()
          .then((url) =>
            setFormData({
              ...formData,
              cv: url,
              file: CV,
            })
          );
      }
    );
  };
};

export const clearAll = () => {
  return {
    type: "CLEAR_ALL",
  };
};

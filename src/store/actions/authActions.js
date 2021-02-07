import random from "number-uid";

export const signUp = (formData, setBtnLoading) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    // Object Destructuring
    const { emailAddress, password, firstName, lastName } = formData;

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((res) => {
        firestore
          .collection("users")
          .doc(res.user.uid)
          .set({
            fullName: `${firstName} ${lastName}`,
            rollNumber: random(5),
            initials: firstName[0],
            batch: "Batch 01",
            createdAt: new Date(),
          });
      })
      .then(() => {
        dispatch({
          type: "SIGN_UP_SUCCESSFULLY",
          payload: "Your account has been successfully created.",
        });
        setBtnLoading(false);
      })
      .catch((err) => {
        dispatch({
          type: "SIGN_UP_ERROR",
          payload: err.message,
        });
        setBtnLoading(false);
      });
  };
};

export const logIn = (formData, setBtnLoading) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    // Object Destructuring
    const { emailAddress, password } = formData;

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        dispatch({
          type: "LOGIN_SUCCESSFULLY",
          payload: "Successfully logged in",
        });
        setBtnLoading(false);
      })
      .catch((err) => {
        dispatch({
          type: "LOGIN_ERROR",
          payload: err.message,
        });
        setBtnLoading(false);
      });
  };
};

export const signOut = (push) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: "SIGN_OUT_SUCESSFULLY",
          payload: push ? "Successfully log out" : null,
        });
        push && push("/apply-now/login");
      });
  };
};

export const verifyEmail = (setBtnLoading) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .currentUser.sendEmailVerification()
      .then(() => {
        dispatch({
          type: "VERIFICATION_EMAIL_SENT",
          payload: true,
        });
        setBtnLoading(false);
      });
  };
};

export const forgotPassword = (emailAddress, setBtnLoading) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .sendPasswordResetEmail(emailAddress)
      .then(() => {
        dispatch({
          type: "RESET_PASSWORD",
          payload: `An email is sent to your ${emailAddress} for resetting the password`,
        });
        setBtnLoading(false);
      })
      .catch((err) => {
        dispatch({
          type: "RESET_PASSWORD_ERROR",
          payload: err.message,
        });
        setBtnLoading(false);
      });
  };
};

export const clearAll = () => {
  return {
    type: "CLEAR_ALL",
  };
};

import random from "number-uid";
import axios from "axios";

export const signUp = (formData, setBtnLoading) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    // Object Destructuring
    const { emailAddress, password, firstName, lastName, mobileNumber } =
      formData;

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((res) => {
        firestore
          .collection("users")
          .doc(res.user.uid)
          .set({
            fullName: `${firstName} ${lastName}`,
            rollNumber: random(6),
            initials: firstName[0],
            batch: "Batch 01",
            createdAt: new Date(),
            mobileNumber,
          });
      })
      .then(() => {
        const message =
          "Dear Student, you have been successfully created login credentials through registration at DigiPAKISTAN Website. Now Login to this link and complete further process: digipakistan.org/apply-now/login";

        const encodeMessage = encodeURI(message);

        axios.post(
          `https://secure.h3techs.com/sms/api/send?email=digipakistan.org@gmail.com&key=02813f09b8ea5a5be950bb7ec26e9ae986&mask=Digi Alert&to=${mobileNumber}&message=${encodeMessage}`
        );
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

export const challanNo = (uid) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("Applications")
      .doc(uid)
      .update({
        challanNoOne: random(6),
        challanNoTwo: random(6),
        challanNoThree: random(6),
      });
  };
};

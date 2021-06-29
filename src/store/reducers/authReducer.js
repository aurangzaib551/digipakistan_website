const initialState = {
  msg: "",
  loginMsg: "",
  verifyEmailMsg: false,
  resetPasswordMsg: "",
  profileUpdated: "",
};

const authReducer = (state = initialState, action) => {
  // Object Destructuring
  const { type, payload } = action;

  switch (type) {
    case "SIGN_UP_SUCCESSFULLY":
      return {
        ...state,
        msg: payload,
      };
    case "SIGN_UP_ERROR":
      return {
        ...state,
        msg: payload,
      };
    case "CLEAR_ALL":
      return {
        ...state,
        msg: "",
        loginMsg: "",
        verifyEmailMsg: false,
        resetPasswordMsg: "",
        profileUpdated: "",
      };
    case "LOGIN_SUCCESSFULLY":
      return {
        ...state,
        loginMsg: payload,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        loginMsg: payload,
      };
    case "SIGN_OUT_SUCESSFULLY":
      return {
        ...state,
        loginMsg: payload,
      };
    case "VERIFICATION_EMAIL_SENT":
      return {
        ...state,
        verifyEmailMsg: payload,
      };
    case "RESET_PASSWORD":
      return {
        ...state,
        resetPasswordMsg: payload,
      };
    case "RESET_PASSWORD_ERROR":
      return {
        ...state,
        resetPasswordMsg: payload,
      };
    case "PROFILE_UPDATED":
      return {
        ...state,
        profileUpdated: payload,
      };
    case "PROFILE_NOT_UPDATED":
      return {
        ...state,
        profileUpdated: payload,
      };
    default:
      return state;
  }
};

export default authReducer;

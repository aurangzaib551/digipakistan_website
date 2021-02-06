const initialState = {
  termsAndConditions: "",
  msg: "",
};

const applicationFormReducer = (state = initialState, action) => {
  // Object Destructuring
  const { type, payload } = action;

  switch (type) {
    case "TERMS_AND_CONDITIONS":
      return {
        ...state,
        termsAndConditions: payload,
      };
    case "APPLICATION_SUBMITTED":
      return {
        ...state,
        msg: payload,
      };
    case "CLEAR_ALL":
      return {
        ...state,
        msg: "",
      };
    default:
      return state;
  }
};

export default applicationFormReducer;

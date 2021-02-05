const initialState = {
  msg: "",
};

const becomeAnInstructorReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "APPLICATION_SENT":
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

export default becomeAnInstructorReducer;

const initialState = {
  msg: "",
};

const authReducer = (state = initialState, action) => {
  // Object Destructuring
  const { type, payload } = action;

  switch (type) {
    case "":
      return {
        ...state,
        msg: payload,
      };
    default:
      return state;
  }
};

export default authReducer;

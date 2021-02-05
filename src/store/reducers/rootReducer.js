import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import authReducer from "./authReducer";
import becomeAnInstructorReducer from "./becomeAnInstructorReducer";

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  becomeAnInstructor: becomeAnInstructorReducer,
});

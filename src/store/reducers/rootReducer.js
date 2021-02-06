import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import authReducer from "./authReducer";
import becomeAnInstructorReducer from "./becomeAnInstructorReducer";
import applicationFormReducer from "./applicationFormReducer";

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  becomeAnInstructor: becomeAnInstructorReducer,
  applicationForm: applicationFormReducer,
});

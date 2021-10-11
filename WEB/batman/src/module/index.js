import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import fullscreen from "./fullscreen";
import runway from "./runway";
import log from "./log";
import start_property from "./start_property";
import login, { loginSaga } from "./login";

const rootReducer = combineReducers({
  fullscreen,
  runway,
  log,
  start_property,
  login,
});

export function* rootSaga() {
  yield all([loginSaga()]);
}

export default rootReducer;

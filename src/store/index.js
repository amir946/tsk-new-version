import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import { reducers } from "./../reducers/combineReducers";
import thunk from "redux-thunk";

export const store = createStore(reducers, compose(applyMiddleware(thunk)));

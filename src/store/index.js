import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import catigory from "./Categories";
import product from "./products";
import cart from "./Cart";
import thunk from "redux-thunk";
let reducers = combineReducers({ catigory, product, cart });

let store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();

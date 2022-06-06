import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import categories from "./Categories";
import products from "./products";
import cart from "./Cart";
let reducers = combineReducers({
  creducers: categories,
  preducers: products,
  cart: cart,
});

let store = () => {
  return createStore(reducers, composeWithDevTools());
};
export default store();

import axios from "axios";
const initialState = {
  Products: [],
};
let api = "https://app-auth-obieda.herokuapp.com/api/v1/products";
export default function productReduser(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        Products: action.payload,
      };
    case "DECREMENT_INVENTORY":
      let decArray = [...state.Products];
      let decItem = action.payload;
      let arr = decArray.map((ele) => {
        if (ele.name == decItem.name) {
          ele.inventoryCount = ele.inventoryCount - 1;
          return ele;
        }
        return ele;
      });
      return { Products: arr };

    default:
      return state;
  }
}
export const decrementInventory = (item) => {
  return {
    type: "DECREMENT_INVENTORY",
    payload: item,
  };
};

export const getActionProduct = (payload) => {
  console.log("payload ", payload);
  return {
    type: "GET_PRODUCT",
    payload: payload,
  };
};

export const getRemoteProduct = () => {
  return async (dispatch) => {
    const res = await axios.get(api);
    console.log(res.data);
    dispatch(getActionProduct(res.data));
  };
};

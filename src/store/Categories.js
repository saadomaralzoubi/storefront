
import axios from "axios";

let api = "https://app-auth-obieda.herokuapp.com/api/v1/categories";

const initialState = {
  category: [],
  selectedCategory: "",
  categoryDescription: "",
};
export default function categoryReduser(state = initialState, action) {
  switch (action.type) {
    case "GET":
      return {
        category: action.payload,
        selectedCategory: action.payload[0].dispalyName,
      };

    case "CATEGORTY_SELECTED":
      let selectedCategory = state.category.find(
        (category) => category.dispalyName === action.payload.dispalyName
      );
      console.log("selectedCategory ", selectedCategory);

      return {
        category: state.category,
        selectedCategory: selectedCategory,
      };
    default:
      return state;
  }
}
export const getSelectedCategory = (value) => {
  return { type: "CATEGORTY_SELECTED", payload: value };
};
export const getAction = (payload) => {
  // console.log("payload ",payload)
  return {
    type: "GET",
    payload: payload,
  };
};

export const getRemoteData = () => {
  return async (dispatch) => {
    const res = await axios.get(api);
    // console.log(res.data);
    dispatch(getAction(res.data));
  };
};

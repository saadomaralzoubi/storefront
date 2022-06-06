const intialState = {
  categories: [
    {
      name: "cars",
      id: 1,
      description: "best cars",
    },
   
    {
      name: "Food",
      id: 2,
      description: "best Food ",
    },
    {
      name: "phones",
      id: 3,
      description: "best phones",
    },
   
  ],
  selectedCategory: {},
};

export default function state(state = intialState, action) {
  switch (action.type) {
    case "CATEGORY_SELECTED":
      let selectedCategory = state.categories.find(
        (category) => category.id === action.payload
      );
      return {
        ...state,
        selectedCategory: selectedCategory,
      };
    default:
      return state;
  }
}
export const getSelectedCategory = (value) => {
  return {
    type: "CATEGORY_SELECTED",
    payload: value,
  };
};

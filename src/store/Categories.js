const intialState = {
  categories: [
    {
      name: "cars",
      id: 1,
      description: "best cars",
    },
    {
      name: "food",
      id: 2,
      description: "best food",
    },
    {
      name: "phones",
      id: 3,
      description: "best phones",
    },
  ],
  selectedCategory: {},
};

export default function reducer(state = intialState, action) {
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
export const SelectedCategory = (value) => {
  return {
    type: "CATEGORY_SELECTED",
    payload: value,
  };
};

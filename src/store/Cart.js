const intialState = {
  CartItems: [],
  CartItemsCount: 0,
  active: false,
};
export default function CartReducer(state = intialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      let newCartItems = [...state.CartItems];
      let newCartItemsCount = state.CartItemsCount;
      let product = action.payload;
      console.log(product);
      let productExists = newCartItems.find(
        (cartItem) => cartItem.id === product.id
      );
      if (productExists) {
        productExists.quantity += 1;
        newCartItemsCount += 1;
      } else {
        product.quantity = 1;
        newCartItems.push(product);
        newCartItemsCount += 1;
      }
      return {
        ...state,
        CartItems: newCartItems,
        CartItemsCount: newCartItemsCount,
      };
    case "REMOVE_FROM_CART":
      let newCartItems2 = [...state.CartItems];
      let newCartItemsCount2 = state.CartItemsCount;
      let product2 = action.payload;
      let productExists2 = newCartItems2.find(
        (cartItem) => cartItem.id === product2.id
      );
      if (productExists2.quantity === 1) {
        newCartItems2 = newCartItems2.filter(
          (cartItem) => cartItem.id !== product2.id
        );
        newCartItemsCount2 -= 1;
      } else {
        productExists2.quantity -= 1;
        newCartItemsCount2 -= 1;
      }
      return {
        ...state,
        CartItems: newCartItems2,
        CartItemsCount: newCartItemsCount2,
      };
    case "CLEAR_CART":
      return {
        ...state,
        CartItems: [],
        CartItemsCount: 0,
      };
    case "TOGGLE_CART":
      return {
        ...state,
        active: !state.active,
      };
    default:
      return state;
  }
}

export const addToCart = (value) => {
  console.log(value);
  return {
    type: "ADD_TO_CART",
    payload: value,
  };
};

export const removeFromCart = (value) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: value,
  };
};
export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};
export const toggleCart = () => {
  return {
    type: "TOGGLE_CART",
  };
};

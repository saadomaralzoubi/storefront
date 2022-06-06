const intialState = {
  products: [
    {
      id: 1,
      categoryId: 1,
      name: "honda ",
      price: "30000$",
      description: "honda civic",
      image:
        "https://cdn.jdpower.com/JDPA_2020-Honda-Civic-Sport-Touring-Hatchback-White-Front-Quarter.jpg",
    },

    {
      id: 2,
      categoryId: 2,
      name: "Mac",
      price: "10$",
      description: "big Mac",
      image:
        "https://www.eatthis.com/wp-content/uploads/sites/4//media/images/ext/111576974/mcdonalds-Big-Mac-1024-750.jpg?quality=82&strip=1&w=800",
    },

    {
      id: 3,
      categoryId: 3,
      name: "iphone",
      price: "1000$",
      description: "iphone 12 pro max",
      image:
        "https://cdn.shopify.com/s/files/1/0409/7245/products/skyblue_5b29142a-95fe-4a5a-bfc6-9542394c2265_900x.png?v=1604915551",
    },
  ],
  selectedProduct: {},
};
export default function state(state = intialState, action) {
  switch (action.type) {
    case "PRODUCT_SELECTED":
      let selectedProduct = state.products.find(
        (product) => product.id === action.payload
      );
      return {
        ...state,
        selectedProduct: selectedProduct,
      };
    case "Decrement_Product_Quantity":
      let products = state.products;

      let newproducts = products.map((product) => {
        console.log(product.items);
        if (product.id === action.payload && product.items > 0) {
          return { ...product, items: product.items - 1 };
        } else {
          return product;
        }
      });
      return {
        ...state,
        products: newproducts,
      };

    default:
      return state;
  }
}
export const getSelectedProduct = (value) => {
  return {
    type: "PRODUCT_SELECTED",
    payload: value,
  };
};
export const decrementProductQuantity = (value) => {
  return {
    type: "Decrement_Product_Quantity",
    payload: value,
  };
};


import Button from "@mui/material/Button";

import { addToCart } from "../store/Cart";
import { decrementInventory } from "../store/products";
import { connect, useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRemoteProduct } from "../store/products";
import { getRemoteData } from "../store/Categories";

function Products(props) {
  const newProduct = useSelector((state) => state.product.Products);
  const category = useSelector((state) => state.catigory.selectedCategory);
  const dispatchData = useDispatch();
  useEffect(() => {
    dispatchData(getRemoteData());
    dispatchData(getRemoteProduct());
  }, []);



  console.log("category", category);
 
  return (
    <>
      {newProduct.map((product) => {
        if (product.categoryId === props.catagory?.selectedCategory?.id) {
          return (
            <div>
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <img src={product.image} alt="product" />
              <Button
                onClick={() => {
                  props.addToCart(product);
                  props.decrementProductQuantity(product.id);
                }}
              >
                Add to Cart
              </Button>
              <p>cart :0</p>
            </div>
          );
        } else {
          return null;
        }
      })}
    </>
  );
}
const mapStateToPrps = (state) => ({
  category: state.catigory.selectedCategory,
  product: state.product.Products,
});
const mapDispatchToProps = { addToCart, decrementInventory };
export default connect(mapStateToPrps, mapDispatchToProps)(Products);

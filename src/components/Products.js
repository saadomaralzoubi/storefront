import { connect } from "react-redux";
import { addToCart } from "../store/Cart";
import { decrementProductQuantity } from "../store/products";
import Button from "@mui/material/Button";
let sum=0

function Products(props) {
  const products = props.reducers.products;

  return (
    <>
      {products.map((product) => {
        if (product.categoryId === props.catagory?.selectedCategory?.id) {
          return (
            <div>
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <img src={product.image} alt="product" />
              <Button
                onClick={() => {
                  sum=sum+1
                  props.addToCart(product);
                  props.decrementProductQuantity(product.id);
                }}
              >
                Add to Cart
              </Button>
              <p>cart : {sum}</p>
            </div>
          );
        } else {
          
          return null;
        }
      })}
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    reducers: state.preducers,
    catagory: state.creducers,
  };
};
const mapDispatchToProps = {
  addToCart,
  decrementProductQuantity,
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);

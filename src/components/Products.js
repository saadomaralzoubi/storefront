import { connect } from "react-redux";
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
export default connect(mapStateToProps)(Products);

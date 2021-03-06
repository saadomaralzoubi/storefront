import "./App.css";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Products from "./components/Products";
import SimpleCart from "./components/simple-cart";
import { connect } from "react-redux";
import { When } from "react-if";
import Cart from "./components/Cart";
import { getRemoteData } from "./store/Categories";
function App(props) {
  useEffect(() => {
    getRemoteData();
  }, []);
  return (
    <div className="App">
      <Header />
      <When condition={!props.cart.active}>
        <Categories />
        <SimpleCart />
        <Products />
      </When>
      <When condition={props.cart.active}>
        <Cart />
      </When>
      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
export default connect(mapStateToProps)(App);

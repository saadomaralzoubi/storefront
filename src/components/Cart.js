import { connect } from "react-redux";
import { clearCart } from "../store/Cart";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { toggleCart } from "../store/Cart";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
function Cart(props) {
  return (
    <div>
      <ul>
        {props.cart.CartItems.map((item, index) => {
          return (
            <>
              <li key={index}>
                <Card>
                  <CardContent>
                    <img src={item.image} alt="pic" />

                    <Typography gutterBottom variant="h5" component="h2">
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <ButtonGroup>
                      <Button onClick={() => props.clearCart(item)}>
                        Clear Cart
                      </Button>
                    </ButtonGroup>
                  </CardActions>
                </Card>
              </li>

              <ButtonGroup
                disableElevation
                variant="contained"
                className="cart"
              ></ButtonGroup>
            </>
          );
        })}
      </ul>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = {
  clearCart,
  toggleCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

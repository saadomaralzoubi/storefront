import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { connect } from "react-redux";
import { removeFromCart } from "../store/Cart";
function SimpleCart(props) {
  return (
    <div>
      <Grid item xs={12} md={6}>
        {props.cart.CartItems.map((item, index) => {
          return (
            <List
              key={index}
              sx={{ width: "100%", maxWidth: 360, bgcolor: "#EEE" }}
            >
              <ListItem>
                <ListItemText primary={item.name} />

                <IconButton
                  onClick={() => {
                    props.removeFromCart(item);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            </List>
          );
        })}
      </Grid>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = {
  removeFromCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);

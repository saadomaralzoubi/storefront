import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getSelectedCategory } from "../store/Categories";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";



function Categories(props) {
  const [value, setValue] = useState(0);
  const getActiveCategory = props.getSelectedCategory;

  useEffect(() => {
    getActiveCategory(value + 1);
  }, [value, getActiveCategory]);
  return (
    <div>
      <h3>Browse Our Categories</h3>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button
          onClick={() => {
            setValue(0);
          }}
        >
          cars
        </Button>
        <Button
          onClick={() => {
            setValue(1);
          }}
        >
          food
        </Button>
        <Button
          onClick={() => {
            setValue(2);
          }}
        >
          phones
        </Button>
      </ButtonGroup>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    creducers: state.creducers,
  };
};
const mapDispatchToProps = {
  getSelectedCategory,
};
export default connect(mapStateToProps, mapDispatchToProps)(Categories);

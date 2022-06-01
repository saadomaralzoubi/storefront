import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { SelectedCategory } from "../store/Categories";

function Categories(props) {
  const [Id, setId] = useState(0);
  const getActiveCategory = props.SelectedCategory;

  useEffect(() => {
    getActiveCategory(Id + 1);
  }, [Id, getActiveCategory]);
  return (
    <div>
      <h3>Browse Our Categories</h3>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button
          onClick={() => {
            setId(0);
          }}
        >
          cars
        </Button>
        <Button
          onClick={() => {
            setId(1);
          }}
        >
          food
        </Button>
        <Button
          onClick={() => {
            setId(2);
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
  SelectedCategory,
};
export default connect(mapStateToProps, mapDispatchToProps)(Categories);



import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";



import { connect, useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import { getSelectedCategory, getRemoteData } from "../store/Categories";

function Categories(props) {
  const dispatchData = useDispatch(); 

 
  const { getSelectedCategory } = props;
  const [dispalyName, setdispalyName] = useState(1);
  useEffect(() => {
    console.log("dispalyName>>>>>>>>>   ", dispalyName);
    getSelectedCategory(dispalyName);
  }, [dispalyName, getSelectedCategory]);
  useEffect(() => {
    dispatchData(getRemoteData());
  }, []);
  const newCategory = useSelector((state) => state.catigory.category);
  
  return (
    <>
      <ButtonGroup variant="text" aria-label="text button group">
        {newCategory.map((category) => {
          console.log("Onclick : ", category.dispalyName);
          return (
            <Button
              key={category.id}
              onClick={() => {
                setdispalyName(category);
              }}
            >
              {category.dispalyName}
            </Button>
          );
        })}
      </ButtonGroup>
      <h2>{props.category.selectedCategory?.dispalyName}</h2>
      <h6>{props.category.selectedCategory?.description}</h6>
    </>
  );
}

const mapStateToPrps = (state) => ({ category: state.catigory });
const mapDispatchToProps = { getSelectedCategory }; 
export default connect(mapStateToPrps, mapDispatchToProps)(Categories);

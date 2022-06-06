import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getSelectedCategory } from "../store/Categories";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Categories(props) {
  const [value, setValue] = useState(0);
  const getActiveCategory = props.getSelectedCategory;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    getActiveCategory(value + 1);
  }, [value, getActiveCategory]);
  return (
    <div>
      <h3>Browse Our Categories</h3>

      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="cars" />
          <Tab label="food" />
          <Tab label="phones" />
        </Tabs>
      </Box>

      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
      <TabPanel value={value} index={3}></TabPanel>
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

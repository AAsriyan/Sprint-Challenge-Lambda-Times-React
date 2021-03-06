import React from "react";
import PropTypes from "prop-types";

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={props.tab === props.selected ? "tab active-tab" : "tab"}
      onClick={tab => props.changeSelected(props.tab)}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  selected: PropTypes.string.isRequired,
  changeSelected: PropTypes.func.isRequired
};

export default Tab;

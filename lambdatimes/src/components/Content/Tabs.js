import React from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((t, index) => {
          return (
            <Tab
              selected={props.selected}
              changeSelected={props.changeSelected}
              tab={t}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.oneOf([
      "all",
      "javascript",
      "technology",
      "node",
      "React.js",
      "bootstrap"
    ])
  ),
  selected: PropTypes.string.isRequired,
  changeSelected: PropTypes.func.isRequired
};

export default Tabs;

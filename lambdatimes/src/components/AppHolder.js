import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Content from "../components/Content/Content";

const AppHolder = props => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Content />
    </div>
  );
};

export default AppHolder;

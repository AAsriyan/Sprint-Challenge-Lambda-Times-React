import React from "react";

const authenticate = AppHolder => Login => props => {
  const user = localStorage.getItem("username");

  if (user) {
    return <AppHolder />;
  } else {
    return <Login />;
  }
};

export default authenticate;

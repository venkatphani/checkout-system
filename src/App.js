import React from "react";
import propTypes from "prop-types";

function App(props) {
  const { children } = props;
  return <div>{children}</div>;
}

App.propTypes = {
  children: propTypes.node.isRequired,
};

export default App;

import React from "react";
import PropTypes from "prop-types";

const RequiresArray = props => {
  return <div>{props.array}</div>;
};

RequiresArray.propTypes = {
  array: PropTypes.array.isRequired
};

export default RequiresArray;

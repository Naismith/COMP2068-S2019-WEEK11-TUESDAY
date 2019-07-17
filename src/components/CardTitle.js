import React, { Fragment } from "react";

const CardTitle = ({ name, onIncrement, onDecrement }) => {
  return (
    <Fragment>
      <h5 className="card-title">{name}</h5>
      <button onClick={onIncrement} className="btn btn-primary">
        Increment
      </button>
      <button onClick={onDecrement} className="btn btn-primary">
        Decrement
      </button>
    </Fragment>
  );
};

export default CardTitle;

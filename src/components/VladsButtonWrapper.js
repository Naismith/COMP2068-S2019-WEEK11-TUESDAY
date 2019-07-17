import React from "react";

function VladsButtonWrapper({ onIncrement, onDecrement }) {
  return (
    <div>
      <button onClick={onIncrement} className="btn btn-success">
        Increment
      </button>
      <button onClick={onDecrement} className="btn btn-danger">
        Decrement
      </button>
    </div>
  );
}

export default VladsButtonWrapper;

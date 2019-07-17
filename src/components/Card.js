import React from "react";

function Card({ children, ...props }) {
  return (
    <div {...props} className="card">
      {children}
    </div>
  );
}

export default Card;

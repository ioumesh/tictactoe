import React from "react";

const GameSquare = ({ value, onClick }) => {

  return <button className={value ==="X"? "btn disabled":"btn" && value==="O"?"btn disabled green":"btn"} onClick={onClick}>{value}</button>;
};

export default GameSquare;

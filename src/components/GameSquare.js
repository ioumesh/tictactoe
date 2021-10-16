import React from "react";

const GameSquare = ({ value, onClick }) => {

  return <button className={value ==="X"? "btn disabled":"btn green disabled"} onClick={onClick}>{value}</button>;
};

export default GameSquare;

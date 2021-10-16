import React from "react";

const GameSquare = ({ value, onClick }) => {
  return <button className={value?"btn disabled":"btn"} onClick={onClick}>{value}</button>;
};

export default GameSquare;

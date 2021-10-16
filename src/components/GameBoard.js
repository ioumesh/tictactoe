import React from "react";
import GameSquare from "./GameSquare";

const GameBoard = ({ squares, onClick }) => {
  return (
    <div className="board">
      <div>
        <GameSquare
          value={squares[0]}
          onClick={() => {
            onClick(0);
          }}
        />
        <GameSquare
          value={squares[1]}
          onClick={() => {
            onClick(1);
          }}
        />
        <GameSquare
          value={squares[2]}
          onClick={() => {
            onClick(2);
          }}
        />
      </div>
      <div>
        <GameSquare
          value={squares[3]}
          onClick={() => {
            onClick(3);
          }}
        />
        <GameSquare
          value={squares[4]}
          onClick={() => {
            onClick(4);
          }}
        />
        <GameSquare
          value={squares[5]}
          onClick={() => {
            onClick(5);
          }}
        />
      </div>
      <div>
        <GameSquare
          value={squares[6]}
          onClick={() => {
            onClick(6);
          }}
        />
        <GameSquare
          value={squares[7]}
          onClick={() => {
            onClick(7);
          }}
        />
        <GameSquare
          value={squares[8]}
          onClick={() => {
            onClick(8);
          }}
        />
      </div>
    </div>
  );
};

export default GameBoard;

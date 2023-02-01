import Square from "./Square";
import { useState } from "react";

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(null));



  const onSquareClick = (i) => {
    if (square[i] || calculateWinner(square)) {
      return; //check if square is filled, yes then return back to fuction before it updates state
    }
    const nextSquares = square.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    setSquare(nextSquares); //re-renndering component because updating state
    setXIsNext(!xIsNext);

    console.log("klikattu");
  };

     

  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={square[0]} onSquareClick={() => onSquareClick(0)} />
        <Square value={square[1]} onSquareClick={() => onSquareClick(1)} />
        <Square value={square[2]} onSquareClick={() => onSquareClick(2)} />
      </div>
      <div className="board-row">
        <Square value={square[3]} onSquareClick={() => onSquareClick(3)} />
        <Square value={square[4]} onSquareClick={() => onSquareClick(4)} />
        <Square value={square[5]} onSquareClick={() => onSquareClick(5)} />
      </div>
      <div className="board-row">
        <Square value={square[6]} onSquareClick={() => onSquareClick(6)} />
        <Square value={square[7]} onSquareClick={() => onSquareClick(7)} />
        <Square value={square[8]} onSquareClick={() => onSquareClick(8)} />
      </div>
    </>
  );
}

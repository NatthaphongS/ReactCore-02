import "./index.css";
import React, { useState } from "react";
import { createRoot } from "react-dom";

// React
function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [round, setRound] = useState(1);
  const [isEnd, setIsEnd] = useState(false);
  const [winner, setWinner] = useState("");
  function setAns(slot) {
    if (board[slot] == "") {
      if (round % 2 == 0) {
        board.splice(slot, 1, "X");
      } else {
        board.splice(slot, 1, "O");
      }
      setRound(round + 1);
      setBoard(board);
    }
  }
  function checkWin(xo) {
    if (
      (board[0] == xo && board[1] == xo && board[2] == xo) ||
      (board[3] == xo && board[4] == xo && board[5] == xo) ||
      (board[6] == xo && board[7] == xo && board[8] == xo) ||
      (board[0] == xo && board[3] == xo && board[6] == xo) ||
      (board[1] == xo && board[4] == xo && board[7] == xo) ||
      (board[2] == xo && board[5] == xo && board[8] == xo) ||
      (board[0] == xo && board[4] == xo && board[8] == xo) ||
      (board[2] == xo && board[4] == xo && board[6] == xo)
    ) {
      setWinner(`The Winner is ${xo}`);
      setIsEnd(true);
      return;
    }
    if (round == 9) {
      setWinner(`-Draw-`);
      setIsEnd(true);
    }
  }
  function setAns(slot) {
    if (isEnd) {
      return;
    }
    if (board[slot] == "") {
      if (round % 2 == 0) {
        board.splice(slot, 1, "X");
      } else {
        board.splice(slot, 1, "O");
      }
      setRound(round + 1);
      setBoard(board);
    }
    checkWin("X");
    checkWin("O");
  }

  function reset() {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setIsEnd(false);
    setRound(1);
    setWinner("");
  }

  return (
    <main>
      <div className="gameBoard">
        <h1>Tic! Tac! Toe!</h1>
        {isEnd ? "" : <p>Player : {round % 2 == 0 ? "X" : "O"}</p>}
        <div className="board">
          <div className="slot" onClick={() => setAns(0)}>
            {board[0]}
          </div>
          <div className="slot" onClick={() => setAns(1)}>
            {board[1]}
          </div>
          <div className="slot" onClick={() => setAns(2)}>
            {board[2]}
          </div>
          <div className="slot" onClick={() => setAns(3)}>
            {board[3]}
          </div>
          <div className="slot" onClick={() => setAns(4)}>
            {board[4]}
          </div>
          <div className="slot" onClick={() => setAns(5)}>
            {board[5]}
          </div>
          <div className="slot" onClick={() => setAns(6)}>
            {board[6]}
          </div>
          <div className="slot" onClick={() => setAns(7)}>
            {board[7]}
          </div>
          <div className="slot" onClick={() => setAns(8)}>
            {board[8]}
          </div>
        </div>
        <button type="button" className="reset" onClick={reset}>
          Reset
        </button>
        {isEnd && (
          <div className="winner">
            <h2>{winner}</h2>
          </div>
        )}
      </div>
    </main>
  );
}

// ReactDOM
const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);

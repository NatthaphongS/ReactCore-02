import "./index.css";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";

// React
function Calculator() {
  const [result, setResult] = useState("0");
  const [board, setBoard] = useState([]);

  function input1() {
    setResult(result + 1);
  }
  function input2() {
    setResult(result + 2);
  }
  function input3() {
    setResult(result + 3);
  }
  function input4() {
    setResult(result + 4);
  }
  function input5() {
    setResult(result + 5);
  }
  function input6() {
    setResult(result + 6);
  }
  function input7() {
    setResult(result + 7);
  }
  function input8() {
    setResult(result + 8);
  }
  function input9() {
    setResult(result + 9);
  }
  function input0() {
    setResult(result + 0);
  }
  function inputdot() {
    if (!result.includes(".")) {
      setResult(result + ".");
    }
  }
  function deleteone() {
    if (
      result == "-1" ||
      result == "-2" ||
      result == "-3" ||
      result == "-4" ||
      result == "-5" ||
      result == "-6" ||
      result == "-7" ||
      result == "-8" ||
      result == "-9"
    ) {
      setResult("0");
    } else if (result != 0) {
      setResult(result.slice(0, -1));
    }
  }
  function clear() {
    setResult("0");
  }
  function posneg() {
    if (result != "0") {
      setResult(`${-result}`);
    }
  }
  function percent() {
    setResult(`${result / 100}`);
  }

  function plus() {
    const plusFn = (x, y) => `${+x + +y}`;
    board.push(plusFn);
    board.push(result);
    setBoard(board);
    setResult("0");
  }
  function minus() {
    const minusFn = (x, y) => +x - +y;
    board.push(minusFn);
    board.push(result);
    setBoard(board);
    setResult("0");
  }
  function multi() {
    const multiFn = (x, y) => +x * +y;
    board.push(multiFn);
    board.push(result);
    setBoard(board);
    setResult("0");
  }
  function devide() {
    const devideFn = (x, y) => +x / +y;
    board.push(devideFn);
    board.push(result);
    setBoard(board);
    setResult("0");
  }
  function equal() {
    if (board.length == 2) {
      board.push(result);
      setResult(`${board[0](board[1], board[2])}`);
      board.splice(0, board.length);
      setBoard(board);
    }
  }

  //   function sum() {}

  return (
    <div className="container">
      <div className="calculator">
        <div className="window">
          <p className="result">{`${+result}`}</p>
        </div>
        <div className="console">
          <div className="leftpanel">
            <div className="leftpanel_upper">
              <div onClick={clear} className="clear">
                C
              </div>
              <div onClick={posneg} className="pos_neg">
                &#177;
              </div>
              <div onClick={percent} className="percent">
                &#37;
              </div>
            </div>
            <div className="leftpanel_lowwer">
              <div>
                <div onClick={input7} className="n7">
                  7
                </div>
                <div onClick={input8} className="n8">
                  8
                </div>
                <div onClick={input9} className="n9">
                  9
                </div>
              </div>
              <div>
                <div onClick={input4} className="n4">
                  4
                </div>
                <div onClick={input5} className="n5">
                  5
                </div>
                <div onClick={input6} className="n6">
                  6
                </div>
              </div>
              <div>
                <div onClick={input3} className="n3">
                  3
                </div>
                <div onClick={input2} className="n2">
                  2
                </div>
                <div onClick={input1} className="n1">
                  1
                </div>
              </div>
              <div>
                <div onClick={input0} className="n0">
                  0
                </div>
                <div onClick={inputdot} className=".">
                  .
                </div>
                <div onClick={deleteone} className="del">
                  &#8592;
                </div>
              </div>
            </div>
          </div>
          <div className="rightpanel">
            <div onClick={devide} className="division">
              &#247;
            </div>
            <div onClick={multi} className="multi">
              &#215;
            </div>
            <div onClick={minus} className="minus">
              &#8722;
            </div>
            <div onClick={plus} className="sum">
              &#43;
            </div>
            <div onClick={equal} className="equal">
              &#61;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ReactDOM
const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<Calculator />);

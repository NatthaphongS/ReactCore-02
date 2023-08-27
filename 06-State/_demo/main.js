// ReactDOM
// #1. FC : App
function App() {
  // #2. Handle Logic#1.
  // console.log(React);
  // state:number=0
  // React.useState(0);
  // .useState(initialstate) is a function that keep in React-object it will return array (with 2element in array)
  //   const array = React.useState(0);
  //   console.log(array);
  // .useState will return [initialstate , .....]
  //   const [a, b] = array;
  // destructering (pattern matching)
  //   console.log(a); // initialstate = 0
  //   console.log(b); // function set state
  const [state, setState] = React.useState(5);
  //   initial state สามารถเก็บค่าได้ทุกแบบ
  //   เวลานำ state มาใช้ ทำได้แค่ read-only ถ้าจะmodifyต้องทำใน function set state เท่านั้น
  //  แล้วทำไมไม่ใช้ตัวแปรแบบ JavaScript ?????????
  let n = 10; // ตัวแปรแบบ javascript
  console.log("n in App function", n);
  console.log("state", state);
  function handleIncrease() {
    n = n + 1;
    console.log("n in handleIncrease function", n);
    setState(state + 1);
    // เมื่อ setState ทำงาน ==> function App จะrenderใหม่ทั้งหมดทุกครั้ง โดยที่ค่า stateจะอัพเดตตามไปด้วย
    // state จะถูก reset ก็ต่อเมื่อ UI ตายเท่านั้น
  }
  function handleDecrease() {
    setState(state - 1);
  }
  function handleSetZero() {
    setState(0);
  }
  //  #3. Return of #1 => UI
  return (
    <div className="container">
      <div className="upper">
        {/* <h1>State : {state}</h1> */}
        <button onClick={handleIncrease}>Increase</button>
        {/* <span>{n}</span> */}
        {/* if you click increase n will increase but UI won't be Update*/}
        <span>{state}</span>
        <button onClick={handleDecrease}>Decrease</button>
      </div>
      <div className="lower">
        <button onClick={handleSetZero}>Reset</button>
      </div>
    </div>
  );
}
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);

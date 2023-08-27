// ReactDOM
function App() {
  // Function component => Render UI
  // 1. Define Function for button
  const handelClick = () => alert("Carpuchino"); //Javascript function => Do any logic/sideEffect
  return (
    <div>
      {/* 2. Blinding FN with UI */}
      {/* Ver 1. Naming Blinding */}
      <button onClick={handelClick}>Click si Click si</button>
      {/* Warning function blinding */}
      {/* <button onClick={handelClick()}>Click si Click si</button> */}
      {/* if we use handelClick with () onClick will be equal return of that FN(onClick={undifined}) */}
      {/* <button onMouseEnter={handelClick}>Click si Click si</button> */}
      {/* Ver 2. FN literal Blinding*/}
      <button onClick={() => alert("Latte")}>Click me for latte</button>
    </div>
  );
}
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);

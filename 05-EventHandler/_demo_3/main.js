// ReactDOM
function App() {
  // 1. Define Function
  const handleEvent1 = (event, a, b, c) => {
    console.log(event, a, b, c);
  };
  const handleEvent2 = (a, b, c) => {
    console.log(a, b, c);
  };

  function Logic(x) {
    console.log(x * 2);
  }
  function Wrapper(event) {
    console.log("Wrapper");
    Logic(5);
  }

  return (
    <div>
      {/* problem:Can't custom parameter */}
      {/* <input type="text" onChange={handleEvent} /> */}
      {/* Wrapper Function : ()=>call another function */}
      <input type="text" onChange={(e) => handleEvent1(e, 5, 6, 7)} />
      {/* event=e,a=5,b=6,c=7 */}
      <input type="text" onChange={(e) => handleEvent2(5, 6, 7)} />
      {/* <input type="text" onChange={Logic(5)} /> */}
      {/* Can' do this */}
      {/* must have another function for wrapper */}
      <input type="text" onChange={Wrapper} />
      {/* a=5,b=6,c=7 */}
    </div>
  );
}
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);

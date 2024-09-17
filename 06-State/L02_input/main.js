// ReactDOM
function App() {
  const [hideText, setStateText] = React.useState(false);

  function handelClick() {
    setStateText(!hideText);
  }

  return (
    <>
      <button onClick={handelClick}>Click to hide me</button>
      <h2 className={`${hideText ? "hide" : "show"}`}>Text</h2>
      {/* V.2 */}
      {/* {hideText && <h2>Text</h2> */}
    </>
  );
}

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);

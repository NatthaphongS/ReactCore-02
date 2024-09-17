// ReactDOM
function App() {
  const [hideButton, setStateButton] = React.useState(false);

  function handelClick() {
    setStateButton(!hideButton);
  }

  return (
    <button onClick={handelClick} className={`${hideButton ? "hide" : "show"}`}>
      Click to hide me
    </button>
    // V2....
    // {hideButton && <button onClick={handelClick}>Click to hide me</button>}
  );
}
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);

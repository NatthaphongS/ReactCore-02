// ReactDOM
function App() {
  const [textHide, setStateText] = React.useState(true);

  function hanbleToggle() {
    setStateText(!textHide);
  }

  return (
    <>
      <button onClick={hanbleToggle}>{textHide ? "Hide" : "Show"}</button>
      {textHide && <h1>Text</h1>}
      {/* return 1st false on last */}
    </>
  );
}
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);

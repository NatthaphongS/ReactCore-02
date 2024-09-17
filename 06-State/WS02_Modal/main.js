// ReactDOM
function App() {
  const [isPop, setIsPop] = React.useState(false);
  function openPop() {
    setIsPop(!isPop);
  }
  function closePop() {
    setIsPop(!isPop);
  }
  function Page() {
    return (
      <div className="page">
        <h1>Modal test</h1>
        <button onClick={openPop}>Show PopUp</button>
      </div>
    );
  }
  function CreatePopup() {
    return (
      <div className="popup">
        <div className="popup__box">
          <h1>Are you ok?</h1>
          <p>Just checking in</p>
          <button onClick={closePop}>Yeah, thanks!</button>
          <div className="close">
            <button onClick={closePop}>&#x2716;</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main>
      <Page />
      {isPop && <CreatePopup />}
    </main>
  );
}
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);

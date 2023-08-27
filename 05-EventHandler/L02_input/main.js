// ReactDOM
function App() {
  const handleInput = (event) => console.log(event.target.value);
  return (
    <div>
      <input type="text" onChange={handleInput} />
    </div>
  );
}
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);

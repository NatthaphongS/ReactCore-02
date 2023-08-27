// ReactDOM
function App() {
  const handleSelect = (event) => console.log(event.target.value);
  return (
    <div>
      <label htmlFor="country">Please choose coutry</label>
      <br />
      <select id="country" onChange={handleSelect}>
        <option value="thailand">Thailand</option>
        <option value="malaysia">Malaysia</option>
        <option value="laos">Laos</option>
        <option value="singapore">Singapore</option>
        <option value="veitnam">Veitnam</option>
      </select>
    </div>
  );
}
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);

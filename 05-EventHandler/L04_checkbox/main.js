// ReactDOM
function App() {
  const handleCheck = (event) => {
    // console.log(event);
    console.log(event.target.name);
    console.log(event.target.value);
    console.log(event.target.checked);
  };
  return (
    <div>
      <h3>PhoneBrand</h3>
      <input
        type="checkbox"
        id="iphone"
        name="iphone"
        value="iphone"
        onChange={handleCheck}
      />
      <label htmlFor="iphone">Iphone</label>
      <br />
      <input
        type="checkbox"
        id="samsung"
        name="samsung"
        value="samsung"
        onChange={handleCheck}
      />
      <label htmlFor="samsung">Samsung</label>
      <br />
      <input
        type="checkbox"
        id="nothing-phone"
        name="nothing-phone"
        value="nothing-phone"
        onChange={handleCheck}
      />
      <label htmlFor="nothing-phone">Nothing Phone</label>
      <br />
    </div>
  );
}
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);

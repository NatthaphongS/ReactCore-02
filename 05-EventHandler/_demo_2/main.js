// ReactDOM
function App() {
  // 1. Define Function
  function handelChange(event) {
    // console.log(event);
    // console.log(event.target); // tag ที่ user กำลัง interact
    console.log(event.target.value); // ค่าที่ userพิมมา
    // event:{target:{value: '...'}}
  }
  const handelCheck = (event) => {
    console.log("check", event.target.checked);
  };
  const handleSelect = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      {/* 2. Blinding FN with UI */}
      <input onChange={handelChange} />
      {/* 1st parameter always will be event if call like this */}
      <hr />
      {/* <input onChange={(e) => console.log(e.target.value)} /> */}
      {/* โดย practice ไม่ควรนำ logic ปนกับ UI */}
      <input type="checkbox" onChange={handelCheck} id="input-id" />
      <label htmlFor="input-id">Labelllllll</label>
      <hr />
      <label htmlFor="gender-choose">Choose your gender</label>
      <select onChange={handleSelect} id="gender-choose">
        <option value=""></option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="not-specific">Not Specific</option>
      </select>
    </div>
  );
}
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);

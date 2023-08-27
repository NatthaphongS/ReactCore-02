// ReactDOM
function App() {
  const [isDark, setIsDark] = React.useState(false);

  function handleToggle() {
    setIsDark(!isDark);
  }

  return (
    <div>
      {/* <h1>Light-Mode</h1>
      <h1>Dark-Mode</h1> */}

      {/* condition rendering */}
      {/* {isDark ? <h3>Dark-Mode</h3> : <h3>Light-Mode</h3>} */}
      <h3 className={`${isDark ? "dark" : "light"}`}>
        {isDark ? "Dark" : "Light"}
      </h3>
      <button onClick={handleToggle}>Toggle mode</button>
    </div>
  );
}
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);

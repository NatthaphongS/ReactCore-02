const Mosquito = () => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const updatePosition = () => {
      const newX = Math.random() * (window.innerWidth - 50);
      const newY = Math.random() * (window.innerHeight - 50);
      setPosition({ x: newX, y: newY });

      setIsDead(false);
    };
    const interval = setInterval(updatePosition, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const hitMos = () => alert(`Got-it`);

  // img = Mosquito
  return (
    <>
      <img
        onClick={hitMos}
        src="./mos.jpeg"
        style={{
          position: "absolute",
          left: position.x + "px",
          top: position.y + "px",
          width: "80px",
          height: "80px",
          cursor: "pointer",
          borderRadius: "50%",
        }}
      />
      <img
        onClick={hitMos}
        src="./mos.jpeg"
        style={{
          position: "absolute",
          left: position2.x2 + "px",
          top: position2.y2 + "px",
          width: "80px",
          height: "80px",
          cursor: "pointer",
          borderRadius: "50%",
          transition: "all 1s",
        }}
      />
    </>
  );
};

const App = () => {
  return (
    <div>
      <Mosquito />
    </div>
  );
};

// ReactDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);

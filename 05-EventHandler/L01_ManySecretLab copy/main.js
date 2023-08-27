const Mosquito = () => {
  const [position1, setPosition1] = React.useState({ x1: 0, y1: 0 });
  const [position2, setPosition2] = React.useState({ x2: 0, y2: 0 });

  React.useEffect(() => {
    const updatePosition = () => {
      const newX1 = Math.random() * (window.innerWidth - 50);
      const newY1 = Math.random() * (window.innerHeight - 50);
      setPosition1({ x1: newX1, y1: newY1 });
      const newX2 = Math.random() * (window.innerWidth - 50);
      const newY2 = Math.random() * (window.innerHeight - 50);
      setPosition2({ x2: newX2, y2: newY2 });
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
          left: position1.x1 + "px",
          top: position1.y1 + "px",
          width: "80px",
          height: "80px",
          cursor: "pointer",
          borderRadius: "50%",
          transition: "all 1s",
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

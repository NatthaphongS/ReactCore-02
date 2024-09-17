const Mosquito = () => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isDead, setIsDead] = React.useState(false);

  function mosKill() {
    setIsDead(true);
    clearInterval(interval);
  }

  React.useEffect(() => {
    const updatePosition = () => {
      const newX = Math.random() * (window.innerWidth - 50);
      const newY = Math.random() * (window.innerHeight - 50);
      setPosition({ x: newX, y: newY });
      setIsDead(false);
    };
    const interval = setInterval(updatePosition, 1500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <img
      onClick={mosKill}
      src={`${!isDead ? "./mos.jpeg" : "./mos-dead.png"}`}
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

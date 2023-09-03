// ReactDOM
function Carousel() {
  const [move, setMove] = React.useState(1);

  function backward() {
    if (move > 1) {
      setMove(move - 1);
    } else if (move == 1) {
      setMove(5);
    }
  }
  function forward() {
    if (move < 5) {
      setMove(move + 1);
    } else if (move == 5) {
      setMove(1);
    }
  }

  return (
    <main>
      <h1>Carousel</h1>
      <div className="container">
        <div className="go_left" onClick={backward}>
          &#10148;
        </div>
        <div
          className={
            move == 1
              ? "pic center"
              : move == 2
              ? "pic left"
              : move == 5
              ? "pic right"
              : "pic"
          }
        >
          <img src="https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        </div>
        <div
          className={
            move == 1
              ? "pic right"
              : move == 2
              ? "pic center"
              : move == 3
              ? "pic left"
              : "pic"
          }
        >
          <img src="https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        </div>
        <div
          className={
            move == 2
              ? "pic right"
              : move == 3
              ? "pic center"
              : move == 4
              ? "pic left"
              : "pic"
          }
        >
          <img src="https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        </div>
        <div
          className={
            move == 3
              ? "pic right"
              : move == 4
              ? "pic center"
              : move == 5
              ? "pic left"
              : "pic"
          }
        >
          <img src="https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        </div>
        <div
          className={
            move == 4
              ? "pic right"
              : move == 5
              ? "pic center"
              : move == 1
              ? "pic left"
              : "pic"
          }
        >
          <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        </div>
        <div className="go_right" onClick={forward}>
          &#10148;
        </div>
      </div>
    </main>
  );
}
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<Carousel />);

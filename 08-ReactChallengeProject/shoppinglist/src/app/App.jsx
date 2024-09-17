import "./App.scss";
import Form from "../component/Form";
import List from "../component/List";

function App() {
  return (
    <main>
      <div className="shoppingList">
        <h1>Item to buy</h1>
        <Form/>
        <List/>
      </div>
    </main>
  );
}

export default App;

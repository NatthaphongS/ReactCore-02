// import : OtherCode
// import <ITEM> form <LIB_NAME>(form node=module)
import { createRoot } from "react-dom/client";
import React, { useState } from "react";

// import : OurCode
import Item from "./components/item.jsx";
import "./index.css";

// React

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [emailCorrect, setEmailAlert] = useState(false);
  const [passwordCorrect, setPasswordAlert] = useState(false);
  const [confirmCorrect, setConfirmAlert] = useState(false);
  function handleChangeEmail(event) {
    setEmail(event.target.value);
    if (
      event.target.value.includes("@") &&
      event.target.value.includes(".com")
    ) {
      setEmailAlert(false);
    } else {
      setEmailAlert(true);
    }
  }
  function handlePassword(event) {
    setPassword(event.target.value);
    if (event.target.value.length > 8) {
      setPasswordAlert(false);
    } else {
      setPasswordAlert(true);
    }
  }
  function handleConfirm(event) {
    setConfirm(event.target.value);
    if (event.target.value == password) {
      setConfirmAlert(false);
    } else {
      setConfirmAlert(true);
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("submit");
  }

  return (
    <main>
      <div className="app">
        <h1>Sign Up</h1>
        <form className="form_register">
          <div className="input_email">
            <input
              type="email"
              placeholder="example@email.com"
              onChange={handleChangeEmail}
              value={email}
            />
            {emailCorrect && <p>Invalid Email</p>}
          </div>
          <div className="box_password">
            <input
              type="password"
              placeholder="Password"
              onChange={handlePassword}
              value={password}
            />
            {passwordCorrect && <p>Password must be at least 8 characters</p>}
          </div>
          <div className="box_confirm">
            <input
              onChange={handleConfirm}
              type="password"
              placeholder="Confirm Password"
              value={confirm}
            />
            {confirmCorrect && (
              <p>Password and confirm password does not match</p>
            )}
          </div>
          <button onClick={handleSubmit} type="submit">
            Sign up with email
          </button>
        </form>
        <p className="gologin">
          Already have an account? <a href="#">Go to log-in</a>
        </p>
      </div>
    </main>
  );
}

// ReactDOM
const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);

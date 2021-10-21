import "./App.css";
import Keyboard from "./components/Keyboard/Keyboard";
import Info from "./components/Info/Info";
import { useState } from "react";
import Context from "./Context/Context";
import Actions from "./components/Actions/Actions";

function App() {
  const [showNumbers, setShowNumbers] = useState("");
  const [calling, setCalling] = useState(false);

  return (
    <Context.Provider
      value={{ showNumbers, setShowNumbers, calling, setCalling }}
    >
      <div className="container">
        <Info calling={calling} />
        <main className="phone">
          <div className="keyboard-container">
            <Keyboard />
          </div>
          <Actions />
        </main>
      </div>
    </Context.Provider>
  );
}

export default App;

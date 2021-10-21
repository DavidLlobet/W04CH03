import "./App.css";
import Keyboard from "./components/Keyboard/Keyboard";
import Info from "./components/Info/Info";
import { useState } from "react";
import Context from "./Context/Context";
import Display from "./components/Display/Display";

function App() {
  const [showNumbers, setShowNumbers] = useState("");

  return (
    <Context.Provider value={{ showNumbers, setShowNumbers }}>
      <div className="container">
        <Info />
        <main className="phone">
          <div className="keyboard-container">
            <Keyboard />
          </div>
          <Display number={showNumbers} />
        </main>
      </div>
    </Context.Provider>
  );
}

export default App;

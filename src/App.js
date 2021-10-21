import "./App.css";
import Keyboard from "./components/Keyboard/Keyboard";
import Info from "./components/Info/Info";

function App() {
  return (
    <div class="container">
      <Info />
      <main class="phone">
        <div class="keyboard-container">
          <Keyboard />
        </div>
      </main>
    </div>
  );
}

export default App;

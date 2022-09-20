import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Home /> */}
        <Register />
      </header>
    </div>
  );
}

export default App;

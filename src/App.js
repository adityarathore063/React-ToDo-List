import "./App.css";
import Header from "./components/Header";
import InputArea from "./components/InputArea";
import DisplayTodos from "./components/DisplayTodos";

function App() {
  return (
    <div className="App">
      <Header />
      <InputArea />
      <DisplayTodos />
    </div>
  );
}

export default App;

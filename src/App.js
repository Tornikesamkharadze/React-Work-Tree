import ErrorExample from "./components/ErrorExample";
import { useState } from "react";
import People from "./components/People";

function App() {
  const [title, setTitle] = useState("I love React");

  const changeTitleHandler = () => {
    if (title === "I love React") {
      setTitle("Wow Realy ?? I love React too");
    } else {
      setTitle("I love React");
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 typeof="button" onClick={changeTitleHandler}>
          {title}
        </h1>
        <ErrorExample />
        <People />
      </header>
    </div>
  );
}

export default App;

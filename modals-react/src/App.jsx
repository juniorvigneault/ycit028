import { useState } from "react";
import "./App.scss";
import Button from "./components/Button/Button";
import Content from "./components/Content/Content";

function App() {
  const [modal, setModal] = useState("");
  const [clicked, setClicked] = useState(false);

  return (
    <div id="app">
      <h1>Modals</h1>
      <Button setModal={setModal} setClicked={setClicked} />
      <Content modal={modal} clicked={clicked} setClicked={setClicked} />
    </div>
  );
}

export default App;

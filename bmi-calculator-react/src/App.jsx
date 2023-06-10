import { useState } from "react";
import "./App.css";
import Form from "./component/Form";
import Head from "./component/Head";
import Result from "./component/Result";

const App = () => {
  // const [height, setHeight] = useState("");
  // const [weight, setWeight] = useState("");
  // const [statement, setStatement] = useState("");
  const [state, setState] = useState({
    height: "",
    weight: "",
    result: "",
  });

  return (
    <div className="container">
      <Head />
      <Form state={state} setState={setState} />
      <Result state={state} />
    </div>
  );
};

export default App;

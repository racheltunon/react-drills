import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Image url={"https://coleandmarmalade.com/wp-content/uploads/2018/04/bigstock-213050398.jpg"} />
      </div>
    );
  }
}

export default App;
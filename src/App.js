import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button } from "react-bootstrap";
import { Content } from "./Content";
import { useRef, useState } from "react";
import "../src/back.css"

function App() {
  return (
    <div className="back">
      <Content />
    </div>
  );
}

export default App;

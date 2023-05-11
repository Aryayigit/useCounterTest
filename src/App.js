import logo from './logo.svg';
import React, { useRef } from "react";
import './App.css';
import useCounter from "./useCounter";

function App() {
  const intervalIdRef = useRef();
  const { onMouseClickLeft, onMouseClick, countValue } = useCounter({ intervalIdRef });

  return (
    <div>
      <button id='clickButton' onMouseDown={onMouseClick} onMouseLeave={onMouseClickLeft} onClick={onMouseClickLeft}>
        Click
      </button>
      <h1 id='countValue'>{countValue}</h1>
    </div>
  );
}

export default App;

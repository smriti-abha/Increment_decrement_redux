
import "./App.css";
import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {incNumber,decNumber} from './Action/Index'
function App() {
  const myState=useSelector((state)=>state.changeNumber);
  const dispatch=useDispatch();
  return (
    <div className="App">
      <h1>Redux App</h1>
      <h4>Increment-Decrement Machine</h4>
      <div
        className="increment-decrement-machine"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid lightblue",
          width: "360px",
          height: "50px",
          margin: "15% 35%",
        }}
      >
        <button
          style={{
            border: "1px solid lightblue",
            height: "30px",
            margin: "5px",
            width:"80px",
            backgroudColor: "lightblue",
          }}
          onClick={()=>dispatch(incNumber(4))}
        >
         <span>+</span>
        </button>
        <input type="text" style={{ height: "40px" }} value={myState}/>
        <button
          style={{
            border: "1px solid lightblue",
            height: "30px",
            width:"80px",
            margin: "5px",
            backgroudColor: "lightblue",
          }}
          onClick={()=>dispatch(decNumber())}
        >
         <span>-</span>
        </button>
      </div>
    </div>
  );
}

export default App;

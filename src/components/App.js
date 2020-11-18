import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [showPara,setShowPara]=useState(false)
  return (
    <div id="main"> 
     {showPara?<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>:null}
     <button id="click" onClick={()=>{setShowPara(true)}}>click here</button>
    </div>
  );
}


export default App;

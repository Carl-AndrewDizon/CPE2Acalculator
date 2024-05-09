import React from 'react';
import './App.css';
import { useState } from "react";


function CalcButton({bcolor, opbutton, label, buttonClassName = "CalcButton", onClick}) {

  return (
    <button className= {buttonClassName} onClick={onClick} style={{ color: opbutton, background: bcolor }}>
      {label}
    </button>
  );
}

function CalcDisplay({display}) {
  return (
    <div className="CalcDisplay">
      {display}
    </div>    
  );
}

export default function App() {

  const[disp, setDisp] = useState(0);
  
  const[num1, setNum1] = useState(null);
  const[num2, setNum2] = useState(null);
  const[op, setOp] = useState(null);

  const clrClickHandler = (e) => {
    setDisp(0);
    setNum1(null);
    setNum2(null);
    setOp(null);
  }

  const equalClickHandler = (e) => {
    console.log('Num1 ' + num1 + ' | ' + 'Op ' + op + ' | ' + 'Num2 ' + num2);

    let result = null;

    if (op === "+") {
      result = (parseInt(num1) + parseInt(num2))
    } else if (op === "-") {
      result = (parseInt(num1) - parseInt(num2))
    } else if (op === "x") {
      result = (parseInt(num1) * parseInt(num2))
    } else if (op === "÷") {
      if (parseInt(num2) !==0) {
        result = (parseInt(num1) / parseInt(num2));
      } else{
        result = ("Cannot divided by 0");
      }
    } else {
      result = ('Invalid Operation');
    }

    setDisp(result);
    setNum1(result);
    setNum2(null);
    setOp(null);
  }

  const numberClickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;

    if (disp === 0 && value === '0'){
    } else if ( op === null){
      if(num1 === null) {
        setNum1(value);
        setDisp(value);
      } else {
        setNum1(num1 + value);
        setDisp(num1 + value);
      }
      
    } else {
      if(num2 === null) {
        setNum2(value);
        setDisp(value);
      } else {
        setNum2(num2 + value);
        setDisp(num2 + value);
      }
    }
    
  }

  const opClickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;
    setOp(value);
    setDisp(value);
  }


  return (
    <div className="App">
      <div className="CalcContainer">
        <CalcDisplay display={disp} />
        <div className="ButtonContainer">
          <CalcButton label={"÷"} /*buttonClassName="OperatorButton"*/ onClick={opClickHandler} opbutton={'#d9e1f5'} bcolor={'#3e4859'}/>
          <CalcButton label={7} onClick={numberClickHandler}/>
          <CalcButton label={8} onClick={numberClickHandler}/>
          <CalcButton label={9} onClick={numberClickHandler}/>
          <CalcButton label={"x"} /*buttonClassName="OperatorButton"*/ onClick={opClickHandler} opbutton={'#d9e1f5'} bcolor={'#3e4859'}/>
          <CalcButton label={4} onClick={numberClickHandler}/>
          <CalcButton label={5} onClick={numberClickHandler}/>
          <CalcButton label={6} onClick={numberClickHandler}/>
          <CalcButton label={"+"} /*buttonClassName="OperatorButton"*/ onClick={opClickHandler} opbutton={'#d9e1f5'} bcolor={'#3e4859'}/>
          <CalcButton label={1} onClick={numberClickHandler}/>
          <CalcButton label={2} onClick={numberClickHandler}/>
          <CalcButton label={3} onClick={numberClickHandler}/>
          <CalcButton label={"-"} /*buttonClassName="OperatorButton"*/  onClick={opClickHandler} opbutton={'#d9e1f5'} bcolor={'#3e4859'}/>
          <CalcButton label={"CLR"} onClick={clrClickHandler} opbutton={'#d88946'} bcolor={"#603a5e"}/>
          <CalcButton label={0} onClick={numberClickHandler}/>
          <CalcButton label={"="} /*buttonClassName="OperatorButton"*/ onClick={equalClickHandler} opbutton={'#d9e1f5'} bcolor={'#304481'}/>
        </div>
      </div>
    </div>
  );
}

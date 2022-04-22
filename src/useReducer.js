import React, { useReducer } from "react";
// import "./style.css";

const reducer = (state, {type}) => {
  if(type == 'INCR'){
    state = state + 1;
  }
  if(type == 'DECR' && state>0){
    state = state -1;
  }
  return state;
}

const useReducer = () => {
    
    const initialData = 10;
    const [state, dispatch] = useReducer(reducer, initialData)

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div className="button2" onClick={()=>dispatch({type:"INCR"})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          className="button2" onClick={()=>dispatch({type:"DECR"})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default useReducer;
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "../features/counter/counterSlice";


const Counter = () => {
  const count = useSelector((state) => state.counter.value); // Get the value from the store, how? using useSelector, and pass the state and the value you want to get
  const dispatch = useDispatch(); // Get the dispatch function from the store
  const [incrementAmount, setIncrementAmount] = useState(0); // Create a state to store the increment amount
  const addVal = Number(incrementAmount) || 0; // Convert the increment amount to a number
  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  }

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
        <div>
            <input
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
            />
            <button onClick={() => dispatch(incrementByAmount(addVal))}>
            Add Amount
            </button>
        </div>
        <div>
            <button onClick={resetAll}>Reset</button>
            </div>  
    </div>
  );
};

export default Counter;

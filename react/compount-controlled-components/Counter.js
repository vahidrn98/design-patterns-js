import React, { useState, useRef, useEffect } from "react";
import { CounterProvider } from "./useCounterContext";
import { Count, Label, Decrement, Increment } from "./components";

function Counter({ children, value = null, initialValue = 0, onChange }) {
  const [count, setCount] = useState(initialValue);

  const isControlled = value !== null && onChange;

  const getCount = () => {
    return isControlled ? value : count;
  };

  const firstMounded = useRef(true); // this ref makes sure onchange is not fired the first time, you can use useState
  useEffect(() => {
    if (!firstMounded.current && !isControlled) {
      onChange && onChange(count);
    }
    firstMounded.current = false;
  }, [count, onChange, isControlled]);

  const handleIncrement = () => {
    handleCountChange(getCount() + 1);
  };

  const handleDecrement = () => {
    handleCountChange(Math.max(0, getCount() - 1));
  };

  const handleCountChange = (newValue) => {
    isControlled ? onChange(newValue) : setCount(newValue);
  };

  return (
    <CounterProvider
      value={{ count: getCount(), handleIncrement, handleDecrement }}
    >
      {children}
    </CounterProvider>
  );
  
}

Counter.Count = Count;
Counter.Label = Label;
Counter.Increment = Increment;
Counter.Decrement = Decrement;

export {Counter}

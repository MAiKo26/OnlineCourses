import { useState } from "react";

export const useCountSetter = (initialVal = 0) => {
  const [count, setCount] = useState(initialVal);

  const increase = () => {
    setCount((prev) => prev + 1);
  };
  const decrease = () => {
    setCount((prev) => prev - 1);
  };
  const zero = () => {
    setCount(0);
  };

  return { count, increase, decrease, zero };
};

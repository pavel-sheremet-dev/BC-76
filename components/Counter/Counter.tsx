"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);
  const [posts, setPosts] = useState([]);

  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      Couter {count}
    </button>
  );
};

export default Counter;

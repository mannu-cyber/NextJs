"use client";

import { useState } from "react";
export default function WithAuth({ children }) {
  const [input, setInput] = useState("");
  console.log(input);

  return (
    <div>
      <h1>children {children}</h1>
      <input
        className="bg-red-700 text-white py-1 px-3 block mx-auto"
        placeholder="Enter the Value"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>{input}</p>
    </div>
  );
}

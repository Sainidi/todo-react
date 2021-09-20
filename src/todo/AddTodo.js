/* import React from "react";
import { useState } from "react";

export default function addTask() {
  const [value, setValue] = useState("");

  function handleChange(e) {
    e.preventDefault();

    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  }

  return (
    <form onSubmit={handleChange}>
      <input className="text" type="text" onChange={(e) => setValue(e.target.value)} />
      <button className="add-todo" type="submit">
        ✔️
      </button>
    </form>
  );
} */

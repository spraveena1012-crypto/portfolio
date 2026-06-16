"use client";

import { useState } from "react";

export default function Page() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addTask() {
    if (!task) return;

    const newList = [];
    for (let i = 0; i < todos.length; i++) {
      newList.push(todos[i]);
    }

    newList.push(task);
    setTask("");
  }

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "20px",
        fontFamily: "Arial",
        background: "#f9fafb",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
      }}
    >
      {/* Title */}
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        📝 Todo App
      </h1>

      {/* Input Section */}
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            outline: "none",
          }}
        />

        <button
          onClick={addTask}
          style={{
            padding: "10px 15px",
            background: "#22c55e",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>

      {/* List */}
      <ul style={{ marginTop: "20px", padding: 0, listStyle: "none" }}>
        {todos.length === 0 ? (
          <p style={{ textAlign: "center", color: "gray" }}>
            No tasks yet
          </p>
        ) : (
          todos.map((item, i) => (
            <li
              key={i}
              style={{
                marginTop: "10px",
                padding: "10px",
                background: "white",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
              }}
            >
              {item}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
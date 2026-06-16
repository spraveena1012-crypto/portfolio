"use client";

import { useState } from "react";
import Link from "next/link";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <main className="container">

      {/* Header */}
      <section className="card counter-header">
        <h1>🔢 Counter Application</h1>

        <p>
          A simple and interactive counter application built using React.
          Users can increase, decrease, and reset the counter value.
        </p>
      </section>

      {/* Statistics */}
      <section className="grid">
        <div className="card feature-card">
          <h3>Technology</h3>
          <p>React.js</p>
        </div>

        <div className="card feature-card">
          <h3>Status</h3>
          <p style={{ color: "#22c55e" }}>Completed</p>
        </div>

        <div className="card feature-card">
          <h3>Current Value</h3>
          <div className="stats-number">{count}</div>
        </div>
      </section>

      {/* Counter */}
      <section className="card counter-card">
        <h2>Counter Value</h2>

        <div className="counter-value">
          {count}
        </div>

        <div className="counter-buttons">

          <button
            className="project-btn"
            onClick={() => setCount(count - 1)}
          >
            ➖ Decrease
          </button>

          <button
            className="project-btn"
            onClick={() => setCount(0)}
          >
            🔄 Reset
          </button>

          <button
            className="project-btn"
            onClick={() => setCount(count + 1)}
          >
            ➕ Increase
          </button>

        </div>
      </section>

      {/* Features */}
      <section className="grid">
        <div className="card feature-card">
          <h3>⚡ Interactive</h3>
          <p>
            Users can control the counter with real-time updates.
          </p>
        </div>

        <div className="card feature-card">
          <h3>📱 Responsive</h3>
          <p>
            Works smoothly on desktop, tablet, and mobile devices.
          </p>
        </div>

        <div className="card feature-card">
          <h3>🚀 React Hooks</h3>
          <p>
            Built using useState for efficient state management.
          </p>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="card">
        <h2>What I Learned</h2>

        <ul className="learn-list">
          <li>React useState Hook</li>
          <li>Event Handling</li>
          <li>Component-Based Development</li>
          <li>Responsive UI Design</li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="nav-buttons">
        <Link href="/resume">
          <button className="project-btn">
            ← Back to Portfolio
          </button>
        </Link>
      </div>

    </main>
  );
}
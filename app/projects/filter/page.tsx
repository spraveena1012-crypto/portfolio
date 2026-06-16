"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export default function FilterPage() {
  const [category, setCategory] = useState("All");

  const items = [
    { name: "React", type: "Frontend" },
    { name: "Next.js", type: "Frontend" },
    { name: "Node.js", type: "Backend" },
    { name: "Express", type: "Backend" },
    { name: "MongoDB", type: "Database" },
    { name: "Tailwind CSS", type: "Frontend" },
  ];

  const categories = ["All", "Frontend", "Backend", "Database"];

  const filteredItems = useMemo(() => {
    if (category === "All") return items;
    return items.filter((item) => item.type === category);
  }, [category]);

  return (
    <main className="container">

      {/* Header */}
      <section className="card">
        <h1>📂 Category Filter App</h1>
        <p>Filter items using buttons instead of search input.</p>
      </section>

      {/* Buttons */}
      <section className="card" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className="project-btn"
            style={{
              background: category === cat ? "#22c55e" : "",
            }}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* List */}
      <section className="card">
        <h2>Results</h2>

        <ul className="learn-list">
          {filteredItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.type}
            </li>
          ))}
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
import React from "react";
import "../styles.css";

export default function SummaryCards({ present, absent, leave }) {
  const cards = [
    { title: "Present", value: present, color: "#22c55e" },
    { title: "Absent", value: absent, color: "#ef4444" },
    { title: "On Leave", value: leave, color: "#eab308" },
  ];

  return (
    <div className="cards-container">
      {cards.map((c, index) => (
        <div className="summary-card" key={index} style={{ borderColor: c.color }}>
          <h3>{c.title}</h3>
          <p>{c.value}</p>
        </div>
      ))}
    </div>
  );
}

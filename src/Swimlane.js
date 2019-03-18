import React from "react";
import Card from "./Card";
import "./Swimlane.css";

// A simple presentational component demonstrating
// the functional component pattern
export default ({ clients, name, dragulaRef }) => {
  const cards = clients.map(client => {
    return (
      <Card
        key={client.id}
        id={client.id}
        name={client.name}
        description={client.description}
        status={client.status}
      />
    );
  });

  return (
    <div className="Swimlane-column">
      <div className="Swimlane-title">{name}</div>
      <div className="Swimlane-dragColumn" ref={dragulaRef}>
        {cards}
      </div>
    </div>
  );
};

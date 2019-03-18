import React from "react";
import "./Card.css";

export default ({ status, name, id }) => {
  // Construct the CSS class list based on
  // the card's current swimlane (status)
  let className = ["Card"];
  if (status === "backlog") {
    className.push("Card-grey");
  } else if (status === "in-progress") {
    className.push("Card-blue");
  } else if (status === "complete") {
    className.push("Card-green");
  }

  return (
    <div className={className.join(" ")} data-id={id} data-status={status}>
      <div className="Card-title">{name}</div>
    </div>
  );
};

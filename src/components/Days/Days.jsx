import React from "react";
import "./Days.css";
import { addDays, format } from "date-fns";

function Days() {
  const date = new Date();

  let days = [];
  days.push(date);

//   pour les 4 prochains jours
  for (let i = 1; i < 5; i = i + 1) {
    days.push(addDays(date, i));
  }

  return (
    <div className="card-action">
      {days.map((day, index) => (
        <a
          href="#"
          id={index}
          key={index}
          className={index === 0 ? "currentDay" : ""}
        >
          {format(day, "EEEE")}
        </a>
      ))}
    </div>
  );
}

export default Days;

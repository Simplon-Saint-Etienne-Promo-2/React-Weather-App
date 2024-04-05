import React, { useState } from "react";
import "./Days.css";
import { addDays, format } from "date-fns";

function Days() {
  const [actualDay, setActualDay] = useState(0);


  const date = new Date();

  let days = [];
  days.push(date);

  //   pour les 4 prochains jours
  for (let i = 1; i < 5; i = i + 1) {
    days.push(addDays(date, i));
  }


  function handleClickDay(event) {
    setActualDay(parseInt(event.target.id));


    // active une fonction de App pour donner des nouvelles données météo
  }

  return (
    <div className="card-action">
      {days.map((day, index) => (
        <a
          href="#"
          id={index}
          key={index}
          className={index === actualDay ? "currentDay" : ""}
          onClick={handleClickDay}
        >
          {format(day, "EEEE")}
        </a>
      ))}
    </div>
  );
}

export default Days;

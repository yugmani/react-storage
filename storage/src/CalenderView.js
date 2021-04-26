import React from "react";

function CalenderView() {
  const [mode, setMode] = useStickyState("day", "calendar-view");
  return (
    <>
      <select onChange={(ev) => setMode(ev.target.value)}>
        <option value="day">Day</option>
        <option value="week">Week</option>
        <option value="month">Month</option>
      </select>
      {/* Calendar stuff here */}
    </>
  );
}

export default CalenderView;

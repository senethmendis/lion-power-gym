import { useState } from "react";

export function Calendar() {
  const [date, setDate] = useState(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
}

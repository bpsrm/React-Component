import { useState } from "react";
import Calendar from "./Calendar";

const DatePickerNormal = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  const formatDate = (date: Date | null) => {
    return date ? (
      <p className="text-violet-main">{date.toLocaleDateString()}</p>
    ) : (
      ""
    );
  };

  const handleLabelClick = () => {
    setShowCalendar(!showCalendar);
  };

  const handleSelectDate = (day: number) => {
    const newDate = new Date();
    newDate.setDate(day);
    setSelectedDate(newDate);
    setShowCalendar(false);
    console.log("normal date: " + newDate);
  };

  return (
    <div className="pad-main">
      <label className="label-date flex" onClick={handleLabelClick}>
        {formatDate(selectedDate) || "Selected Date"}
      </label>
      {showCalendar && <Calendar onSelect={handleSelectDate} />}
    </div>
  );
};

export default DatePickerNormal;

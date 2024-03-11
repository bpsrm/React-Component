import { useState } from "react";

//components
import Calendar from "./Calendar";

const DatePickerNormal = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  return (
    <div className="pad-main">
      <label
        className="label-date flex"
        onClick={() => setShowCalendar(!showCalendar)}
      >
        {selectedDate ? (
          <p className="text-blue">{selectedDate.toLocaleDateString()}</p>
        ) : (
          "Select Date"
        )}
      </label>
      {showCalendar && <Calendar onSelectDate={handleSelectDate} />}
    </div>
  );
};

export default DatePickerNormal;

import { ChangeEvent, useState } from "react";

//json
import { months, days } from "@/json/calendar.json";

interface CalendarProps {
  //   calendarType?: "start" | "end";
  onSelectDate: (date: Date) => void;
}

export default function Calendar({
  onSelectDate,
}: //   calendarType,
CalendarProps) {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());

  const onChangeYear = (e: ChangeEvent<HTMLInputElement>) => {
    const newYear = parseInt(e.target.value);
    setYear(newYear);
  };

  const changeMonth = (offset: number) => {
    setMonth((month + offset + 12) % 12);
  };

  const handleDayClick = (day: number) => {
    const selectedDate = new Date(year, month, day);
    onSelectDate(selectedDate);
  };

  const renderDays = () => {
    const today = new Date();
    const firstDay = new Date(year, month, 1).getDay();
    const daysArray = [];

    for (let i = 0; i < firstDay; i++) {
      daysArray.push({ date: 0, className: "" });
    }

    const daysInCurrentMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= daysInCurrentMonth; i++) {
      const currentDate = new Date(year, month, i);
      const className =
        currentDate.toLocaleDateString() === today.toLocaleDateString()
          ? "day today"
          : "day";
      daysArray.push({ date: i, className: className });
    }

    const remainingDays = 7 - (daysArray.length % 7);
    for (let i = 0; i < remainingDays; i++) {
      daysArray.push({ date: 0, className: "" });
    }

    return daysArray.map((day, index) => (
      <div
        key={index}
        className={day.className}
        onClick={() => handleDayClick(day.date)}
      >
        {day.date === 0 ? "" : day.date}
      </div>
    ));
  };

  return (
    <div className="calendar">
      <div className="w-full flex justify-end">
        <input
          type="number"
          min={1}
          value={year}
          onChange={(e) => onChangeYear(e)}
          className="inp-year-calendar w-full"
        />
      </div>
      <div className="h-calendar">
        <button onClick={() => changeMonth(-1)}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <div className="px-4 py-2 bg-violet-dr-main rounded-[50px] text-violet-da-main">
          {months[month]} {year}
        </div>
        <button onClick={() => changeMonth(1)}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
      <div className="days-of-week">
        {days.map((day) => (
          <div key={day} className="day-of-week">
            {day}
          </div>
        ))}
      </div>
      <div className="days">{renderDays()}</div>
    </div>
  );
}

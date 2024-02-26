import { useState } from "react";

const daysOfWeek = ["SU", "MON", "TUE", "WED", "THU", "FRI", "SA"];

interface CalendarProps {
  onSelect: (day: number) => void;
}

export default function Calendar({ onSelect }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const handleDayClick = (day: number) => {
    onSelect(day);
  };

  const renderDays = () => {
    const totalDays = daysInMonth();
    const firstDay = firstDayOfMonth();
    const today = new Date().getDate();
    const thisMonth = new Date().getMonth();
    const thisYear = new Date().getFullYear();

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="empty"></div>);
    }

    for (let i = 1; i <= totalDays; i++) {
      const isToday =
        i === today &&
        currentDate.getMonth() === thisMonth &&
        currentDate.getFullYear() === thisYear;
      days.push(
        <div
          key={i}
          className={`day ${isToday ? "today" : ""}`}
          onClick={() => handleDayClick(i)}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar w-full">
      <div className="h-calendar">
        <button onClick={prevMonth}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <div className="px-4 py-2 bg-violet-dr-main rounded-[50px] text-violet-da-main">
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </div>
        <button onClick={nextMonth}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
      <div className="days-of-week">
        {daysOfWeek.map((day) => (
          <div key={day} className="day-of-week">
            {day}
          </div>
        ))}
      </div>
      <div className="days">{renderDays()}</div>
    </div>
  );
}

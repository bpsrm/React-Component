import { useState } from "react";
import Calendar from "./Calendar";

const DatePickerLength = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [showStartCalendar, setShowStartCalendar] = useState<boolean>(false);
  const [showEndCalendar, setShowEndCalendar] = useState<boolean>(false);

  const formatDate = (date: Date | null) => {
    return date ? (
      <p className="text-violet-main">{date.toLocaleDateString()}</p>
    ) : (
      ""
    );
  };

  const handleLabelClick = (calendarType: "start" | "end") => {
    if (calendarType === "start") {
      setShowStartCalendar((prev) => !prev);
      setShowEndCalendar(false);
    } else {
      setShowEndCalendar((prev) => !prev);
      setShowStartCalendar(false);
    }
  };

  const handleSelectDate = (day: number, calendarType: "start" | "end") => {
    const newDate = new Date();
    newDate.setDate(day);
    if (calendarType === "start") {
      setStartDate(newDate);
      setShowStartCalendar(false);
      console.log("date length (start):", newDate.toLocaleDateString());
    } else {
      setEndDate(newDate);
      setShowEndCalendar(false);
      console.log("date length (end):", newDate.toLocaleDateString());
    }
  };

  return (
    <div>
      <div className="date-group pad-main">
        <div className="md:flex w-full items-start justify-center">
          <div className="flex flex-col w-full lg:w-5/12">
            <label
              htmlFor="start-date"
              className="label-date"
              onClick={() => handleLabelClick("start")}
            >
              {formatDate(startDate) || "Start Date"}
            </label>
            {showStartCalendar && (
              <Calendar onSelect={(day) => handleSelectDate(day, "start")} />
            )}
          </div>
          <p className="w-full lg:w-2/12 flex justify-center items-center">
            To
          </p>
          <div className="flex flex-col w-full lg:w-5/12">
            <label
              htmlFor="end-date"
              className="label-date"
              onClick={() => handleLabelClick("end")}
            >
              {formatDate(endDate) || "End Date"}
            </label>
            {showEndCalendar && (
              <Calendar onSelect={(day) => handleSelectDate(day, "end")} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePickerLength;

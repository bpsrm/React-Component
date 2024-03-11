import { useState } from "react";

//components
import Calendar from "./Calendar";

const DatePickerLength = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [showStartCalendar, setShowStartCalendar] = useState<boolean>(false);
  const [showEndCalendar, setShowEndCalendar] = useState<boolean>(false);

  const handleLabelClick = (calendarType: "start" | "end") => {
    if (calendarType === "start") {
      setShowStartCalendar((prev) => !prev);
      setShowEndCalendar(false);
    } else {
      setShowEndCalendar((prev) => !prev);
      setShowStartCalendar(false);
    }
  };

  const handleSelectDate = (date: Date, calendarType: "start" | "end") => {
    if (calendarType === "start") {
      setStartDate(date);
      setShowStartCalendar(false);
      console.log("date length (start):", date.toLocaleDateString());
    } else {
      setEndDate(date);
      setShowEndCalendar(false);
      console.log("date length (end):", date.toLocaleDateString());
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
              {startDate ? (
                <p className="text-blue">{startDate.toLocaleDateString()}</p>
              ) : (
                "Start Date"
              )}
            </label>
            {showStartCalendar && (
              <Calendar
                onSelectDate={(day) => handleSelectDate(day, "start")}
              />
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
              {endDate ? (
                <p className="text-blue">{endDate.toLocaleDateString()}</p>
              ) : (
                "End Date"
              )}
            </label>
            {showEndCalendar && (
              <Calendar onSelectDate={(day) => handleSelectDate(day, "end")} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePickerLength;

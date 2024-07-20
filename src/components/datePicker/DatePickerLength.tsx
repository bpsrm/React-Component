import { useState } from "react";
import Calendar from "./Calendar";

export default function DatePickerLength() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [showStartCalendar, setShowStartCalendar] = useState<boolean>(false);
  const [showEndCalendar, setShowEndCalendar] = useState<boolean>(false);

  function handleLabelClick(calendarType: "start" | "end") {
    if (calendarType === "start") {
      setShowStartCalendar((prev) => !prev);
      setShowEndCalendar(false);
    } else {
      setShowEndCalendar((prev) => !prev);
      setShowStartCalendar(false);
    }
  }

  function handleSelectDate(date: Date, calendarType: "start" | "end") {
    if (calendarType === "start") {
      setStartDate(date);
      setShowStartCalendar(false);
    } else {
      setEndDate(date);
      setShowEndCalendar(false);
    }
  }

  return (
    <div>
      <div className="date-group pad-main">
        <div className="md:flex w-full items-start justify-center">
          <div className="flex flex-col w-full lg:w-6/12">
            <label htmlFor="start-date" className="label-date !rounded-r-none" onClick={() => handleLabelClick("start")} >
              {startDate ? <p className="text-blue">{startDate.toLocaleDateString()}</p> : "Start Date"}
            </label>
            {showStartCalendar && <Calendar onSelectDate={(day) => handleSelectDate(day, "start")} />}
          </div>
          <p className="w-full lg:w-1/12 flex justify-center items-center h-fit py-2.5 px-2 bg-blue-dr text-blue-da">To</p>
          <div className="flex flex-col w-full lg:w-6/12">
            <label htmlFor="end-date" className="label-date !rounded-l-none" onClick={() => handleLabelClick("end")} >
              {endDate ? <p className="text-blue">{endDate.toLocaleDateString()}</p> : "End Date"}
            </label>
            {showEndCalendar && <Calendar onSelectDate={(day) => handleSelectDate(day, "end")} />}
          </div>
        </div>
      </div>
    </div>
  );
}

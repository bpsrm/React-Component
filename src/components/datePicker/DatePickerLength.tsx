import { useState } from "react";

export default function DatePickerLength() {
  const [startDate, setStartDate] = useState<boolean>(false);
  const [endDate, setEndDate] = useState<boolean>(false);

  return (
    <div>
      <div className="date-group pad-main">
        <div className="flex w-full items-center justify-center">
          <div className="flex flex-col lg:w-5/12">
            <label
              htmlFor="start-date"
              className="label-date"
              onClick={() => setStartDate(!startDate)}
            >
              Start Date
              <input
                type="date"
                name="start-date"
                id="start-date"
                className="hidden"
              />
            </label>
            {startDate && <div className="calendar-container"></div>}
          </div>
          <p className="lg:w-2/12 flex justify-center items-center">To</p>
          <div className="flex flex-col lg:w-5/12">
            <label
              htmlFor="end-date"
              className="label-date"
              onClick={() => setEndDate(!endDate)}
            >
              End Date
              <input
                type="date"
                name="end-date"
                id="end-date"
                className="hidden"
              />
            </label>
            {endDate && (
              <div className="calendar-container">
                {/* Show calendar for end date here */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

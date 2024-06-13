//styles
import "@/styles/datepicker.css";

//components
import DatePickerNormal from "./DatePickerNormal";
import DatePickerLength from "./DatePickerLength";

export default function DatePicker() {
  return (
    <div className="card-main items-center">
      <div className="container-title">
        <div className="flex flex-col">
          <h4>DatePicker component with TypeScript</h4>
        </div>
      </div>
      <div className="w-full">
        <div className="input-group">
          <label htmlFor="date">Normal Date</label>
          <DatePickerNormal />
        </div>
        <div className="input-group pad-main px-0">
          <label htmlFor="date">Date Picker Start-End</label>
          <DatePickerLength />
        </div>
      </div>
    </div>
  );
}

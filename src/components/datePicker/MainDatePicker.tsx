//components
import DatePickerLength from "./DatePickerLength";

//styles
import "@/styles/datepicker.css";

export default function DatePicker() {
  return (
    <div className="card-main items-center">
      <div className="container-title">
        <div className="flex flex-col">
          <h4>DatePicker component with TypeScript</h4>
          {/* <p className="text-gray-main">Manage form with Formik</p> */}
          {/* <span className="small-text">Dependencies Package: formik</span> */}
        </div>
      </div>
      <div className="w-full">
        <div className="input-group">
          <label htmlFor="date">Normal Date</label>
          <input type="date" name="date" id="date" />
        </div>
        <div className="input-group">
          <label htmlFor="date">Date Picker Start-End</label>
          <DatePickerLength />
        </div>
      </div>
    </div>
  );
}

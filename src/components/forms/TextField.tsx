/* eslint-disable @typescript-eslint/no-explicit-any */
interface TextFieldTypes {
  label: string;
  groupClass?: string;
  inputClass?: string;
  type: string;
  name: string;
  id: string;
  placeHolder?: string;
  value: string;
  onChange?: any;
  required: boolean;
  maxLength?: number;
  pattern?: string;
}

export default function TextField({
  groupClass,
  label,
  inputClass,
  type,
  name,
  id,
  placeHolder,
  value,
  onChange,
  required,
  maxLength,
  pattern,
}: TextFieldTypes) {
  return (
    <div className={`input-group ${groupClass}`}>
      <label htmlFor={label} className="w-full">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        required={required ? required : false}
        className={inputClass}
        maxLength={maxLength}
        pattern={pattern}
      />
    </div>
  );
}

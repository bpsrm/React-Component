import { ChangeEvent, useState } from "react";

interface TextFieldTypes {
  label: string;
  groupClass?: string;
  inputClass?: string;
  type: string;
  name: string;
  id: string;
  placeHolder?: string;
  value: string;
  onChange?: (val: ChangeEvent<HTMLInputElement>) => void;
  onChangeTel?: (val: string) => void;
  required: boolean;
  maxLength?: number;
  pattern?: string;
}

export default function TextField({ groupClass, label, inputClass, type, name, id, placeHolder, value, onChange, onChangeTel, required, maxLength, pattern }: TextFieldTypes) {
  const [formattedValue, setFormattedValue] = useState(value);

  const formatPhoneNumber = (input: string) => {
    const cleanedInput = input.replace(/\D/g, "");

    let formatted = "";
    for (let i = 0; i < cleanedInput.length; i++) {
      if (i === 3 || i === 6) {
        formatted += " ";
      }
      formatted += cleanedInput[i];
    }
    return formatted;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const formattedInput = formatPhoneNumber(inputValue);
    setFormattedValue(formattedInput);

    if (type === "tel" && onChangeTel) {
      onChangeTel(inputValue);
    } else if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={`input-group ${groupClass}`}>
      <label htmlFor={label} className="w-full">{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeHolder}
        value={type == "tel" ? formattedValue : value}
        onChange={type === "tel" ? handleInputChange : onChange}
        required={required ? required : false}
        className={inputClass}
        maxLength={maxLength}
        pattern={pattern}
      />
    </div>
  );
}

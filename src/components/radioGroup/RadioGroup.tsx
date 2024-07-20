import { IRadioGroup } from "@/@types/radioGroup.types";
import { Fragment } from "react";

export default function RadioGroup({ inputClassName, titleClassName, className, title = "", options, getOptionLabel, getOptionValue, name, onChange, touched, error, value, bg = true, disabled = false }: IRadioGroup) {
  return (
    <Fragment>
      <label htmlFor={`select-${name}`} className={`${title ? `${titleClassName}` : "hidden"}`}>
        {title}
      </label>
      <ul className={bg ? "items-center w-full bg-white flex flex-wrap justify-start gap-x-3" : "items-center w-full text-content flex flex-wrap justify-start gap-x-3"}>
        {options &&
          options.map((item: (typeof options)[0], index: number) => (
            <li className={className} key={index}>
              <div onClick={() => document.getElementById(`${item[getOptionLabel] + name}`)?.click()} className="cursor-pointer flex items-center justify-between w-full">
                <input
                  disabled={disabled}
                  id={`${item[getOptionLabel] + name}`}
                  checked={value?.toString() === item[getOptionValue].toString()}
                  type="radio"
                  value={item[getOptionValue]}
                  name={name}
                  onChange={(e) => onChange && onChange(e)}
                  className={inputClassName + " min-w-5 w-5 h-5"}
                />
                <label htmlFor={`${item[getOptionLabel] + name}`} className={`w-full py-1 ml-4 whitespace-nowrap text-wrap ${touched ? error && "text-red-500" : undefined}`}>
                  {item[getOptionLabel]}
                </label>
              </div>
            </li>
          ))}
      </ul>
    </Fragment>
  );
}


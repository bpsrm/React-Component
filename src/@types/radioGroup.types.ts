export interface IRadioGroup {
  titleClassName?: string;
  title?: string;
  name: string;
  disabled?: boolean;
  options?: Array<any>;
  getOptionLabel: string;
  getOptionValue: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
  className?: string;
  value?: string | number | boolean;
  bg?: boolean;
  inputClassName?: string;
}

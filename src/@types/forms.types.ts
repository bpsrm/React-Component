import { ChangeEvent } from 'react';

export interface Country {
  name: string;
  callingCodes: string[];
  flags: { svg: string; png: string };
}

export interface CountryType {
  className?: string;
}

export interface UsersTypes {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  profile: File | null;
  gender: string;
  website: string;
  address: string;
  telephone: string;
  countryCode: string;
}

export interface TextFieldTypes {
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

export interface UploadFileProps {
  clearImage: boolean;
  onFileChange: (file: File | null) => void;
  setFieldValue: (field: string, value: unknown) => void;
}

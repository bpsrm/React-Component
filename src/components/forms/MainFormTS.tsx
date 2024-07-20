import { useState } from "react";
import { Formik, Form } from "formik";
import UploadFile from "./UploadFile";
import TextField from "./TextField";
import CountryCode from "./CountryCode";
import { UsersTypes } from "@/@types/forms.types";
import "@/styles/forms.css";
import AlertMessage from "../alertMessage/AlertMessage";
import RadioGroup from "../radioGroup/RadioGroup";
import { gender } from "../../json/forms.json";

export default function FormTS() {
  const [passwordValidate, setPasswordValidate] = useState<string>("");

  function initialValues() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      profile: null,
      gender: "1",
      website: "",
      address: "",
      telephone: "",
      countryCode: "",
    };
  }

  function handelSubmit(values: UsersTypes) {
    console.log(values);
    AlertMessage({
      type: "success",
      title: "บันทึกข้อมูลสำเร็จ",
      timer: 0,
      text: JSON.stringify(values),
      showConfirmButton: true
    });
  }

  return (
    <div className="card-main items-center">
      <div className="container-title">
        <div className="flex flex-col">
          <h4>Form component with TypeScript</h4>
          <p className="text-gray-main">Manage form with Formik</p>
          <span className="small-text">Dependencies Package: formik</span>
        </div>
      </div>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues()}
        onSubmit={(values: UsersTypes, { resetForm }) => { handelSubmit(values); resetForm(); }}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <div className="w-full flex flex-wrap items-center">
              <div className="w-6/12 pad-main">
                <TextField
                  label="username"
                  type="text"
                  name="username"
                  id="username"
                  placeHolder="John Doe"
                  value={values.username}
                  onChange={(e) => setFieldValue("username", e.target.value)}
                  required
                />
              </div>
              <div className="w-6/12 pad-main">
                <TextField
                  label="email"
                  type="email"
                  name="email"
                  id="email"
                  placeHolder="example@example.com"
                  value={values.email}
                  onChange={(e) => setFieldValue("email", e.target.value)}
                  required
                />
              </div>
              <div className="w-6/12 pad-main">
                <TextField
                  label="password"
                  type="password"
                  name="password"
                  id="password"
                  placeHolder=""
                  value={values.password}
                  onChange={(e) => setFieldValue("password", e.target.value)}
                  required
                />
              </div>
              <div className="w-6/12 pad-main">
                <TextField
                  label="repeat password"
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeHolder=""
                  value={values.confirmPassword}
                  onChange={({ target: { value } }) => (setPasswordValidate(value !== values.password ? "password not matched!" : "password is matched"), setFieldValue("confirmPassword", value))}
                  required
                />
              </div>
              <div className="lg:flex lg:w-full pad-main">
                {values.confirmPassword &&
                  <p className={`w-full p-2 rounded-[5px] ${passwordValidate !== "password is matched" ? "text-red-600 bg-red-200" : "text-green-600 bg-green-200"}`}>
                    {passwordValidate}
                  </p>}
              </div>
              <div className="pad-main w-full" >
                <UploadFile
                  setFieldValue={setFieldValue}
                  clearImage={!values.profile}
                  onFileChange={(file: File | null) => setFieldValue("profile", file)}
                />
              </div>
              <div className="w-full pad-main">
                <RadioGroup
                  title="gender"
                  value={values.gender.toString()}
                  options={gender}
                  getOptionLabel="name"
                  getOptionValue="id"
                  name="gender"
                  onChange={(e) => setFieldValue("gender", (e.target.value))}
                />
              </div>
              <div className="w-full pad-main">
                <TextField
                  label="website"
                  type="text"
                  name="website"
                  id="website"
                  placeHolder="https://www.google.com/"
                  value={values.website}
                  onChange={(e) => setFieldValue("website", e.target.value)}
                  required
                />
              </div>
              <div className="w-full pad-main">
                <TextField
                  label="address"
                  type="address"
                  name="address"
                  id="address"
                  placeHolder="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis neque consequuntur rem."
                  value={values.address}
                  onChange={(e) => setFieldValue("address", e.target.value)}
                  required
                />
              </div>
              <div className="w-6/12 pad-main">
                <CountryCode />
              </div>
              <div className="w-6/12 pad-main">
                <TextField
                  label="telephone"
                  type="tel"
                  name="telephone"
                  id="telephone"
                  placeHolder="999 999 9999"
                  pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                  value={values.telephone}
                  onChange={(e) => setFieldValue("telephone", e.target.value)}
                  required
                />
              </div>
              <div className="container-btn justify-evenly">
                <button type="submit" className="btn-base btn-main">Confirm</button>
                <button type="reset" className="btn-base btn-sub" onClick={() => setFieldValue("profile", null)}>Clear</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div >
  );
}

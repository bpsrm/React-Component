import { useState } from "react";
import { Formik, Form } from "formik";
import UploadFile from "./UploadFile";
import TextField from "./TextField";
import CountryCode from "./CountryCode";
import { UsersTypes } from "@/@types/forms.types";
import "@/styles/forms.css";

export default function FormTS() {
  const [passwordValidate, setPasswordValidate] = useState<string>("");

  function initialValues() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      profile: null,
      gender: "",
      website: "",
      address: "",
      telephone: "",
      countryCode: "",
    };
  }

  function handelSubmit(values: UsersTypes) {
    console.log(values);
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
            <div className="w-full md:flex md:gap-4">
              <TextField
                groupClass="w-full md:w-1/2"
                label="username"
                type="text"
                name="username"
                id="username"
                placeHolder="John Doe"
                value={values.username}
                onChange={(e) => setFieldValue("username", e.target.value)}
                required
              />
              <TextField
                groupClass="w-full md:w-1/2"
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
            <div className="lg:w-full md:flex md:gap-4 ">
              <TextField
                groupClass="md:w-full lg:w-6/12"
                label="password"
                type="password"
                name="password"
                id="password"
                placeHolder=""
                value={values.password}
                onChange={(e) => setFieldValue("password", e.target.value)}
                required
              />
              <TextField
                groupClass="md:w-full lg:w-6/12"
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
            <div className={`input-group ${passwordValidate ? "pad-main" : ""}`} >
              <UploadFile
                setFieldValue={setFieldValue}
                clearImage={!values.profile}
                onFileChange={(file: File | null) => setFieldValue("profile", file)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="gender" className="w-full">gender</label>
              <div className="flex mt-2">
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  checked={values.gender === "male"}
                  onChange={(e) => setFieldValue("gender", e.target.value)}
                  required
                  className="cursor-pointer"
                />
                <label htmlFor="male" className="mx-2">male</label>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  checked={values.gender === "female"}
                  onChange={(e) => setFieldValue("gender", e.target.value)}
                  required
                  className="cursor-pointer"
                />
                <label htmlFor="female" className="mx-2">female</label>
                <input
                  type="radio"
                  name="gender"
                  id="other"
                  value="other"
                  checked={values.gender === "other"}
                  onChange={(e) => setFieldValue("gender", e.target.value)}
                  required
                  className="cursor-pointer"
                />
                <label htmlFor="other" className="mx-2">other..</label>
              </div>
            </div>
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
            <div className="telephone">
              <CountryCode className="pad-main" />
              <TextField
                groupClass="pad-main"
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
          </Form>
        )}
      </Formik>
    </div >
  );
}

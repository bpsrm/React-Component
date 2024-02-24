//forms
import { Formik, Form } from "formik";
import { ChangeEvent, useState } from "react";

//components
import UploadFile from "./UploadFile";

interface UsersTypes {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  profile: File | null;
  gender: string;
  website: string;
  address: string;
  telephone: string;
}

export default function FormTS() {
  const [passwordValidate, setPasswordValidate] = useState<string>("");
  const [imgSource, setImgSource] = useState<boolean>(false);

  const handleClearImg = () => {
    imgSource ? setImgSource(false) : setImgSource(true);
  };

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
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          profile: null,
          gender: "",
          website: "",
          address: "",
          telephone: "",
        }}
        onSubmit={(values: UsersTypes, { resetForm }) => {
          console.log(values);
          resetForm();
          setImgSource(true);
        }}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <div className="w-full md:flex md:gap-4">
              <div className="input-group w-full md:w-1/2">
                <label htmlFor="username" className="w-full">
                  username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="John Doe"
                  value={values.username}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFieldValue("username", e.target.value)
                  }
                  required
                />
              </div>
              <div className="input-group w-full md:w-1/2">
                <label htmlFor="email" className="w-full">
                  email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@example.com"
                  value={values.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFieldValue("email", e.target.value)
                  }
                  required
                />
              </div>
            </div>
            <div className="lg:w-full md:flex md:gap-4 ">
              <div className="input-group md:w-full lg:w-6/12">
                <label htmlFor="password" className="w-full">
                  password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder=""
                  value={values.password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFieldValue("password", e.target.value)
                  }
                  required
                />
              </div>
              <div className="input-group md:w-full lg:w-6/12">
                <label htmlFor="confirmPassword" className="w-full">
                  confirm password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder=""
                  value={values.confirmPassword}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const confirmPassword = e.target.value;
                    if (confirmPassword === values.password) {
                      setPasswordValidate("password is matched");
                    } else {
                      setPasswordValidate("password not matched!");
                    }
                    setFieldValue("confirmPassword", confirmPassword);
                  }}
                  required
                />
              </div>
            </div>
            <div className="lg:flex lg:w-full pad-main">
              {values.confirmPassword && (
                <p
                  className={`w-full p-2 rounded-[5px] ${
                    passwordValidate === "password is matched"
                      ? "text-green-600 bg-green-200"
                      : "text-red-600 bg-red-200"
                  }`}
                >
                  {passwordValidate}
                </p>
              )}
            </div>
            <div
              className={`input-group ${passwordValidate ? "pad-main" : ""}`}
            >
              <UploadFile
                setFieldValue={setFieldValue}
                clearImage={imgSource}
                onFileChange={(file: File | null) => {
                  if (file) {
                    setFieldValue("profile", file);
                  } else {
                    setFieldValue("profile", null);
                  }
                }}
              />
            </div>
            <div className="input-group">
              <label htmlFor="gender" className="w-full">
                gender
              </label>
              <div className="flex mt-2">
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  checked={values.gender === "male"}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFieldValue("gender", e.target.value)
                  }
                  required
                  className="cursor-pointer"
                />
                <label htmlFor="male" className="mx-2">
                  male
                </label>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  checked={values.gender === "female"}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFieldValue("gender", e.target.value)
                  }
                  required
                  className="cursor-pointer"
                />
                <label htmlFor="female" className="mx-2">
                  female
                </label>
                <input
                  type="radio"
                  name="gender"
                  id="other"
                  value="other"
                  checked={values.gender === "other"}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFieldValue("gender", e.target.value)
                  }
                  required
                  className="cursor-pointer"
                />
                <label htmlFor="other" className="mx-2">
                  other..
                </label>
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="website" className="w-full">
                website
              </label>
              <input
                type="text"
                name="website"
                id="website"
                placeholder="https://www.google.com/"
                value={values.website}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("website", e.target.value)
                }
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="address" className="w-full">
                address
              </label>
              <input
                type="address"
                name="address"
                id="address"
                placeholder="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis neque consequuntur rem."
                value={values.address}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("address", e.target.value)
                }
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="telephone" className="w-full">
                telephone
              </label>
              <input
                type="tel"
                name="telephone"
                id="telephone"
                placeholder="999-999-9999"
                value={values.telephone}
                maxLength={12}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("telephone", e.target.value)
                }
                required
              />
            </div>
            <div className="container-btn">
              <button type="submit" className="btn-base btn-main">
                Confirm
              </button>
              <button
                type="reset"
                className="btn-base btn-sub"
                onClick={handleClearImg}
              >
                Clear
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

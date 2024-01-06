import { useState } from "react";
import { noEnglishChars, onlyNumbersRegex } from "../../../../../utils/regex";
import { maxNameLength, maxPasswordLength, minPasswordLength } from "../../../../../constants";

import "./index.scss";

export const RegisterSubForm = () => {
  const [name, setName] = useState<string>("");
  const [weight, setWeight] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");

  const nameInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value.replace(noEnglishChars, ""));

  const numericInputHandler = (event: React.ChangeEvent<HTMLInputElement>, setFunction: Function) => {
    let newValue = event.target.value;
    newValue = newValue.replace(onlyNumbersRegex, "");
    if (newValue.length > 0 && newValue[0] === "0") newValue = newValue.slice(1);
    if (newValue.length > 3) newValue = newValue.slice(0, 3);
    setFunction(newValue ? parseInt(newValue) : "");
  };

  return (
    <>
      <div>
        <label>R.Password</label>
        <input type="password" name="rPassword" minLength={minPasswordLength} maxLength={maxPasswordLength} />
      </div>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={name} maxLength={maxNameLength} onChange={nameInputHandler} />
      </div>

      <div className="register-sub-form-wrapper">
        <div>
          <label>Gender</label>
          <select name="gender">
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div>
          <label>Weight</label>
          <input type="number" name="weight" value={weight} onChange={(event) => numericInputHandler(event, setWeight)} />
        </div>
        <div>
          <label>Height</label>
          <input type="number" name="height" value={height} onChange={(event) => numericInputHandler(event, setHeight)} />
        </div>
      </div>
    </>
  );
};

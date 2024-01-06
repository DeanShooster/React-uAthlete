import { useState } from "react";
import { maxPasswordLength, maxWeightHeight, minPasswordLength, minWeightHeight, tokenName } from "../../../../constants";
import { Login, Register } from "../../../../API/Authentication";
import { useLoader } from "../../../../hooks/useLoader";

import { RegisterSubForm } from "./RegisterSubForm";

import "./index.scss";

interface ILoginRegister {
  closeModal: Function;
}

export const LoginRegister = ({ closeModal }: ILoginRegister) => {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const { isLoading, setIsLoading, loader } = useLoader();

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formDataObject: { [key: string]: string } = {};

    formData.forEach((value: FormDataEntryValue, key: string) => {
      formDataObject[key] = value as string;
    });

    if (isRegister) {
      if (!Object.values(formDataObject).every((value: string) => value !== "")) {
        setErrorMsg("Missing Fields");
        return;
      }
      if (formDataObject.password !== formDataObject.rPassword) {
        setErrorMsg("Passwords do not Match");
        return;
      }
      if (parseInt(formDataObject.weight) < minWeightHeight || parseInt(formDataObject.weight) > maxWeightHeight) {
        setErrorMsg("Unrealistic Weight Value");
        return;
      }
      if (parseInt(formDataObject.height) < minWeightHeight || parseInt(formDataObject.height) > maxWeightHeight) {
        setErrorMsg("Unrealistic Height Value");
        return;
      }
      setErrorMsg("");
      // activte loader
      const registerResult = await Register(formDataObject);
      console.log(registerResult);
      if (registerResult.token) {
        // localStorage.setItem(tokenName,registerResult.token);
        // Context Update
      } else setErrorMsg("Something Went Wrong");
    } else {
      if (!formDataObject.email || !formDataObject.password) {
        setErrorMsg("Missing Fields");
        return;
      }
      setErrorMsg("");
      // activte loader
      const loginResult = await Login(formDataObject);
      if (loginResult.token) {
        // localStorage.setItem(tokenName,registerResult.token);
        // Context Update
      } else setErrorMsg("Something Went Wrong");
    }
  };

  const loginRegisterViewHandler = (isRegisterView: boolean) => {
    setIsRegister(isRegisterView);
    setErrorMsg("");
  };

  return (
    <div className="login-register-wrapper">
      <div className="close-x" onClick={() => closeModal()}>
        X
      </div>
      <h1>Credentials</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" minLength={minPasswordLength} maxLength={maxPasswordLength} />
        </div>
        {isRegister && <RegisterSubForm />}
        <button>{isRegister ? "Register" : "Login"}</button>
        {errorMsg && <span className="error-msg">{errorMsg}</span>}
      </form>
      <div className="login-register-btn-controller-wrapper">
        {isRegister ? (
          <span onClick={() => loginRegisterViewHandler(false)}>Back to Login</span>
        ) : (
          <div>
            Not an Athlete?<span onClick={() => loginRegisterViewHandler(true)}>Register Here</span>
          </div>
        )}
      </div>
    </div>
  );
};

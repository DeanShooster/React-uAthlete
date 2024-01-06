import { useContext, useState } from "react";
import { maxPasswordLength, maxWeightHeight, minPasswordLength, minWeightHeight, tokenName } from "../../../../constants";
import { Login, Register } from "../../../../API/Authentication";
import { useLoader } from "../../../../hooks/useLoader";
import { STATUS_CODES } from "../../../../API/statusCodes";
import { ERROR_MSGS } from "../../../../enum/errors";

import { RegisterSubForm } from "./RegisterSubForm";

import "./index.scss";
import { AthleteContext } from "../../../../context/AthleteContext";

interface ILoginRegister {
  closeModal: Function;
}

export const LoginRegister = ({ closeModal }: ILoginRegister) => {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const { setAthlete } = useContext(AthleteContext);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const { isLoading, setIsLoading, loader } = useLoader({ init: false, size: 50, containerMargin: 10 });

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formDataObject: { [key: string]: string } = {};

    formData.forEach((value: FormDataEntryValue, key: string) => {
      formDataObject[key] = value as string;
    });

    if (isRegister) {
      if (!Object.values(formDataObject).every((value: string) => value !== "")) {
        setErrorMsg(ERROR_MSGS.MissingInputFields);
        return;
      }
      if (formDataObject.password !== formDataObject.rPassword) {
        setErrorMsg(ERROR_MSGS.PasswordsMismatch);
        return;
      }
      if (parseInt(formDataObject.weight) < minWeightHeight || parseInt(formDataObject.weight) > maxWeightHeight) {
        setErrorMsg(ERROR_MSGS.UnrealisticValue);
        return;
      }
      if (parseInt(formDataObject.height) < minWeightHeight || parseInt(formDataObject.height) > maxWeightHeight) {
        setErrorMsg(ERROR_MSGS.UnrealisticValue);
        return;
      }
      await loginRegisterAPIHandler(Register, formDataObject); // API Register
    } else {
      if (!formDataObject.email || !formDataObject.password) {
        setErrorMsg(ERROR_MSGS.MissingInputFields);
        return;
      }
      await loginRegisterAPIHandler(Login, formDataObject); // API Login
    }
  };

  const loginRegisterAPIHandler = async (LoginRegisterAPI: Function, credentialsObject: { [key: string]: string }) => {
    setErrorMsg("");
    setIsLoading(true);
    const loginRegisterResult = await LoginRegisterAPI(credentialsObject);
    if (loginRegisterResult.token) {
      localStorage.setItem(tokenName, loginRegisterResult.token);
      setAthlete(loginRegisterResult.athlete);
      closeModal();
    } else {
      if (loginRegisterResult.status === STATUS_CODES.noAuth) setErrorMsg(ERROR_MSGS.noAuth);
      else setErrorMsg(ERROR_MSGS.GeneralError);
    }
    setIsLoading(false);
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
        {isLoading ? loader : <button>{isRegister ? "Register" : "Login"}</button>}
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

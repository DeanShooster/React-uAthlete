import { useState } from "react";

import { Modal } from "../../Modal";
import { LoginRegister } from "./LoginRegister";

import "./index.scss";

export const User = () => {
  const [showLoginRegisterModal, setShowLoginRegisterModal] = useState<boolean>(false);

  return (
    <>
      <button className="login-btn" onClick={() => setShowLoginRegisterModal(true)}>
        LOGIN
      </button>
      {showLoginRegisterModal && (
        <Modal>
          <LoginRegister closeModal={() => setShowLoginRegisterModal(false)} />
        </Modal>
      )}
    </>
  );
};

import { useRef, useState } from "react";

import Modal from "../ui/Modal";
import Backdrop from "../ui/Backdrop";
import Card from "../layout/Card";

const LoginForm = ({ onLogin }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const idInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    setModalIsOpen(true);

    const enteredID = idInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const loginData = {
      loginID: enteredID,
      password: enteredPassword,
    };

    onLogin(loginData);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <Card>
    <div className='modal'>
      <form onSubmit={submitHandler}>
        <div>
          <label>ID: </label>
          <input type="text" required id="id" ref={idInputRef} />
        </div>
        <div>
          <label>Password: </label>
          <input type="text" required id="password" ref={passwordInputRef} />
        </div>
        <div>
          <button className="btn">Proceed</button>
        </div>
      </form>
      {modalIsOpen && <Modal onClick={closeModalHandler}/>}
      {modalIsOpen && <Backdrop onClick={closeModalHandler}/>}
    </div>
    </Card>
  );
};

export default LoginForm

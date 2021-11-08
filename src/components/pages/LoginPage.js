import { useHistory } from "react-router-dom";

import LoginForm from "../authenticate/LoginForm";

const LoginPage = () => {
  const history = useHistory();

  const accounts = {
    loginID: "admin",
    password: "admin",
  };

  function loginHandler(loginData) {
    console.log(accounts.loginID);
    console.log(loginData.loginID);
    loginData.loginID == accounts.loginID ? console.log("yes") : console.log("no");
    loginData.password == accounts.password ? console.log("yes") : console.log("no");
  }

  return (
    <section>
      <LoginForm onLogin={loginHandler} />
    </section>
  );
};

export default LoginPage;

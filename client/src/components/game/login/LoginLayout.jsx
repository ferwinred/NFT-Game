import React from "react";
import Login from "./Login";

const LoginLayout = () => {
  return (
    <div className="content">
      <header>
          <h2>WHO WANTS TO BE CRYPTOMILLIONARY</h2>
      </header>
      <div className="layout-login">
        <Login />
      </div>
    </div>
  );
};

export default LoginLayout;

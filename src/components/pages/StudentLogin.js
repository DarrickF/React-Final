import React from "react";
import "../../App.css";
import { Login } from "./Login";

export default function StudentLogin() {
  return (
    <div className="login-wrap">
      <h1 className="titles"> Student Portal</h1>
      <div className="fields">
        <Login />
      </div>
    </div>
  );
}

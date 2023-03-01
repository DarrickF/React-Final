import React from "react";
import "../../App.css";
import { Login } from "./Login";

export default function AdminLogin() {
  return (
    <div className="admin-wrap">
      <h1 className="adminTitles">Administrator Portal</h1>;
      <div className="fields">
        <Login />
      </div>
    </div>
  );
}

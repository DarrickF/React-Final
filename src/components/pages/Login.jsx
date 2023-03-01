import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="email">E-mail</label>
          </div>
          <input
            value={email}
            onChange={(e) => setEmail.apply(e.target.value)}
            type="email"
            placeholder="Your email address"
            id="email"
            name="email"
          />
        </div>

        <div>
          <div>
            <label htmlFor="password">Password</label>
          </div>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="email"
            placeholder="Your password"
            id="password"
            name="password"
          />

          <div>
            <button className="logButton" type="submit">
              Log in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

import React from "react";
import "../App.css";
import { Button } from "./Button";
import { AdminButton } from "./AdminButton";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/stockvid.mp4" autoPlay loop muted />
      <h1>UNIVERSITY LOGIN</h1>
      <p>Choose an option below:</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Student Login
        </Button>
        <AdminButton
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Admin Login
        </AdminButton>
      </div>
    </div>
  );
}

export default HeroSection;

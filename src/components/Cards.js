import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Find your passion, enroll today!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/science.jpeg"
              text="Discover and Create"
              label="Chemistry"
            />
            <CardItem
              src="images/athletics.jpeg"
              text="Reach Your Highest Potential"
              label="Athletics"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/chef.jpeg"
              text="Study the Finer Things"
              label="Culinary Arts"
            />
            <CardItem
              src="images/robotics.jpeg"
              text="Innovate for a Better Tomorrow"
              label="Robotics"
            />
            <CardItem
              src="images/business.jpeg"
              text="Learn to Lead"
              label="Business Administration"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

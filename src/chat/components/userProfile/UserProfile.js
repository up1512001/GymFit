import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://pbs.twimg.com/profile_images/770394499/female.png"/>
          </div>
          <h4>Namrata Purohit</h4>
          {/* <p>Co-Founder of the Pilates Studio and Altitude Training Studio</p> */}
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
          Co-Founder of the Pilates Studio and Altitude Training Studio
          </div>
        </div>
      </div>
    );
  }
}

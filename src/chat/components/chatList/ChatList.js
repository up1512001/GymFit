import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
        "https://pbs.twimg.com/profile_images/770394499/female.png",
      id: 1,
      name: "Namrata Purohit",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://www.clker.com/cliparts/c/4/0/e/1197115544208915882acspike_male_user_icon.svg.hi.png",
      id: 2,
      name: "Mustafa Ahmed",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://www.clker.com/cliparts/c/4/0/e/1197115544208915882acspike_male_user_icon.svg.hi.png",
      id: 3,
      name: "Praveen Tokal",
      active: false,
      isOnline: false,
    },
    {
      image:
         "https://pbs.twimg.com/profile_images/770394499/female.png",
      id: 4,
      name: "Payal Gidwani Tiwari",
      active: false,
      isOnline: true,
    },
    {
      image:
      "https://pbs.twimg.com/profile_images/770394499/female.png",
      id: 5,
      name: "Radhika karle",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://www.clker.com/cliparts/c/4/0/e/1197115544208915882acspike_male_user_icon.svg.hi.png",
      id: 6,
      name: "Sarvesh Shashi",
      active: false,
      isOnline: true,
    },
    {
      image:
      "https://pbs.twimg.com/profile_images/770394499/female.png",
      id: 7,
      name: "Savanah Sixx",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://www.clker.com/cliparts/c/4/0/e/1197115544208915882acspike_male_user_icon.svg.hi.png",
      id: 8,
      name: "Satyajeet Chaurasia",
      active: false,
      isOnline: false,
    },
    {
      image: "https://www.clker.com/cliparts/c/4/0/e/1197115544208915882acspike_male_user_icon.svg.hi.png",
      id: 9,
      name: "Deanne Pandey",
      active: false,
      isOnline: true,
    },
    {
      image: "https://pbs.twimg.com/profile_images/770394499/female.png",
      id: 10,
      name: "Yasmin karachiwala",
      active: false,
      isOnline: true,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <button className="btn">
          <i className="fa fa-plus"></i>
          <span>New conversation</span>
        </button>
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

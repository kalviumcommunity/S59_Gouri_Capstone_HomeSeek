import React from "react";
import "./profilePage.scss";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";


function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Upadate Profile</button>
          </div>

          
          <div className="info">
            <span>Avatar: <img src="https://th.bing.com/th?id=OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA&w=249&h=249&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" 
            alt="user image"/>
            </span>
            <span>Username: <b>Gouri Agarwal</b></span>
            <span>E-mail: <b>gouri@gmail.com</b></span>

          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Add post</button>
          </div>
          
          <List/>

          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List/>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

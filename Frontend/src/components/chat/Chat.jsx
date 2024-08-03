import React, { useState } from 'react'

import "./chat.scss";

function Chat() {
    const [chat,setChat]=useState(true)
  return (
    <div className="chat">
        <div className="messages">
            <h1>Messages</h1>

            <div className="message">
                <img src='https://th.bing.com/th?id=OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA&w=249&h=249&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2' 
                alt='img'/>
                <span>Gouri Agarwal</span>
                <p>Hey,how are you?</p>
            </div>
            <div cla    ssName="message">
                <img src='https://th.bing.com/th?id=OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA&w=249&h=249&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2' 
                alt='img'/>
                <span>Gouri Agarwal</span>
                <p>how have you been doing?</p>
            </div>
            <div className="message">
                <img src='https://th.bing.com/th?id=OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA&w=249&h=249&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2' 
                alt='img'/>
                <span>Gouri Agarwal</span>
                <p>Yeah, I will look into the details.</p>
            </div>
            <div className="message">
                <img src='https://th.bing.com/th?id=OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA&w=249&h=249&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2' 
                alt='img'/>
                <span>Gouri Agarwal</span>
                <p>Okay!...</p>
            </div>
            <div className="message">
                <img src='https://th.bing.com/th?id=OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA&w=249&h=249&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2' 
                alt='img'/>
                <span>Gouri Agarwal</span>
                <p>Great work.</p>
            </div>
        </div>

        {chat &&
         <div className="chatBox">
            <div className="top">
                <div className="user">
                    <img src='https://th.bing.com/th?id=OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA&w=249&h=249&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2' 
                    alt='user img'/>
                    Gouri Agarwal
                </div>
                <span className="close" onClick={()=>setChat(null)}>X</span>
            </div>
            <div className="center">
                <div className="chatMessage">
                <p>Lorem Ipsum is simply dummy text.</p>        
                        <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                <p>Lorem Ipsum is simply </p>           
                     <span>1 hour ago</span>
                </div>
                <div className="chatMessage">
                <p>Lorem Ipsum is simply dummy text.</p>         
                       <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                <p>Loream ipsum apera sitret.</p>      
                          <span>1 hour ago</span>
                </div>
                <div className="chatMessage">
                <p>Loream ipsum anniyong haseyot.</p>      
                          <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                <p>Loream ipsum apper si.</p>
                <span>30 min ago</span>
                </div>
            </div>
            <div className="bottom">
                <textarea ></textarea>
                <button>Send</button>
            </div>
        </div>}
    </div>
  )
}

export default Chat
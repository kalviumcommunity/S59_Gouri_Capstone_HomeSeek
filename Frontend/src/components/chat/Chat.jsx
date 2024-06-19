import React from 'react'

import "./chat.scss";

function Chat() {
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
            <div className="message">
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
        <div className="chatBox">
            <div className="top"></div>
            <div className="centre"></div>
            <div className="bottom"></div>
        </div>
    </div>
  )
}

export default Chat
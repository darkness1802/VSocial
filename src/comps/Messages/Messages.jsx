import React from 'react'
import * as $ from "./Messages.styles"

function Messages({ children }) {
    return <$.Messages>
        <$.Heading>
            <h4>Messages</h4><i className="uil uil-edit"></i>
        </$.Heading>
        <$.Search>
            <i className="uil uil-search"></i>
            <input type="text" placeholder="Tìm kiếm tin nhắn" />
        </$.Search>
        <$.Category>
            <h6 className="active">Primary</h6>
            <h6>General</h6>
            <h6 className="messages-requests">Requests(6)</h6>
        </$.Category>
        {children}
    </$.Messages>
}

Messages.Item = function ({ avatar, username, content, active }) {
    return <$.Message>
        <div className="profile-photo">
            <img src={ avatar } alt="" />
            { active && <div className="active"/> }
        </div>
        <div className="message-body">
            <h5>{ username }</h5>
            <p className="text-muted">{ content }</p>
        </div>
    </$.Message>
}

export default Messages
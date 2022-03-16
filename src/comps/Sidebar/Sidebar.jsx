import React, { useState } from 'react'
import * as $ from "./Sidebar.styles.js"
import OutsideClickHandler from 'react-outside-click-handler';

function Sidebar({ children }) {
    return <$.Sidebar>
        {children}
    </$.Sidebar>
}

Sidebar.Item = function ({ active, icon, text }) {
    return <a href="" className={`menu-item ${active && "active"}`}>
        <span><$.Icon className={icon} /></span><$.Title>{text}</$.Title>
    </a>
}

Sidebar.Notifications = function _Notifications({ active, icon, text, popup, showPopup }) {

    return <OutsideClickHandler
        onOutsideClick={() => {
            showPopup(false)
        }}>
        <div className={`menu-item ${active && "active"}`} onClick={() => showPopup(!popup)}>
            <span><$.Icon className={icon} /><$.Count>2</$.Count></span><$.Title>{text}</$.Title>
            {popup && <$.Popup>
                <div>
                    <div className="profile-photo">
                        <img src="./images/avt1.jpg" alt="" />
                    </div>
                    <div className="notifications-body">
                        <b>Tung Lone</b> accepted your message
                        <$.Time>2 Days ago</$.Time>
                    </div>
                </div>
                <div>
                    <div className="profile-photo">
                        <img src="./images/avt1.jpg" alt="" />
                    </div>
                    <div className="notifications-body">
                        <b>Tung Lone</b> accepted your message
                        <$.Time>2 Days ago</$.Time>
                    </div>
                </div>
            </$.Popup>}
        </div>
    </OutsideClickHandler>
}

Sidebar.Messages = function ({ active, icon, text }) {
    return <a href="" className={`menu-item ${active && "active"}`}>
        <span><$.Icon className={icon} /><$.Count>2</$.Count></span><$.Title>{text}</$.Title>
    </a>
}



export default Sidebar
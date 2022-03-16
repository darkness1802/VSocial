import React from 'react'
import * as $ from "./Home.styles"
function Home() {
    return <main className="home">
        <div className="container">
            <$.Left>
                <$.Profile>
                    <$.Avatar>
                    </$.Avatar>
                    <$.Handle>
                        <h4>Tung Hwang</h4>
                        <p className="text-muted">@helloworld</p>
                    </$.Handle>
                </$.Profile>

                <$.Sidebar>
                    <Home.SidebarItem active={true} icon="uil uil-home" text="Home"/>
                    <Home.SidebarItem active={false} icon="uil uil-compass" text="Explore"/>
                    <Home.SidebarItem active={false} icon="uil uil-bell" text="Notifications"/>
                    <Home.SidebarItem active={false} icon="uil uil-envelope-alt" text="Messages"/>
                    <Home.SidebarItem active={false} icon="uil uil-bookmark" text="Bookmarks"/>
                    <Home.SidebarItem active={false} icon="uil uil-chart-line" text="Analytics"/>
                    <Home.SidebarItem active={false} icon="uil uil-palette" text="Theme"/>
                    <Home.SidebarItem active={false} icon="uil uil-setting" text="Settings"/>
                </$.Sidebar>
            </$.Left>
            <$.Middle></$.Middle>
            <$.Right></$.Right>
        </div>
    </main>
}

Home.SidebarItem = function ({ active, icon, text }) {
    return <a href="" className={`menu-item ${active && "active"}`}>
        <span><i className={icon}></i></span><h3>{text}</h3>
        {text == "Notifications" ? (
            <div className="notifications-popup">
                <div>
                    <div className="profile-photo">
                        <img src="./images/avt1.jpg" alt="" />
                    </div>
                    <div className="notifications-body">
                        <b>Tung Lone</b> accepted your message
                        <small className="text-muted">2 days ago</small>
                    </div>
                </div>
            </div>
        ):null}
    </a>
}

export default Home
import React, { useState } from 'react'
import Sidebar from '../comps/Sidebar/Sidebar'
import * as $ from "./Home.styles"

function Home() {

    const [active, $active] = useState(true)
    const [popup, showPopup] = useState(false)

    const setActive = () => {
        // Remove prev active
        // Set active
    }

    return <$.Home>
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

                <Sidebar>
                    <Sidebar.Item active={false} icon="uil uil-home" text="Home" />
                    <Sidebar.Item active={true} icon="uil uil-compass" text="Explore" />
                    <Sidebar.Notifications active={false} icon="uil uil-bell" text="Notifications" popup={popup} showPopup={showPopup}/>
                    <Sidebar.Messages active={false} icon="uil uil-envelope-alt" text="Messages" />
                    <Sidebar.Item active={false} icon="uil uil-bookmark" text="Bookmarks" />
                    <Sidebar.Item active={false} icon="uil uil-chart-line" text="Analytics" />
                    <Sidebar.Item active={false} icon="uil uil-palette" text="Theme" />
                    <Sidebar.Item active={false} icon="uil uil-setting" text="Settings" />
                </Sidebar>

                <label className="btn btn-primary" htmlFor="create-post">Create Post</label>

            </$.Left>
            <$.Middle>

            </$.Middle>
            <$.Right>

            </$.Right>
        </div>
    </$.Home>
}


export default Home

// 48:41
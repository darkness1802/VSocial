import React, { useState } from 'react'
import Feeds from '../comps/Feeds/Feeds'
import Messages from '../comps/Messages/Messages'
import Requests from '../comps/Request/Requests'
import Sidebar from '../comps/Sidebar/Sidebar'
import Stories from '../comps/Stories/Stories'
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
                    <Sidebar.Item active={false} icon="uil uil-home" text="Trang chủ" />
                    <Sidebar.Item active={true} icon="uil uil-compass" text="Khám phá" />
                    <Sidebar.Notifications active={false} icon="uil uil-bell" text="Thông báo" popup={popup} showPopup={showPopup} />
                    <Sidebar.Item active={false} icon="uil uil-bookmark" text="Bookmarks" />
                    <Sidebar.Item active={false} icon="uil uil-chart-line" text="Thống kê" />
                    <Sidebar.Item active={false} icon="uil uil-palette" text="Giao diện" />
                    <Sidebar.Item active={false} icon="uil uil-setting" text="Cài đặt" />
                </Sidebar>

            </$.Left>
            <$.Middle>
                <Stories>
                    <Stories.Item picture={"./images/avt2.jpg"} title={"Your Story"} />
                    <Stories.Item picture={"./images/avt3.jpg"} title={"Tung Hwang"} />
                    <Stories.Item picture={"./images/avt4.jpg"} title={"Tung Lone"} />
                    <Stories.Item picture={"./images/avt5.jpg"} title={"Darkness Scholar"} />
                    <Stories.Item picture={"./images/avt6.jpg"} title={"Black Rose"} />
                </Stories>

                <$.Form>
                    <$.Photo>
                        <img src="./images/avt2.jpg" alt="" />
                    </$.Photo>
                    <$.Input type="text" placeholder="What's on your mind ?" />
                    <button type="submit" className="btn btn-primary">Post</button>
                </$.Form>

                <Feeds>
                    <Feeds.Item photo={"./images/story2.jpg"} />
                    <Feeds.Item photo={"./images/story3.jpg"} />
                    <Feeds.Item photo={"./images/story4.jpg"} />
                    <Feeds.Item photo={"./images/story5.jpg"} />
                </Feeds>

            </$.Middle>
            <$.Right>
                <Messages>
                    <Messages.Item avatar={"./images/avt3.jpg"} username={"Tung Hwang"} content={"Chào ngài"} active={true} />
                    <Messages.Item avatar={"./images/avt4.jpg"} username={"Tung Lone"} content={"Hello bro"} active={true} />
                    <Messages.Item avatar={"./images/avt5.jpg"} username={"Royal Tung"} content={"Cho mình làm quen nha..."} active={true} />
                </Messages>

                <Requests>
                    <Requests.Item />
                    <Requests.Item />
                    <Requests.Item />
                </Requests>

            </$.Right>
        </div>
    </$.Home>
}


export default Home

// 1 11 
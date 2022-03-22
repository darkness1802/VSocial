import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import LazyLoad from 'react-lazyload';
import Feeds from '../comps/Feeds/Feeds'
import Messages from '../comps/Messages/Messages'
import Requests from '../comps/Request/Requests'
import Sidebar from '../comps/Sidebar/Sidebar'
import Stories from '../comps/Stories/Stories'
import * as $ from "./Home.styles"
import Navigator from '../comps/Navigator/Navigator'

function Home() {

    const [active, $active] = useState(true)
    const [popup, showPopup] = useState(false)
    const [feeds, $feeds] = useState([])

    let navigate = useNavigate()
    useEffect(() => {
        // Kiểm tra xem người dùng đã từng login hay chưa
        axios.post("http://localhost:4444/api/auth/verify", {}, {
            headers: {
                token: localStorage.getItem("auth") || ""
            }
        })
            .then(response => {
                console.log("Xác thực thành công")
            /* xác thực hoàn thành trả về homepage */ navigate('/')

            }).catch(error => {
            /* xác thực thât bại */ navigate('/login')
            })

        axios.get(`http://localhost:4444/api/poster/newsfeed/${localStorage.getItem("user")}`)
        .then(response => {
            $feeds(response.data)
        }).catch(error => {
            console.log(error);
        })
    }, [])

    const setActive = () => {
        // Remove prev active
        // Set active
    }

    return <div>
        <Navigator />
        <$.Home>
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


                        {feeds && feeds.map((feed, index) => { 
                            return <LazyLoad key={index} height={200}>
                                <Feeds.Item data={feed} />
                            </LazyLoad>
                        })}
                        
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
    </div>
}


export default Home

// 1 11 
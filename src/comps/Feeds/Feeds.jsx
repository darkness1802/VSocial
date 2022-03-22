import React from 'react'
import * as $ from './Feeds.styles'

function Feeds({ children }) {
  return <$.Feeds>
    { children }
  </$.Feeds>
}

Feeds.Item = function ({data}) {
    return <$.Item> 
        <$.Head>
            <$.User>
                <div className="profile-photo">
                    <img src={"./images/avt5.jpg"} alt="" />
                </div>
                <div className="info">
                    <h3>{data.userID}</h3>
                    <a href={`/${localStorage.getItem('user')}/${data._id}`}><small>Mars, 14 Minutes ago</small></a>
                </div>
            </$.User>

            <span className="edit">
                    <i className="uil uil-ellipsis-h"></i>
            </span>

        </$.Head>
        <div className="photo">
            <img src={data.image} alt="" />
        </div>
        <$.Actions>
            <$.Interaction>
                <span><i className="uil uil-heart"></i></span>
                <span><i className="uil uil-comment-dots"></i></span>
                <span><i className="uil uil-share-alt"></i></span>
            </$.Interaction>
            <$.Bookmarks>
                <span><i className="uil uil-bookmark-full"></i></span>
            </$.Bookmarks>
        </$.Actions>

        <div className="liked-by">
            <span><img src="./images/avt3.jpg" alt="" /></span>
            <span><img src="./images/avt4.jpg" alt="" /></span>
            <span><img src="./images/avt5.jpg" alt="" /></span>
            <p>Liked by <b>Tung Hwang,</b><b>Tung Lone,</b><b>Darkness</b> and <b>1.2bil others</b></p>
        </div>

        <div className="caption">
            <p>
                <b>Tung Lone</b> {data.content}
                <span className="harsh-tag">#hehehe</span>
            </p>
        </div>

        <div className="comments text-muted">View all 227 comments</div>
    </$.Item>
}

export default Feeds
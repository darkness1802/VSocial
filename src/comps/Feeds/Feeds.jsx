import React, {useEffect, useState} from 'react'
import * as $ from './Feeds.styles'
import axios from 'axios'

function Feeds({ children }) {
  return <$.Feeds>
    { children }
  </$.Feeds>
}

Feeds.Item = function __Item__({data}) {

    let [isLiked, $isLiked] = useState() 

    useEffect(() => {
        // check isLiked Post
        axios.post(`http://localhost:4444/api/poster/isliked/${data._id}`, { uid: localStorage.getItem('user') })
        .then((response) => {
            $isLiked(true)
        }).catch(error => {
            $isLiked(false)
        })
    }, [])

    const like = () => {
        
        axios.put(`http://localhost:4444/api/poster/like/${data._id}`, { uid: localStorage.getItem('user') })
        .then((response) => {
            console.log(response.data);
            $isLiked(!isLiked)
        }).catch((err) => { console.log(err) })
    }

    return <$.Item> 
        <$.Head>
            <$.User>
                <div className="profile-photo">
                    <img src={"./images/avt5.jpg"} alt="" />
                </div>
                <div className="info">
                    <h3>{data.userID}</h3>
                    <a href={`/userid=${localStorage.getItem('user')}/post=${data._id}`}><small>Mars, 14 Minutes ago</small></a>
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
                <span>
                    { isLiked ? <i className="uil uil-heart-break" onClick={like}/>:<i className="uil uil-heart" onClick={like}/> }
                </span>
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
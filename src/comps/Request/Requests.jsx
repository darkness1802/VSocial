import React from 'react'
import * as $ from './Requests.styles'

function Requests({ children }) {
  return <$.Requests>
    <$.Title>Yêu cầu kết bạn</$.Title>
    { children }
  </$.Requests>
}

Requests.Title = function ({ children }) {
  return <$.Title>{children}</$.Title>
}

Requests.Item = function ({ image, name, chung }) {
  return <$.Request>
    <$.Info>
      <div className="profile-photo">
        <img src="./images/avt4.jpg" alt="" />
      </div>
      <div>
        <h5>Tung Dzz</h5>
        <p className="text-muted">8 bạn chung</p>

      </div>
    </$.Info>
    <$.Actions>
      <button className="btn btn-primary">
        Accept
      </button>
      <button className="btn">
        Decline
      </button>
    </$.Actions>
  </$.Request>
}

export default Requests
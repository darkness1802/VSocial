import React from 'react'
import { FiSearch } from "react-icons/fi"


function Navigator() {
  return (
    <nav>
        <div className="container">
            <h2 className="log">
                vSocial
            </h2>
            <div className="search-bar">
                <FiSearch />
                <input type="search" placeholder="Search..." />
            </div>
            <div className="create">
                <label className="btn btn-primary" htmlFor="create">Create</label>
                <div className="profile-photo">
                    <img src="./images/avt1.jpg" alt="" />
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navigator
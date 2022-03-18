import React from 'react'
import { FiSearch } from "react-icons/fi"
import { Button } from '../../styles'
import * as $ from './Navigator.styles'


function Navigator() {
    return (
        <$.Navbar>
            <div className="container">
                <h2 className="log">
                    vSocial
                </h2>
                <div className="search-bar">
                    <FiSearch />
                    <input type="search" placeholder="Tìm kiếm..." />
                </div>
                <$.Creator>
                    <Button>Trang cá nhân</Button>
                    <$.Avatar>
                        <img src="./images/avt2.jpg" alt="" />
                    </$.Avatar>
                </$.Creator>
            </div>
        </$.Navbar>
    )
}

export default Navigator
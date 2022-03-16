import React from 'react'
import * as $ from "./Stories.styles"

function Stories({children}) {
    return <$.Stories>
        { children }
    </$.Stories>
}

Stories.Item = function ({ picture, title}) {
    return <$.Item>
        <$.Avatar>
            <img src={picture} alt="" />
        </$.Avatar>
        <$.Name>{title}</$.Name>
    </$.Item>
}

export default Stories
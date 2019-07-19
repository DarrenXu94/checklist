import React, { Component } from 'react'
import { useContext } from 'react'

import './Toggle.scss'

import { ModeContext } from '../../_stores/ModeContext'

export default function Toggle() {
const modeContextData = useContext(ModeContext)

const toggleMode = () => {
    modeContextData.setModeData((modeContextData.modeData == "edit") ? "final" : "edit")

}

    return (
        <div id="toggle">
            <label style={{"marginRight":"10px"}}>
            Edit: 
            </label>
            <label className="switch" >
                
                 <input type="checkbox" 
                 defaultChecked={modeContextData.modeData == "edit"} 
                 onClick={toggleMode} />
                 <span className="slider round"></span>
             </label>
        </div>
    )
}

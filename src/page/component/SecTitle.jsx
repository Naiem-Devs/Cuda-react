import React from 'react'
import './SecTitle.css'

function SecTitle(props) {
    return (
        <div>
            <div className="sec_title text-center mb_70">
                <h2 style={props.SecStyle} >{props.Sectitle}</h2>
                <p style={props.SecStyle}>{props.SecPera}</p>
            </div>
        </div>
    )
}

export default SecTitle

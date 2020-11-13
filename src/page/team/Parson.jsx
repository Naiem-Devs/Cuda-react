import React from 'react'

function Parson(props) {
    return (
        <div>
            <div className="parson">
                <img src={props.pImg} alt=""/>
                <h4> {props.pTitle} </h4>
                <span> {props.pSubtitle} </span>
                <p> {props.pAbout} </p>
                
            </div>
        </div>
    )
}

export default Parson

import React from 'react'

function SingelAbout(props) {


    return (
        <>
            <div className="col-6">
                <div className="singel_about d-flex">
                    <div className="ab_img">
                        <img src={props.aImg} alt=""/>
                    </div>
                    <div className="about_cont">
                        <span> {props.aAbout} </span>
                        <h4> {props.aTitle} </h4>
                        <p> {props.aSubtitle} </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingelAbout

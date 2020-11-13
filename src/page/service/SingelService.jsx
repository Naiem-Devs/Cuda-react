import React from 'react'

function SingelService(props) {
    return (
        <>
            <div className="singel_service text-center">
                <img src={props.ssimg} alt=""/>
                <h4> {props.sstitle} </h4>
                <p> {props.sspera} </p>
            </div>
        </>
    )
}

export default SingelService

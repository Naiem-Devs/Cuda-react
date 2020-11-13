import React from 'react'
import Logo_img from './logo.png'

function Logo() {
    const home= 'http://google.com'
    return (
        <div>
            <div className="logo">
                <a href={home}><img src={Logo_img} alt=""/></a>
            </div>
        </div>
    )
}

export default Logo

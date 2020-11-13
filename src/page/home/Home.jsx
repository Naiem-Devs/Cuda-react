import React from 'react'
import './Home.css'

function Home() {
    const home = 'http://google.com'
    
    return (
        <div>
            <div className="hero_section">
                <div className="container">
                    <div className="row">
                        <div className="col-10 offset-1 text-center">
                            <div className="hero_content">
                                <h1>Hi there! We are the new kids on the block and we build awesome websites and mobile apps.</h1>
                                <a href={home} target="#" className='thm-btn'>WORK WITH US!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

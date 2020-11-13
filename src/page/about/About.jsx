import React from 'react'
import SingelAbout from './SingelAbout'
import AboutData from './AboutData'
import SecTitle from '../component/SecTitle'
import './About.css'

function About() {

    const abData = (val) => {
        return(
            <SingelAbout 
                aImg ={val.aImg}
                aAbout={val.aAbout}
                aTitle={val.aTitle}
                aSubtitle={val.aSubtitle}
            />
        )
    }
    const aStyle = {
        color: '#fff'
    }

    return (
        <div>
            <div className="about_section p_100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <SecTitle 
                                Sectitle='WHAT POEPLE SAY ABOUT US'
                                SecPera ='Our clients love us!'
                                SecStyle={aStyle}
                            />
                        </div>
                    </div>
                    <div className="row">
                        {AboutData.map(abData)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

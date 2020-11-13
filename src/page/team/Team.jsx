import React from 'react'
import SecTitle from '../component/SecTitle'
import TeamData from './TeamData'
import Parson from './Parson'
import './Team.css'

function Team() {
    const ParsonData = (val) => {
        return(
            <Parson 
                pImg={val.pImg}
                pTitle={val.pTitle}
                pSubtitle={val.pSubtitle}
                pAbout={val.pAbout}
            />
        )
    }
    const TeamS = {
        color: '#3c4761'
    }
    return (
        <div>
            <div className="team_section p_100">
                <div className="container">
                    <div className="row">
                        <div className="col-8 offset-2">
                            <SecTitle 
                                Sectitle='MEET OUR BEAUTIFUL TEAM'
                                SecPera='We are a small team of designers and developers, who help brands with big ideas.'
                                SecStyle={TeamS}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="all_parson d-flex">
                                {TeamData.map(ParsonData)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team

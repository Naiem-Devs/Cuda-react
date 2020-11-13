import React from 'react'
import SecTitle from '../component/SecTitle'
import SingelSkill from './SingelSkill'
import './Skill.css'

function Skills() {
    const html = 90;
    const css = 80;
    const js = 50;
    const react = 70;
    

    return (
        <div>
            <div className="skills_section p_100">
                <div className="container">
                    <div className="row">
                        <div className="col-6 offset-3">
                            <SecTitle
                                Sectitle='WE GOT SKILLS!'
                                SecPera='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                             />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 ">
                            <div className="skills text-center d-flex">
                                <SingelSkill 
                                    percentage={html}
                                    sSkill='HTML'
                                    Skillclass='colorA'
                                    
                                />
                                
                                <SingelSkill 
                                    percentage={css}
                                    sSkill='CSS'
                                    Skillclass='colorB'
                                />
                                
                                <SingelSkill 
                                    percentage={js}
                                    sSkill='JavaScript'
                                    Skillclass='colorC'
                                />
                                
                                <SingelSkill 
                                    percentage={react}
                                    sSkill='React'
                                    Skillclass='colorD'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills

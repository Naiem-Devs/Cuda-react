import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import '../../../node_modules/react-circular-progressbar/dist/styles.css';

function SingelSkill(props) {
    return (
        <div>
            <div className="singel_skill">
                <CircularProgressbar className={props.Skillclass} value={props.percentage} text={`${props.percentage}%`} />;
                <h4> {props.sSkill} </h4>
            </div>
        </div>
    )
}

export default SingelSkill

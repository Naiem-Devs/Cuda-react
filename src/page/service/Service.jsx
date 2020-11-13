import React from 'react'
import SecTitle from '../component/SecTitle'
import SingelService from './SingelService'
import SingelServiceData from './SingelServiceData'
import './Service.css'


function Service() {
    const SingelSv = (val) => {
        return(
            <SingelService 
                ssimg={val.image}
                sstitle={val.ssTitle}
                sspera={val.ssPera}
            />
        )
    }
    const stitle={
        color: '#fff'
    }
    return (
        <div>
            <div className="service_section p_100">
                <div className="container">
                    <div className="row">
                        <div className="col-8 offset-2">
                            <SecTitle 
                                Sectitle="SERVICES WE PROVIDE"
                                SecPera="We are working with both individuals and businesses from all over the globe to create awesome websites and applications."
                                SecStyle={stitle}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex all_service">
                            {SingelServiceData.map(SingelSv)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service

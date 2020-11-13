import React from 'react'
import Logo from './Logo'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import MeinMenu from './MeinMenu'
import './Header.css'

function Header() {
    return (
        <div>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className=" col-lg-3">
                            <Logo />
                        </div>
                        <div className="col-lg-9">
                            <MeinMenu />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

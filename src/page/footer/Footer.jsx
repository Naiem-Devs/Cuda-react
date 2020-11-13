import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer_menu">
                                <nav>
                                    <ul>
                                        <li><a href="#" className='active'>Facebook</a></li>
                                        <li><a href="#">twitter</a></li>
                                        <li><a href="#">google+</a></li>
                                        <li><a href="#">linkedin</a></li>
                                        <li><a href="#">behance</a></li>
                                        <li><a href="#">dribbble</a></li>
                                        <li><a href="#">github</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer

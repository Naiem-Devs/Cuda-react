import React from 'react'
import ContactForm from './ContactForm'
import SecTitle from '../component/SecTitle'
import './Contact.css'

function Contact() {

    const cSt ={
        color: '#fff'
    }

    return (
        <div>
            <div className="Contact_section p_100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <SecTitle 
                                Sectitle='GET IN TOUCH'
                                SecPera='1600 Pennsylvania Ave NW, Washington, DC 20500, United States of America. Tel: (202) 456-1111'
                                SecStyle={cSt}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

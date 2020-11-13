import React from 'react'

function ContactForm() {
    return (
        <>
            <div className="col-10 offset-1">
                <form action="">
                    <div className="contact_form">
                        <div className="row">
                            <div className="col-6">
                                <input id='input' type="text" placeholder='Your Name'/>
                            </div>
                            <div className="col-6">
                                <input id='input' type="text" placeholder='Your Email'/>
                            </div>
                            <div className="col-12">
                                <textarea  id="m_box" placeholder='Your Message' cols="30" rows="10"></textarea>
                            </div>
                            <div className="col-12">
                                <div className="contact_btn">
                                    <a href="" className='thm-btn'>SEND MESSAGE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactForm

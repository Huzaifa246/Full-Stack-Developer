import React from 'react'
import CommonDesign from '../commonDesign'
import "./signup.css";

const Signup = () => {
    return (
        <>
            <div className='display-flex'>
                <div className='common_design_main bg-color-common'>
                    <CommonDesign />
                </div>
                <div className='login-main bg-login-color'>
                    <h1 className='h1-login-style signup-pd'>
                        Join the event
                    </h1>
                    <div className='input-signup-main'>
                        <div className='pd-10px w-100'>
                            <label className='label-style'>
                                First Name
                            </label>
                            <input
                                type="text"
                                className='input-style-signup'
                                placeholder="First Name"
                            />
                        </div>
                        <div className='pd-10px w-100'>
                            <label className='label-style'>
                                Last name
                            </label>
                            <input
                                type="text"
                                className='input-style-signup'
                                placeholder="Last Name"
                            />
                        </div>
                    </div>
                    <div className='input-signup-main'>
                        <div className='pd-10px w-100'>
                            <label className='label-style'>
                                Bussiness email
                            </label>
                            <input
                                type="email"
                                className='input-style-signup'
                                placeholder="Enter Your Email"
                            />
                        </div>
                        <div className='pd-10px w-100'>
                            <label className='label-style'>
                                Title
                            </label>
                            <input
                                type="text"
                                className='input-style-signup'
                                placeholder="What is your job title?"
                            />
                        </div>
                    </div>
                    <div className='input-signup-main'>
                        <div className='pd-10px w-100'>
                            <label className='label-style'>
                                Company Name
                            </label>
                            <input
                                type="text"
                                className='input-style-signup'
                                placeholder="Where do you work?"
                            />
                        </div>
                        <div className='pd-10px w-100'>
                            <label className='label-style'>
                                Company Size
                            </label>
                            <select
                                className='input-style-signup'
                            >
                                <option value="">Select</option>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </div>
                    </div>
                    <div className='textarea-style'>
                        <label className='label-style'>
                            What are you hoping to learn about?
                        </label>
                        <textarea className='textarea-inner' placeholder='What are you hoping to learn about?' name="Where do you work?" id="" cols="20" rows="10"></textarea>
                    </div>
                    <div className='remember-forget-password signup-pd'>
                        <label>
                            <input
                                type="checkbox"
                            />
                            I would like to recieve emails about future events
                        </label>
                    </div>
                    <button className='submit-btn signup-typo'>Register For Event</button>
                </div>
            </div>
        </>
    )
}

export default Signup

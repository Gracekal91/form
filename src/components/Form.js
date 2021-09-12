import React from 'react'
import { useState } from 'react'


const Form = () => {

    const [showName, setshowName] = useState(false);
    const [showEmail, setshowEmail] = useState(false);
    const [showPassword, setshowPassword] = useState(false);

    return (
        <div className='formControl'>
            <h2 className="formHeader">Let's set up your account</h2>
            <p className='formSubtitle'>Already have an account? <a href="#">Sign in</a></p>

            <div className="formControlGroup">
                <label htmlFor="name"
                    onClick={() => { setshowName(true) }}
                    className={showName ? 'showFormLabel ' : 'formLabel'}>Your name</label><br />
                <input className="formInput" type="name" name="name"
                    onClick={() => { setshowName(true) }} required />
            </div>

            <div className="formControlGroup">
                <label htmlFor=""
                    onClick={() => { setshowEmail(true) }}
                    className={showEmail ? 'showFormLabel ' : 'formLabel'}>Your email</label><br />
                <input className="formInput" type="email" name="email"
                    onClick={() => { setshowEmail(true) }} required />
            </div>

            <div className="formControlGroup">
                <input className="formInput" type="email" name="email"
                />
            </div>

            <div className="formControlGroup">
                <label htmlFor="password"
                    onClick={() => { setshowPassword(true) }}
                    className={showPassword ? 'showFormLabel ' : 'formLabel'}>password</label><br />
                <input className="formInput" type="password" name="password"
                    onClick={() => { setshowPassword(true) }} required />
            </div>
            <button className="formButton" type="submit">NEXT</button>
        </div>
    )
}

export default Form

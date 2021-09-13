import React from 'react'
// import validator from 'validator';
import { useState } from 'react'
import { FaEye } from 'react-icons/fa'

const Form = () => {

    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/
        return re.test(email)
    }

    const handleChange = (e) => {
        const emailValid = validateEmail(email);
        setEmail(e)
        setValid(emailValid)
    }

    const passwordValidation = (e) => {
        if (e.length >= 8) {
            setPasswordValid(true)
        }
    }



    const [showName, setshowName] = useState(false);
    const [showEmail, setshowEmail] = useState(false);
    const [showPassword, setshowPassword] = useState(false);
    const [email, setEmail] = useState('')
    const [valid, setValid] = useState(true);
    const [visiblePw, setVisiblePw] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [enableSubmit, setEnableSubmit] = useState(false)


    return (
        <form className="formControl">
            <div>
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
                    <label htmlFor="email"
                        onClick={() => { setshowEmail(true) }}
                        className={showEmail ? 'showFormLabel ' : 'formLabel'}>Your email</label><br />

                    <input
                        className={!valid ? 'formInput inputError' : 'formInput'}
                        type="email" name="email"
                        onClick={() => { setshowEmail(true) }}
                        onChange={(e) => { handleChange(e.target.value) }}
                        className={!valid ? 'formInput inputError' : 'formInput'}

                    />


                    <span className={!valid ? 'error' : 'fieldCont'}>Please enter a valid e-mail address</span>
                </div>

                <div className="formControlGroup">
                    <input className="formInput" type="email" name="email"
                    />
                </div>

                <div className="formControlGroup">
                    <label htmlFor="password"
                        onClick={() => { setshowPassword(true) }}
                        className={showPassword ? 'showFormLabel ' : 'formLabel'}>password</label><br />

                    <input className="formInput" type={visiblePw ? 'text' : 'password'} name="password"
                        onChange={(e) => { passwordValidation(e.target.value) }}
                        onClick={() => { setshowPassword(true) }} required

                    />
                    <FaEye onClick={() => { setVisiblePw(!visiblePw) }} className="formInputIcon" />
                    <span style={{ fontSize: '.8rem', color: 'gray' }}>Minimum 8 characters</span>

                </div>
                <button className={enableSubmit ? 'formButton btnDisabled' : 'formButton btnEnabled'} type="submit" disabled={enableSubmit ? false : true}>NEXT</button>
            </div>
        </form>
    )
}

export default Form


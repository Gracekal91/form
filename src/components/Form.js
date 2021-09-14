import React from 'react'
import { useState } from 'react'
import { FaEye } from 'react-icons/fa'


const options = [
    {
        value: 'I would like to describe my user type',
        label: 'I would like to describe my user type'
    },
    {
        value: 'Developer',
        label: 'Developer'
    },
    {
        value: 'Designer',
        label: 'Designer'
    },
    {
        value: 'Engineer',
        label: 'Engineer'
    }
]

const Form = () => {


    //Regex Validation

    const validateEmail = (email) => {

        const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,2})+$/
        return re.test(email)
    }

    // UseState initialisation

    const [showName, setshowName] = useState(false);
    const [showEmail, setshowEmail] = useState(false);
    const [showPassword, setshowPassword] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [visiblePw, setVisiblePw] = useState(false);
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(false);
    const [name, setName] = useState('')
    const [option, setOptionValue] = useState('')

    // Functions

    const onChangeOption = (e) => {
        setOptionValue(e)
    }

    const handleChange = (e) => {
        setEmail(e)
        const emailValid = validateEmail(email);
        setEmailValid(emailValid)
    }


    const passwordValidation = (pw) => {
        setPassword(pw)
        if (pw.length >= 8) {
            setPasswordValid(true)
        }
        return false
    }

    const submitForm = (e) => {
        e.preventDefault()
        if (emailValid && passwordValid && name.length > 0 && option !== "") {
            console.log(
                `   name: ${name} 
                    email: ${email}
                    user type : ${option}
            `)
        }
        setName('')
        setPassword('')
        setEmail('')
        setOptionValue(options[0].label)
    }
    //Return Component

    return (
        <form className="formControl" onSubmit={submitForm}>

            <h2 className="formHeader">Let's set up your account</h2>
            <p className='formSubtitle'>Already have an account? <a href="/">Sign in</a></p>
            <div className="formControlGroup">
                <label htmlFor="name"
                    onClick={() => { setshowName(true) }}
                    className={showName ? 'showFormLabel ' : 'formLabel'}>Your name</label><br />
                <input className="formInput" type="name" name="name"
                    onFocus={() => { setshowName(true) }} required
                    onChange={(e) => { setName(e.target.value) }}
                    value={name} />

            </div>

            <div className="formControlGroup" style={{ marginTop: '-1.2rem' }}>
                <label htmlFor="email"
                    onClick={() => { setshowEmail(true) }}
                    className={showEmail ? 'showFormLabel ' : 'formLabel'}>Your email</label><br />

                <input
                    className={!emailValid ? 'formInput inputError' : 'formInput'}
                    type="email" name="email"
                    onFocus={() => { setshowEmail(true) }}
                    onChange={(e) => { handleChange(e.target.value) }}
                    value={email}
                />
                <span className={!emailValid ? 'error' : 'fieldCont'}>Please enter a valid e-mail address</span>
            </div>

            <div className="formControlGroup">
                <select type="text" onChange={(e) => { onChangeOption(e.target.value) }}
                >{options.map((opt, index) => {
                    return <option key={index} value={opt.value}>{opt.label}</option>
                })}

                </select>
            </div>

            <div className="formControlGroup" style={{ marginTop: '-1.2rem' }}>
                <label htmlFor="password"
                    onClick={() => { setshowPassword(true) }}
                    className={showPassword ? 'showFormLabel ' : 'formLabel'}>password</label><br />

                <input className="formInput" type={visiblePw ? 'text' : 'password'} name="password"
                    onChange={(e) => { passwordValidation(e.target.value) }}
                    onFocus={() => { setshowPassword(true) }} required
                    value={password}
                />
                <FaEye onClick={() => { setVisiblePw(!visiblePw) }} className="formInputIcon" />
                <span style={{ fontSize: '.7rem', color: 'gray' }}>Minimum 8 characters</span>

            </div>
            <button className={(name.length > 0 && emailValid && option !== "" && passwordValid) ? 'formButton btnEnabled' : 'formButton  btnDisabled'} type="submit" disabled={(name.length && emailValid && passwordValid) ? false : true}>NEXT</button>

        </form>
    )
}

export default Form


import { useState } from 'react'
import './Register.css'

export default function Register() {
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('myride.show/')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch('http://localhost:5001/api/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                userName: userName.slice(12),
                password: password
            })
        })

        const data = await response.json()

        setStatus(data.status)
    }

    return (
        <>
        <p className='Status' >{status}</p>
        <form className='Form'>
            <div className='title'><h2>Email</h2></div>
            <input className='Email' type="text" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
            <div className='title'><h2>Username</h2></div>
            <input className='Username' type="text" value={userName} onChange={(e) => {
                    let mod = e.target.value
                    let checkLink = 'myride.show/'
                    let userName =  checkLink + mod.slice(12)
                    setUserName(userName)
                }}/>
            <div className='title'><h2>Password</h2></div>
            <input className='Password' type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            <input className='Submit' type="submit" value="Signup" onClick={(e) => {handleSubmit(e)}} />
        </form>
        </>
    )
}
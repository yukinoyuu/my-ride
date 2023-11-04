import { useState } from 'react'
import './Login.css'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch('http://localhost:5001/api/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })

        const data = await response.json()
        setStatus(data.status)

        console.log(data)
    }

    return (
        <>
            <p className='Status' >{status}</p>
            <form className='Form'>
                <div className='title'><h2>Email</h2></div>
                <input className='Email' type="text" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                <div className='title'><h2>Password</h2></div>
                <input className='Password' type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                <input className='Submit' type="submit" value="Login" onClick={(e) => {handleSubmit(e)}} />
            </form>
        </>
    )
}
import { useState } from 'react'
import './Register.css'

export default function Register() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch('http://localhost:5001/api/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName,
                password
            })
        })

        const data = await response.json()
        console.log(data)
    }

    return (
        <form className='Form'>
            <div className='title'><h2>Username</h2></div>
            <input className='Username' type="text" value={userName} onChange={(e) => {setUserName(e.target.value)}}/>
            <div className='title'><h2>Password</h2></div>
            <input className='Password' type="text" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            <input className='Submit' type="submit" value="Signup" onClick={(e) => {handleSubmit(e)}} />
        </form>
    )
}
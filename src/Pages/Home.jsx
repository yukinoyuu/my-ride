import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const getUser = async (token) => {
    token = "Bearer " + token

    const res = await fetch('http://18.226.115.73/api', {
        method: "GET",
        headers: {
            Authorization: token
        }
    })

    const data = await res.json()

    return data
}

export default function Home() {
    const navigate = useNavigate()
    const [data, setData] = useState(null)

    useEffect(() => {
        const user = localStorage.getItem('token')
        if(user) {
            (async () => {
                setData(await getUser(user))
                console.log(data)
            })()
        } else navigate('/login')
    }, [])

    return(
        <div className="userLogin">{data?.status}</div>
    )
}
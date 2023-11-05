import { Routes, Route } from 'react-router-dom'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Home from './Pages/Home'

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/' element = {<Home/>}/>
            </Routes>
        </div>
    )
}

import { Routes, Route } from 'react-router-dom'
import Register from './Pages/Register'
import Login from './Pages/Login'

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </div>
    )
}

import { Link } from 'react-router-dom'
import './App.css'
import Routers from './routes'

function App() {
    return (
        <div className=' max-w-7xl mx-auto'>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
            </div>
            <Routers />
        </div>
    )
}

export default App

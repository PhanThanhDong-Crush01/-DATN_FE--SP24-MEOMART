import React from 'react'
import './App.css'
import Routers from './routes'
import loadScript from 'load-script'
import { Link } from 'react-router-dom'

function App() {
    const loadGoogleMapsScript = () => {
        const googleMapsApiScript = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCkwTigIoyjticuejbPs_JoxgyIPKI5tNU&libraries=places`

        loadScript(googleMapsApiScript, (error, script) => {
            if (error) {
                console.error('Lỗi khi tải Google Maps API:', error)
            } else {
                console.log('Google Maps API đã tải thành công.')
            }
        })
    }

    // Gọi hàm để tải Google Maps API khi component được mount
    React.useEffect(() => {
        loadGoogleMapsScript()
    }, [])

    return (
        <div className=' max-w-7xl mx-auto'>
            {/* <div>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
            </div> */}
            <Routers />
        </div>
    )
}

export default App

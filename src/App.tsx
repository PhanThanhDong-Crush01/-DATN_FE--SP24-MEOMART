import React from 'react'
import './App.css'
import Routers from './routes'
import loadScript from 'load-script'

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
        <div className='max-w-7xl m-auto'>
            <Routers />
        </div>
    )
}

export default App

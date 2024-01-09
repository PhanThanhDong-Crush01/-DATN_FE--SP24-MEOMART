import HeaderClientComponent from '@/components/component/HeaderClientComponent'
import { Outlet } from 'react-router-dom'

const BaseLayout = () => {
    return (
        <div>
            <HeaderClientComponent />
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </div>
    )
}

export default BaseLayout

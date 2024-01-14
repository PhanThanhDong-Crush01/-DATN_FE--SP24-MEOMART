import FooterClientComponent from '@/components/component/FooterClientComponent'
import HeaderClientComponent from '@/components/component/HeaderClientComponent'
import { Outlet } from 'react-router-dom'

const BaseLayout = () => {
    return (
        <div>
            <HeaderClientComponent />
            <main>
                <Outlet />
            </main>
            <FooterClientComponent />
        </div>
    )
}

export default BaseLayout

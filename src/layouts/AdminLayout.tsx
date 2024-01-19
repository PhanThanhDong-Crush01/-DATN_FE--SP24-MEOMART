import HeaderAdminComponents from '@/components/component/HeaderAdminComponents'
import SidebarAdminComponent from '@/components/component/SidebarAdminComponent'
import { Outlet } from 'react-router-dom'
import '../styles/AdminLayout.css'

const AdminLayout = () => {
    return (
        <div className='flex '>
            <div className=''>
                <SidebarAdminComponent />
            </div>
            <main className='w-[100%]'>
                <HeaderAdminComponents />
                <div className='bg-main'>
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default AdminLayout

import BaseLayout from '@/layouts/BaseLayout'
import SigninPage from '@/pages/Client/AuthPage/Signin'
import SignupPage from '@/pages/Client/AuthPage/Signup'
import CartPage from '@/pages/Client/CartPage'
import ContactPage from '@/pages/Client/ContactPage'
import HomePage from '@/pages/Client/HomPage'
import IntroducePage from '@/pages/Client/IntroducePage'
import PaymentInformationPage from '@/pages/Client/PaymentInformationPage'
import PaymentSuccessPage from '@/pages/Client/PaymentSuccessPage'
import ProductDetailPage from '@/pages/Client/ProductDetailPage'
import ShopPage from '@/pages/Client/ShopPage'

import { Route, Routes } from 'react-router-dom'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<BaseLayout />}>
                <Route index element={<HomePage />} />
                <Route path='products' element={<ShopPage />} />
                <Route path='products/:id' element={<ProductDetailPage />} />
                <Route path='cart' element={<CartPage />} />
                <Route path='payment_information' element={<PaymentInformationPage />} />
                <Route path='payment_success' element={<PaymentSuccessPage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='introduce' element={<IntroducePage />} />

                {/* auth */}
                <Route path='signin' element={<SigninPage />} />
                <Route path='signup' element={<SignupPage />} />
            </Route>
            {/* <Route path='admin' element={<AdminLayout />}>
                <Route index element={<ManageDashboardPage />} />
                <Route path='products' element={<ManagerProductPage />} />
            </Route> */}
        </Routes>
    )
}

export default Routers

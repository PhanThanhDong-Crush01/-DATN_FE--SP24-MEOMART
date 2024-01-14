import '@/styles/PaymentSuccess.css'
import MeoImage from '@/styles/Colorful-Cat-Heart-Tail-Circles-3.svg'
import NextImage from '@/styles/Colorful-Confusion-Arrow.svg'
import { Link } from 'react-router-dom'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const PaymentSuccessPage = () => {
    const phuongthucthanhtoan = 'Thanh toán khi nhận hàng'
    return (
        <section className='PaymentSuccessPage'>
            <h1>Đặt hàng thành công</h1>
            <div className='success-container'>
                <span>
                    <h2>
                        Cảm ơn bạn đã đặt hàng tại <b>MeoMart</b>. Đơn hàng của bạn đã được nhận
                    </h2>
                    <div className='thong_tin_don_hang'>
                        <div className='item'>
                            <p>MÃ ĐƠN HÀNG</p>
                            <h4>9hsfkj34</h4>
                        </div>
                        <div className='item'>
                            <p>NGÀY ĐẶT</p>
                            <h4>13/01/2024</h4>
                        </div>
                        <div className='item'>
                            <p>TỔNG CỘNG</p>
                            <h4>25.000.000 VNĐ</h4>
                        </div>
                        <div className='item'>
                            <p>PHƯƠNG THỨC THANH TOÁN</p>
                            <h4>{phuongthucthanhtoan}</h4>
                        </div>
                    </div>
                </span>
                <img src={MeoImage} alt='Meo Image' />
            </div>
            <div className='hop_vuong'>
                <img src={MeoImage} alt='Meo Image' />
            </div>
            <span
                style={{
                    backgroundImage: `url(${NextImage})`,
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <TooltipProvider className='next'>
                    <Tooltip>
                        <TooltipTrigger className='next_con'></TooltipTrigger>
                        <TooltipContent>
                            <Link to={'/'}>Xem tất cả đơn hàng</Link>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </span>
        </section>
    )
}

export default PaymentSuccessPage

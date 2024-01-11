import '@/styles/Cart.css'
import { FaTruckMoving } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const CartPage = () => {
    return (
        <div className='container cartpage'>
            <h1 className='title-cart'>GIỎ HÀNG</h1>
            <table className='table' border={1}>
                <thead>
                    <tr>
                        <th></th>
                        <th>ẢNH</th>
                        <th>TÊN SẢN PHẨM</th>
                        <th>SỐ LƯỢNG</th>
                        <th>LOẠI</th>
                        <th>GIÁ</th>
                        <th>TẠM TÍNH</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <button className='delete-item-cart'>
                                <img
                                    src='https://www.freeiconspng.com/thumbs/remove-icon-png/add-cross-delete-exit-remove-icon--6.png'
                                    alt='anh'
                                    width={'30px'}
                                />
                            </button>
                        </td>
                        <td style={{ width: '160px', padding: 10 }}>
                            <img
                                src='https://tse4.mm.bing.net/th?id=OIP.1P3S-kJAIeYiHX-1nzSB3QHaHa&pid=Api&P=0&h=180'
                                alt='anh'
                                width={'150px'}
                            />
                        </td>
                        <td>Cần câu mèo</td>
                        <td>
                            <input type='number' min={0} defaultValue={100} style={{ width: '40px' }} />
                        </td>
                        <td>Đồ chơi</td>
                        <td>20000 VNĐ</td>
                        <td>2000000 VNĐ</td>
                    </tr>
                </tbody>
            </table>
            <div className='flex'>
                <div style={{ flex: 1 }}></div>
                <div className='cart'>
                    <h1>CỘNG GIỎ HÀNG</h1>
                    <table>
                        <tbody>
                            <tr key=''>
                                <th>TẠM TÍNH</th>
                                <td>20.000.000đ</td>
                            </tr>
                            <tr>
                                <th>GIAO HÀNG</th>
                                <td>
                                    <b>Đồng giá</b>
                                    <p>Tùy chọn giao hàng sẽ được cập nhật trong quá trình thanh toán.</p>
                                    <p className='flex'>
                                        Tính phí giao hàng &ensp;
                                        <span id='icon-oto'>
                                            <FaTruckMoving />
                                        </span>
                                        .
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <th>TỔNG</th>
                                <td style={{ color: 'red', fontWeight: 900 }}>20.000.000đ</td>
                            </tr>
                            <tr>
                                <td colspan={2} style={{ padding: 0 }}>
                                    <Link to={'/payment_information'}>
                                        <button
                                            type='submit'
                                            className='tienhanhthanhtoan'
                                            style={{ backgroundColor: '#c780ab', width: '100%' }}
                                        >
                                            TIẾN HÀNH THANH TOÁN
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CartPage

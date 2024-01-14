import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import '@/styles/PaymentInformation.css'
import { useState } from 'react'
import { IoMdInformationCircle } from 'react-icons/io'
import ListVoucher from './ListVoucher'
import { Drawer, DrawerTrigger } from '@/components/ui/drawer'
import FormPayment from './FormPayment'

const PaymentInformationPage = () => {
    const [selectedOption, setSelectedOption] = useState(null)
    const [isFormVisible, setIsFormVisible] = useState(false)

    const handleRadioChange = (option: any) => {
        setSelectedOption(option)
    }

    const openForm = () => {
        setIsFormVisible(true)
    }
    const closeForm = () => {
        setIsFormVisible(false)
    }
    return (
        <div>
            <section className='PaymentInformationPage'>
                <h1>Thanh Toán</h1>
                <form action='payment_success' method='post'>
                    <div className='grid grid-cols-2'>
                        <div className='controll-voucher flex'>
                            <div className='flex'>
                                <h3>Voucher của shop</h3>

                                <Sheet>
                                    <SheetTrigger asChild>
                                        <img
                                            src='https://cdn-icons-png.flaticon.com/512/1405/1405276.png'
                                            alt=''
                                            width={'40px'}
                                        />
                                    </SheetTrigger>
                                    <ListVoucher />
                                </Sheet>
                            </div>
                            <p>
                                <span>-23k</span>
                                <span>Miễn phí vẫn chuyển</span>
                            </p>
                        </div>
                        <div className='controll-adress flex'>
                            <IoMdInformationCircle className='icon_information' />
                            <select name='thong_tin_nhan_hang' defaultValue={''}>
                                <option disabled hidden>
                                    Chọn thông tin nhận hàng tại đây
                                </option>
                                <option value=''>0868785365, Phan Thanh Đông, Tiến Thịnh, Mê Linh, Hà Nội</option>
                                <option value=''>0374138190, Lưu Thị Huyền Trang, Thạch Đà, Mê Linh, Hà Nội</option>
                                <option value=''>0374138190, Phùng Thị Hoa, Thạch Đà, Mê Linh, Hà Nội</option>
                                <option value=''>0374138190, Phùng Thị Hùng, Thạch Đà, Mê Linh, Hà Nội</option>
                                <option value=''>0374138190, Phùng Thị Tâm, Thạch Đà, Mê Linh, Hà Nội</option>
                            </select>
                            <Drawer>
                                <DrawerTrigger
                                    style={{ backgroundColor: 'black', color: 'white', padding: '    5px' }}
                                    onClick={() => openForm()}
                                >
                                    + Add
                                </DrawerTrigger>
                                {isFormVisible && <FormPayment onClose={() => closeForm()} />}
                            </Drawer>
                        </div>
                    </div>
                    <div className='thong_tin_don_hang'>
                        <h2>Đơn hàng của bạn</h2>
                        <table className='text-left'>
                            <thead>
                                <tr>
                                    <th colSpan={4}>Sản phẩm</th>
                                    <th>Tạm tính</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* start map sản phẩm */}
                                <tr>
                                    <td colSpan={4}>Pate mèo Wisky, lon 400g, cá thu x4</td>
                                    <td>3 triệu</td>
                                </tr>
                                <tr>
                                    <td colSpan={4}>Pate mèo Wisky, lon 320g, cá thu x1</td>
                                    <td>6 triệu</td>
                                </tr>
                                <tr>
                                    <td colSpan={4}>Pate mèo Wisky, lon 30g, cá thu x1</td>
                                    <td>7 triệu</td>
                                </tr>
                                {/* end sản phẩm */}
                                <tr>
                                    <th colSpan={4}>Tạm tính</th>
                                    <th>20 triệu</th>
                                </tr>
                                <tr>
                                    <th colSpan={4}>Giao hàng</th>
                                    <th>2 triệu</th>
                                </tr>
                                <tr>
                                    <th colSpan={4}>Voucher</th>
                                    <th style={{ color: 'red', fontWeight: 900 }}>- 20 nghìn</th>
                                </tr>
                                <tr>
                                    <th colSpan={4}>Tổng</th>
                                    <th id='tongtien'>3000000 VNĐ</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='phuong_thuc_thanh_toan grid grid-flow-row auto-rows-max'>
                        <label>
                            <input
                                type='radio'
                                name='radioOption'
                                value='option1'
                                checked={selectedOption === 'option1'}
                                onChange={() => handleRadioChange('option1')}
                            />
                            Chuyển khoản ngân hàng
                            <div className={`luu_y ${selectedOption === 'option1' ? 'visible' : 'hidden'}`}>
                                Quét mã QR sau khi nhấn đặt hàng và không sửa nội dung chuyển khoản. Nếu bạn sửa nội
                                dung ck, đơn hàng của bạn sẽ không được thanh toán và tiền của bạn sẽ mất!
                            </div>
                        </label>
                        <label>
                            <input
                                type='radio'
                                name='radioOption'
                                value='option2'
                                checked={selectedOption === 'option2'}
                                onChange={() => handleRadioChange('option2')}
                            />
                            Ví VNPay
                            <div className={`luu_y ${selectedOption === 'option2' ? 'visible' : 'hidden'}`}>
                                Thanh toán nhanh chóng, không lo mất tiền cùng VNPay!
                            </div>
                        </label>
                        <label>
                            <input
                                type='radio'
                                name='radioOption'
                                value='option3'
                                checked={selectedOption === 'option3'}
                                onChange={() => handleRadioChange('option3')}
                            />
                            Thanh toán khi nhận hàng
                            <div className={`luu_y ${selectedOption === 'option3' ? 'visible' : 'hidden'}`}>
                                Thanh toán đơn hàng khi shiper giao đến!
                            </div>
                        </label>
                    </div>
                    <div className='flex'>
                        <div style={{ flex: 1 }}></div>
                        <div className='dat_hang'>
                            <p>
                                *Thông tin cá nhân của bạn <br /> sẽ được sử dụng để xử lý đơn hàng
                            </p>
                            <button type='submit' className='float-right'>
                                Đặt hàng
                            </button>
                        </div>
                    </div>
                </form>
                {/* <FormPayment /> */}
            </section>
        </div>
    )
}

export default PaymentInformationPage

import React from 'react'

const BillDetail = () => {
    return (
        <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark mx-10 my-2 '>
            <div className=' border-2 border-blue-200 mx-20 my-10 w-2/3 rounded'>
                <div className='py-6 px-4 md:px-6 xl:px-7.5 '>
                    <h4 className='text-2xl font-bold text-black dark:text-white pb-5'>Bill Detail</h4>
                    <div className='grid grid-rows-3 gap-2 font-thin text-base'>
                        <span className='font-bold text-base text-blue-300'>Thời gian đặt hàng: 17.00pm 12/1/2024</span>
                        <select
                            name=''
                            id=''
                            className='w-2/5 border-2 border-blue-300 rounded-md bg-blue-300 text-white'
                        >
                            <option className='font-medium'>Chuẩn bị hàng</option>
                            <option className='font-medium'>Đang giao hàng</option>
                            <option className='font-medium'>Giao hàng thành công</option>
                        </select>
                        <select
                            name=''
                            id=''
                            className='w-2/5 border-2 border-blue-300 rounded-md bg-blue-300 text-white'
                        >
                            <option className='font-medium'>Đã thanh toán</option>
                            <option className='font-medium'>Chưa thanh toán</option>
                        </select>
                    </div>
                </div>
                <div className='  border-stroke py-4.5 px-4 dark:border-strokedark  md:px-6 2xl:px-7.5 font-thin text-base'>
                    <p className=' font-serif text-lg'>Thông tin cửa hàng</p>
                    <div className=' grid grid-rows-3 gap-2 pl-5'>
                        <span>Tên shop: MeoDelight</span>
                        <span>Số điện thoại: 0334370130</span>
                        <span>Địa chỉ: ngõ 71, Phương Canh, Nam Từ Liêm</span>
                    </div>
                    <p className=' font-serif text-lg pt-5'>Thông tin người nhận</p>
                    <div className=' grid grid-rows-3 gap-2 pl-5'>
                        <span>Họ tên : Phùng Thị Hoa</span>
                        <span>Số điện thoại: 0334370130</span>
                        <span>Địa chỉ: ngõ 71, Phương Canh, Nam Từ Liêm</span>
                    </div>
                    <p className=' font-serif text-lg pt-5'>Thông tin sản phẩm</p>
                    <div className=' grid grid-rows-1 gap-2 pl-5'>
                        <span>1. Quần suông ống rộng - L, SL:1, Gía:100.000 VNĐ</span>
                    </div>
                </div>
                <p className='text-end bg-blue-400 text-white font-sans px-5 h-10 mt-2'>Tổng tiền: 110.000 VNĐ</p>
            </div>
        </div>
    )
}

export default BillDetail

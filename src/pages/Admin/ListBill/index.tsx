import React from 'react'

type Props = {}

const ListBill = (props: Props) => {
    return (
        <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark mx-2 my-2'>
            <div className='py-6 px-4 md:px-6 xl:px-7.5'>
                <h4 className='text-2xl font-bold text-black dark:text-white'>List Bill</h4>
            </div>
            <div className='grid grid-cols-9 border-t  border-stroke py-4.5 px-2 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5 font-thin text-base'>
                <div className='col-span-1 flex items-center'>
                    <p className='font-medium'>Mã Bill</p>
                </div>
                <div className='col-span-1 hidden items-center sm:flex'>
                    <p className='font-medium'>Mã User</p>
                </div>
                <div className='col-span-1 flex items-center'>
                    <p className='font-medium'>Tổng tiền</p>
                </div>
                <div className='col-span-1 flex items-center'>
                    <p className='font-medium'>Thời gian</p>
                </div>
                <div className='col-span-1 flex items-center'>
                    <p className='font-medium'>Địa chỉ</p>
                </div>
                <div className='col-span-1 flex items-center'>
                    <p className='font-medium'>Mã vận chuyển</p>
                </div>
                <div className='col-span-1 flex items-center'>
                    <p className='font-medium'>Phương thức thanh toán</p>
                </div>
                {/*  */}
                <div className='col-span-1 flex items-center'>
                    <p className='font-medium'>Trạng thái thanh toán</p>
                </div>
                {/*  */}
                <div className='col-span-1 flex items-center'>
                    <p className='font-medium'>Tình trạng đơn hàng</p>
                </div>
            </div>
            <div className='grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5 font-thin text-xs my-5'>
                <div className='col-span-1 flex items-center mt-2'>
                    <a href=''>
                        {' '}
                        <p className='font-medium'>343</p>
                    </a>
                </div>
                <div className='col-span-1 hidden items-center sm:flex mt-2'>
                    <p className='font-medium'>445</p>
                </div>
                <div className='col-span-1 flex items-center mt-2'>
                    <p className='font-medium'>34.000 VND</p>
                </div>
                <div className='col-span-1 flex items-center mt-2'>
                    <p className='font-medium'>5.00 12/1/2024</p>
                </div>
                <div className='col-span-1 flex items-center mt-2'>
                    <p className='font-medium '>ngõ 71 Phương Canh Nam Từ Liêm</p>
                </div>
                <div className='col-span-1 flex items-center mt-2'>
                    <p className='font-medium mx-5'>343</p>
                </div>
                <div className='col-span-1 flex items-center mt-2'>
                    <p className='font-medium'>Thanh toán khi nhận hàng</p>
                </div>
                <div className='col-span-1 flex items-center mt-2'>
                    <p className='font-medium border-2 border-red-300 rounded bg-red-400 text-white '>
                        Chưa thanh toán
                    </p>
                </div>
                <div className='col-span-1 flex items-center mt-2'>
                    <p className='font-medium border-2 border-red-300 rounded bg-red-400 text-white'>Chờ xác nhận</p>
                </div>
            </div>
        </div>
    )
}

export default ListBill

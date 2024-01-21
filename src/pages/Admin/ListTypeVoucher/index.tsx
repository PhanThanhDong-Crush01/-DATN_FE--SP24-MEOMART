import React from 'react'
import '@/styles/Cate.css'
import { Link } from 'react-router-dom'
import { IoMdAdd } from 'react-icons/io'

type Props = {}

const ListTypeVoucher = (props: Props) => {
    return (
        <div>
            <div className='container catepage'>
                <h1 className='title-cate'>LOẠI VOUCHER</h1>
                <div className='flex justify-end ...'>
                    <div>
                        <Link to={'/'}>
                            <button
                                // type='submit'
                                className='w-32 px-10 py-4 pl-4 border-1 border-gray-100 rounded bg-white-100 text-white'
                                style={{ backgroundColor: 'blue', width: '15%' }}
                            >
                                <IoMdAdd />
                            </button>
                        </Link>
                    </div>
                </div>

                <table className='table mt-3' border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TÊN VOUCHER</th>
                            <th>HÀNH ĐỘNG</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>Id</td>
                        <td>Voucher 1</td>

                        <td
                            className='border-1 border-gray-300 bg-white-150 text-white'
                            colSpan={2}
                            style={{ padding: 0 }}
                        >
                            <Link to={'/'}>
                                <button
                                    className=' border-1 border-gray-300 rounded bg-white-150 text-white'
                                    // type='submit'
                                    style={{ backgroundColor: 'blue', width: '10%', padding: '5px 8px' }}
                                >
                                    Sửa
                                </button>
                            </Link>
                            &nbsp;
                            <Link to={'/'}>
                                <button
                                    // type='submit'
                                    className=' border-1 border-gray-300 rounded bg-white-150 text-white'
                                    // type='submit'
                                    style={{ backgroundColor: 'red', width: '10%', padding: '5px 8px' }}
                                >
                                    Xóa
                                </button>
                            </Link>
                        </td>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListTypeVoucher

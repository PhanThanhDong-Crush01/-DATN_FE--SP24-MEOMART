import React from 'react'
import '../../styles/Footer.css'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'
const FooterClientComponent = () => {
    return (
        <div>
            <footer>
                <div className='matpet_ft'>
                    <div className='matpet--cols'>
                        <h2 className='matpet--cols-title'>Liên Lạc</h2>
                        <div className='matpet--cols-location'>
                            <span>Địa chỉ: </span>{' '}
                            <span className='cols-location--address'>Số 168 Thượng Đình - Thanh Xuân - Hà Nội</span>
                        </div>
                        <div className='matpet--cols-location'>
                            <span>Địa chỉ: </span>{' '}
                            <span className='cols-location--address'>
                                294-296 Đồng Đen - Quận Tân Bình - TP. Hồ Chí Minh
                            </span>
                        </div>
                        <div className='matpet--cols-numberphone'>
                            <span>Điện thoại: </span> <span className='cols-location--phone'>0939.86.36.96</span>
                        </div>
                        <div className='matpet--cols-email'>
                            <span>Email: </span> <span className='cols-location--address'>meowmartshop@fpt.edu.vn</span>
                        </div>

                        <div className='matpet--cols-social'>
                            <div className='matpet--cols--fb'>
                                <Link to='' className='matpet--cols--link'>
                                    <Icon icon='ic:baseline-facebook' />
                                </Link>
                            </div>
                            <div className='matpet--cols--tiktok'>
                                <Link to='' className='matpet--cols--link'>
                                    <Icon icon='ic:baseline-tiktok' />
                                </Link>
                            </div>
                            <div className='matpet--cols--ytb'>
                                <Link to='' className='matpet--cols--link'>
                                    <Icon icon='mingcute:youtube-fill' />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='matpet--cols'>
                        <h2 className='matpet--cols-title'>Shop</h2>
                        <div className='matpet--cols--list'>
                            <Link className='cols--list--link' to=''>
                                Dành cho chó
                            </Link>
                            <Link className='cols--list--link' to=''>
                                Dành cho mèo
                            </Link>
                            <Link className='cols--list--link' to=''>
                                Thương hiệu
                            </Link>
                            <Link className='cols--list--link' to=''>
                                Blogs
                            </Link>
                            <Link className='cols--list--link' to=''>
                                Bộ sưu tập
                            </Link>
                        </div>
                    </div>
                    <div className='matpet--cols'>
                        <h2 className='matpet--cols-title'>Meowmart</h2>
                        <div className='matpet--cols--list'>
                            <Link className='cols--list--link' to=''>
                                Giới thiệu
                            </Link>
                            <Link className='cols--list--link' to=''>
                                Thành viên Meowmarter
                            </Link>
                            <Link className='cols--list--link' to=''>
                                Điều khoản và điều kiện
                            </Link>
                            <Link className='cols--list--link' to=''>
                                Chính sách bảo mật
                            </Link>
                        </div>
                    </div>
                    <div className='matpet--cols'>
                        <h2 className='matpet--cols-title'>Hỗ trợ khách hàng</h2>
                        <div className='matpet--cols--list'>
                            <Link className='cols--list--link' to=''>
                                Chính sách đổi trả hàng
                            </Link>
                            <Link className='cols--list--link' to=''>
                                Phương thức vận chuyển
                            </Link>
                            <Link className='cols--list--link' to=''>
                                Phương thức thanh toán
                            </Link>
                            <Link className='cols--list--link' to=''>
                                Chính sách hoàn tiền
                            </Link>
                        </div>
                    </div>
                </div>
                <h2 className='ft--coppuright'>@2024 - Design by: MeowMart Team</h2>
            </footer>
        </div>
    )
}

export default FooterClientComponent

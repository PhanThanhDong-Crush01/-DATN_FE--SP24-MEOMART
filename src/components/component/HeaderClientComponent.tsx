import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import '../../styles/Header.css'
const HeaderClientComponent = () => {
    return (
        <div>
            <div className='header_matpet'>
                <Link to='' className='header_matpet-img'>
                    <img
                        src='https://matpetfamily.com/wp-content/uploads/2019/11/m%E1%BA%ADt-pet-logo-300x297.png'
                        alt=''
                    />
                </Link>
                <div className='header_matpet-menu hung'>
                    <ul className='matpet-menu'>
                        <li className='matpet-menu--list'>
                            <Link className='matpet-menu--link matpet-menu--text' to=''>
                                Trang chủ
                            </Link>
                        </li>
                        <li className='matpet-menu--list'>
                            <Link className='matpet-menu--link matpet-menu--hover' to=''>
                                Thú cưng
                            </Link>
                            <ul>
                                <li>
                                    <Link to=''>Chó A</Link>
                                </li>
                                <li>
                                    <Link to=''>Chó A</Link>
                                </li>
                                <li>
                                    <Link to=''>Chó A</Link>
                                </li>
                                <li>
                                    <Link to=''>Chó A</Link>
                                </li>
                                <li>
                                    <Link to=''>Chó A</Link>
                                </li>
                            </ul>
                        </li>
                        <li className='matpet-menu--list'>
                            <Link className='matpet-menu--link matpet-menu--hover' to=''>
                                Phụ Kiện
                            </Link>
                        </li>
                        <li className='matpet-menu--list'>
                            <Link className='matpet-menu--link matpet-menu--hover' to=''>
                                Dịch vụ
                            </Link>
                        </li>
                        <li className='matpet-menu--list'>
                            <Link className='matpet-menu--link matpet-menu--hover' to=''>
                                Giới thiệu
                            </Link>
                        </li>
                        <li className='matpet-menu--list'>
                            <Link className='matpet-menu--link matpet-menu--hover' to=''>
                                Liên hệ
                            </Link>
                        </li>
                        <li className='matpet-menu--list'>
                            <Link to='' className='matpet_btn'>
                                Gio hang
                            </Link>
                        </li>
                    </ul>
                    <div className='matpet_slideShow'>
                        <div className='matpet_slideShow--img'>
                            <div className='mySlides fade'>
                                <img
                                    className='imgfluid'
                                    src='https://matpetfamily.com/wp-content/uploads/2019/11/slider_2.jpg'
                                    alt='Slide 1'
                                />
                            </div>

                            {/* <div className='mySlides fade'>
                                <img
                                    className='imgfluid'
                                    src='https://matpetfamily.com/wp-content/uploads/2019/11/slider_1.jpg'
                                    alt='Slide 2'
                                />
                            </div>

                            <div className='mySlides fade'>
                                <img
                                    className='imgfluid'
                                    src='https://matpetfamily.com/wp-content/uploads/2019/11/slider_3.jpg'
                                    alt='Slide 3'
                                />
                            </div>

                            <div className='mySlides fade'>
                                <img
                                    className='imgfluid'
                                    src='https://matpetfamily.com/wp-content/uploads/2019/11/slider_4.jpg'
                                    alt='Slide 4'
                                />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderClientComponent

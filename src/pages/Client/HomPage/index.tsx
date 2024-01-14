import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/HomePage.css'

const HomePage = () => {
    return (
        <div>
            <main>
                <div className='main__hompage'>
                    <div className='main__hompage--category'>
                        <h3>Trang chủ</h3>
                        <Icon icon='ci:line-l' />
                        <span>Danh mục sản phẩm</span>
                    </div>
                </div>
                <section className='products__new'>
                    <h2 className='products__new--title'>
                        <Link to='' className='products__new--link'>
                            Sản phẩm mới
                        </Link>
                    </h2>
                    <div className='products__new--items'>
                        <div className='products__new--item'>
                            <div className='products__new--img'>
                                <Link to=''>
                                    <img
                                        src='https://matpetfamily.com/wp-content/uploads/2024/01/photo_2024-01-06_14-30-48-e1704527530435-300x300.jpg'
                                        alt=''
                                    />
                                </Link>
                            </div>
                            <Link to='' className='products__new--info'>
                                <h3 className='product__new--id'>ID: 123456</h3>
                                <h2 className='product__new--name'>EM BEAGLE SIÊU XINH</h2>
                                <span className='product__new--price'>12.000.000đ</span>
                            </Link>
                        </div>
                        <div className='products__new--item'>
                            <div className='products__new--img'>
                                <Link to=''>
                                    <img
                                        src='https://matpetfamily.com/wp-content/uploads/2024/01/photo_2024-01-06_14-30-48-e1704527530435-300x300.jpg'
                                        alt=''
                                    />
                                </Link>
                            </div>
                            <Link to='' className='products__new--info'>
                                <h3 className='product__new--id'>ID: 123456</h3>
                                <h2 className='product__new--name'>EM BEAGLE SIÊU XINH</h2>
                                <span className='product__new--price'>12.000.000đ</span>
                            </Link>
                        </div>
                        <div className='products__new--item'>
                            <div className='products__new--img'>
                                <Link to=''>
                                    <img
                                        src='https://matpetfamily.com/wp-content/uploads/2024/01/photo_2024-01-06_14-30-48-e1704527530435-300x300.jpg'
                                        alt=''
                                    />
                                </Link>
                            </div>
                            <Link to='' className='products__new--info'>
                                <h3 className='product__new--id'>ID: 123456</h3>
                                <h2 className='product__new--name'>EM BEAGLE SIÊU XINH</h2>
                                <span className='product__new--price'>12.000.000đ</span>
                            </Link>
                        </div>
                        <div className='products__new--item'>
                            <div className='products__new--img'>
                                <Link to=''>
                                    <img
                                        src='https://matpetfamily.com/wp-content/uploads/2024/01/photo_2024-01-06_14-30-48-e1704527530435-300x300.jpg'
                                        alt=''
                                    />
                                </Link>
                            </div>
                            <Link to='' className='products__new--info'>
                                <h3 className='product__new--id'>ID: 123456</h3>
                                <h2 className='product__new--name'>EM BEAGLE SIÊU XINH</h2>
                                <span className='product__new--price'>12.000.000đ</span>
                            </Link>
                        </div>
                    </div>
                    <div className='products__new--btn'>
                        <Link to='' className='products__new--seemore'>
                            Xem thêm <Icon icon='mingcute:right-line' />
                        </Link>
                    </div>
                </section>
                <section className='products__new'>
                    <h2 className='products__new--title'>
                        <Link to='' className='products__new--link'>
                            Sản phẩm nổi bật
                        </Link>
                    </h2>
                    <div className='products__new--items'>
                        <div className='products__new--item'>
                            <div className='products__new--img'>
                                <Link to=''>
                                    <img
                                        src='https://matpetfamily.com/wp-content/uploads/2024/01/photo_2024-01-06_14-30-48-e1704527530435-300x300.jpg'
                                        alt=''
                                    />
                                </Link>
                            </div>
                            <Link to='' className='products__new--info'>
                                <h3 className='product__new--id'>ID: 123456</h3>
                                <h2 className='product__new--name'>EM BEAGLE SIÊU XINH</h2>
                                <span className='product__new--price'>12.000.000đ</span>
                            </Link>
                        </div>
                        <div className='products__new--item'>
                            <div className='products__new--img'>
                                <Link to=''>
                                    <img
                                        src='https://matpetfamily.com/wp-content/uploads/2024/01/photo_2024-01-06_14-30-48-e1704527530435-300x300.jpg'
                                        alt=''
                                    />
                                </Link>
                            </div>
                            <Link to='' className='products__new--info'>
                                <h3 className='product__new--id'>ID: 123456</h3>
                                <h2 className='product__new--name'>EM BEAGLE SIÊU XINH</h2>
                                <span className='product__new--price'>12.000.000đ</span>
                            </Link>
                        </div>
                        <div className='products__new--item'>
                            <div className='products__new--img'>
                                <Link to=''>
                                    <img
                                        src='https://matpetfamily.com/wp-content/uploads/2024/01/photo_2024-01-06_14-30-48-e1704527530435-300x300.jpg'
                                        alt=''
                                    />
                                </Link>
                            </div>
                            <Link to='' className='products__new--info'>
                                <h3 className='product__new--id'>ID: 123456</h3>
                                <h2 className='product__new--name'>EM BEAGLE SIÊU XINH</h2>
                                <span className='product__new--price'>12.000.000đ</span>
                            </Link>
                        </div>
                        <div className='products__new--item'>
                            <div className='products__new--img'>
                                <Link to=''>
                                    <img
                                        src='https://matpetfamily.com/wp-content/uploads/2024/01/photo_2024-01-06_14-30-48-e1704527530435-300x300.jpg'
                                        alt=''
                                    />
                                </Link>
                            </div>
                            <Link to='' className='products__new--info'>
                                <h3 className='product__new--id'>ID: 123456</h3>
                                <h2 className='product__new--name'>EM BEAGLE SIÊU XINH</h2>
                                <span className='product__new--price'>12.000.000đ</span>
                            </Link>
                        </div>
                    </div>
                    <div className='products__new--btn'>
                        <Link to='' className='products__new--seemore'>
                            Xem thêm <Icon icon='mingcute:right-line' />
                        </Link>
                    </div>
                </section>
                <section className='products__new'>
                    <h2 className='products__new--title'>
                        <Link to='' className='products__new--link'>
                            Phụ kiện thú cưng
                        </Link>
                    </h2>
                    <div className='products__new--items'>
                        <div className='products__new--item'>
                            <div className='products__new--img'>
                                <Link to=''>
                                    <img
                                        src='https://matpetfamily.com/wp-content/uploads/2024/01/photo_2024-01-06_14-30-48-e1704527530435-300x300.jpg'
                                        alt=''
                                    />
                                </Link>
                            </div>
                            <Link to='' className='products__new--info'>
                                <h3 className='product__new--id'>ID: 123456</h3>
                                <h2 className='product__new--name'>YẾM HỌA TIẾT CUTE CHO BOSS</h2>
                                <span className='product__new--price'>12.000.000đ</span>
                            </Link>
                        </div>
                        <div className='products__new--item'>
                            <div className='products__new--img'>
                                <Link to=''>
                                    <img
                                        src='https://matpetfamily.com/wp-content/uploads/2024/01/photo_2024-01-06_14-30-48-e1704527530435-300x300.jpg'
                                        alt=''
                                    />
                                </Link>
                            </div>
                            <Link to='' className='products__new--info'>
                                <h3 className='product__new--id'>ID: 123456</h3>
                                <h2 className='product__new--name'>YẾM HỌA TIẾT CUTE CHO BOSS</h2>
                                <span className='product__new--price'>12.000.000đ</span>
                            </Link>
                        </div>
                        <div className='products__new--item'>
                            <div className='products__new--img'>
                                <Link to=''>
                                    <img
                                        src='https://matpetfamily.com/wp-content/uploads/2024/01/photo_2024-01-06_14-30-48-e1704527530435-300x300.jpg'
                                        alt=''
                                    />
                                </Link>
                            </div>
                            <Link to='' className='products__new--info'>
                                <h3 className='product__new--id'>ID: 123456</h3>
                                <h2 className='product__new--name'>YẾM HỌA TIẾT CUTE CHO BOSS</h2>
                                <span className='product__new--price'>12.000.000đ</span>
                            </Link>
                        </div>
                        <div className='products__new--item'>
                            <div className='products__new--img'>
                                <Link to=''>
                                    <img
                                        src='https://matpetfamily.com/wp-content/uploads/2024/01/photo_2024-01-06_14-30-48-e1704527530435-300x300.jpg'
                                        alt=''
                                    />
                                </Link>
                            </div>
                            <Link to='' className='products__new--info'>
                                <h3 className='product__new--id'>ID: 123456</h3>
                                <h2 className='product__new--name'>YẾM HỌA TIẾT CUTE CHO BOSS</h2>
                                <span className='product__new--price'>12.000.000đ</span>
                            </Link>
                        </div>
                        <div className='products__new--item'>
                            <div className='products__new--img'>
                                <Link to=''>
                                    <img
                                        src='https://matpetfamily.com/wp-content/uploads/2024/01/photo_2024-01-06_14-30-48-e1704527530435-300x300.jpg'
                                        alt=''
                                    />
                                </Link>
                            </div>
                            <Link to='' className='products__new--info'>
                                <h3 className='product__new--id'>ID: 123456</h3>
                                <h2 className='product__new--name'>YẾM HỌA TIẾT CUTE CHO BOSS</h2>
                                <span className='product__new--price'>12.000.000đ</span>
                            </Link>
                        </div>
                        <div className='products__new--item'>
                            <div className='products__new--img'>
                                <Link to=''>
                                    <img
                                        src='https://matpetfamily.com/wp-content/uploads/2024/01/photo_2024-01-06_14-30-48-e1704527530435-300x300.jpg'
                                        alt=''
                                    />
                                </Link>
                            </div>
                            <Link to='' className='products__new--info'>
                                <h3 className='product__new--id'>ID: 123456</h3>
                                <h2 className='product__new--name'>YẾM HỌA TIẾT CUTE CHO BOSS</h2>
                                <span className='product__new--price'>12.000.000đ</span>
                            </Link>
                        </div>
                        <div className='products__new--item'>
                            <div className='products__new--img'>
                                <Link to=''>
                                    <img
                                        src='https://matpetfamily.com/wp-content/uploads/2024/01/photo_2024-01-06_14-30-48-e1704527530435-300x300.jpg'
                                        alt=''
                                    />
                                </Link>
                            </div>
                            <Link to='' className='products__new--info'>
                                <h3 className='product__new--id'>ID: 123456</h3>
                                <h2 className='product__new--name'>YẾM HỌA TIẾT CUTE CHO BOSS</h2>
                                <span className='product__new--price'>12.000.000đ</span>
                            </Link>
                        </div>
                        <div className='products__new--item'>
                            <div className='products__new--img'>
                                <Link to=''>
                                    <img
                                        src='https://matpetfamily.com/wp-content/uploads/2024/01/photo_2024-01-06_14-30-48-e1704527530435-300x300.jpg'
                                        alt=''
                                    />
                                </Link>
                            </div>
                            <Link to='' className='products__new--info'>
                                <h3 className='product__new--id'>ID: 123456</h3>
                                <h2 className='product__new--name'>YẾM HỌA TIẾT CUTE CHO BOSS</h2>
                                <span className='product__new--price'>12.000.000đ</span>
                            </Link>
                        </div>
                    </div>
                    <div className='products__new--btn'>
                        <Link to='' className='products__new--seemore'>
                            Xem thêm <Icon icon='mingcute:right-line' />
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default HomePage

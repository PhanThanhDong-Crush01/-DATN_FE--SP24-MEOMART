import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/HomePage.css'
import '../../../styles/Header.css'
import '../../../Js/SlideShow.js'
import { Controller, useForm } from 'react-hook-form'

const HomePage = () => {
    const { control, handleSubmit } = useForm()

    const onSubmit = (data) => {
        // Xử lý dữ liệu sau khi submit
        console.log(data)
    }
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
                <div className='categories_searchs hung'>
                    <ul className='product-categories'>
                        <li className='category '>
                            <div className='all_categories border-2 border-gray-300 bg-white rounded-lg text-sm'>
                                Tất cả danh mục <Icon icon='mingcute:down-line' className='pl-2 text-[20px]' />
                            </div>

                            <ul className='sub-categories'>
                                <li className='px-3 py-1'>Danh mục 1</li>
                                <li className='px-3 py-1'>Danh mục 2</li>
                            </ul>
                        </li>
                    </ul>

                    {/* search tailwind */}

                    <form onSubmit={handleSubmit(onSubmit)} className='flex items-center'>
                        <div className='pt-2 relative text-gray-600'>
                            <Controller
                                name='search'
                                control={control}
                                defaultValue='' // Giá trị mặc định của input
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        className='border-2 border-gray-300 bg-white h-9 px-5 rounded-lg text-sm focus:outline-none'
                                        type='search'
                                        placeholder='Search'
                                    />
                                )}
                            />
                        </div>
                    </form>

                    {/* end search tailwind */}
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

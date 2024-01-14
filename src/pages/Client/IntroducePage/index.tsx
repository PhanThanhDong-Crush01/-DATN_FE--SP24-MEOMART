import React from 'react'
import { Image } from 'antd'

const IntroducePage = () => {
    const datadog = [
        {
            id: 1,
            name: 'BENGAL',
            price: 123456,
            image: 'https://azpet.com.vn/wp-content/uploads/2021/06/meo-my-long-ngan.jpg'
        },
        {
            id: 2,
            name: 'RỪNG NA UY',
            price: 123456,
            image: 'https://azpet.com.vn/wp-content/uploads/2021/06/meo-munchkin.jpg'
        },
        {
            id: 3,
            name: 'SOMALI',
            price: 123456,
            image: 'https://azpet.com.vn/wp-content/uploads/2021/06/Ragdoll.jpg'
        },
        {
            id: 4,
            name: 'TRAN DUC BO',
            price: 123456,
            image: 'https://azpet.com.vn/wp-content/uploads/2021/06/meo-rung-na-uy.jpg'
        }
    ]

    const seruices = [
        {
            id: 1,
            name: 'CAT DAYCARE',
            price: 29,
            des: '$15 for full day on weekends'
        },
        {
            id: 2,
            name: 'CAT DAYCARE',
            price: 29,
            des: '$15 for full day on weekends'
        },
        {
            id: 3,
            name: 'CAT DAYCARE',
            price: 29,
            des: '$15 for full day on weekends'
        },
        {
            id: 4,
            name: 'CAT DAYCARE',
            price: 29,
            des: '$15 for full day on weekends'
        }
    ]

    return (
        <div>
            <div>
                <div className='md:flex justify-center items-center gap-[5px] w-full text-center py-[20px] '>
                    <div>
                        <p className='text-[20px] font-bold'>FOOD STORE :</p>
                    </div>
                    <div className='flex justify-center'>
                        <img src='https://matpetfamily.com/wp-content/uploads/2018/01/store1.jpg' alt='' />
                        <img src='https://matpetfamily.com/wp-content/uploads/2018/01/store2.jpg' alt='' />
                        <img src='https://matpetfamily.com/wp-content/uploads/2018/01/store3.jpg' alt='' />
                        <img src='https://matpetfamily.com/wp-content/uploads/2018/01/store4.jpg' alt='' />
                        <img src='https://matpetfamily.com/wp-content/uploads/2018/01/store5.jpg' alt='' />
                    </div>
                    <div>
                        <p className='font-[800] py-[10px]'>Need help choosing the perfect food for your pet?</p>
                    </div>
                    <div>
                        <a
                            className='border-dashed border-[1.5px] border-[#de8ebe] hover:bg-[#de8ebe] hover:text-white text-[20px] p-[5px] rounded-lg'
                            href=''
                        >
                            TRY OUR FOOD FINDER
                        </a>
                    </div>
                </div>
                <div className=" flex items-center  bg-[url('https://xommeo.com/wp-content/uploads/2018/06/meo-anh-long-ngan2.jpg')] w-full  lg:h-[700px] sm:h-[400px] h-[400px]">
                    <div className='md:pl-[200px] text-center'>
                        <img src='https://matpetfamily.com/wp-content/uploads/2018/01/hot-line.png' alt='' />
                        <p className='text-[40px] font-[700]  text-white'>PHU QUOC CAT</p>
                        <p className='text-[20px] text-white py-[10px]'>which is the best meomeo meo</p>
                        <a
                            href=''
                            className='border-dashed border-[1.5px] bg-[#de8ebe] border-[#ffff] hover:bg-[#de8ebe] text-white text-[20px] p-[5px] rounded-lg'
                        >
                            READ MORE
                        </a>
                    </div>
                </div>
                <div className=' md:grid grid-cols-2 justify-center items-center md:mx-[150px]'>
                    <div>
                        <img src='https://azpet.com.vn/wp-content/uploads/2021/06/Turkish-Angora.jpg' alt='' />
                    </div>
                    <div className='py-[100px]'>
                        <h1 className='text-[50px] font-[800]'>Get Access To</h1>
                        <h1 className='text-[30px] text-[#DE8EBE] py-[10px]'>PUBLIC PLACES WITH YOUR CAT!</h1>
                        <p className='pb-[20px]'>
                            Register today and join the largest Emotional Support Animal database in the country. We
                            will update you anytime the Federal Laws change, as well as other pertinent info related to
                            your Emotional Support Animal.
                        </p>
                        <div className='border-dashed border-[1.5px] bg-[#de8ebe] border-[#ffff] hover:bg-[#de8ebe] w-[300px] text-white text-[20px]  flex justify-center p-[5px] rounded-lg'>
                            <a href=''>
                                <img
                                    className='pl-[60px]'
                                    src='https://haustiere.7uptheme.net/wp-content/uploads/2018/01/dog-bon.png'
                                    alt=''
                                />
                                <p> RIGISTER FOR FREE</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className=' md:grid grid-cols-2 items-center md:mx-[160px] px-[40px] rounded-lg py-[100px] border-[2px] border-[#de8ebe] '>
                    <div>
                        <h1 className='text-[60px] font-[1000] md:w-[300px]'>Cat Care Service</h1>
                        <h2 className='text-[30px] font-[1000] py-[10px] text-[#DE8EBE]'>
                            PLEASE CALL NOW: 090 1876 345
                        </h2>
                        <p className='text-[17px] pb-[20px]'>
                            Emotional support cats are often identified by wearing an emotional support cat vest or tag,
                            letting the public know that it is an emotional support cat; otherwise, their handlers will
                            find themselves having to explain that their cat is an emotional support cat. Some
                            businesses, such as airlines, prefer to see an identification card or vest that indicates
                            that the cat is an emotional support cat.
                        </p>
                        <a
                            href=''
                            className='border-dashed border-[1.5px] bg-[#de8ebe] border-[#ffff] hover:bg-[#de8ebe] text-white text-[20px] p-[5px] rounded-lg'
                        >
                            READ MORE
                        </a>
                    </div>
                    <div className='w-[470px]'>
                        <img
                            src='https://png.pngtree.com/png-clipart/20230309/original/pngtree-pet-tabby-cat-doctor-doing-examination-png-image_8979171.png'
                            alt=''
                        />
                    </div>
                </div>
                <div className=' py-[100px]'>
                    <div className=' flex  justify-center items-center md:ml-[200px]'>
                        <div className='text-center md:w-[500px] text-[50px] font-[1000] '>Meet The Cats</div>
                        <div className='md:w-[1000px] grid grid-cols-2 items-center '>
                            <div className='border-[1px] border-[#de8ebe]'></div>
                            <div className='w-[150px]'>
                                <img src='	https://azpet.com.vn/wp-content/uploads/2021/06/meo-tuxedo.jpg' alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='md:flex justify-between items-center  md:mx-[200px]'>
                        <div className='py-[20px] text-center'>
                            <p className='text-[30px] text-[#DE8EBE]  font[1000]'>OF HAUSTIERE</p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button
                                type='button'
                                className='py-2.5 px-5 me-2 mb-2 text-sm  text-white focus:outline-none bg-[#DE8EBE] rounded-lg border border-gray-200 hover:bg-[#DE8EBE] hover:text-white focus:z-10 focus:ring-4 '
                            >
                                NEW ARRIVAL
                            </button>

                            <button
                                type='button'
                                className='text-[#DE8EBE] font-[700] bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100  rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2 mb-2'
                            >
                                BEST SELLER
                            </button>
                            <button
                                type='button'
                                className='text-[#DE8EBE] font-[700] bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100  rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2 mb-2'
                            >
                                SPECIAL
                            </button>
                        </div>
                    </div>
                    <div className=''>
                        <div className='md:grid grid-cols-2 '>
                            {datadog.map((item: any) => (
                                <div className='flex justify-center md:mx-[150px] mx-[20px] py-[20px] gap-[30px] '>
                                    <div className='relative'>
                                        <img className='md:w-[400px]' src={item.image} alt='' />

                                        <p className='absolute inset-0 flex justify-between text-white text-2xl font-bold bg-opacity-50'>
                                            <p></p>
                                            <p className='border-dashed text-[12px] border-[1px] border-[#FFFF] mt-2  h-[40px] w-[50px] rounded-full text-center '>
                                                New
                                            </p>
                                        </p>
                                    </div>
                                    <div>
                                        <p className='text-[#DE8EBE] text-[20px]'>id:1223</p>
                                        <p className='text-[40px] font-[1000]'>{item.name}</p>
                                        <p className='text-[#DE8EBE] text-[25px]'>12.000.000đ</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-[100px] bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-animal-kitten-yellow-cartoon-banner-image_782549.jpg')]  h-[563.8px]">
                        <div className='flex items-center h-[515.8px]'>
                            <div className='md:ml-[150px] '>
                                <h1 className='text-[#000] text-[50px] font-[1000]'>Kennel Club</h1>
                                <h3 className='text-[#DE8EBE] text-[25px] py-[20px] font-[800]'>CAT TRAINING</h3>
                                <div className='flex gap-[15px]'>
                                    <div className='clock day text-white '>
                                        <strong className='block p-[30px] rounded-lg bg-black text-3xl font-bold'>
                                            00
                                        </strong>
                                        <span className='block text-black text-center text-[20px] font-[800] pt-[10px]'>
                                            DAYS
                                        </span>
                                    </div>
                                    <div className='clock day text-white '>
                                        <strong className='block p-[30px] rounded-lg bg-lime-300 text-3xl font-bold'>
                                            00
                                        </strong>
                                        <span className='block text-black text-center text-[20px] font-[800] pt-[10px]'>
                                            HOURS
                                        </span>
                                    </div>
                                    <div className='clock day text-white '>
                                        <strong className='block p-[30px] rounded-lg bg-lime-600 text-3xl font-bold'>
                                            00
                                        </strong>
                                        <span className='block text-black text-center text-[20px] font-[800] pt-[10px]'>
                                            MINUTES
                                        </span>
                                    </div>
                                    <div className='clock day text-white '>
                                        <strong className='block p-[30px] rounded-lg bg-[#348BB9] text-3xl font-bold'>
                                            00
                                        </strong>
                                        <span className='block text-black text-center text-[20px] font-[800] pt-[10px]'>
                                            SECONDS
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#000000]/50 py-[5px]'>
                            <h1 className='text-[#DE8EBE] mx-[100px] text-[25px] font-[1000]'>
                                MORE ABOUT PET SITTING
                            </h1>
                        </div>
                    </div>
                </div>

                <div className='my-[30px]'>
                    <div className='md:flex justify-center items-center gap-[20px]'>
                        <div className='w-[625px] pt-[20px]'>
                            <img
                                src='https://down-vn.img.susercontent.com/file/21bd875bdf0e97db01bf612349de5ebf'
                                alt=''
                            />
                        </div>
                        <div>
                            <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8'>
                                {seruices.map((item: any) => (
                                    <div className='group relative text-center border-[1px] bg-[#FFFF]/20 border-[#c1c0c0] px-[20px] py-[50px]'>
                                        <h1 className='text-[25px] text-[#333333] font-[700]'>{item.name}</h1>
                                        <p className='text-[20px] text-[#999999] font-[700]'>full day</p>
                                        <h3 className='text-[30px] text-[#DE8EBE] font-[1000]'>${item.price}.00</h3>
                                        <p className='text-[#555555] py-[10px]'>{item.des}</p>
                                        <a
                                            href=''
                                            className='border-dashed border-[1.5px] bg-[#de8ebe] border-[#ffff] hover:bg-[#de8ebe] text-white text-[20px] p-[5px] rounded-lg'
                                        >
                                            READ MORE
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='my-[30px]'>
                    <div className='flex items-center gap-[20px] '>
                        <div className='border-[1px] border-[#de8ebe] w-[800px]'></div>
                        <div className='text-[40px] font-[1000]'>Haustiere</div>
                        <div className='border-[1px] border-[#de8ebe] w-[800px]'></div>
                    </div>
                    <div className='text-[20px] text-center font-[1000] text-[#de8ebe]'>VIEW GALLERY</div>
                    <div className='grid grid-cols-4 gap-[10px] mt-[20px]'>
                        <Image width={315} src='https://azpet.com.vn/wp-content/uploads/2022/03/M671-1.jpg' />
                        <Image width={315} src='https://azpet.com.vn/wp-content/uploads/2022/03/M12367-1.jpg' />
                        <Image width={315} src='https://azpet.com.vn/wp-content/uploads/2022/02/M12348-1.jpg' />
                        <Image width={315} src='https://azpet.com.vn/wp-content/uploads/2022/02/M12298-6.jpg' />
                        <Image
                            width={315}
                            src='https://azpet.com.vn/wp-content/uploads/2021/10/Anh-Long-Dai-Hong-Phan-M12236-1.jpg'
                        />
                        <Image
                            width={315}
                            src='https://azpet.com.vn/wp-content/uploads/2021/10/Anh-Long-Dai-Tabby-M12231-1.jpg'
                        />
                        <Image
                            width={315}
                            src='https://azpet.com.vn/wp-content/uploads/2021/07/Anh-Long-Dai-Socola-M12197-1.jpg'
                        />
                        <Image
                            width={315}
                            src='https://azpet.com.vn/wp-content/uploads/2021/07/Anh-Long-Dai-Bicolor-M12192-1.jpg'
                        />
                    </div>
                </div>

                <div className='my-[40px]'>
                    <div className='flex items-center gap-[20px] pt-[40px]'>
                        <div className='border-[1px] border-[#de8ebe] w-[800px]'></div>
                        <div className='text-[40px] font-[1000]'>Haustiere</div>
                        <div className='border-[1px] border-[#de8ebe] w-[800px]'></div>
                    </div>
                    <div className='text-[20px] text-center font-[1000] text-[#de8ebe]'>OUR TEAM</div>
                    <div className='md:flex justify-center text-center mt-[30px]'>
                        <img src='https://matpetfamily.com/wp-content/uploads/2018/01/team-01.jpg' alt='' />
                        <img src='https://matpetfamily.com/wp-content/uploads/2018/01/team-02.jpg' alt='' />
                        <img src='https://matpetfamily.com/wp-content/uploads/2018/01/team-03.jpg' alt='' />
                    </div>
                </div>

                <div className='my-[50px]'>
                    <div className='md:grid grid-cols-2 '>
                        <div className='relative'>
                            <img
                                src='https://img.pikbest.com/back_our/20210817/bg/b538a0040fe08.jpg!w700wp'
                                alt='Product Image'
                                className='w-full'
                            />
                            <div className='absolute inset-0 bg-[#DE8EBE] w-[300px] h-[200px] text-white flex items-center'>
                                <div>
                                    <h1 className='text-center text-[30px] font-[1000] '>NEWS</h1>
                                    <p className='text-center'>The latest news in mental health research</p>
                                </div>
                            </div>
                        </div>
                        <div className='md:grid grid-cols-2 gap-[20px] bg-[#CA76AA] h-full px-[30px]'>
                            <div className='pt-[40px]'>
                                <h1 className='text-[30px] text-white font-[1000]'>SUY GIẢM BẠCH CẦU & FIP Ở MÈO</h1>
                                <p className='text-white py-[30px]'>
                                    Bệnh giảm bạch cầu ở mèo hay còn gọi là bệnh viêm ruột truyền nhiễm ở mèo (Felien
                                    infectious Enteritis). Bệnh do một loại virus gây ra, với đặc điểm bệnh xuất hiện
                                    đột ngột, con vật nôn mửa, tiêu chảy và số lượng bạch cầu giảm rõ rết. Bệnh lây lan
                                    nhanh, khi bị bệnh, […]
                                </p>
                                <p className=' my-[20px] w-full border-dashed border-[1px] border-white'></p>
                                <a className='font-[1000] text-white' href=''>
                                    XEM THÊM
                                </a>
                                <p className='my-[20px] w-full border-dashed border-[1px] border-white'></p>
                            </div>
                            <div className='pt-[35px]'>
                                <p className='my-[20px] w-full border-dashed border-[1px] border-white'></p>
                                <h1 className='text-[23px] text-white font-[1000]'>
                                    BỆNH PARVO & CARE Ở CHÓ VÀ CÁCH PHÒNG TRÁNH VÀ ĐIỀU TRỊ HIỆU QUẢ
                                </h1>
                                <p className='my-[20px] w-full border-dashed border-[1px] border-white'></p>

                                <h1 className='text-[23px] text-white font-[1000]'>
                                    DOMESTIC ANIMALS CAN SAVE YOU FROM LONELINESS
                                </h1>
                                <p className='my-[20px] w-full border-dashed border-[1px] border-white'></p>

                                <h1 className='text-[23px] text-white font-[1000]'>
                                    BETTER RELATIONSHIP BETWEEN PEOPLE & CATS
                                </h1>
                                <p className='my-[20px] w-full border-dashed border-[1px] border-white'></p>

                                <h1 className='text-[23px] text-white font-[1000]'>
                                    HELPING YOU GET RID OF YOUR CAT’S BAD BEHAVIOR
                                </h1>
                                <p className='my-[20px] w-full border-dashed border-[1px] border-white'></p>

                                <h1 className='text-[23px] text-white font-[1000]'>SEE MORE NEWS</h1>
                                <p className='my-[20px] w-full border-dashed border-[1px] border-white'></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroducePage

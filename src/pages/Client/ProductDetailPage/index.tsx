import { Separator } from '@/components/ui/separator'
import { useState } from 'react'
import SimilarProduct from './SimilarProduct'
import ProductReviews from './ProductReviews'
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

import ReactPlayer from 'react-player'
const ProductDetailPage = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    const mediaItems = [
        { type: 'image', src: 'https://picsum.photos/120/100' },
        { type: 'image', src: 'https://picsum.photos/110/100' },
        { type: 'image', src: 'https://picsum.photos/130/100' },
        { type: 'image', src: 'https://picsum.photos/140/100' },
        // { type: 'image', src: 'https://picsum.photos/150/100' },
        { type: 'video', src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }

        // Replace with your video URL
    ]

    const handleThumbnailClick = (index: any) => {
        setSelectedImageIndex(index)
    }

    const handleThumbnailHover = (index: any) => {
        setSelectedImageIndex(index)
        setIsHovered(true)
    }

    const handleThumbnailLeave = () => {
        setIsHovered(false)
    }

    const thumbnailImages = mediaItems.map((item, index) => (
        <img
            key={index}
            className={`thumbnail rounded-md ${selectedImageIndex === index ? 'selected' : ''}`}
            src={item.src}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleThumbnailClick(index)}
            onMouseEnter={() => handleThumbnailHover(index)}
            onMouseLeave={handleThumbnailLeave}
        />
    ))

    return (
        <div>
            <div className='flex font-sans flex flex-row px-40 pt-10'>
                <div className='flex-none  relative basis-2/5 mx-6 '>
                    {isHovered ? (
                        mediaItems[selectedImageIndex].type === 'image' ? (
                            <img
                                className='large-image rounded-lg '
                                src={mediaItems[selectedImageIndex].src}
                                alt={`Large Image ${selectedImageIndex + 1}`}
                                loading='lazy'
                                style={{
                                    width: '370px',
                                    height: '400px'
                                }}
                            />
                        ) : (
                            <ReactPlayer
                                className='react-player'
                                url={
                                    mediaItems[selectedImageIndex].type === 'video'
                                        ? mediaItems[selectedImageIndex].src
                                        : undefined // Set the URL for the video
                                }
                                width='100%'
                                height='100%'
                                controls
                                config={{
                                    youtube: {
                                        playerVars: { showinfo: 1 }
                                    }
                                }}
                            />
                        )
                    ) : (
                        <img
                            className='large-image rounded-lg'
                            src={mediaItems[selectedImageIndex].src}
                            alt={`Large Image ${selectedImageIndex + 1}`}
                            loading='lazy'
                            style={{
                                width: '350px',
                                height: '400px'
                            }}
                        />
                    )}
                </div>

                <form className='flex-auto pl-12 basis-3/5 pr-28'>
                    <div className='flex flex-wrap pb-5'>
                        <h1 className='flex-auto text-2xl font-semibold text-slate-900'>Utility Jacket</h1>
                        <div className='text-2xl font-semibold text-pink-300'>$110.00</div>
                    </div>
                    <div>
                        <Separator className='my-3' />
                        <div className='flex h-5 items-center space-x-0 text-sm grid grid-cols-3 divide-x '>
                            <div className='  px-4'>
                                <span className=' px-7 text-lg'>4.8</span>
                                <Separator />
                                <div className='flex text-yellow-300 mt-1 px-2  '>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='16'
                                        height='16'
                                        fill='currentColor'
                                        className='bi bi-star-fill basis-1/7 '
                                        viewBox='0 0 16 16'
                                    >
                                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                                    </svg>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='16'
                                        height='16'
                                        fill='currentColor'
                                        className='bi bi-star-fill basis-1/7 '
                                        viewBox='0 0 16 16'
                                    >
                                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                                    </svg>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='16'
                                        height='16'
                                        fill='currentColor'
                                        className='bi bi-star-fill basis-1/7 '
                                        viewBox='0 0 16 16'
                                    >
                                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                                    </svg>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='16'
                                        height='16'
                                        fill='currentColor'
                                        className='bi bi-star-fill basis-1/7 '
                                        viewBox='0 0 16 16'
                                    >
                                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                                    </svg>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='16'
                                        height='16'
                                        fill='currentColor'
                                        className='bi bi-star-fill basis-1/7 '
                                        viewBox='0 0 16 16'
                                    >
                                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                                    </svg>
                                </div>
                            </div>

                            <div className='px-4'>
                                <span className='px-7  text-red-400 text-lg'>20</span>
                                <Separator />
                                <span className='text-gray-400 px-5'>Đã bán</span>
                            </div>

                            <div className='px-4'>
                                <span className='px-7  text-lg text-green-400 '>18</span>
                                <Separator />
                                <span className=' text-gray-400 px-3'>Đánh giá</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex border-slate-200 pt-10 gap-5 mt-2'>
                        <label className='flex '>
                            <span className='pt-1 text-lg font-medium pr-7'>Số lượng</span>
                            <input
                                className=' h-5 w-10 mt-2 border-2 border-gray-200 rounded text-center'
                                name='size'
                                type='number'
                                min={1}
                            />
                        </label>
                        <label>
                            <div className=' text-slate-700  mt-1'>Còn 23 sản phẩm</div>
                        </label>
                    </div>
                    <div className='flex items-baseline mb-3 pb-3 mt-5 border-slate-200'>
                        <div className='space-x-2 flex text-sm'>
                            <span className='pt-1 text-lg font-medium pr-7'>Kích cỡ</span>
                            <label>
                                <input className='sr-only peer' name='size' type='radio' value='xs' defaultChecked />

                                <div className='w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-pink-400 peer-checked:text-white'>
                                    XS
                                </div>
                            </label>
                            <label>
                                <input className='sr-only peer' name='size' type='radio' value='s' />
                                <div className='w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-pink-400 peer-checked:text-white'>
                                    S
                                </div>
                            </label>
                            <label>
                                <input className='sr-only peer' name='size' type='radio' value='m' />
                                <div className='w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-pink-400 peer-checked:text-white'>
                                    M
                                </div>
                            </label>
                            <label>
                                <input className='sr-only peer' name='size' type='radio' value='l' />
                                <div className='w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-pink-400 peer-checked:text-white'>
                                    L
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className='flex items-baseline mb-6 pb-6 mt-3 border-b border-slate-200'>
                        <div className='space-x-2 flex text-sm gap-3 '>
                            <span className='pt-1 text-lg font-medium pr-7'>Màu sắc</span>
                            <label>
                                <input className='sr-only peer' name='color' type='radio' value='Trắng' />
                                <div className='w-16 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-pink-400 peer-checked:text-white'>
                                    Trắng
                                </div>
                            </label>
                            <label>
                                <input className='sr-only peer' name='color' type='radio' value='Đen' />
                                <div className='w-16 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-pink-400 peer-checked:text-white'>
                                    Đen
                                </div>
                            </label>
                            <label>
                                <input className='sr-only peer' name='color' type='radio' value='Đỏ' />
                                <div className='w-16 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-pink-400 peer-checked:text-white'>
                                    Đỏ
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className='flex space-x-4 mb-6 text-sm font-medium'>
                        <div className='flex-auto flex space-x-4'>
                            <button
                                className='h-10 w-32 px-6 font-semibold rounded-md bg-pink-400 text-white hover:bg-black'
                                type='submit'
                            >
                                Buy now
                            </button>
                            <button
                                className='h-10 w-32 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 hover:bg-blue-300'
                                type='button'
                            >
                                Add to bag
                            </button>
                        </div>
                    </div>
                    <div>
                        <span className='text-base '>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio natus dignissimos
                            perferendis optio quis illum corporis, amet totam impedit quibusdam
                        </span>
                    </div>
                </form>
            </div>
            <div className='flex gap-2 pl-44'>
                <Carousel opts={{ align: 'start' }} className='w-full max-w-sm'>
                    <CarouselContent>{thumbnailImages}</CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            {/* Reviews */}
            <ProductReviews />
            {/*  similar product */}

            <SimilarProduct />
        </div>
    )
}

export default ProductDetailPage

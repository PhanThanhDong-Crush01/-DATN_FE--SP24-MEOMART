import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import React, { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
interface IFormInput {
    img: string
    video: string
    star: boolean[]
    des: string
}
const ProductReviews = () => {
    const {
        register,
        handleSubmit,
        setValue,
        control,
        formState: { errors }
    } = useForm<IFormInput>()
    const [starStates, setStarStates] = useState([false, false, false, false, false])
    const [selectedImage, setSelectedImage] = useState(null)
    const [selectedVideo, setSelectedVideo] = useState(null)
    // const [imagePreview, setImagePreview] = useState(null);
    // const [videoPreview, setVideoPreview] = useState(null);
    const handleImageChange = (e: any) => {
        const file = e.target.files[0]
        setSelectedImage(file)
    }

    const handleVideoChange = (e: any) => {
        const file = e.target.files[0]
        setSelectedVideo(file)
    }
    const handleStarClick = (index: any) => {
        // Tạo một bản sao của mảng starStates
        const newStarStates = [...starStates]
        // Đảo ngược giá trị của ngôi sao được click
        newStarStates[index] = !newStarStates[index]
        // Cập nhật trạng thái và đặt giá trị của 'star' trong React Hook Form tương ứng
        setStarStates(newStarStates)
        setValue('star', newStarStates)
    }
    const onSubmit: SubmitHandler<IFormInput> = (data: any) => {
        console.log(data)
    }
    return (
        <div className=' px-24 pt-10 m-5'>
            <Separator className='my-4' />
            <h1 className='text-3xl font-medium'>Đánh giá</h1>
            <div className=' flex gap-3 pt-5'>
                <Avatar className='m-3'>
                    <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
                </Avatar>
                <div className='grid grid-rows-2 grid-flow-col gap-1'>
                    <span className='text'> Người dùng</span>
                    <span>12/12/2024 8:23</span>
                </div>
            </div>

            {/* Form product reviews */}
            <form onSubmit={handleSubmit(onSubmit)} className='  p-5 rounded-md w-3/5 '>
                <div className='col-span-full flex  gap-14 w-3/5'>
                    <div className='flex pt-16'>
                        <input type='checkbox' style={{ display: 'none' }} {...register('star')} />
                        {/* Ngôi sao */}
                        {starStates.map((isStarChecked, index) => (
                            <label key={index}>
                                <FontAwesomeIcon
                                    icon={faStar}
                                    color={isStarChecked ? 'yellow' : 'black'}
                                    onClick={() => handleStarClick(index)}
                                    style={{ cursor: 'pointer' }}
                                />
                            </label>
                        ))}
                    </div>
                    <div>
                        <label htmlFor='cover-photo' className='block text-sm font-medium leading-6 text-gray-900'>
                            Hình ảnh
                        </label>
                        <div className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
                            <div className='text-center w-28'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='16'
                                    height='16'
                                    fill='currentColor'
                                    className='bi bi-image'
                                    viewBox='0 0 16 16'
                                >
                                    <path d='M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0' />
                                    <path d='M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z' />
                                </svg>

                                <div className='mt-4 flex text-sm leading-6 text-gray-600'>
                                    <label
                                        htmlFor='file-upload'
                                        className='relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500'
                                    >
                                        <span>Upload a file</span>
                                        <input
                                            id='file-upload'
                                            {...register('img')}
                                            type='file'
                                            name='img'
                                            onChange={handleImageChange}
                                            className='sr-only'
                                        />
                                        {selectedImage && (
                                            <div>
                                                <img
                                                    src={URL.createObjectURL(selectedImage)}
                                                    alt='Preview'
                                                    width='200'
                                                />
                                            </div>
                                        )}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor='cover-photo' className='block text-sm font-medium leading-6 text-gray-900'>
                            Video
                        </label>
                        <div className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
                            <div className='text-center w-28'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='16'
                                    height='16'
                                    fill='currentColor'
                                    className='bi bi-image'
                                    viewBox='0 0 16 16'
                                >
                                    <path d='M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0' />
                                    <path d='M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z' />
                                </svg>
                                {/* {videoPreview && (
                                    <video width="100%" height="auto" controls>
                                        <source src={videoPreview} type="video/mp4" />
                                    </video>
                                )} */}
                                <div className='mt-4 flex text-sm leading-6 text-gray-600'>
                                    <label
                                        htmlFor='video-upload'
                                        className='relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500'
                                    >
                                        <span>Upload Video</span>
                                        <input
                                            id='video-upload'
                                            {...register('video')}
                                            type='file'
                                            onChange={handleVideoChange}
                                            className='sr-only'
                                        />
                                        {selectedVideo && (
                                            <video width='100%' height='auto' controls>
                                                <source src={URL.createObjectURL(selectedVideo)} type='video/mp4' />
                                            </video>
                                        )}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' '>
                    <label htmlFor='about' className='block text-sm font-medium leading-6 text-gray-900'>
                        Nhận xét
                    </label>
                    <div className='mt-2'>
                        <textarea
                            {...register('des')}
                            id='des'
                            name='des'
                            rows={3}
                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            defaultValue={''}
                        />
                    </div>
                </div>
                <input type='submit' className='bg-blue-500 px-5 py-1 text-white rounded-sm w-20 mt-2 ' />
            </form>
            <div className='flex flex-row pt-5 '>
                <div className=''>
                    <Avatar className='m-2'>
                        <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
                    </Avatar>
                </div>
                <div className='grid w-3/6 gap-2'>
                    <span className='text'>user</span>
                    <span>12/12/2024 8:23</span>
                    <div className='font-bold text-base flex flex-row text-amber-300 '>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='currentColor'
                            className='bi bi-star-fill basis-1/7'
                            viewBox='0 0 16 16'
                        >
                            <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                        </svg>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='currentColor'
                            className='bi bi-star-fill basis-1/7'
                            viewBox='0 0 16 16'
                        >
                            <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                        </svg>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='currentColor'
                            className='bi bi-star-fill basis-1/7'
                            viewBox='0 0 16 16'
                        >
                            <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                        </svg>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='currentColor'
                            className='bi bi-star-fill basis-1/7'
                            viewBox='0 0 16 16'
                        >
                            <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                        </svg>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='currentColor'
                            className='bi bi-star-fill basis-1/7'
                            viewBox='0 0 16 16'
                        >
                            <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                        </svg>
                    </div>
                    <div className='flex'>
                        <input type='image' src='https://picsum.photos/100/160' alt='' className='basis-1/2 m-5' />
                        <iframe src='https://www.youtube.com/embed/dmt5iMpo-34' className='basis-1/2 m-5'></iframe>
                    </div>
                    <p className='capitalize hover:uppercase'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum reiciendis praesentium assumenda
                        veniam optio. Ipsum, nihil iure! Voluptatem facilis expedita, asperiores laudantium quasi
                        aliquam ullam officiis maiores iusto error illo.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductReviews

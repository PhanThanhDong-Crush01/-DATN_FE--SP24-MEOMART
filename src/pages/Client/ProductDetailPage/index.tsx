import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const ProductDetailPage = () => {
    return (
        <div>
            <div className="flex font-sans flex flex-row px-40">
                <div className="flex-none  relative basis-1/3 ">
                    <img src="https://picsum.photos/320/350" alt="" className="rounded-lg" loading="lazy" style={{
                        // width: '350px',
                        // height: '320px',

                    }} />
                </div>
                <form className="flex-auto pl-10 basis-2/3 pr-48">
                    <div className="flex flex-wrap">
                        <h1 className="flex-auto text-2xl font-semibold text-slate-900">
                            Utility Jacket
                        </h1>
                        <div className="text-lg font-semibold text-slate-500">
                            $110.00
                        </div>
                        <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                            In stock
                        </div>
                    </div>
                    <div className="flex items-baseline  mb-6 pb-6 mt-12 border-b border-slate-200 ">
                        <div className="space-x-2 flex text-sm">
                            <label>
                                <input className="sr-only peer" name="size" type="radio" value="xs" checked />
                                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-pink-400 peer-checked:text-white">
                                    XS
                                </div>
                            </label>
                            <label>
                                <input className="sr-only peer" name="size" type="radio" value="s" />
                                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-pink-400 peer-checked:text-white">
                                    S
                                </div>
                            </label>
                            <label>
                                <input className="sr-only peer" name="size" type="radio" value="m" />
                                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-pink-400 peer-checked:text-white">
                                    M
                                </div>
                            </label>
                            <label>
                                <input className="sr-only peer" name="size" type="radio" value="l" />
                                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-pink-400 peer-checked:text-white">
                                    L
                                </div>
                            </label>
                            <label>
                                <input className="sr-only peer" name="size" type="radio" value="xl" />
                                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-pink-400 peer-checked:text-white">
                                    XL
                                </div>
                            </label>
                        </div>
                    </div>
                    <div>
                        <span className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio natus dignissimos perferendis optio quis illum corporis, amet totam impedit quibusdam</span>
                    </div>
                    <div className="flex space-x-4 mb-6 text-sm font-medium">
                        <div className="flex-auto flex space-x-4">
                            <button className="h-10 px-6 font-semibold rounded-md bg-pink-400 text-white" type="submit">
                                Buy now
                            </button>
                            <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                                Add to bag
                            </button>
                        </div>
                        <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-pink-400 border border-slate-200" type="button" aria-label="Like">
                            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                            </svg>
                        </button>
                    </div>
                    <p className="text-sm text-slate-700">
                        Free shipping on all continental US orders.
                    </p>
                </form>
            </div>
            <div className="flex gap-2 pt-2 pl-40">
                <img className='rounded-md' src="https://picsum.photos/100" alt="" />
                <img className='rounded-md' src="https://picsum.photos/100" alt="" />
                <img className='rounded-md' src="https://picsum.photos/100" alt="" />
            </div>
            <div className=' px-24 pt-10'>
                <Separator className='my-4' />
                <h1 className='text-3xl font-medium'>Đánh giá</h1>
                <div className="flex flex-row pt-5 ">

                    <Avatar className='m-2'>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />

                    </Avatar>
                    <div className="grid w-3/6 gap-2">
                        <Textarea placeholder="Type your message here." />
                        <Button className='w-32'>Send message</Button>
                    </div>


                </div>
                <div className="flex flex-row pt-5 ">
                    <Avatar className='m-2'>
                        <AvatarImage src="https://fastly.picsum.photos/id/560/200/200.jpg?hmac=Dqou6QpKCTK2srRsCRhlIxLQHvFL7zz6UocOb3UkpwI" alt="@shadcn" />

                    </Avatar>
                    <div className="grid w-3/6 gap-2">
                        <span>user</span>
                        <span>12/12/2024 8:23</span>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum reiciendis praesentium assumenda veniam optio. Ipsum, nihil iure! Voluptatem facilis expedita, asperiores laudantium quasi aliquam ullam officiis maiores iusto error illo.</p>
                    </div>
                </div>
            </div>
            {/*  similar product */}
            <div className="col-span-3 px-20">
                <div className="grid grid-cols-3 gap-2">
                    <div className='col-span-2 lg:col-span-4 '>
                        <div className='h-full px-4 py-6 lg:px-8 '>
                            <Tabs defaultValue='music' className='h-full space-y-6'>
                                <Tabs defaultValue='music' className='h-full space-y-6'>
                                    <TabsContent value='music' className='border-none p-0 outline-none'>
                                        <Separator className='my-4' />
                                        <h1 className='text-3xl font-medium py-2'>Sản phẩm tương tự</h1>
                                        <div className=' grid grid-cols-3 gap-12 px-8 py-2 bg-pink-100'>
                                            <div className='group/item  border-0 relative bg-slate-50 p-5 rounded-md '>
                                                <img
                                                    className='hover:opacity-50 rounded-sm'
                                                    src="https://picsum.photos/250/200"
                                                    alt='Bold typography'
                                                    style={{
                                                        // display: 'block',
                                                        objectFit: 'contain',
                                                        // width: '100%',
                                                        // height: '70%',
                                                        backgroundColor: 'var(--gray-5)'
                                                    }}
                                                />

                                                <div className='flex gap-4 pt-2'>
                                                    <div className=''>
                                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                                                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                                                        </svg> */}
                                                    </div>
                                                    <div className='font-bold text-base flex flex-row text-amber-300 ml-36'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill basis-1/7" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill basis-1/7" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill basis-1/7" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill basis-1/7" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill basis-1/7" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className='flex gap-5 pt-2'>
                                                    <h3 >
                                                        <h3 className='font-extrabold text-lg text-black'>Sản phẩm 2 sản phẩm 2 </h3>
                                                        {/* <span className='font-light text-sm' >400 ml</span> */}
                                                    </h3>
                                                </div>
                                                <div className='flex gap-5 pt-2'>
                                                    <span className='font-bold pt-1 text-pink-300'>$3000
                                                        {/* <span className='line-through ml-1 text-red-500 '>$200</span> */}
                                                    </span>
                                                </div>
                                                <div className='group/edit invisible group-hover/item:visible absolute top-0 left-0 row columns-2 pt-16 pl-20 grid grid-rows-2 grid-flow-col gap-2 text-pink-200'>
                                                    <div className='flex flex-row pb-2 px-2'>
                                                        <div className='border-solid border-pink-200 border-2 rounded-full p-2 '>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-suit-heart basis-1/2 " viewBox="0 0 16 16">
                                                                <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                                                            </svg>
                                                        </div>
                                                        <div className='border-solid border-pink-200 border-2 rounded-full p-2 ml-6'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search basis-1/2" viewBox="0 0 16 16">
                                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <Button variant={'default'} className=' w-32 bg-pink-200'>
                                                        Chi tiết
                                                        {/* <Link to={`/products/${product.id}`} className='font-sans text-base '>Chi tiết</Link> */}
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className='group/item  border-0 relative bg-slate-50 p-5 rounded-md '>
                                                <img
                                                    className='hover:opacity-50 rounded-sm'
                                                    src="https://picsum.photos/250/200"
                                                    alt='Bold typography'
                                                    style={{
                                                        // display: 'block',
                                                        objectFit: 'contain',
                                                        // width: '100%',
                                                        // height: '70%',
                                                        backgroundColor: 'var(--gray-5)'
                                                    }}
                                                />
                                                <div className='flex gap-4 pt-2'>
                                                    <div className=''>
                                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                                                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                                                        </svg> */}
                                                    </div>
                                                    <div className='font-bold text-base flex flex-row text-amber-300 ml-36'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill basis-1/7" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill basis-1/7" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill basis-1/7" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill basis-1/7" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill basis-1/7" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className='flex gap-5 pt-2'>
                                                    <h3 >
                                                        <h3 className='font-extrabold text-lg text-black'>Sản phẩm 2 sản phẩm 2 </h3>
                                                        {/* <span className='font-light text-sm' >400 ml</span> */}
                                                    </h3>
                                                </div>
                                                <div className='flex gap-5 pt-2'>
                                                    <span className='font-bold pt-1 text-pink-300'>$3000
                                                        {/* <span className='line-through ml-1 text-red-500 '>$200</span> */}
                                                    </span>
                                                </div>
                                                <div className='group/edit invisible group-hover/item:visible absolute top-0 left-0 row columns-2 pt-16 pl-20 grid grid-rows-2 grid-flow-col gap-2 text-pink-200'>
                                                    <div className='flex flex-row pb-2 px-2'>
                                                        <div className='border-solid border-pink-200 border-2 rounded-full p-2 '>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-suit-heart basis-1/2 " viewBox="0 0 16 16">
                                                                <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                                                            </svg>
                                                        </div>
                                                        <div className='border-solid border-pink-200 border-2 rounded-full p-2 ml-6'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search basis-1/2" viewBox="0 0 16 16">
                                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <Button variant={'default'} className=' w-32 bg-pink-200'>
                                                        Chi tiết
                                                        {/* <Link to={`/products/${product.id}`} className='font-sans text-base '>Chi tiết</Link> */}
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className='group/item  border-0 relative bg-slate-50 p-5 rounded-md '>
                                                <img
                                                    className='hover:opacity-50 rounded-sm'
                                                    src="https://picsum.photos/250/200"
                                                    alt='Bold typography'
                                                    style={{
                                                        // display: 'block',
                                                        objectFit: 'contain',
                                                        // width: '100%',
                                                        // height: '70%',
                                                        backgroundColor: 'var(--gray-5)'
                                                    }}
                                                />
                                                <div className='flex gap-4 pt-2'>
                                                    <div className=''>
                                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                                                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                                                        </svg> */}
                                                    </div>
                                                    <div className='font-bold text-base flex flex-row text-amber-300 ml-36'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill basis-1/7" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill basis-1/7" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill basis-1/7" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill basis-1/7" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill basis-1/7" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className='flex gap-5 pt-2'>
                                                    <h3 >
                                                        <h3 className='font-extrabold text-lg text-black'>Sản phẩm 2 sản phẩm 2 </h3>
                                                        {/* <span className='font-light text-sm' >400 ml</span> */}
                                                    </h3>
                                                </div>
                                                <div className='flex gap-5 pt-2'>
                                                    <span className='font-bold pt-1 text-pink-300'>$3000
                                                        {/* <span className='line-through ml-1 text-red-500 '>$200</span> */}
                                                    </span>
                                                </div>
                                                <div className='group/edit invisible group-hover/item:visible absolute top-0 left-0 row columns-2 pt-16 pl-20 grid grid-rows-2 grid-flow-col gap-2 text-pink-200'>
                                                    <div className='flex flex-row pb-2 px-2'>
                                                        <div className='border-solid border-pink-200 border-2 rounded-full p-2 '>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-suit-heart basis-1/2 " viewBox="0 0 16 16">
                                                                <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                                                            </svg>
                                                        </div>
                                                        <div className='border-solid border-pink-200 border-2 rounded-full p-2 ml-6'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search basis-1/2" viewBox="0 0 16 16">
                                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <Button variant={'default'} className=' w-32 bg-pink-200'>
                                                        Chi tiết
                                                        {/* <Link to={`/products/${product.id}`} className='font-sans text-base '>Chi tiết</Link> */}
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className='group/item  border-0 relative bg-slate-50 p-5 rounded-md '>
                                                <img
                                                    className='hover:opacity-50 rounded-sm'
                                                    src="https://picsum.photos/250/200"
                                                    alt='Bold typography'
                                                    style={{
                                                        // display: 'block',
                                                        objectFit: 'contain',
                                                        // width: '100%',
                                                        // height: '70%',
                                                        backgroundColor: 'var(--gray-5)'
                                                    }}
                                                />
                                                <div className='flex gap-4 pt-2'>
                                                    <div className='font-bold text-base flex flex-row text-amber-300 ml-36'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill basis-1/7" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill basis-1/7" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill basis-1/7" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill basis-1/7" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill basis-1/7" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className='flex gap-5 pt-2'>
                                                    <h3 >
                                                        <h3 className='font-extrabold text-lg text-black'>Sản phẩm 2 sản phẩm 2 </h3>
                                                        {/* <span className='font-light text-sm' >400 ml</span> */}
                                                    </h3>
                                                </div>
                                                <div className='flex gap-5 pt-2'>
                                                    <span className='font-bold pt-1 text-pink-300'>$3000
                                                        {/* <span className='line-through ml-1 text-red-500 '>$200</span> */}
                                                    </span>
                                                </div>
                                                <div className='group/edit invisible group-hover/item:visible absolute top-0 left-0 row columns-2 pt-16 pl-20 grid grid-rows-2 grid-flow-col gap-2 text-pink-200'>
                                                    <div className='flex flex-row pb-2 px-2'>
                                                        <div className='border-solid border-pink-200 border-2 rounded-full p-2 '>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-suit-heart basis-1/2 " viewBox="0 0 16 16">
                                                                <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                                                            </svg>
                                                        </div>
                                                        <div className='border-solid border-pink-200 border-2 rounded-full p-2 ml-6'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search basis-1/2" viewBox="0 0 16 16">
                                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <Button variant={'default'} className=' w-32 bg-pink-200'>
                                                        Chi tiết
                                                        {/* <Link to={`/products/${product.id}`} className='font-sans text-base '>Chi tiết</Link> */}
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetailPage

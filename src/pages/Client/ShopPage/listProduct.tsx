import { Button } from '@/components/ui/button'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from '@/components/ui/pagination'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { SubmitHandler, useForm } from 'react-hook-form'
const ListProduct = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data: any) => {
        console.log(data)
    }
    return (
        <div className='col-span-3 '>
            <div className='grid grid-cols-3 gap-2'>
                <div className='col-span-2 lg:col-span-4 '>
                    <div className='h-full px-4 py-6 lg:px-8 '>
                        <Tabs defaultValue='music' className='h-full space-y-6'>
                            <Tabs defaultValue='music' className='h-full space-y-6'>
                                <TabsContent value='music' className='border-none p-0 outline-none'>
                                    <div className='flex md:flex-row '>
                                        <div className='flex-auto w-32 '>
                                            <h2 className='text-2xl font-semibold tracking-tight'>Sản phẩm </h2>
                                            <p className='text-sm text-muted-foreground'>
                                                Top picks for you. Updated daily.
                                            </p>
                                        </div>
                                        <form className='relative block pr-8 pt-2  ' onSubmit={handleSubmit(onSubmit)}>
                                            <span className='sr-only'>Search</span>
                                            <span className='absolute inset-y-0 left-0 flex items-center pl-2 pb-2 pt-3  '>
                                                <svg className='h-5 w-5 fill-slate-300' viewBox='0 0 20 20'>
                                                    {' '}
                                                    <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0' />
                                                </svg>
                                            </span>
                                            <div className='flex gap-2  '>
                                                <input
                                                    {...register('search')}
                                                    className=' lg:h-10 placeholder:italic placeholder:text-slate-400 block bg-white w-60 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm  '
                                                    placeholder='Search for anything...'
                                                    type='text'
                                                    name='search'
                                                />

                                                <button
                                                    type='submit'
                                                    className='bg-pink-200 p-1 w-20 rounded ml-2 hover:bg-pink-100 text-white text-base'
                                                >
                                                    Tìm kiếm
                                                </button>
                                            </div>
                                        </form>
                                        <div className='flex-auto w-32 pl-14 '>
                                            <div className='flex flex-row pt-2'>
                                                {/* <div className="basis-1/2  pl-4 pt-1 "> Sắp xếp</div> */}
                                                <div className='basis-1/3 '>
                                                    <Select>
                                                        <SelectTrigger className='w-[200px]'>
                                                            <SelectValue placeholder='Sắp xếp giá' />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value='light'>Gía từ cao đến thấp</SelectItem>
                                                            <SelectItem value='dark'>Gía thấp đén cao</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Separator className='my-4' />
                                    <div className=' grid grid-cols-3 gap-12 px-8 py-3 bg-pink-200'>
                                        <div className='group/item  border-0 relative bg-slate-50 p-5 rounded-md  '>
                                            <img
                                                className='hover:opacity-50 rounded-sm'
                                                src='https://picsum.photos/250/200'
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
                                                <div className='font-bold text-base flex flex-row text-amber-300 ml-24 '>
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
                                            </div>
                                            <div className='flex gap-5 pt-2'>
                                                <h3 className='font-extrabold text-lg text-black'>
                                                    Sản phẩm 2 sản phẩm 2{' '}
                                                </h3>
                                                {/* <span className='font-light text-sm' >400 ml</span> */}
                                            </div>
                                            <div className='flex gap-5 pt-2'>
                                                <span className='font-bold pt-1 text-pink-300'>
                                                    $3000
                                                    {/* <span className='line-through ml-1 text-red-500 '>$200</span> */}
                                                </span>
                                            </div>
                                            <div className='group/edit invisible group-hover/item:visible absolute top-0 left-0 row columns-2 pt-16 pl-14 grid grid-rows-2 grid-flow-col gap-2 text-pink-200'>
                                                <div className='flex flex-row pb-2 px-2 '>
                                                    <div className='border-solid border-pink-200 border-2 rounded-full p-2 hover:border-white hover:bg-pink-200 hover:scale-125 '>
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            width='20'
                                                            height='20'
                                                            fill='currentColor'
                                                            className='bi bi-suit-heart basis-1/2 hover:text-white hover:bg-pink-200 hover:scale-125 '
                                                            viewBox='0 0 16 16'
                                                        >
                                                            <path d='m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z' />
                                                        </svg>
                                                    </div>
                                                    <div className='border-solid border-pink-200 border-2 rounded-full p-2 ml-6 hover:border-white hover:bg-pink-200 hover:scale-125'>
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            width='20'
                                                            height='20'
                                                            fill='currentColor'
                                                            className='bi bi-search basis-1/2 hover:text-white hover:bg-pink-200 hover:scale-125'
                                                            viewBox='0 0 16 16'
                                                        >
                                                            <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0' />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <Button variant={'default'} className=' w-32 bg-pink-200'>
                                                    Chi tiết
                                                    {/* <Link to={`/products/${product.id}`} className='font-sans text-base '>Chi tiết</Link> */}
                                                </Button>
                                            </div>
                                        </div>
                                        <div className='group/item  border-0 relative bg-slate-50 p-5 rounded-md   '>
                                            <img
                                                className='hover:opacity-50 rounded-sm'
                                                src='https://picsum.photos/250/200'
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
                                                <div className='font-bold text-base flex flex-row text-amber-300 ml-24 '>
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
                                            </div>
                                            <div className='flex gap-5 pt-2'>
                                                <h3 className='font-extrabold text-lg text-black'>
                                                    Sản phẩm 2 sản phẩm 2{' '}
                                                </h3>
                                                {/* <span className='font-light text-sm' >400 ml</span> */}
                                            </div>
                                            <div className='flex gap-5 pt-2'>
                                                <span className='font-bold pt-1 text-pink-300'>
                                                    $3000
                                                    {/* <span className='line-through ml-1 text-red-500 '>$200</span> */}
                                                </span>
                                            </div>
                                            <div className='group/edit invisible group-hover/item:visible absolute top-0 left-0 row columns-2 pt-16 pl-14 grid grid-rows-2 grid-flow-col gap-2 text-pink-200'>
                                                <div className='flex flex-row pb-2 px-2 '>
                                                    <div className='border-solid border-pink-200 border-2 rounded-full p-2 hover:border-white hover:bg-pink-200 hover:scale-125 '>
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            width='20'
                                                            height='20'
                                                            fill='currentColor'
                                                            className='bi bi-suit-heart basis-1/2 hover:text-white hover:bg-pink-200 hover:scale-125 '
                                                            viewBox='0 0 16 16'
                                                        >
                                                            <path d='m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z' />
                                                        </svg>
                                                    </div>
                                                    <div className='border-solid border-pink-200 border-2 rounded-full p-2 ml-6 hover:border-white hover:bg-pink-200 hover:scale-125'>
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            width='20'
                                                            height='20'
                                                            fill='currentColor'
                                                            className='bi bi-search basis-1/2 hover:text-white hover:bg-pink-200 hover:scale-125'
                                                            viewBox='0 0 16 16'
                                                        >
                                                            <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0' />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <Button variant={'default'} className=' w-32 bg-pink-200'>
                                                    Chi tiết
                                                    {/* <Link to={`/products/${product.id}`} className='font-sans text-base '>Chi tiết</Link> */}
                                                </Button>
                                            </div>
                                        </div>
                                        <div className='group/item  border-0 relative bg-slate-50 p-5 rounded-md  '>
                                            <img
                                                className='hover:opacity-50 rounded-sm'
                                                src='https://picsum.photos/250/200'
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
                                                <div className='font-bold text-base flex flex-row text-amber-300 ml-24 '>
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
                                            </div>
                                            <div className='flex gap-5 pt-2'>
                                                <h3 className='font-extrabold text-lg text-black'>
                                                    Sản phẩm 2 sản phẩm 2{' '}
                                                </h3>
                                                {/* <span className='font-light text-sm' >400 ml</span> */}
                                            </div>
                                            <div className='flex gap-5 pt-2'>
                                                <span className='font-bold pt-1 text-pink-300'>
                                                    $3000
                                                    {/* <span className='line-through ml-1 text-red-500 '>$200</span> */}
                                                </span>
                                            </div>
                                            <div className='group/edit invisible group-hover/item:visible absolute top-0 left-0 row columns-2 pt-16 pl-14 grid grid-rows-2 grid-flow-col gap-2 text-pink-200'>
                                                <div className='flex flex-row pb-2 px-2 '>
                                                    <div className='border-solid border-pink-200 border-2 rounded-full p-2 hover:border-white hover:bg-pink-200 hover:scale-125 '>
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            width='20'
                                                            height='20'
                                                            fill='currentColor'
                                                            className='bi bi-suit-heart basis-1/2 hover:text-white hover:bg-pink-200 hover:scale-125 '
                                                            viewBox='0 0 16 16'
                                                        >
                                                            <path d='m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z' />
                                                        </svg>
                                                    </div>
                                                    <div className='border-solid border-pink-200 border-2 rounded-full p-2 ml-6 hover:border-white hover:bg-pink-200 hover:scale-125'>
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            width='20'
                                                            height='20'
                                                            fill='currentColor'
                                                            className='bi bi-search basis-1/2 hover:text-white hover:bg-pink-200 hover:scale-125'
                                                            viewBox='0 0 16 16'
                                                        >
                                                            <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0' />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <Button variant={'default'} className=' w-32 bg-pink-200'>
                                                    Chi tiết
                                                    {/* <Link to={`/products/${product.id}`} className='font-sans text-base '>Chi tiết</Link> */}
                                                </Button>
                                            </div>
                                        </div>
                                        <div className='group/item  border-0 relative bg-slate-50 p-5 rounded-md  '>
                                            <img
                                                className='hover:opacity-50 rounded-sm'
                                                src='https://picsum.photos/250/200'
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
                                                <div className='font-bold text-base flex flex-row text-amber-300 ml-24 '>
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
                                            </div>
                                            <div className='flex gap-5 pt-2'>
                                                <h3 className='font-extrabold text-lg text-black'>
                                                    Sản phẩm 2 sản phẩm 2{' '}
                                                </h3>
                                                {/* <span className='font-light text-sm' >400 ml</span> */}
                                            </div>
                                            <div className='flex gap-5 pt-2'>
                                                <span className='font-bold pt-1 text-pink-300'>
                                                    $3000
                                                    {/* <span className='line-through ml-1 text-red-500 '>$200</span> */}
                                                </span>
                                            </div>
                                            <div className='group/edit invisible group-hover/item:visible absolute top-0 left-0 row columns-2 pt-16 pl-14 grid grid-rows-2 grid-flow-col gap-2 text-pink-200'>
                                                <div className='flex flex-row pb-2 px-2 '>
                                                    <div className='border-solid border-pink-200 border-2 rounded-full p-2 hover:border-white hover:bg-pink-200 hover:scale-125 '>
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            width='20'
                                                            height='20'
                                                            fill='currentColor'
                                                            className='bi bi-suit-heart basis-1/2 hover:text-white hover:bg-pink-200 hover:scale-125 '
                                                            viewBox='0 0 16 16'
                                                        >
                                                            <path d='m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z' />
                                                        </svg>
                                                    </div>
                                                    <div className='border-solid border-pink-200 border-2 rounded-full p-2 ml-6 hover:border-white hover:bg-pink-200 hover:scale-125'>
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            width='20'
                                                            height='20'
                                                            fill='currentColor'
                                                            className='bi bi-search basis-1/2 hover:text-white hover:bg-pink-200 hover:scale-125'
                                                            viewBox='0 0 16 16'
                                                        >
                                                            <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0' />
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
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href='#' />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href='#'>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href='#' />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}

export default ListProduct

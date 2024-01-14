import '@/styles/Contact.css'
import { useForm } from 'react-hook-form'

const ContactPage = () => {
    const { register, handleSubmit, formState } = useForm()
    const { errors }: any = formState

    const onSubmit = (data: any) => {
        console.log(data) // You can handle form submission logic here
    }
    return (
        <div className='contact'>
            <div className='grid grid-cols-2 gap-8'>
                <div className='info-contact p-0 pt-20 '>
                    <div className='info-h1'>
                        <h1>THÔNG TIN LIÊN HỆ MEOMART SHOP</h1>
                    </div>
                    <div className='address flex'>
                        <div className='icon-address '>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='26'
                                height='26'
                                fill='currentColor'
                                className='bi bi-geo-alt-fill icon-svg'
                                viewBox='0 0 16 16'
                            >
                                <path d='M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6' />
                            </svg>
                        </div>
                        <div className='info-address '>
                            <p id='info'>
                                Tầng 1, KĐT Vinhomes Smart City, Nam Từ Liêm, Hà Nội 100000 <br /> - Mã Số Thuế:
                                8516305200-001
                            </p>
                        </div>
                    </div>
                    <div className='phone flex'>
                        <div className='icon-phone'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='26'
                                height='26'
                                fill='currentColor'
                                className='bi bi-telephone-fill icon-svg'
                                viewBox='0 0 16 16'
                            >
                                <path
                                    fill-rule='evenodd'
                                    d='M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z'
                                />
                            </svg>
                        </div>
                        <div className='info-phone'>
                            <p id='info'>0999.55.65.95</p>
                        </div>
                    </div>
                    <div className='email flex'>
                        <div className='icon-email'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='26'
                                height='26'
                                fill='currentColor'
                                className='bi bi-envelope-fill icon-svg'
                                viewBox='0 0 16 16'
                            >
                                <path d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z' />
                            </svg>
                        </div>
                        <div className='info-email'>
                            <p id='info'>meomartshopvn@gmail.com</p>
                        </div>
                    </div>
                    <div className='link flex'>
                        <div className='icon-link'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='26'
                                height='26'
                                fill='currentColor'
                                className='bi bi-link-45deg icon-svg'
                                viewBox='0 0 14 14'
                            >
                                <path d='M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z' />
                                <path d='M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z' />
                            </svg>
                        </div>
                        <div className='info-link'>
                            <p id='info'>https://meomartshop.com</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-6 gap-2'>
                        <div className='icon-img'>
                            <img
                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png'
                                alt='facebook'
                            />
                        </div>
                        <div className='icon-img'>
                            <img
                                src='https://static.vecteezy.com/system/resources/previews/017/743/717/non_2x/instagram-icon-logo-free-png.png'
                                alt=''
                            />
                        </div>
                        <div className='icon-img'>
                            <img
                                src='https://upload.wikimedia.org/wikipedia/commons/a/a0/YouTube_social_red_circle_%282017%29.svg'
                                alt=''
                            />
                        </div>
                        <div className='icon-img twitter '>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg' alt='' />
                        </div>
                    </div>
                </div>
                <div className='contact-us'>
                    <form onSubmit={handleSubmit(onSubmit)} className='mt-16 wfull sm:mt-20'>
                        <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
                            <div className='sm:col-span-2'>
                                <div className='mt-2.5'>
                                    <input
                                        type='text'
                                        id='name'
                                        autoComplete='organization'
                                        placeholder='Họ và tên'
                                        className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                                            errors.name ? 'border-red-500' : ''
                                        }`}
                                        {...register('name', { required: 'Họ và tên không được trống' })}
                                    />
                                    {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
                                </div>
                            </div>
                            <div className='mt-2.5'>
                                <input
                                    type='text'
                                    id='Phone'
                                    autoComplete='given-name'
                                    placeholder='Số điện thoại'
                                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                                        errors.phone ? 'border-red-500' : ''
                                    }`}
                                    {...register('phone', { required: 'Số điện thoại không được trống' })}
                                />
                                {errors.phone && <span className='text-red-500'>{errors.phone.message}</span>}
                            </div>
                            <div className='mt-2.5'>
                                <input
                                    type='email'
                                    id='email'
                                    autoComplete='email'
                                    placeholder='Email'
                                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                                        errors.email ? 'border-red-500' : ''
                                    }`}
                                    {...register('email', { required: 'Email không được trống' })}
                                />
                                {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                            </div>

                            <div className='sm:col-span-2'>
                                <div className='mt-2.5'>
                                    <textarea
                                        id='message'
                                        rows={4}
                                        placeholder='Tin nhắn'
                                        className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                                            errors.message ? 'border-red-500' : ''
                                        }`}
                                        {...register('message', { required: 'Tin nhắn không được trống' })}
                                    />
                                    {errors.name && <span className='text-red-500'>{errors.message.message}</span>}
                                </div>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <button
                                type='submit'
                                className='block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                            >
                                Gửi tin nhắn
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='location'>
                <iframe
                    title='Google Maps'
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.673685049966!2d105.75173347508024!3d21.005713680637925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad3f5eb40863%3A0xdcd0af3100a5065b!2sVincom%20Mega%20Mall%20Smart%20City!5e0!3m2!1svi!2s!4v1704962797521!5m2!1svi!2s'
                    height='450'
                    style={{ border: 0, width: '100%', marginTop: 30 }}
                    loading='lazy'
                ></iframe>
            </div>
            {/* <div className='contact-us'>
                <form>
                    <div className='space-y-12'>
                        <div className='border-b border-gray-900/10 pb-12'>
                            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                                <div className='sm:col-span-4'>
                                    <label for='username' className='block text-sm font-medium leading-6 text-gray-900'>
                                        Họ và tên
                                    </label>
                                    <div className='mt-2'>
                                        <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                                            <input
                                                type='text'
                                                name='name'
                                                id='name'
                                                autocomplete='name'
                                                className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                                                placeholder='name'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='border-b border-gray-900/10 pb-12'>
                            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                                <div className='sm:col-span-3'>
                                    <label className='block text-sm font-medium leading-6 text-gray-900'>Phone</label>
                                    <div className='mt-2'>
                                        <input
                                            type='number'
                                            name='phone'
                                            id='phone'
                                            autocomplete='given-name'
                                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                        />
                                    </div>
                                </div>

                                <div className='sm:col-span-3'>
                                    <label for='email' className='block text-sm font-medium leading-6 text-gray-900'>
                                        Email
                                    </label>
                                    <div className='mt-2'>
                                        <input
                                            id='email'
                                            name='email'
                                            type='email'
                                            autocomplete='email'
                                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-full'>
                        <label for='about' className='block text-sm font-medium leading-6 text-gray-900'>
                            Mess
                        </label>
                        <div className='mt-2'>
                            <textarea
                                id='mess'
                                name='mess'
                                rows='3'
                                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            ></textarea>
                        </div>
                    </div>

                    <div className='mt-6 flex items-center justify-end gap-x-6'>
                        <button
                            type='submit'
                            className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div> */}
        </div>
    )
}

export default ContactPage

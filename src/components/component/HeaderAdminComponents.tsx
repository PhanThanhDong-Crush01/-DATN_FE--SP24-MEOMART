import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import '../../styles/HearderAdmin.css'

const HeaderAdminComponents = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode)
    }

    return (
        <div>
            <div className=''>
                <header className='hd__admin shadow-xl'>
                    <div className='hd__search'>
                        <form className='form__search'>
                            <button type='submit'>Search</button>
                            <input type='search' placeholder='Search...' />
                        </form>
                    </div>
                    <div className='hd__func'>
                        <button
                            title='Toggle Theme'
                            onClick={toggleTheme}
                            className='btn-toggle w-12 h-6 rounded-full p-1 bg-gray-400 dark:bg-gray-600 relative transition-colors duration-500 ease-in focus:outline-none focus:ring-2 focus:ring-blue-700 dark:focus:ring-blue-600 focus:border-transparent'
                        >
                            <div
                                id='toggle'
                                className={`rounded-full w-4 h-4 bg-blue-600 dark:bg-blue-500 relative ml-0 dark:ml-6 pointer-events-none transition-all duration-300 ease-out`}
                            ></div>
                        </button>
                        <div className='notifycations'>
                            <div className='notica'>
                                <Icon icon='material-symbols:notifications-outline' />
                            </div>
                        </div>
                        <div className='message'>
                            <div className='mess'>
                                <Icon icon='mi:message' />
                            </div>
                        </div>
                        <div className='profile'>
                            <div className='profile--info'>
                                <h2 className='profile-name'>Thomas Anree</h2>
                                <p className='profile-job'>UX Design</p>
                            </div>
                            <div className='profile-img'>
                                <img src='https://picsum.photos/200/300' alt='' />
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default HeaderAdminComponents

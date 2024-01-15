import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import React from 'react'

const ListCategory = () => {
    return (
        <div className='col-span-1 '>
            <div className='flex items-baseline justify-between border-gray-200 pb-6  '>
                <div className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl'>
                    <section aria-labelledby='products-heading' className='pb-24 pt-1'>
                        <form className='hidden md:block  pl-12 '>
                            <div className='space-y-2'>
                                <h2 className='text-lg font-bold pb-1'>Đồ ăn </h2>
                                <input type='search' className='border-2 rounded-sm ' id='' />
                                <div className='flex items-center pt-1'>
                                    <Input
                                        id='filter-color-0'
                                        name='color[]'
                                        value='white'
                                        type='checkbox'
                                        className='h-4 w-4  rounded border-gray-300 text-indigo-600 focus:ring-indigo/-500'
                                    />
                                    <label className='ml-3 text-sm text-gray-600'>White</label>
                                </div>
                                <div className='flex items-center'>
                                    <Input
                                        id='filter-color-1'
                                        name='color[]'
                                        value='beige'
                                        type='checkbox'
                                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo/-500'
                                    />
                                    <label className='ml-3 text-sm text-gray-600'>Beige</label>
                                </div>
                                <div className='flex items-center'>
                                    <Input
                                        id='filter-color-2'
                                        name='color[]'
                                        value='blue'
                                        type='checkbox'
                                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring/-indigo-500'
                                    />
                                    <label className='ml-3 text-sm text-gray-600'>Blue</label>
                                </div>
                                <div className='flex items-center'>
                                    <Input
                                        id='filter-color-3'
                                        name='color[]'
                                        value='brown'
                                        type='checkbox'
                                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo/-500'
                                    />
                                    <label className='ml-3 text-sm text-gray-600'>Brown</label>
                                </div>
                            </div>
                            <div className='space-y-2 pt-2'>
                                <h2 className='text-lg font-bold pb-1  '>Phụ kiện </h2>
                                <input type='search' className='border-2 rounded-sm' id='' />
                                <div className='flex items-center pt-2'>
                                    <Input
                                        id='filter-color-0'
                                        name='color[]'
                                        value='white'
                                        type='checkbox'
                                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo/-500'
                                    />
                                    <label className='ml-3 text-sm text-gray-600'>White</label>
                                </div>
                                <div className='flex items-center'>
                                    <Input
                                        id='filter-color-1'
                                        name='color[]'
                                        value='beige'
                                        type='checkbox'
                                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo/-500'
                                    />
                                    <label className='ml-3 text-sm text-gray-600'>Beige</label>
                                </div>
                                <div className='flex items-center'>
                                    <Input
                                        id='filter-color-2'
                                        name='color[]'
                                        value='blue'
                                        type='checkbox'
                                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring/-indigo-500'
                                    />
                                    <label className='ml-3 text-sm text-gray-600'>Blue</label>
                                </div>
                                <div className='flex items-center'>
                                    <Input
                                        id='filter-color-3'
                                        name='color[]'
                                        value='brown'
                                        type='checkbox'
                                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo/-500'
                                    />
                                    <label className='ml-3 text-sm text-gray-600'>Brown</label>
                                </div>
                            </div>
                            <div className='space-y-4 pt-2'>
                                <h2 className='text-lg font-bold pb-1'>Lọc giá </h2>
                                <div className='flex items-center'>
                                    <Input
                                        id='filter-color-0'
                                        name='color[]'
                                        value='white'
                                        type='checkbox'
                                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo/-500'
                                    />
                                    <label className='ml-3 text-sm text-gray-600'>100-200</label>
                                </div>
                                <div className='flex items-center'>
                                    <Input
                                        id='filter-color-1'
                                        name='color[]'
                                        value='beige'
                                        type='checkbox'
                                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo/-500'
                                    />
                                    <label className='ml-3 text-sm text-gray-600'>200-500</label>
                                </div>
                                <div className='flex items-center'>
                                    <Input
                                        id='filter-color-2'
                                        name='color[]'
                                        value='blue'
                                        type='checkbox'
                                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring/-indigo-500'
                                    />
                                    <label className='ml-3 text-sm text-gray-600'>500-800</label>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
            {/* màn hình điện thoại */}
            {/* <div className=' md:hidden pt-10 px-5 hidden sm:block'>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Open</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">

                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <h2 className='text-lg font-bold pb-1'>Đồ ăn </h2>
                            <input type="search" className="border-2 rounded-sm" id="" />
                            <div className="flex items-center pt-1">
                                <Input id="filter-color-0" name="color[]" value="white" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo/-500" />
                                <label className="ml-3 text-sm text-gray-600">White</label>
                            </div>
                            <div className="flex items-center">
                                <Input id="filter-color-1" name="color[]" value="beige" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo/-500" />
                                <label className="ml-3 text-sm text-gray-600">Beige</label>
                            </div>
                            <div className="flex items-center">
                                <Input id="filter-color-2" name="color[]" value="blue" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring/-indigo-500" />
                                <label className="ml-3 text-sm text-gray-600">Blue</label>
                            </div>
                            <div className="flex items-center">
                                <Input id="filter-color-3" name="color[]" value="brown" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo/-500" />
                                <label className="ml-3 text-sm text-gray-600">Brown</label>
                            </div>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>New Team</DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>GitHub</DropdownMenuItem>
                        <DropdownMenuItem>Support</DropdownMenuItem>
                        <DropdownMenuItem disabled>API</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem> Log out</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div> */}
        </div>
    )
}
export default ListCategory

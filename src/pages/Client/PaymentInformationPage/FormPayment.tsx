import AddressAutocomplete from './AddressAutocomplete'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from '@/components/ui/sheet'

const FormPayment = (props: any) => {
    const [selectedAddress, setSelectedAddress] = useState(null)

    const handleSelectAddress = (addressData: any) => {
        setSelectedAddress(addressData)
    }

    return (
        <SheetContent side='right' className='nhap_thong_tin_nhan_hang'>
            <SheetHeader>
                <SheetTitle style={{ fontSize: '24px' }}>Thêm địa chỉ nhận hàng của bạn</SheetTitle>
                <SheetDescription style={{ fontStyle: 'italic', fontSize: '15px', color: 'red' }}>
                    Thông tin nhận hàng sẽ được xác nhận đúng!
                </SheetDescription>
            </SheetHeader>
            <form method='post' className='form_payment'>
                <div className='ho_ten_form'>
                    <div className='ho_form'>
                        <input type='text' className='input_controll' name='ho_nguoi_nhan_hang' placeholder='Họ...' />
                    </div>
                    <div className='ten_form '>
                        <input type='text' className='input_controll' name='ten_nguoi_nhan_hang' placeholder='Tên...' />
                    </div>
                </div>
                <div className='controll_form'>
                    <input
                        type='number'
                        className='input_controll'
                        name='sdt_nguoi_nhan_hang'
                        placeholder='Số điện thoại...'
                    />
                </div>
                <div className='controll_form'>
                    <input type='text' className='input_controll' name='email_nguoi_nhan_hang' placeholder='Email...' />
                </div>
                <div className='controll_form'>
                    <AddressAutocomplete onSelectAddress={handleSelectAddress} selectedAddress={selectedAddress} />
                </div>
                <SheetFooter>
                    <Button type='button' style={{ background: 'black' }} onClick={() => props.onClose()}>
                        Close
                    </Button>
                    <Button type='submit' style={{ background: 'red' }}>
                        Xác nhận
                    </Button>
                </SheetFooter>
            </form>
        </SheetContent>
    )
}

export default FormPayment

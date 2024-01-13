import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import '@/styles/PaymentInformation.css'

const ListVoucher = () => {
    return (
        <SheetContent side='left'>
            <SheetHeader>
                <SheetTitle style={{ fontSize: '24px' }}>Vui lòng chọn voucher</SheetTitle>
                <SheetDescription style={{ fontStyle: 'italic', fontSize: '15px' }}>
                    Chọn voucher hoặc bạn có thể sử dụng điểm tích lũy ở dưới:
                </SheetDescription>
            </SheetHeader>
            <div className='list_voucher'>
                <div className='van_chuyen'>
                    <h2>Ưu đãi vận chuyển</h2>
                    <hr />
                    <label>
                        Giảm 10% phí vận chuyển
                        <input type='radio' name='van_chuyen' value='option1' />
                    </label>
                    <label>
                        Giảm theo tổng đơn hàng
                        <input type='radio' name='van_chuyen' value='option2' />
                    </label>
                </div>
                <div className='tong_don'>
                    <h2>Ưu đãi tổng đơn</h2>
                    <hr />
                    <label>
                        Giảm 20%
                        <input type='radio' name='tong_don' value='optionA' />
                    </label>
                    <label>
                        Giảm theo tổng đơn hàng
                        <input type='radio' name='tong_don' value='optionB' />
                    </label>
                </div>
            </div>
            <div className='grid gap-4 py-4'>
                <div className='grid grid-cols-4 items-center gap-4'>
                    <Label htmlFor='diem_tich_luy' className='text-right' style={{ fontSize: '18px' }}>
                        Đổi điểm: <br />
                        <p>
                            <span style={{ color: 'red' }}>[</span> 5300 <span style={{ color: 'red' }}>]</span>
                        </p>
                    </Label>
                    <Input id='diem_tich_luy' defaultValue='' placeholder='10000' className='col-span-3' />
                </div>
            </div>
            <SheetFooter>
                <SheetClose asChild>
                    <Button type='submit' style={{ background: 'red' }}>
                        Áp dụng
                    </Button>
                </SheetClose>
            </SheetFooter>
        </SheetContent>
    )
}

export default ListVoucher

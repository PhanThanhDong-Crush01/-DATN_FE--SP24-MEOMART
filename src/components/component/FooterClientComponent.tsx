import React from 'react'
import '../../styles/Footer.css'
const FooterClientComponent = () => {
    return (
        <div>
            <footer>
                <div className='matpet_ft'>
                    <div className='matpet--cols'>
                        <h2 className='matpet--cols-title'>Liên Lạc</h2>
                        <div className='matpet--cols-location'>
                            <span>Địa chỉ: </span> <span>Số 168 Thượng Đình - Thanh Xuân - Hà Nội</span>
                        </div>
                        <div className='matpet--cols-location'>
                            <span>Địa chỉ: </span> 294-296 Đồng Đen - Quận Tân Bình - TP. Hồ Chí Minh
                        </div>
                        <div className='matpet--cols-numberphone'>
                            <span>Điện thoại: </span> 0939.86.36.96
                        </div>
                        <div className='matpet--cols-email'>
                            <span>Email: </span> meowmartshop@fpt.edu.vn
                        </div>
                    </div>
                    <div className='matpet--cols'>
                        <h2 className='matpet--cols-title'>Instagram</h2>
                    </div>
                    <div className='matpet--cols'>
                        <h2 className='matpet--cols-title'>Facebook</h2>
                    </div>
                    <div className='matpet--cols'>
                        <h2 className='matpet--cols-title'>Youtube</h2>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default FooterClientComponent

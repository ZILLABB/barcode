import React from 'react'
import barcode from './images/image-qr-code.png'


const base = () => {
    return (
        <div>
            < div className='background'>
                    <img className='barcode' src={barcode} alt="" />
                <div className='write'>
                    <h4 className='improve'>Improve your front-end <br /> skills by building projects</h4>
                    <p className='p'>Scan the QR code to visit frontend <br /> mentor and take coding skills to <br /> the next level</p>
                </div>
            </div>
        </div>
    )
}

export default base
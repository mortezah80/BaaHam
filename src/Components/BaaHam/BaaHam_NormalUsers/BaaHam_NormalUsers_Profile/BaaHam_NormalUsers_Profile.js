import React from 'react'
import './BaaHam_NormalUsers_Profile.css'

function BaaHam_NormalUsers_Profile() {
  return (
    <div className='BaaHam_NormalUsers_Profile'>
        <div className='BaaHam_NU_ProfileInputsContainer'>
            <div className='BaaHam_NU_ProfileInputContainer'>
                <span className='BaaHam_NU_ProfileInputTitle'>نام</span>
                <input className='BaaHam_NU_ProfileInput' type="text" />
            </div>
            <div className='BaaHam_NU_ProfileInputContainer'>
                <span className='BaaHam_NU_ProfileInputTitle'>نام خانوادگی</span>
                <input className='BaaHam_NU_ProfileInput' type="text" />
            </div>
            <div className='BaaHam_NU_ProfileInputContainer'>
                <span className='BaaHam_NU_ProfileInputTitle'>شماره تلفن</span>
                <input className='BaaHam_NU_ProfileInput' type="text" />
            </div>
            <div className='BaaHam_NU_ProfileInputContainer'>
                <span className='BaaHam_NU_ProfileInputTitle'>ایمیل</span>
                <input className='BaaHam_NU_ProfileInput' type="text"  />
            </div>
        </div>
        <div className='BaaHam_NU_ProfileTextAreaContainer'>
            <span className='BaaHam_NU_ProfileInputTitle'>آدرس</span>
            <textarea  className='BaaHam_NU_ProfileTextArea' />
        </div>
        <div className='BaaHam_NU_ProfileButtonContainer'>
            <div className='BaaHam_NU_ProfileButton'>
                <span>ثبت</span>
            </div>
        </div>
    </div>
  )
}

export default BaaHam_NormalUsers_Profile
import React from 'react'
import './BaaHam_MarketerUser_Introduction.css'
import BaaHam_MU_IntroductionTable from './BaaHam_MU_IntroductionTable'

function BaaHam_MarketerUser_Introduction() {
  return (
    <div className='BaaHam_MarketerUser_Introduction'>
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
        </div>
        <div className='BaaHam_NU_ProfileButtonContainer'>
            <div className='BaaHam_NU_ProfileButton'>
                <span>ثبت</span>
            </div>
        </div>
        <div className='BaaHam_MU_IntroductionTables'>
            <BaaHam_MU_IntroductionTable TableNumber={1}/>
        </div>

    </div>
  )
}

export default BaaHam_MarketerUser_Introduction
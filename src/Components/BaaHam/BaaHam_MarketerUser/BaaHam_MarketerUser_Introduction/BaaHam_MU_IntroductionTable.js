import React from 'react'
import './BaaHam_MU_IntroductionTable.css'

function BaaHam_MU_IntroductionTable(props) {
  return (
    <div className='BaaHam_MU_IntroductionTable'>
        <div className='BaaHam_MU_IntroductionTableRow'>
            <div className='BaaHam_MU_IntroductionTableItemTitle'><span>ردیف</span></div>
            <span className='BaaHam_MU_IntroductionTableItemContent'>{props.TableNumber}</span>
        </div>
        <div className='BaaHam_MU_IntroductionTableItem'>
            <div className='BaaHam_MU_IntroductionTableItemTitle'>نام</div>
            <span className='BaaHam_MU_IntroductionTableItemContent'>علی</span>
        </div>
        <div className='BaaHam_MU_IntroductionTableItem'>
            <div className='BaaHam_MU_IntroductionTableItemTitle'>نام خانوادگی</div>
            <span className='BaaHam_MU_IntroductionTableItemContent'>محمدی</span>
        </div>
        <div className='BaaHam_MU_IntroductionTableItem'>
            <div className='BaaHam_MU_IntroductionTableItemTitle'>شماره تماس</div>
            <span className='BaaHam_MU_IntroductionTableItemContent'>09126584972</span>
        </div>
        <div className='BaaHam_MU_IntroductionTableItem'>
            <div className='BaaHam_MU_IntroductionTableItemTitle'>زمان باقی مانده</div>
            <span className='BaaHam_MU_IntroductionTableItemContent'>36:25:00</span>
        </div>
        <div className='BaaHam_MU_IntroductionTableItem'>
            <div className='BaaHam_MU_IntroductionTableItemTitle'>وضعیت</div>
            <span className='BaaHam_MU_IntroductionTableItemContent'>تبدیل شده</span>
        </div>
        <div className='BaaHam_MU_IntroductionTableItem'>
            <div className='BaaHam_MU_IntroductionTableItemTitle'>توضیحات</div>
            <span className='BaaHam_MU_IntroductionTableItemContent'>ندارد</span>
        </div>

    </div>
  )
}

export default BaaHam_MU_IntroductionTable
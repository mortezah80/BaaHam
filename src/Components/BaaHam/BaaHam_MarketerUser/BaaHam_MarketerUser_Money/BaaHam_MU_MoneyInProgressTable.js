import React from 'react'
import './BaaHam_MU_MoneyInProgressTable.css'

function BaaHam_MU_MoneyInProgressTable(props) {
  return (
    <div className='BaaHam_MU_MoneyInProgressTable'>
        <div className='BaaHam_MU_IntroductionTableRow'>
            <div className='BaaHam_MU_IntroductionTableItemTitle'><span>ردیف</span></div>
            <span className='BaaHam_MU_IntroductionTableItemContent'>{props.TableNumber}</span>
        </div>
        <div className='BaaHam_MU_IntroductionTableItem BaaHam_MU_IntroductionTableItemMargin'>
            <div className='BaaHam_MU_IntroductionTableItemTitle'>شماره تماس</div>
            <span className='BaaHam_MU_IntroductionTableItemContent'>علی</span>
        </div>
        <div className='BaaHam_MU_IntroductionTableItem BaaHam_MU_IntroductionTableItemMargin'>
            <div className='BaaHam_MU_IntroductionTableItemTitle'>تاریخ </div>
            <span className='BaaHam_MU_IntroductionTableItemContent'>محمدی</span>
        </div>

    </div>
  )
}

export default BaaHam_MU_MoneyInProgressTable
import React from 'react'
import './BaaHam_MU_MoneyPaidTable.css'

function BaaHam_MU_MoneyPaidTable(props) {
  return (
    <div className='BaaHam_MU_MoneyPaidTable'>
        <div className='BaaHam_MU_IntroductionTableRow'>
            <div className='BaaHam_MU_IntroductionTableItemTitle'><span>ردیف</span></div>
            <span className='BaaHam_MU_IntroductionTableItemContent'>{props.TableNumber}</span>
        </div>
        <div className='BaaHam_MU_IntroductionTableItem BaaHam_MU_IntroductionTableItemMargin BaaHam_MU_MoneyPaidTableItem'>
            <div className='BaaHam_MU_IntroductionTableItemTitle'>شماره سفارش</div>
            <span className='BaaHam_MU_IntroductionTableItemContent'>علی</span>
        </div>
        <div className='BaaHam_MU_IntroductionTableItem BaaHam_MU_IntroductionTableItemMargin BaaHam_MU_MoneyPaidTableItem'>
            <div className='BaaHam_MU_IntroductionTableItemTitle'>تاریخ </div>
            <span className='BaaHam_MU_IntroductionTableItemContent'>محمدی</span>
        </div>
        <div className='BaaHam_MU_IntroductionTableItem BaaHam_MU_IntroductionTableItemMargin BaaHam_MU_MoneyPaidTableItem'>
            <div className='BaaHam_MU_IntroductionTableItemTitle'>مبلغ </div>
            <span className='BaaHam_MU_IntroductionTableItemContent'>محمدی</span>
        </div>
        <div className='BaaHam_MU_IntroductionTableItem BaaHam_MU_IntroductionTableItemMargin BaaHam_MU_MoneyPaidTableItem'>
            <div className='BaaHam_MU_IntroductionTableItemTitle'>نوع انتقال </div>
            <span className='BaaHam_MU_IntroductionTableItemContent'>محمدی</span>
        </div>
    </div>
  )
}

export default BaaHam_MU_MoneyPaidTable
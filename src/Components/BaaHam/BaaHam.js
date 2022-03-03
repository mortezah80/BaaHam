import React from 'react'
import './BaaHam.css'
import BaaHam_MarketerUser from './BaaHam_MarketerUser/BaaHam_MarketerUser'
import BaaHam_NormalUsers from './BaaHam_NormalUsers/BaaHam_NormalUsers'
import BaaHam_PropertyUser from './BaaHam_PropertyUser/BaaHam_PropertyUser'
import BaaHam_SupervisorUser from './BaaHam_SupervisorUser/BaaHam_SupervisorUser'
import BaaHam_VisitingExpertUser from './BaaHam_VisitingExpertUser/BaaHam_VisitingExpertUser'

function BaaHam() {
  return (
    <div className='BaaHam'>
       {/* <BaaHam_NormalUsers/>
        <BaaHam_PropertyUser/>
        <BaaHam_MarketerUser/>
        <BaaHam_VisitingExpertUser/>*/}
        <BaaHam_SupervisorUser/>
    </div>
  )
}

export default BaaHam
import React , {useState} from 'react'
import './BaaHam_SupervisorUser_Waiting.css'
import BaaHam_SU_WaitingBox from './BaaHam_SU_WaitingBox'

function BaaHam_SupervisorUser_Waiting() {
    const [Choose, SetChoose] = useState(1)
  return (
    <div className='BaaHam_SupervisorUser_Waiting'>
        <div className='BaaHam_SU_WaitingBoxes'>
            <BaaHam_SU_WaitingBox Choose={Choose===1? true : false} SetChoose={SetChoose} BoxNumber={1}/>
            <BaaHam_SU_WaitingBox Choose={Choose===2? true : false}  SetChoose={SetChoose} BoxNumber={2}/>
            <BaaHam_SU_WaitingBox Choose={Choose===3? true : false} SetChoose={SetChoose} BoxNumber={3}/>
            <BaaHam_SU_WaitingBox Choose={Choose===4? true : false} SetChoose={SetChoose} BoxNumber={4}/>
        </div>
        <div className='BaaHam_SupervisorUser_WaitingInformation'>
            
        </div>

    </div>
  )
}

export default BaaHam_SupervisorUser_Waiting
import React , {useState} from 'react'
import './BaaHam_SupervisorUser.css'
import {CgProfile} from 'react-icons/cg'
import {MdOutlineEditNote,MdManageSearch} from 'react-icons/md'
import {GiClick} from 'react-icons/gi'
import {RiFileListLine} from 'react-icons/ri'
import {AiOutlineHeart} from 'react-icons/ai'
import BaaHam_SupervisorUser_Profile from './BaaHam_SupervisorUser_Profile/BaaHam_SupervisorUser_Profile'
import BaaHam_SupervisorUser_Waiting from './BaaHam_SupervisorUser_Waiting/BaaHam_SupervisorUser_Waiting'

function BaaHam_SupervisorUser() {
    const [sidebar ,Setsidebar] = useState(1)
    return (
      <div className='BaaHam_SupervisorUser'>
          <div className='BaaHam_NormalUsersHeader'>
  
          </div>
          <div className='BaaHam_NormalUsersContentContainer'>
              <div className='BaaHam_NormalUsersContenttransparent'>
                  <div className='BaaHam_NormalUsersContent'>
                      <div className='BaaHam_NUContentSideBar'>
                          <div className='BaaHam_NUContentSideBarUser'>
                              <div className='BaaHam_NUContentSideBarUserPicture'>
  
                              </div>
                              <span className='BaaHam_NUContentSideBarUserName'>نام کاربری</span>
                              <span className='BaaHam_NUContentSideBarUserEmail'>Example@gmail.com</span>
                          </div>
                          <div className='BaaHam_NUContentSideBarOptions'>
                              <div className={['BaaHam_NUContentSideBarOption' , sidebar===1 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(1)}>
                              <div className='BaaHam_NUContentSideBarOptionIcon'>
                              <CgProfile/>
                              </div>
                              <span className='BaaHam_NUContentSideBarOptionTitle'>پروفایل</span>
                              </div>
                              <div className={['BaaHam_NUContentSideBarOption' , sidebar===2 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(2)}>
                              <div className='BaaHam_NUContentSideBarOptionIcon'>
                              <MdOutlineEditNote/>
                              </div>
                              <span className='BaaHam_NUContentSideBarOptionTitle'> در انتظار تایید</span>
                              </div>
                          </div>
                      </div>
                      <div className='BaaHam_NUContentForm'>
                          <div className='BaaHam_NUContentFormHeader'>
                              <span className='BaaHam_NUContentFormHeaderTitle'>داشبورد کاربر املاک</span>
                          </div>
                          
                          {
                              sidebar===1 ?
                              <BaaHam_SupervisorUser_Profile/>
                              :
                              <BaaHam_SupervisorUser_Waiting/>
          
                          /*
                          sidebar===4 ?
                          <BaaHam_NormalUsers_Requests Stepper={3}/>
                          :
                          sidebar===5 ?
                          <BaaHam_NormalUsers_AgahihayeMan/>
                          :
                          <BaaHam_NormalUsers_Favorites/>*/
                          }
                      
                      </div>
                  </div>
              </div>   
          </div>
      </div>
  )
}

export default BaaHam_SupervisorUser
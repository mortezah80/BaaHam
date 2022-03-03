import React, {useState} from 'react'
import './BaaHam_PropertyUser.css'
import {CgProfile} from 'react-icons/cg'
import {MdOutlineEditNote,MdManageSearch} from 'react-icons/md'
import {GiClick} from 'react-icons/gi'
import {RiFileListLine} from 'react-icons/ri'
import {AiOutlineHeart} from 'react-icons/ai'
import BaaHam_PropertyUser_Profile from './BaaHam_PropertyUser_Profile/BaaHam_PropertyUser_Profile'
import BaaHam_PropertyUser_Marketer from './BaaHam_PropertyUser_Marketer/BaaHam_PropertyUser_Marketer'
import BaaHam_PropertyUser_Order from './BaaHam_PropertyUser_Order/BaaHam_PropertyUser_Order'
import Image2 from '../../../pic2.png'


function BaaHam_PropertyUser() {
    const [sidebar ,Setsidebar] = useState(1)
  return (
    <div className='BaaHam_NormalUsers'>
  
    <div className='BaaHam_NormalUsersContentContainer'>
      <div className='BaaHam_NormalUsersContenttransparent'>
        <div className='BaaHam_NormalUsersContent'>
            <div className='BaaHam_NUContentSideBar'>
                <div className='BaaHam_NUContentSideBarUser'>
                    <div className='BaaHam_NUContentSideBarUserPicture BaaHam_PUContentSideBarUserPicture'>

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
                      <span className='BaaHam_NUContentSideBarOptionTitle'>ثبت آگهی</span>
                    </div>
                    <div className={['BaaHam_NUContentSideBarOption' , sidebar===3 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(3)}>
                      <div className='BaaHam_NUContentSideBarOptionIcon'>
                       <MdManageSearch/>
                      </div>
                      <span className='BaaHam_NUContentSideBarOptionTitle'>اطلاعات تکمیلی </span>
                    </div>
                    <div className={['BaaHam_NUContentSideBarOption' , sidebar===4 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(4)}>
                      <div className='BaaHam_NUContentSideBarOptionIcon'>
                       <GiClick/>
                      </div>
                      <span className='BaaHam_NUContentSideBarOptionTitle'>معرفی کاربر </span>
                    </div>
                    <div className={['BaaHam_NUContentSideBarOption' , sidebar===5 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(5)}>
                      <div className='BaaHam_NUContentSideBarOptionIcon'>
                       <RiFileListLine/>
                      </div>
                      <span className='BaaHam_NUContentSideBarOptionTitle'>نقدینگی  </span>
                    </div>
                    <div className={['BaaHam_NUContentSideBarOption' , sidebar===6 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(6)}>
                      <div className='BaaHam_NUContentSideBarOptionIcon'>
                       <AiOutlineHeart/>
                      </div>
                      <span className='BaaHam_NUContentSideBarOptionTitle'>بازاریاب</span>
                    </div>
                    <div className={['BaaHam_NUContentSideBarOption' , sidebar===7 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(7)}>
                      <div className='BaaHam_NUContentSideBarOptionIcon'>
                       <AiOutlineHeart/>
                      </div>
                      <span className='BaaHam_NUContentSideBarOptionTitle'>ارجاع</span>
                    </div>

                </div>
            </div>
            <div className='BaaHam_NUContentForm'>
                <div className='BaaHam_NUContentFormHeader'>
                    <span className='BaaHam_NUContentFormHeaderTitle'>داشبورد کاربر املاک</span>
                </div>
                
                {
                  sidebar===1 ?
                  <BaaHam_PropertyUser_Profile/>
                  :
                  sidebar===6 ?
                  <BaaHam_PropertyUser_Marketer/>
                  :
                  <BaaHam_PropertyUser_Order/>
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

export default BaaHam_PropertyUser
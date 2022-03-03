import React , {useState} from 'react'
import './BaaHam_MarketerUser.css'
import {CgProfile} from 'react-icons/cg'
import {MdOutlineEditNote,MdManageSearch} from 'react-icons/md'
import {GiClick} from 'react-icons/gi'
import {RiFileListLine} from 'react-icons/ri'
import {AiOutlineHeart} from 'react-icons/ai'
import BaaHam_MarketerUser_Profile from './BaaHam_MarketerUser_Profile/BaaHam_MarketerUser_Profile'
import BaaHam_MarketerUser_SabteAgahi from './BaaHam_MarketerUser_SabteAgahi/BaaHam_MarketerUser_SabteAgahi'
import BaaHam_MarketerUser_Introduction from './BaaHam_MarketerUser_Introduction/BaaHam_MarketerUser_Introduction'
import BaaHam_MarketerUser_Money from './BaaHam_MarketerUser_Money/BaaHam_MarketerUser_Money'
import BaaHam_MarketerUser_Information from './BaaHam_MarketerUser_Information/BaaHam_MarketerUser_Information'
import Image2 from '../../../pic2.png'


function BaaHam_MarketerUser() {
    const [sidebar ,Setsidebar] = useState(1)
  return (
    <div className='BaaHam_MarketerUser'>
     
        <div className='BaaHam_NormalUsersContentContainer'>
            <div className='BaaHam_NormalUsersContenttransparent'>
                <div className='BaaHam_NormalUsersContent'>
                    <div className='BaaHam_NUContentSideBar'>
                        <div className='BaaHam_NUContentSideBarUser'>
                            <div className='BaaHam_NUContentSideBarUserPicture BaaHam_MUContentSideBarUserPicture'>

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
                            <GiClick/>
                            </div>
                            <span className='BaaHam_NUContentSideBarOptionTitle'>نقدینگی  </span>
                            </div>

                        </div>
                    </div>
                    <div className='BaaHam_NUContentForm'>
                        <div className='BaaHam_NUContentFormHeader'>
                            <span className='BaaHam_NUContentFormHeaderTitle'>داشبورد کاربر بازاریاب</span>
                        </div>
                        
                        {  
                        sidebar===1 ?
                        <BaaHam_MarketerUser_Profile/>
                        :
                        sidebar===2 ?
                        <BaaHam_MarketerUser_SabteAgahi/>
                        :
                        sidebar===3?
                        <BaaHam_MarketerUser_Information/>
                        :
                        sidebar===5 ?
                        <BaaHam_MarketerUser_Money/>
                        :
                        <BaaHam_MarketerUser_Introduction/>
                        /*
                        <BaaHam_PropertyUser_Marketer/>
                        :
                        <BaaHam_PropertyUser_Order/>
                      
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

export default BaaHam_MarketerUser
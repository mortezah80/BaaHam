import React, {useState} from 'react'
import './BaaHam_VisitingExpertUser.css'
import {CgProfile} from 'react-icons/cg'
import {MdOutlineEditNote,MdManageSearch} from 'react-icons/md'
import {GiClick} from 'react-icons/gi'
import {RiFileListLine} from 'react-icons/ri'
import {AiOutlineHeart} from 'react-icons/ai'
import BaaHam_VisitingExpertUser_Profile from './BaaHam_VisitingExpertUser_Profile/BaaHam_VisitingExpertUser_Profile'
import BaaHam_VisitingExpertUser_Marketer from './BaaHam_VisitingExpertUser_Marketer/BaaHam_VisitingExpertUser_Marketer'
import BaaHam_VisitingExpertUser_Order from './BaaHam_VisitingExpertUser_Order/BaaHam_VisitingExpertUser_Order'
import BaaHam_VisitingExpertUser_MyHouses from './BaaHam_VisitingExpertUser_MyHouses/BaaHam_VisitingExpertUser_MyHouses'
import Image2 from '../../../pic2.png'
import UserImage from '../../../user.png'
import FooterImage from '../../../Footer.jpg'
import {IoExitOutline} from 'react-icons/io5'


function BaaHam_VisitingExpertUser() {
    const [sidebar ,Setsidebar] = useState(1)
  return (
    <div className='BaaHam_VisitingExpertUser'>
       
        <div className='BaaHam_NormalUsersContentContainer'>
            <div className='BaaHam_NormalUsersContenttransparent'>
                <div className='BaaHam_NormalUsersContent'>
                    <div className='BaaHam_NUContentSideBar'>
                        <div className='BaaHam_NUContentSideBarUser'>
                            <div className='BaaHam_NUContentSideBarUserPicture BaaHam_VEUContentSideBarUserPicture'>
                                <img src={UserImage} alt="hi" className='BaaHam_NUContentSideBarUserPictureSelf' />
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
                            <div className={['BaaHam_NUContentSideBarOption' , sidebar===8 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(8)}>
                            <div className='BaaHam_NUContentSideBarOptionIcon'>
                            <AiOutlineHeart/>
                            </div>
                            <span className='BaaHam_NUContentSideBarOptionTitle'>ملک های من</span>
                            </div>
                            <div className='BaaHam_NUContentSideBarUserExitButtonContainer'>
                                <div className='BaaHam_NUContentSideBarUserExitButton'>
                                    <IoExitOutline/>
                                </div> 
                                <span className='BaaHam_NUContentSideBarUserExitButtonTitle'>خروج</span>
                            </div>
                        </div>
                    </div>
                    <div className='BaaHam_NUContentForm'>
                        <div className='BaaHam_NUContentFormHeader'>
                            <span className='BaaHam_NUContentFormHeaderTitle'>داشبورد کاربر کارشناس بازدید</span>
                        </div>
                        
                        {
                            sidebar===1 ? 
                            <BaaHam_VisitingExpertUser_Profile/>
                            :
                            sidebar===6 ? 
                            <BaaHam_VisitingExpertUser_Marketer/>
                            :
                            sidebar===7 ?
                            <BaaHam_VisitingExpertUser_Order/>
                            :
                            <BaaHam_VisitingExpertUser_MyHouses/>
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
                <div className='BaaHamMainFooterContainer'>
                    <img alt="hi" src={FooterImage} className="BaaHamMainFooter"/>
                </div>
            </div>   
        </div>
    </div>
  )
}

export default BaaHam_VisitingExpertUser
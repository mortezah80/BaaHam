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
import UserImage from '../../../user.png'
import FooterImage from '../../../Footer.jpg'
import {IoExitOutline} from 'react-icons/io5'
import {Switch , Route , BrowserRouter as Router ,  Link} from 'react-router-dom';




function BaaHam_PropertyUser() {
    const [sidebar ,Setsidebar] = useState(1)
  return (
    <div className='BaaHam_NormalUsers'>
  
    <div className='BaaHam_NormalUsersContentContainer'>
      <div className='BaaHam_NormalUsersContenttransparent'>
        <div className='BaaHam_NormalUsersContent'>
        <div className='BaaHam_NUContentSideBar'>
              <div className='BaaHam_NUContentSideBarUser'>
                  <div className='BaaHam_NUContentSideBarUserPicture'>
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
                  <Link className={['BaaHam_NULink' , sidebar===1 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/PropertyUser/Profile"><span className='BaaHam_NUContentSideBarOptionTitle'>پروفایل</span></Link>
                  </div>
                  <div className={['BaaHam_NUContentSideBarOption' , sidebar===2 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(2)}>
                  <div className='BaaHam_NUContentSideBarOptionIcon'>
                  <MdOutlineEditNote/>
                  </div>
                  <Link className={['BaaHam_NULink' , sidebar===2 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/PropertyUser/Profile"><span className='BaaHam_NUContentSideBarOptionTitle'>ثبت آگهی</span></Link>
                  
                  </div>
                  <div className={['BaaHam_NUContentSideBarOption' , sidebar===3 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(3)}>
                  <div className='BaaHam_NUContentSideBarOptionIcon'>
                  <MdManageSearch/>
                  </div>
                  <Link className={['BaaHam_NULink' , sidebar===3 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/PropertyUser/Profile"><span className='BaaHam_NUContentSideBarOptionTitle'>اطلاعات تکمیلی </span></Link>
                  
                  </div>
                  <div className={['BaaHam_NUContentSideBarOption' , sidebar===4 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(4)}>
                  <div className='BaaHam_NUContentSideBarOptionIcon'>
                  <GiClick/>
                  </div>
                  <Link className={['BaaHam_NULink' , sidebar===4 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/PropertyUser/Profile"><span className='BaaHam_NUContentSideBarOptionTitle'> معرفی کاربر</span></Link>
              
                  </div>
                  <div className={['BaaHam_NUContentSideBarOption' , sidebar===5 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(5)}>
                  <div className='BaaHam_NUContentSideBarOptionIcon'>
                  <RiFileListLine/>
                  </div>
                  <Link className={['BaaHam_NULink' , sidebar===5 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/PropertyUser/Profile"><span className='BaaHam_NUContentSideBarOptionTitle'>نقدینگی  </span></Link>
                  
                  </div>
                  
                  <div className={['BaaHam_NUContentSideBarOption' , sidebar===6 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(6)}>
                  <div className='BaaHam_NUContentSideBarOptionIcon'>
                  <RiFileListLine/>
                  </div>
                  <Link className={['BaaHam_NULink' , sidebar===6 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/PropertyUser/Marketer"><span className='BaaHam_NUContentSideBarOptionTitle'>بازاریاب  </span></Link>
                  
                  </div>
                  
                  <div className={['BaaHam_NUContentSideBarOption' , sidebar===7 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(7)}>
                  <div className='BaaHam_NUContentSideBarOptionIcon'>
                  <RiFileListLine/>
                  </div>
                  <Link className={['BaaHam_NULink' , sidebar===7 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/PropertyUser/Order"><span className='BaaHam_NUContentSideBarOptionTitle'>ارجاع  </span></Link>
                  
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
                    <span className='BaaHam_NUContentFormHeaderTitle'>داشبورد کاربر املاک</span>
                </div>
                
                {/*
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
                  <Switch>
                  <Route exact path="/PropertyUser/Profile">
                    <BaaHam_PropertyUser_Profile/>
                  </Route>
                  <Route path="/PropertyUser/Marketer">
                   <BaaHam_PropertyUser_Marketer/>
                  </Route>
                  <Route path="/PropertyUser/Order">
                    <BaaHam_PropertyUser_Order/>
                  </Route>
                </Switch>
               
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

export default BaaHam_PropertyUser
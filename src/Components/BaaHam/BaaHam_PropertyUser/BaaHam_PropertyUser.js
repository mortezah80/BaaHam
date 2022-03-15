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

import Image3 from '../../../pic3.jpg'
import Image4 from '../../../pic4.jpg'
import Image5 from '../../../pic5.jpg'
import UserImage from '../../../user.png'
import FooterImage from '../../../Footer.jpg'
import {IoExitOutline} from 'react-icons/io5'
import {Switch , Route , BrowserRouter as Router ,  Link} from 'react-router-dom';
import {HiMenu} from 'react-icons/hi'
import Drawer from '@mui/material/Drawer';


import {BsTwitter,BsTelegram ,BsFillArrowUpCircleFill} from 'react-icons/bs'
import {IoLogoLinkedin} from 'react-icons/io'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'
import BaaHam_PropertyUser_Money from './BaaHam_PropertyUser_Money/BaaHam_PropertyUser_Money'
import BaaHam_PropertyUser_Information from './BaaHam_PropertyUser_Information/BaaHam_PropertyUser_Information'
import BaaHam_PropertyUser_Introduction from './BaaHam_PropertyUser_Introduction/BaaHam_PropertyUser_Introduction'
import BaaHam_PropertyUser_SabteAgahi from './BaaHam_PropertyUser_SabteAgahi/BaaHam_PropertyUser_SabteAgahi'




function BaaHam_PropertyUser() {
  const [DP_DrawerB,setDP_DrawerB] = useState(false)
    const [sidebar ,Setsidebar] = useState(1)
  return (
    <div className='BaaHam_NormalUsers'>
  
    <div className='BaaHam_NormalUsersContentContainer'>
      <div className='BaaHam_NormalUsersContenttransparent'>
        <div className='BaaHam_NormalUsersContent'>
        <div className='BaaHam_NUContentSideBar'>
              <div className='BaaHam_NUContentSideBarUser'>
                  <div className='BaaHam_NUContentSideBarUserPicture BaaHam_PUContentSideBarUserPicture'>
                      <img src={UserImage} alt="hi" className='BaaHam_NUContentSideBarUserPictureSelf ' />
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
                  <Link className={['BaaHam_NULink' , sidebar===2 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/PropertyUser/SabteAgahi"><span className='BaaHam_NUContentSideBarOptionTitle'>ثبت آگهی</span></Link>
                  
                  </div>
                  <div className={['BaaHam_NUContentSideBarOption' , sidebar===3 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(3)}>
                  <div className='BaaHam_NUContentSideBarOptionIcon'>
                  <MdManageSearch/>
                  </div>
                  <Link className={['BaaHam_NULink' , sidebar===3 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/PropertyUser/Information"><span className='BaaHam_NUContentSideBarOptionTitle'>اطلاعات تکمیلی </span></Link>
                  
                  </div>
                  <div className={['BaaHam_NUContentSideBarOption' , sidebar===4 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(4)}>
                  <div className='BaaHam_NUContentSideBarOptionIcon'>
                  <GiClick/>
                  </div>
                  <Link className={['BaaHam_NULink' , sidebar===4 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/PropertyUser/Introduction"><span className='BaaHam_NUContentSideBarOptionTitle'> معرفی کاربر</span></Link>
              
                  </div>
                  <div className={['BaaHam_NUContentSideBarOption' , sidebar===5 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(5)}>
                  <div className='BaaHam_NUContentSideBarOptionIcon'>
                  <RiFileListLine/>
                  </div>
                  <Link className={['BaaHam_NULink' , sidebar===5 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/PropertyUser/Money"><span className='BaaHam_NUContentSideBarOptionTitle'>نقدینگی  </span></Link>
                  
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
            <div className='BaaHam_NUContentFormUserImageContainer'>
                      <div className='BaaHam_NUContentSideBarUser2'>
                        <span className='BaaHam_NUContentSideBarUserName BaaHam_NUContentSideBarUserName2'>نام کاربری</span>
                          <div className='BaaHam_NUContentSideBarUserPicture2Container'>
                            <div className='BaaHam_NUContentSideBarUserPicture2 BaaHam_PUContentSideBarUserPicture'>
                                <img src={UserImage} alt="hi" className='BaaHam_NUContentSideBarUserPictureSelf BaaHam_NUContentSideBarUserPictureSelf2' />
                            </div>

                          </div>
                          <span className='BaaHam_NUContentSideBarUserName BaaHam_NUContentSideBarUserName2 BaaHam_NUContentSideBarUserName3'>نام کاربری</span>
                       
                          <span className='BaaHam_NUContentSideBarUserEmail BaaHam_NUContentSideBarUserEmail2'>Example@gmail.com</span>
                      </div>
                    </div>
                    <div className='BaaHam_NUContentFormHeaderSliderIcon'>
                      <div className='BaaHam_NUContentFormHeader'>
                          <span className='BaaHam_NUContentFormHeaderTitle'>باهم | داشبورد کاربر املاک</span>
                      </div>
                    
                      <div className='LinksTopHeaderContent_Icon' onClick={() => setDP_DrawerB(true)}>
                          <div><HiMenu className='LinksTopHeaderContent_IconSelf'/></div>  
                      </div>
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
                  <Route path="/PropertyUser/Money">
                    <BaaHam_PropertyUser_Money/>
                  </Route>
                   <Route path="/PropertyUser/Information">
                    <BaaHam_PropertyUser_Information/>
                  </Route>
                  <Route path="/PropertyUser/Introduction">
                    <BaaHam_PropertyUser_Introduction/>
                  </Route>
                  <Route path="/PropertyUser/SabteAgahi">
                    <BaaHam_PropertyUser_SabteAgahi/>
                  </Route>
                </Switch>
               
            </div>
         </div>
         <div className='BaaHamMainFooterContainer'>
                  <div className='BaaHamMainFooterContainer2'>

                 
                    <span className='BaaHamMainFooterRightAboutUs'>درباره ما</span>
                    <div className='BaaHamMainFooter'>
                        <div className='BaaHamMainFooterRight'>
                              <span className='BaaHamMainFooterRightAboutUsContent'>توضیحات اضافه برای اینکه بببینیم در فوتر چه اتفاقی می افتد وقتی که یک متن طولانی به عنوان توضیحات باشد.توضیحات اضافه برای اینکه بببینیم در فوتر چه اتفاقی می افتد وقتی که یک متن طولانی به عنوان توضیحات باشد.توضیحات اضافه برای اینکه بببینیم در فوتر چه اتفاقی می افتد وقتی که یک متن طولانی به عنوان توضیحات باشد</span>
                              <div className='BaaHam_NormalUsersHeaderTopRight'>
                              <div className='BaaHam_NormalUsersHeaderImageContainer'>
                                <img className='BaaHam_NormalUsersHeaderImage' src={Image3} alt="hi"/>
                                </div>
                                <span className='BaaHam_NormalUsersHeaderImageTitle'>(با هم حلش میکنیم)</span>
                              </div>
                        </div>
                        <div className='BaaHamMainFooterCenter'>
                          <span className='BaaHam_NormalUsersHeaderCenterTitle BaaHam_NormalUsersFooterCenterTitle BaaHam_NormalUsersFooterCenterTitleNoMargin'>خدمات</span>
                          <span className='BaaHam_NormalUsersHeaderCenterTitle BaaHam_NormalUsersFooterCenterTitle'>درباره ما</span>
                          <span className='BaaHam_NormalUsersHeaderCenterTitle BaaHam_NormalUsersFooterCenterTitle'>تماس با ما</span>
                        </div>
                        <div className='BaaHamMainFooterLeft'>
                          <div className='BaaHam_NormalUsersFooterImage2Container'>
                            <img className='BaaHam_NormalUsersFooterImage2' src={Image4} alt="hi"/>
                            <img className='BaaHam_NormalUsersFooterImage2' src={Image5} alt="hi"/>
                          </div>
                          <div className='BaaHamMainFooterLeftIconsContainer'>
                            <BsTwitter/>
                            <IoLogoLinkedin/>
                            <FaTelegramPlane/>
                            <AiFillInstagram/>
                            <BsFillArrowUpCircleFill className='BaaHamMainFooterLeftIconLast'/>
                          </div>
                        </div>
                    </div>


                <div className='BaaHamMainFooter2Big'>

             
                    <div className='BaaHamMainFooter2'>
                     
                        <div className='BaaHamMainFooterRight BaaHamMainFooterRight2'>
                              <span className='BaaHamMainFooterRightAboutUsContent'>توضیحات اضافه برای اینکه بببینیم در فوتر چه اتفاقی می افتد وقتی که یک متن طولانی به عنوان توضیحات باشد.توضیحات اضافه برای اینکه بببینیم در فوتر چه اتفاقی می افتد وقتی که یک متن طولانی به عنوان توضیحات باشد.توضیحات اضافه برای اینکه بببینیم در فوتر چه اتفاقی می افتد وقتی که یک متن طولانی به عنوان توضیحات باشد</span>
                          
                        </div>
                        <div className='BaaHamMainFooter2RightCenter'>
                              <div className='BaaHamMainFooterCenter BaaHamMainFooterCenter2'>
                                <span className='BaaHam_NormalUsersHeaderCenterTitle BaaHam_NormalUsersFooterCenterTitle BaaHam_NormalUsersFooterCenterTitleNoMargin'>خدمات</span>
                                <span className='BaaHam_NormalUsersHeaderCenterTitle BaaHam_NormalUsersFooterCenterTitle BaaHam_NormalUsersFooterCenterTitleNoMargin'>درباره ما</span>
                                <span className='BaaHam_NormalUsersHeaderCenterTitle BaaHam_NormalUsersFooterCenterTitle BaaHam_NormalUsersFooterCenterTitleNoMargin'>تماس با ما</span>
                              </div>
                          
                            <div className='BaaHamMainFooterLeft'>
                                <div className='BaaHam_NormalUsersFooterImage2Container BaaHam_NormalUsersFooterImage2ContainerRes'>
                                  <img className='BaaHam_NormalUsersFooterImage2' src={Image4} alt="hi"/>
                                  <img className='BaaHam_NormalUsersFooterImage2' src={Image5} alt="hi"/>
                                </div>
                                <div className='BaaHamMainFooterLeftIconsContainer'>
                                  <BsTwitter/>
                                  <IoLogoLinkedin/>
                                  <FaTelegramPlane/>
                                  <AiFillInstagram/>
                                  <BsFillArrowUpCircleFill className='BaaHamMainFooterLeftIconLast'/>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='BaaHam_NormalUsersHeaderTopRight'>
                              <div className='BaaHam_NormalUsersHeaderImageContainer'>
                                <img className='BaaHam_NormalUsersHeaderImage' src={Image3} alt="hi"/>
                                </div>
                                <span className='BaaHam_NormalUsersHeaderImageTitle'>(با هم حلش میکنیم)</span>
                              </div>
                    </div>
                  </div> 
              </div>
      </div>   
    </div>
    <Drawer  className="Links_Drawer" anchor={'right'} open={DP_DrawerB} onClose={() => setDP_DrawerB(false)} >
    <div className='BaaHam_NUContentSideBar BaaHam_NUContentSideBarRes'>
 
              <div className='BaaHam_NUContentSideBarOptions'>
                  <div className={['BaaHam_NUContentSideBarOption' , sidebar===1 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(1)}>
                  <div className='BaaHam_NUContentSideBarOptionIcon'>
                  <CgProfile/>
                  </div>
                  <Link onClick={() => setDP_DrawerB(false)} className={['BaaHam_NULink' , sidebar===1 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/PropertyUser/Profile"><span className='BaaHam_NUContentSideBarOptionTitle'>پروفایل</span></Link>
                  </div>
                  <div className={['BaaHam_NUContentSideBarOption' , sidebar===2 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(2)}>
                  <div className='BaaHam_NUContentSideBarOptionIcon'>
                  <MdOutlineEditNote/>
                  </div>
                  <Link onClick={() => setDP_DrawerB(false)} className={['BaaHam_NULink' , sidebar===2 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/PropertyUser/SabteAgahi"><span className='BaaHam_NUContentSideBarOptionTitle'>ثبت آگهی</span></Link>
                  
                  </div>
                  <div className={['BaaHam_NUContentSideBarOption' , sidebar===3 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(3)}>
                  <div className='BaaHam_NUContentSideBarOptionIcon'>
                  <MdManageSearch/>
                  </div>
                  <Link onClick={() => setDP_DrawerB(false)} className={['BaaHam_NULink' , sidebar===3 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/PropertyUser/Information"><span className='BaaHam_NUContentSideBarOptionTitle'>اطلاعات تکمیلی </span></Link>
                  
                  </div>
                  <div className={['BaaHam_NUContentSideBarOption' , sidebar===4 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(4)}>
                  <div className='BaaHam_NUContentSideBarOptionIcon'>
                  <GiClick/>
                  </div>
                  <Link onClick={() => setDP_DrawerB(false)} className={['BaaHam_NULink' , sidebar===4 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/PropertyUser/Introduction"><span className='BaaHam_NUContentSideBarOptionTitle'> معرفی کاربر</span></Link>
              
                  </div>
                  <div className={['BaaHam_NUContentSideBarOption' , sidebar===5 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(5)}>
                  <div className='BaaHam_NUContentSideBarOptionIcon'>
                  <RiFileListLine/>
                  </div>
                  <Link onClick={() => setDP_DrawerB(false)} className={['BaaHam_NULink' , sidebar===5 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/PropertyUser/Money"><span className='BaaHam_NUContentSideBarOptionTitle'>نقدینگی  </span></Link>
                  
                  </div>
                  
                  <div className={['BaaHam_NUContentSideBarOption' , sidebar===6 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(6)}>
                  <div className='BaaHam_NUContentSideBarOptionIcon'>
                  <RiFileListLine/>
                  </div>
                  <Link onClick={() => setDP_DrawerB(false)} className={['BaaHam_NULink' , sidebar===6 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/PropertyUser/Marketer"><span className='BaaHam_NUContentSideBarOptionTitle'>بازاریاب  </span></Link>
                  
                  </div>
                  
                  <div className={['BaaHam_NUContentSideBarOption' , sidebar===7 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(7)}>
                  <div className='BaaHam_NUContentSideBarOptionIcon'>
                  <RiFileListLine/>
                  </div>
                  <Link onClick={() => setDP_DrawerB(false)} className={['BaaHam_NULink' , sidebar===7 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/PropertyUser/Order"><span className='BaaHam_NUContentSideBarOptionTitle'>ارجاع  </span></Link>
                  
                  </div>

                  <div className='BaaHam_NUContentSideBarUserExitButtonContainer'>
                  <div className='BaaHam_NUContentSideBarUserExitButton'>
                      <IoExitOutline/>
                  </div> 
                  <span className='BaaHam_NUContentSideBarUserExitButtonTitle'>خروج</span>
                  </div>
              </div>
      
          </div>
        </Drawer>
</div>
  )
}

export default BaaHam_PropertyUser
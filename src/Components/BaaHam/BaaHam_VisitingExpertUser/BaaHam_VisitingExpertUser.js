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
import {Switch , Route , BrowserRouter as Router ,  Link} from 'react-router-dom';
import {HiMenu} from 'react-icons/hi'
import Drawer from '@mui/material/Drawer';
import BaaHam_VisitingExpertUser_Money from './BaaHam_VisitingExpertUser_Money/BaaHam_VisitingExpertUser_Money'
import BaaHam_VisitingExpertUser_Information from './BaaHam_VisitingExpertUser_Information/BaaHam_VisitingExpertUser_Information'
import BaaHam_VisitingExpertUser_Introduction from './BaaHam_VisitingExpertUser_Introduction/BaaHam_VisitingExpertUser_Introduction'
import BaaHam_VisitingExpertUser_SabteAgahi from './BaaHam_VisitingExpertUser_SabteAgahi/BaaHam_VisitingExpertUser_SabteAgahi'



function BaaHam_VisitingExpertUser() {
    const [DP_DrawerB,setDP_DrawerB] = useState(false)
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
                        <Link className={['BaaHam_NULink' , sidebar===1 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/VisitingExpertUser/Profile"><span className='BaaHam_NUContentSideBarOptionTitle'>پروفایل</span></Link>
                        </div>
                        <div className={['BaaHam_NUContentSideBarOption' , sidebar===2 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(2)}>
                        <div className='BaaHam_NUContentSideBarOptionIcon'>
                        <MdOutlineEditNote/>
                        </div>
                        <Link className={['BaaHam_NULink' , sidebar===2 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/VisitingExpertUser/SabteAgahi"><span className='BaaHam_NUContentSideBarOptionTitle'>ثبت آگهی</span></Link>
                        
                        </div>
                        <div className={['BaaHam_NUContentSideBarOption' , sidebar===3 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(3)}>
                        <div className='BaaHam_NUContentSideBarOptionIcon'>
                        <MdManageSearch/>
                        </div>
                        <Link className={['BaaHam_NULink' , sidebar===3 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/VisitingExpertUser/Information"><span className='BaaHam_NUContentSideBarOptionTitle'>اطلاعات تکمیلی </span></Link>
                        
                        </div>
                        <div className={['BaaHam_NUContentSideBarOption' , sidebar===4 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(4)}>
                        <div className='BaaHam_NUContentSideBarOptionIcon'>
                        <GiClick/>
                        </div>
                        <Link className={['BaaHam_NULink' , sidebar===4 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/VisitingExpertUser/Introduction"><span className='BaaHam_NUContentSideBarOptionTitle'> معرفی کاربر</span></Link>
                    
                        </div>
                        <div className={['BaaHam_NUContentSideBarOption' , sidebar===5 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(5)}>
                        <div className='BaaHam_NUContentSideBarOptionIcon'>
                        <RiFileListLine/>
                        </div>
                        <Link className={['BaaHam_NULink' , sidebar===5 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/VisitingExpertUser/Money"><span className='BaaHam_NUContentSideBarOptionTitle'>نقدینگی  </span></Link>
                        
                        </div>
                        
                        <div className={['BaaHam_NUContentSideBarOption' , sidebar===6 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(6)}>
                        <div className='BaaHam_NUContentSideBarOptionIcon'>
                        <RiFileListLine/>
                        </div>
                        <Link className={['BaaHam_NULink' , sidebar===6 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/VisitingExpertUser/Marketer"><span className='BaaHam_NUContentSideBarOptionTitle'>بازاریاب  </span></Link>
                        
                        </div>
                        
                        <div className={['BaaHam_NUContentSideBarOption' , sidebar===7 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(7)}>
                        <div className='BaaHam_NUContentSideBarOptionIcon'>
                        <RiFileListLine/>
                        </div>
                        <Link className={['BaaHam_NULink' , sidebar===7 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/VisitingExpertUser/Order"><span className='BaaHam_NUContentSideBarOptionTitle'>ارجاع  </span></Link>
                        
                        </div>

                        
                        <div className={['BaaHam_NUContentSideBarOption' , sidebar===8 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(8)}>
                        <div className='BaaHam_NUContentSideBarOptionIcon'>
                        <RiFileListLine/>
                        </div>
                        <Link className={['BaaHam_NULink' , sidebar===8 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/VisitingExpertUser/MyHouses"><span className='BaaHam_NUContentSideBarOptionTitle'>ملک های من  </span></Link>
                        
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
                                <div className='BaaHam_NUContentSideBarUserPicture2 BaaHam_VEUContentSideBarUserPicture'>
                                    <img src={UserImage} alt="hi" className='BaaHam_NUContentSideBarUserPictureSelf  BaaHam_NUContentSideBarUserPictureSelf2 ' />
                                </div>

                            </div>
                            <span className='BaaHam_NUContentSideBarUserName BaaHam_NUContentSideBarUserName2 BaaHam_NUContentSideBarUserName3'>نام کاربری</span>
                        
                            <span className='BaaHam_NUContentSideBarUserEmail BaaHam_NUContentSideBarUserEmail2'>Example@gmail.com</span>
                        </div>
                        </div>
                        <div className='BaaHam_NUContentFormHeaderSliderIcon'>
                        <div className='BaaHam_NUContentFormHeader'>
                            <span className='BaaHam_NUContentFormHeaderTitle'>داشبورد کاربر کارشناس بازدید</span>
                        </div>
                        
                        <div className='LinksTopHeaderContent_Icon' onClick={() => setDP_DrawerB(true)}>
                            <div><HiMenu className='LinksTopHeaderContent_IconSelf'/></div>  
                        </div>
                        </div>
                        
                        {/*
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
                        <Switch>
                            <Route exact path="/VisitingExpertUser/Profile">
                                <BaaHam_VisitingExpertUser_Profile/>
                            </Route>
                            <Route path="/VisitingExpertUser/Marketer">
                                <BaaHam_VisitingExpertUser_Marketer/>
                            </Route>
                            <Route path="/VisitingExpertUser/Order">
                                <BaaHam_VisitingExpertUser_Order/>
                            </Route>
                            <Route path="/VisitingExpertUser/MyHouses">
                                <BaaHam_VisitingExpertUser_MyHouses/>
                            </Route>
    
                            <Route path="/VisitingExpertUser/Money">
                                <BaaHam_VisitingExpertUser_Money/>
                            </Route>
                            <Route path="/VisitingExpertUser/Information">
                                <BaaHam_VisitingExpertUser_Information/>
                            </Route>
                            <Route path="/VisitingExpertUser/Introduction">
                                <BaaHam_VisitingExpertUser_Introduction/>
                            </Route>
                            <Route path="/VisitingExpertUser/SabteAgahi">
                                <BaaHam_VisitingExpertUser_SabteAgahi/>
                            </Route>
                        </Switch>
                    </div>
                </div>
                <div className='BaaHamMainFooterContainer'>
                    <img alt="hi" src={FooterImage} className="BaaHamMainFooter"/>
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
                        <Link onClick={() => setDP_DrawerB(false)} className={['BaaHam_NULink' , sidebar===1 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/VisitingExpertUser/Profile"><span className='BaaHam_NUContentSideBarOptionTitle'>پروفایل</span></Link>
                        </div>
                        <div className={['BaaHam_NUContentSideBarOption' , sidebar===2 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(2)}>
                        <div className='BaaHam_NUContentSideBarOptionIcon'>
                        <MdOutlineEditNote/>
                        </div>
                        <Link onClick={() => setDP_DrawerB(false)} className={['BaaHam_NULink' , sidebar===2 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/VisitingExpertUser/SabteAgahi"><span className='BaaHam_NUContentSideBarOptionTitle'>ثبت آگهی</span></Link>
                        
                        </div>
                        <div className={['BaaHam_NUContentSideBarOption' , sidebar===3 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(3)}>
                        <div className='BaaHam_NUContentSideBarOptionIcon'>
                        <MdManageSearch/>
                        </div>
                        <Link onClick={() => setDP_DrawerB(false)} className={['BaaHam_NULink' , sidebar===3 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/VisitingExpertUser/Information"><span className='BaaHam_NUContentSideBarOptionTitle'>اطلاعات تکمیلی </span></Link>
                        
                        </div>
                        <div className={['BaaHam_NUContentSideBarOption' , sidebar===4 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(4)}>
                        <div className='BaaHam_NUContentSideBarOptionIcon'>
                        <GiClick/>
                        </div>
                        <Link onClick={() => setDP_DrawerB(false)} className={['BaaHam_NULink' , sidebar===4 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/VisitingExpertUser/Introduction"><span className='BaaHam_NUContentSideBarOptionTitle'> معرفی کاربر</span></Link>
                    
                        </div>
                        <div className={['BaaHam_NUContentSideBarOption' , sidebar===5 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(5)}>
                        <div className='BaaHam_NUContentSideBarOptionIcon'>
                        <RiFileListLine/>
                        </div>
                        <Link onClick={() => setDP_DrawerB(false)} className={['BaaHam_NULink' , sidebar===5 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/VisitingExpertUser/Money"><span className='BaaHam_NUContentSideBarOptionTitle'>نقدینگی  </span></Link>
                        
                        </div>
                        
                        <div className={['BaaHam_NUContentSideBarOption' , sidebar===6 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(6)}>
                        <div className='BaaHam_NUContentSideBarOptionIcon'>
                        <RiFileListLine/>
                        </div>
                        <Link onClick={() => setDP_DrawerB(false)} className={['BaaHam_NULink' , sidebar===6 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/VisitingExpertUser/Marketer"><span className='BaaHam_NUContentSideBarOptionTitle'>بازاریاب  </span></Link>
                        
                        </div>
                        
                        <div className={['BaaHam_NUContentSideBarOption' , sidebar===7 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(7)}>
                        <div className='BaaHam_NUContentSideBarOptionIcon'>
                        <RiFileListLine/>
                        </div>
                        <Link onClick={() => setDP_DrawerB(false)} className={['BaaHam_NULink' , sidebar===7 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/VisitingExpertUser/Order"><span className='BaaHam_NUContentSideBarOptionTitle'>ارجاع  </span></Link>
                        
                        </div>

                        
                        <div className={['BaaHam_NUContentSideBarOption' , sidebar===8 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(8)}>
                        <div className='BaaHam_NUContentSideBarOptionIcon'>
                        <RiFileListLine/>
                        </div>
                        <Link onClick={() => setDP_DrawerB(false)} className={['BaaHam_NULink' , sidebar===8 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/VisitingExpertUser/MyHouses"><span className='BaaHam_NUContentSideBarOptionTitle'>ملک های من  </span></Link>
                        
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

export default BaaHam_VisitingExpertUser
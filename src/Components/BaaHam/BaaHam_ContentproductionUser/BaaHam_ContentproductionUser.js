import React ,{useState} from 'react'
import './BaaHam_ContentproductionUser.css'
import BaaHam_ContentproductionUser_Make from './BaaHam_ContentproductionUser_Make/BaaHam_ContentproductionUser_Make'
import BaaHam_ContentproductionUser_Profile from './BaaHam_ContentproductionUser_Profile/BaaHam_ContentproductionUser_Profile'
import {CgProfile} from 'react-icons/cg'
import {MdOutlineEditNote,MdManageSearch} from 'react-icons/md'
import {GiClick} from 'react-icons/gi'
import {RiFileListLine} from 'react-icons/ri'
import {AiOutlineHeart} from 'react-icons/ai'
import Image2 from '../../../pic2.png'
import UserImage from '../../../user.png'
import FooterImage from '../../../Footer.jpg'
import {IoExitOutline} from 'react-icons/io5'
import {Switch , Route , BrowserRouter as Router ,  Link} from 'react-router-dom';


function BaaHam_ContentproductionUser() {
    const [sidebar ,Setsidebar] = useState(1)
  return (
    <div className='BaaHam_ContentproductionUser'>
       
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
                            <Link className={['BaaHam_NULink' , sidebar===1 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/ContentproductionUser/Profile"><span className='BaaHam_NUContentSideBarOptionTitle'>پروفایل</span></Link>
                            </div>
                            <div className={['BaaHam_NUContentSideBarOption' , sidebar===2 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(2)}>
                            <div className='BaaHam_NUContentSideBarOptionIcon'>
                            <MdOutlineEditNote/>
                            </div>
                            <Link className={['BaaHam_NULink' , sidebar===2 ? "BaaHam_NULinkActive" : ""].join(" ")} to="/ContentproductionUser/Make"><span className='BaaHam_NUContentSideBarOptionTitle'>تولید محتوا   </span></Link>
                            
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
                            <span className='BaaHam_NUContentFormHeaderTitle'>داشبورد کاربر تولید محتوا</span>
                        </div>
                        
                        {/*
                            sidebar===1 ? 
                            <BaaHam_ContentproductionUser_Profile/>
                            :
                            <BaaHam_ContentproductionUser_Make/>
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
                            <Route exact path="/ContentproductionUser/Profile">
                                <BaaHam_ContentproductionUser_Profile/>
                            </Route>
                            <Route path="/ContentproductionUser/Make">
                                <BaaHam_ContentproductionUser_Make/>
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

export default BaaHam_ContentproductionUser
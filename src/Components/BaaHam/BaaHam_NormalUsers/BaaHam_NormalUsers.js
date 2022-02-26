import React from 'react'
import './BaaHam_NormalUsers.css'

function BaaHam_NormalUsers() {
  return (
    <div className='BaaHam_NormalUsers'>
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
                        <div className='BaaHam_NUContentSideBarOption'>
                          <CgProfile/>
                          <span>پروفایل</span>
                        </div>
                        <div className='BaaHam_NUContentSideBarOption'>
                          <span>پروفایل</span>
                        </div>
                        <div className='BaaHam_NUContentSideBarOption'>
                          <span>پروفایل</span>
                        </div>
                        <div className='BaaHam_NUContentSideBarOption'>
                          <span>پروفایل</span>
                        </div>
                        <div className='BaaHam_NUContentSideBarOption'>
                          <span>پروفایل</span>
                        </div>
                        <div className='BaaHam_NUContentSideBarOption'>
                          <span>پروفایل</span>
                        </div>
                    </div>
                </div>
                <div className='BaaHam_NUContentForm'>

                </div>
             </div>
          </div>   
        </div>
    </div>
  )
}

export default BaaHam_NormalUsers
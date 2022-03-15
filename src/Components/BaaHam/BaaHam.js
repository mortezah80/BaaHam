import React from 'react'
import './BaaHam.css'
import BaaHam_MarketerUser from './BaaHam_MarketerUser/BaaHam_MarketerUser'
import BaaHam_NormalUsers from './BaaHam_NormalUsers/BaaHam_NormalUsers'
import BaaHam_PropertyUser from './BaaHam_PropertyUser/BaaHam_PropertyUser'
import BaaHam_SupervisorUser from './BaaHam_SupervisorUser/BaaHam_SupervisorUser'
import BaaHam_VisitingExpertUser from './BaaHam_VisitingExpertUser/BaaHam_VisitingExpertUser'
import BaaHam_ContentproductionUser from './BaaHam_ContentproductionUser/BaaHam_ContentproductionUser'
import {Switch , Route , BrowserRouter as Router ,  Link} from 'react-router-dom';
import Image2 from '../../pic2.png'
import BackgroundImage from '../../background.jpg'
import FooterImage from '../../Footer.jpg'




function BaaHam() {
  return (
    <div className='BaaHam'>
        <div className='BaaHam_NormalUsersHeader'>
          <div className='BaaHam_NormalUsersHeaderTopContainerWhite'>
            <div className='BaaHam_NormalUsersHeaderTopContainer '>       
              <div className='BaaHam_NormalUsersHeaderTopRight'>
                <div className='BaaHam_NormalUsersHeaderImageContainer'>
                <img className='BaaHam_NormalUsersHeaderImage' src={Image2} alt="hi"/>
                </div>
                <span className='BaaHam_NormalUsersHeaderImageTitle'>(با هم حلش میکنیم)</span>
              </div>
              <div className='BaaHam_NormalUsersHeaderCenter'>
                <span className='BaaHam_NormalUsersHeaderCenterTitle'>خدمات</span>
                <span className='BaaHam_NormalUsersHeaderCenterTitle'>درباره ما</span>
                <span className='BaaHam_NormalUsersHeaderCenterTitle'>تماس با ما</span>
              </div>
              <div className='BaaHam_NormalUsersHeaderLeft'>
                <span className='BaaHam_NormalUsersHeaderLeftTitle'>ورود/ثبت نام</span>
            
                      <div className='BaaHam_NU_ProfileButton'>
                          <span>ثبت</span>
                      </div>
           
              </div>
            </div>



            <div className='BaaHam_NormalUsersHeaderTopContainerRes'>

              <div className='BaaHam_NormalUsersHeaderTopRightCenter'>
                   
                  <div className='BaaHam_NormalUsersHeaderTopRight'>
                    <div className='BaaHam_NormalUsersHeaderImageContainer'>
                    <img className='BaaHam_NormalUsersHeaderImage' src={Image2} alt="hi"/>
                    </div>
                    <span className='BaaHam_NormalUsersHeaderImageTitle'>(با هم حلش میکنیم)</span>
                  </div>
                  <div className='BaaHam_NormalUsersHeaderCenter'>
                    <span className='BaaHam_NormalUsersHeaderCenterTitle'>خدمات</span>
                    <span className='BaaHam_NormalUsersHeaderCenterTitle'>درباره ما</span>
                    <span className='BaaHam_NormalUsersHeaderCenterTitle'>تماس با ما</span>
                  </div>
              </div> 

              <div className='BaaHam_NormalUsersHeaderLeft2'>
                <span className='BaaHam_NormalUsersHeaderLeftTitle'>ورود/ثبت نام</span>
            
                      <div className='BaaHam_NU_ProfileButton'>
                          <span>ثبت</span>
                      </div>
           
              </div>
            </div>




          </div>
          <div className='BaaHam_NormalUsersHeaderImageContainer'>
              <img alt="hi" src={BackgroundImage} className="BaaHam_NormalUsersHeaderImageContainerImage" />
          </div>
        </div>
          <div className='BaaHamContent'>
     
            <Switch>
              <Route path="/NormalUsers">
                <Router>
                <BaaHam_NormalUsers/>
                </Router>
              </Route>
              <Route path="/PropertyUser">
                <BaaHam_PropertyUser/>
              </Route>
              <Route path="/MarketerUser">
                <BaaHam_MarketerUser/>
              </Route>
              <Route path="/VisitingExpertUser">
                <BaaHam_VisitingExpertUser/>
              </Route>
              <Route path="/SupervisorUser">
                <BaaHam_SupervisorUser/>
              </Route>
              <Route path="/ContentproductionUser">
                <BaaHam_ContentproductionUser/>
              </Route>
            </Switch>
        
          </div>
        
    </div>
  )
}

export default BaaHam
import React from 'react'
import './BaaHam.css'
import BaaHam_MarketerUser from './BaaHam_MarketerUser/BaaHam_MarketerUser'
import BaaHam_NormalUsers from './BaaHam_NormalUsers/BaaHam_NormalUsers'
import BaaHam_PropertyUser from './BaaHam_PropertyUser/BaaHam_PropertyUser'
import BaaHam_SupervisorUser from './BaaHam_SupervisorUser/BaaHam_SupervisorUser'
import BaaHam_VisitingExpertUser from './BaaHam_VisitingExpertUser/BaaHam_VisitingExpertUser'
import BaaHam_ContentproductionUser from './BaaHam_ContentproductionUser/BaaHam_ContentproductionUser'
import { Switch , Route } from 'react-router-dom'
import { BrowserRouter as Router} from 'react-router-dom';




function BaaHam() {
  return (
    <div className='BaaHam'>

          <div>
     
            <Switch>
              <Route exact path="/">
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
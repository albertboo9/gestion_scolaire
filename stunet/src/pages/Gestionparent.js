// import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HeaderParents from '../components/HeaderParents'
import NotificationsParents from './NotificationsParents'
import MessagesParents from './MessagesParent'
import SuiviParents from './SuiviParents'
import "../styles/Gestionparent.css"
const Gestionparent = () => {
  return (
    <div>
      <Router>
        <div className='dashParents'>
          <div className='header'>
            <HeaderParents />
          </div>
          
          <Routes>
            <Route path='/' element={<NotificationsParents />} />
            <Route path='/Messages' element={<MessagesParents />} />
            <Route path='/Assiduite' element={<SuiviParents />} />
          </Routes>
        </div>
        
      </Router>
    </div>
    
  )
}

export default Gestionparent
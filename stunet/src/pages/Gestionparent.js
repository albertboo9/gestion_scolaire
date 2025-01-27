// import React from 'react'
import { Outlet} from 'react-router-dom'
import HeaderParents from '../components/HeaderParents'
import "../styles/Gestionparent.css"
const Gestionparent = () => {
  return (
    <div>

        <div className='dashParents'>
          <div className='header'>
            <HeaderParents />
          </div>
          <div className='corp'>
            <Outlet />
          </div>
          
        </div>
      
    </div>
    
  )
}

export default Gestionparent
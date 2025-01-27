import {Link} from 'react-router-dom'
import "../styles/HeaderParents.css"
import logo from "../assets/logo.jpeg"
import {BiBell, BiEnvelope, BiUserCheck} from "react-icons/bi"

const HeaderParents = () => {
  return (
    <nav >
      <div className='logo'>
        <img src={logo} alt="logo" />
      </div>
      <div className='liens'>
        <Link to="/" className='lien'>
          <BiBell size={30}/>Notifications</Link>
        <Link to="/Messages" className='lien'><BiEnvelope size={30}/>Messagess</Link>
        <Link to="/Assiduite" className='lien'><BiUserCheck size={30}/>SuiviEleve</Link>
      </div>
        
    </nav>
  )
}

export default HeaderParents
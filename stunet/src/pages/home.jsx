import 'boxicons'
import '../boxicons-master/css/boxicons.css'
import '../styles/slidebar.css'
import "../styles/general.css"
import userp from './user.jpg'
import Notification from '../components/notification'
//import toast from 'react-hot-toast'
import {React, useState } from "react";
import logo from './logo2.png';
import { Outlet,  useNavigate } from 'react-router-dom'


function Onglet({classIcon,text,view,children,icoView}){
    const [survol,setSurvol]=useState("none")
    const isSurvol=(a)=>{
      if (view=== false) {
        setSurvol(a)
      } else {
        setSurvol("none")
      }
      
    }
    return (
    <div className="nav-list"> 
      <span style={{display:icoView}}>
        <div className= "slide-icon" onMouseEnter={()=>isSurvol("block")} onMouseOut={()=>isSurvol("none")} >
          <div className={classIcon} 
                onMouseEnter={()=>isSurvol("block")}
                onMouseOut={()=>isSurvol("none")}
                style={{
                  position:"relative",
                  top:"50%",
                  transform:"translateY(-50%)"
                }}  
          > 
          </div>
        </div>
      </span >
      <span ><div className="text-onglet">{view===true ? children : ""}</div></span >
      <div className="slide-boxHidden" style={{display: survol}}> <div className="text-onglet">{text}</div></div> 
    </div>
    );
  }
  function Home() {
    const navigate = useNavigate();
    const notifications = [
      {
        id: 1,
        sender: 'Admin',
        message: 'Donfack était absent Lundi',
        link: '#',
        linkText: '404 Error Room',
        avatar: {userp},
        isRead: false,
      },
      {
      id: 1,
      sender: 'Admin',
      message: 'Donfack était absent Lundi',
      link: '#',
      linkText: '404 Error Room',
      avatar: {userp},
      isRead: false,
    },

      // ... other notifications
    ];

    const [size,setSize]=useState("slidebar-small")
    const [viewLogo,setViewLogo]=useState("none")
    const [visible,setVisble]=useState(false)
    const [classIco,setClassIco]=useState("menu")
    const changeSize =()=>{
      if (size === "slidebar-small") {
        setSize("slidebar-large")
        setVisble(true)
        setViewLogo("block")
        setClassIco("none")
      } else {
        setSize("slidebar-small")
        setVisble(false)
        setViewLogo("none")
        setClassIco("menu")
      }
    }
  
    return (
        <>
        <div className={size} id="side-bar">
           <p align="center"> <div onClick={changeSize} id="chevron"><box-icon  size="ms" color="white" name={classIco}></box-icon></div></p> 
            <div style={{display:viewLogo}}>
                <div className='side-top'> 
               <img src={logo} alt="logo" className="logo"/>
                { /* <td><Onglet classIcon="" text="" view={visible} icoView="none"></Onglet></td>*/}
               <div onClick={changeSize} id="chevron"><box-icon color="white" name='menu-alt-right'></box-icon></div>
               </div> 
               <div className='name-login'>
                  <p className='user-mail'>User: </p>
                </div>
            </div>
            <div className='hid'>
              <Onglet classIcon="bx bx-home" text="accueil" view={visible} >accueil</Onglet>

              <Onglet classIcon="bx bx-bell" text="notifications" view={visible}>notifications</Onglet>
              <Onglet classIcon="bx bx-grid-alt" text="tontines" view={visible}>Liste des élèves</Onglet>
              <Onglet classIcon="bx bx-wallet" text="solde" view={visible}>Emploi de temps</Onglet> 
              <Onglet classIcon="bx bx-transfer-alt" text="transactions" view={visible}>Transactions</Onglet> 
              <Onglet classIcon="bx bx-cog" text="paramètres" view={visible}>parametre</Onglet>
              <Onglet classIcon="bx bx-plus" text="creer" view={visible}> notifier un parent </Onglet>
              <Onglet classIcon="bx bx-globe" text="rejoindre" view={visible}>ajouter un nouvel élève</Onglet>
              <div className="end">
                <Onglet  classIcon="bx bx-door-open" text="deconnexion" view={visible}>Deconnexion</Onglet>
              </div>
            </div>
        </div>
        <div className='center-side'>
          <div className='center-top'>
            <div className='notifs'> <Notification count={notifications.filter((n) => !n.isRead).length} notifications={notifications} /> </div>
  
          </div>
          <div className='center-center'>
            <Outlet/>
          </div>
        
        </div>
        </>
    );
  }

export default Home
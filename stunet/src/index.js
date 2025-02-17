import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NotificationsParents from './pages/NotificationsParents';
import MessagesParents from './pages/MessagesParent';
import SuiviParents from './pages/SuiviParents';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Accueill from './pages/accueil';
import './styles/accueil.css'
import Home from './pages/home';
import Login from './pages/Login';
import Gestionparent from './pages/Gestionparent';
import reportWebVitals from './reportWebVitals';


const route = createBrowserRouter([
  {
    path : "/",
    element : <Accueill/>
  },
  {
    path : "/login",
    element : <Login/>
  },
  {
    path: "/home",
    element: <Home/>,
    children: [
      {
        path: "/home/gestionparent",
        element: <Gestionparent/>,
        children: [
          {
            path: "/home/gestionparent/Notifications",
            element: <NotificationsParents/>
          },
          {
            path: "/home/gestionparent/Messages",
            element: <MessagesParents/>
          },
          {
            path: "/home/gestionparent/Assiduite",
            element: <SuiviParents/>
          }
        ]
      },
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

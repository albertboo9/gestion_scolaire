import { useState, useEffect } from "react"
import axios from "axios"
import "../styles/notificationsP.css"

const NotificationsParents = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/notifications?parentId=1")
      .then((response) => setNotifications(response.data))
      .catch((error) => console.error("Erreur lors du chargement des notifications :", error));
  }, []);

  return (
    <div className="notif">
      <h1>Notifications</h1>
      <ul className="notifications">
        {notifications.map((notification) => (
          <li key={notification.id}>
            <h3>{notification.title}</h3>
            <p>{notification.message}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NotificationsParents
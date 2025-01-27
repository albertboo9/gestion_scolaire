import { useState, useEffect } from "react"
import axios from "axios"
import "../styles/suiviP.css"

const SuiviParents = () => {
    const [attendance, setAttendance] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:3001/attendance?studentId=1")
        .then((response) => setAttendance(response.data))
        .catch((error) => console.error("Erreur lors du chargement de l'assiduité :", error));
    }, []);
  
    return (
      <div className="suiviP">
        <h1>Assiduité de l'enfant</h1>
        <ul>
          {attendance.map((record) => (
            <li key={record.id}>
            <h5> Date : {record.date}</h5>
            <h6> Statut : {record.status}</h6>
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default SuiviParents
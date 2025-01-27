import { useState, useEffect } from "react"
import axios from "axios"
import "../styles/messageP.css"

const MessagesParents = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [receiver, setReceiver] = useState("administration"); // Définit le destinataire par défaut

  useEffect(() => {
    // Charger les messages du parent depuis l'API
    axios
      .get("http://localhost:3001/messages?parentId=1")
      .then((response) => setMessages(response.data))
      .catch((error) =>
        console.error("Erreur lors du chargement des messages :", error)
      );
  }, []);

  const handleSend = () => {
    // Créer un nouvel objet message
    const message = {
      content: newMessage,
      sender: "parent",
      receiver: receiver,
      parentId: 1,
      timestamp: new Date().toISOString(), // Ajout de l'heure
    };

    // Envoi du message au backend
    axios
      .post("http://localhost:3001/messages", message)
      .then(() => {
        setMessages([...messages, message]); // Mettre à jour l'état local
        setNewMessage(""); // Réinitialiser le champ de texte
      })
      .catch((error) =>
        console.error("Erreur lors de l'envoi du message :", error)
      );
  };

  return (
    <div className="messagerie">
      <h1>Messagerie</h1>

      <div className="manipulationmessage">
        {/* Liste des messages */}
        <ul className="affichem">
          {messages.map((message, index) => (
            <li key={index} className="message">
              <strong>{message.sender} → {message.receiver} :</strong> {message.content}
              {/* <h6>{message.timestamp}</h6> */}
            </li>
          ))}
        </ul>

        <div className="envoiM">
          {/* Sélection du destinataire */}
          <label>
            Envoyer à :
            <select value={receiver} onChange={(e) => setReceiver(e.target.value)}>
              <option value="administration">Administration</option>
              <option value="enseignant">Enseignant</option>
            </select>
          </label>

          {/* Champ de texte pour écrire un message */}
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Écrivez un message..."
          />

          {/* Bouton pour envoyer un message */}
          <button onClick={handleSend}>Envoyer</button>
        </div>
      </div>
     
    </div>
  )
}
export default MessagesParents
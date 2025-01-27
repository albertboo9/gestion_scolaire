import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../styles/login.css';

// fonction de connexion 
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (sessionStorage.getItem("Utilisateurs")) {
      navigate("/home");
    }
  }, [navigate]);

  const { register, handleSubmit } = useForm();
  const [isSignUpClicked, setSignUpClicked] = useState(false);

  const handleSignUpClick = () => {
    setSignUpClicked(true);
  };

  const handleLoginClick = () => {
    setSignUpClicked(false);
  };

  const onSubmit = async (data) => {
    if (isSignUpClicked) {
      await handleSignup(data);
    } else {
      await handleLogin(data);
    }
  };

  const handleLogin = async (data) => {
    try {
      const response = await axios.get(`http://localhost:5000/users?email=${data.email}&password=${data.password}&role=${data.role}`);
      if (response.data.length > 0) {
        sessionStorage.setItem("Utilisateurs", JSON.stringify(response.data[0]));
        navigate("/home");
      } else {
        console.error("Login failed: Invalid credentials");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleSignup = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/users', { email: data.email, password: data.password, role: data.role });
      sessionStorage.setItem("Utilisateurs", JSON.stringify(response.data));
      navigate("/home");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div>
      <section className="user">
        <div className="user_options-container">
          <div className="user_options-text">
            <div className="user_options-unregistered">
              <h2 className="user_unregistered-title">Vous n'avez pas encore un compte Stunet?</h2>
              <p className="user_unregistered-text">Créez-en un ici</p>
              <button className="user_unregistered-signup" id="signup-button" onClick={handleSignUpClick}>S'inscrire</button>
            </div>
            <div className="user_options-registered">
              <h2 className="user_registered-title">Vous avez déjà un compte Stunet?</h2>
              <p className="user_registered-text">Connectez-vous ici</p>
              <button className="user_registered-login" id="login-button" onClick={handleLoginClick}>Se connecter</button>
            </div>
          </div>

          <div className={`user_options-forms ${isSignUpClicked ? 'bounceLeft' : 'bounceRight'}`} id="user_options-forms">
            <img src="./images/image.png" className="logo" alt="logo"></img>
            <div className={isSignUpClicked ? 'user_forms-signup' : "user_forms-login"}>
              <h2 className="forms_title">{isSignUpClicked ? 'S\'inscrire' : 'Se connecter'}</h2>
              <form className="forms_form" onSubmit={handleSubmit(onSubmit)}>
                <div className="forms_field">
                  <input
                    type="email"
                    placeholder="Email"
                    className="forms_field-input"
                    required
                    {...register("email", { required: "Veuillez entrer votre adresse email" })}
                  />
                </div>
                <div className="forms_field">
                  <input
                    type="password"
                    placeholder="Mot de passe"
                    className="forms_field-input"
                    required
                    {...register("password", { required: "Veuillez entrer votre mot de passe" })}
                  />
                </div>
                <div className="forms_field">
                  <select
                    className="forms_field-input"
                    required
                    {...register("role", { required: "Veuillez sélectionner votre rôle" })}
                  >
                    <option value="">Sélectionnez votre rôle</option>
                    <option value="enseignant">Enseignant</option>
                    <option value="parent">Parent d'élève</option>
                  </select>
                </div>
                <button type="submit" className="forms_buttons-action">{isSignUpClicked ? 'S\'inscrire' : 'Se connecter'}</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
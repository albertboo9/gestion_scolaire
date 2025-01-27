import React from 'react';
import { Link } from 'react-router-dom';

export default function Accueil() {
  return (
    <body>
      <header style={{ justifyContent: "space-between" }}>
        <a href="#" className="logo">
          <img alt="Stunet Logo" src="./images/log.png" />
        </a>

        <ul className="navbar">
          <li><a href="#home" className="active">Accueil</a></li>
          <li><a href="#about">À Propos</a></li>
          <li><a href="#contact">Contacts</a></li>
        </ul>
      </header>

      <section className="home" id="home">
        <div className="home-text">
          <h3>Bienvenue</h3>
          <h1>Sur le site de Stunet</h1>
          <p>
            Découvrez une nouvelle façon de gérer efficacement votre établissement scolaire avec Stunet.
          </p>
          <Link to="login" className="btn">Connexion</Link>

        </div>

        <div className="home-img">
          <img alt="Stunet" src="./images/image.png" />
        </div>
      </section>

      <section className="about" id="about">
        <section className="review" id="review">
          <div className="swiper-container review-slider" data-aos="zoom-in">
            <div className="swiper-wrapper">
              <div className="swiper-slide slide">
                <p>
                  Stunet est une plateforme de gestion des établissements scolaires. Elle offre des outils performants pour la gestion administrative et académique, garantissant l'efficacité et la transparence.
                </p>
              </div>
              <div className="swiper-slide slide">
                <h3>Personnalisez votre Établissement</h3>
                <p>
                  Créez et gérez les informations de votre établissement scolaire selon vos besoins, définissez des règles personnalisées et suivez facilement les activités académiques.
                </p>
              </div>

              <div className="swiper-slide slide">
                <h3>Transparence Totale</h3>
                <p>
                  Chaque transaction et activité est enregistrée de manière immuable, assurant une transparence totale et la confiance entre les administrateurs, enseignants et parents.
                </p>
              </div>

              <div className="swiper-slide slide">
                <h3>Historique des Activités</h3>
                <p>
                  Consultez l'historique complet des activités académiques et financières, accédez aux statistiques et gardez le contrôle sur la gestion de votre établissement scolaire.
                </p>
              </div>

              <div className="swiper-slide slide">
                <h3>Simplicité de Gestion</h3>
                <p>
                  Simplifiez la gestion de votre établissement en automatisant les processus administratifs, les paiements et les notifications.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section style={{ backgroundColor: "#6ec0f0c0" }} className="contact" id="contact">
        <div className="contact-box address">
          <h3>Réseaux sociaux</h3>
          <span><box-icon type='logo' size="md" name='facebook-circle'></box-icon> Stunet</span>
          <span><box-icon type='logo' size="md" name='tiktok'></box-icon> Stunet</span>
          <span><box-icon name='instagram' size="md" type="logo"></box-icon> Stunet</span>
          <span><box-icon name='whatsapp' size="md" type="logo"></box-icon> +237 695 52 32 15</span>
          <span><box-icon name='twitter' size="md" type="logo"></box-icon> Stunet</span>
        </div>

        <div className="contact-box">
          <li><a href="#home" className="active">Accueil</a></li>
          <li><a href="#about">À Propos</a></li>
          <li><a href="#contact">Contacts</a></li>
        </div>

        <div className="contact-box address">
          <h3>Contacts</h3>
          <span><box-icon type='solid' color="#004aad" name='map'></box-icon> Douala-Cameroun</span>
          <span><box-icon type='logo' color="#004aad" name='gmail'></box-icon> contact@stunet.com</span>
          <span><box-icon name='phone' type="solid" color="#004aad"></box-icon> +237 6 55 55 55 55</span>
        </div>
      </section>

      <div className="end-text">
        <p>© Stunet. Tous droits réservés.</p>
      </div>
    </body>
  );
}
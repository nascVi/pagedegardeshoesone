import React from 'react';
import Madinina from './IMG_5225.JPG';
import Mail from './e-mail_1f4e7.png';

import Fade from 'react-reveal/Fade'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h2 className="Greetings"> Bel Bonjou, Bienvenue, Welcome  sur ShoesOne972.com   </h2>
        <Fade delay={500}>

        <img src={Madinina} className="App-image" alt="Madinina" />
        </Fade>
        <h3 className="The-what">
          SHOESONE972 est une boutique en ligne spécialisée de déstockage de sneakers en Martinique.        
        </h3>

        <h5 className="Formule-1">Nous proposons une sélection des meilleures marques 
        de sneakers . Tous nos articles sont 100% AUTHENTIQUES et sont prêts 
        à l’envoi avec des stocks en Martinique et en France métropolitaine.
        </h5>

        <h3>
        NOTRE ÉQUIPE
        </h3>
        <p className="Formule-1">
        Nous sommes des passionnés de sneakers et nous avons la volonté de vous satisfaire.
        </p>

        <h3>
        BOUTIQUE
        </h3>
        <p className="Formule-1">
        Le showROOM est situé au <br /><code /** Lien vers map */>66 Boulevard Désire Jox</code><br /> 97230 SAINTE-MARIE
        </p>

        <h3>NOUS CONTACTER</h3>
        <p className="Formule-1">
        Pour toute questions n’hésitez par à nous écrire par mail <br />
        <img src={Mail} className="Mail-logo" alt="mailLo" />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          contact@shoesone972.com 
        </a>
        <h4>

        Nou Konten Wé ZOT
        </h4>
      </header>
    </div>
  );
}

export default App;

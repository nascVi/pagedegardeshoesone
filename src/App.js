import React from 'react';
import WLo from './WLo.png'
import Logo from './Flogo.1a1db7cf.png'
import Madinina from './IMG_5225.JPG';
import Mail from './e-mail_1f4e7.png';

import Fade from 'react-reveal/Fade'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Fade top ease delay={100}>
      <img src={WLo} className="App-White-Lo" alt="WLogo" />
      </Fade>
      <img src={Madinina} className="App-image" alt="Madinina" />
      <span className="Large-Screen-header" >
        The sneaker shop 
        <br />👟
      </span>


      <Fade bottom ease delay={800}> 
      <img src={Logo} className="App-Logo" alt="Logo" />
      </Fade>
        
        <h2 className="Greetings"> Bel Bonjou, Bienvenue, Welcome  sur ShoesOne972.com   </h2>
        
        <Fade delay={500}>
        </Fade>
        <h4 className="The-what">
          SHOESONE972        
        </h4>

        <h5 className="Formule-1">
          est une boutique en ligne spécialisée de déstockage de sneakers en Martinique.
        </h5>

        <h5 className="Formule-1">Nous proposons une sélection des meilleures marques 
        de sneakers . Tous nos articles sont 100% AUTHENTIQUES et sont prêts 
        à l’envoi avec des stocks en Martinique et en France métropolitaine.
        </h5>

        <h4>
        NOTRE ÉQUIPE
        </h4>
        <p className="Formule-1">
        Nous sommes des passionnés de sneakers et nous avons la volonté de vous satisfaire.
        </p>

        <h4>
        BOUTIQUE
        </h4>
        <p className="Formule-1">
        Le showROOM est situé au <br /><code /** Lien vers map */>66 Boulevard Désire Jox</code><br /> 97230 SAINTE-MARIE
        </p>

        <h4>NOUS CONTACTER</h4>
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

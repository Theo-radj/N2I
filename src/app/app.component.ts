import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav>
    <a href="./index.html">Home</a>
    <a href="https://www.raceforwater.org/fr/">Race for Water</a>
    <a href="mailto:dinesh.radjou@etu.univ-amu.fr">Contact</a>
  </nav>
  
  <h1> L'eau, notre avenir </h1>
  <p>L'eau est une de nos ressources les plus vitales, préservons-la.</p>
  <br><br>
  <p>Cliquez sur différents parties du corps de la silhouette pour retrouver le parallele associé :</p>
  <br>
  <section>
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/9/90/Human_body_template.png" 
      alt="Human body" 
      usemap="#workmap" 
      class="map-image">


    <map name="workmap">
      <area shape="rect" coords="150,10,200,40" alt="Cerveau" href="https://fr.wikipedia.org/wiki/%C3%89cosyst%C3%A8me_aquatique">
      <area shape="rect" coords="120,70,200,170" alt="Poumons" href="https://fr.wikipedia.org/wiki/R%C3%A9cif_corallien">
      <area shape="rect" coords="100,190,130,230" alt="Main Droite" href="https://fr.wikipedia.org/wiki/Vague">
      <area shape="rect" coords="260,190,280,230" alt="Main Gauche" href="https://fr.wikipedia.org/wiki/Vague">
      
    </map>

    <article>
      <p> Le cerveau humain,<br> essentiel au fonctionnement du corps, peut être comparé à l'océan. Tout comme le cerveau régule les fonctions vitales, l'océan, avec ses écosystèmes interconnectés, forme un système harmonieux et équilibré.</p>
      <p> Le poumon,<br> essentiel à notre respiration, échange les gaz vitaux pour la vie. De manière similaire, les récifs coralliens jouent un rôle crucial en filtrant l'eau et produisant de l'oxygène, contribuant ainsi à l'équilibre des océans.</p>
      <p> Les mains, <br> symbolisant un mouvement continu du corps, permettent une interaction fluide avec notre environnement, tout comme les vagues qui, inlassablement, façonnent et modèlent l'océan.</p>
   
      </article>  
  </section>
  
  <footer>
    <p>Ce site a été réalisé par les membres de l'équipe de School with my bois à l'occasion de la nuit de l'info.</p>
    <p>Les images utilisées sont libres de droits exclusivement.</p>
    <p>© RADJOU Dinesh et GRIGUER Nathan</p>
  </footer>
  `,
  styles: ` 
    area{background-color: blue;}
    h1, p { 
      display: flex;  
      justify-content: center; 
      opacity: 1; 
    }
    nav { 
      display: flex; 
      justify-content: space-around; 
      background-color: black; 
      opacity: 1; 
      color: white; 
      position: fixed; 
      top: 0; 
      width: 100%;
    }
    footer { 
      display: flex; 
      justify-content: space-evenly;
      background-color: black;  
      flex-direction: column;  
      color: white; 
      height: 10%; 
    }
    a { 
      color: white; 
    }
    section { 
      display: flex; 
      flex-direction: row; 
      justify-content: center;
      flex-wrap:wrap;
    }
    article { 
      width: 40%; 
    }

    img.map-image { 
      width: 400px; 
      height: 400px; 
      object-fit: cover; 
    }
  `
})
export class AppComponent {
  title = 'N2I';
}
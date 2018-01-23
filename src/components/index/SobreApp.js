'use strict';

import React from 'react';
import {render} from 'react-dom';

class SobreApp extends React.Component {
  render () {
    return (
      <section id="about" className="section-padding text-justify">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="ser-title">Sobre WAC3</h2>
              <hr className="botm-line"></hr>
            </div>
            <div className="col-md-12 col-sm-12">
              <p>El gluten es una proteína que se encuentra en el trigo, la cebada, el centeno y a veces la avena, ingredientes que con frecuencia se utilizan para hacer panes, pastas y postres.</p>
              <p>Clásicamente se sabe que cuando una persona celíaca come o bebe algo con gluten, el sistema inmunitario de su cuerpo ataca el interior del intestino delgado. El daño provocado por este ataque impide que el cuerpo absorba los nutrientes necesarios y si no se trata, la enfermedad celíaca puede provocar malnutrición, depresión, ansiedad, anemia o debilidad en los huesos. También puede retrasar el crecimiento en los niños.</p>
              <p>La enfermedad celíaca es difícil de diagnosticar, pues los síntomas son similares a los de otras enfermedades. Para diagnosticar la enfermedad además de los criterios clínicos, disponemos de estudios serológicos (Ac Anti gliadina, Anti Endomisio, Ac Anti-transglutaminasa) y de la biopsia intestinal demostrando el aplanamiento de las vellosidades intestinales. No obstante estos estudios tienen en mi experiencia alto índice de falsos negativos. A partir de la aplicación de métodos genéticos estamos replanteándonos en conjunto esta patología.</p>
              <p>Por el momento, el único tratamiento efectivo es llevar una dieta 100% libre de gluten para toda la vida. Al mismo tiempo es la forma de diagnóstico definitiva.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SobreApp;

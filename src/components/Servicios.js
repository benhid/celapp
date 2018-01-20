'use strict';

import React from 'react';
import {render} from 'react-dom';
import Menu from './Menu'


class Servicios extends React.Component {
  render () {
    return (
    <section id="service" className="section-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-4">
          <h2 className="ser-title">Servicios</h2>
          <hr className="botm-line"/>
          <p>A continuación podrán acceder a los dos tipos de encuestas, una para las personas que ya han sido diagnosticadas
          con Celiaquía y otra para aquellos que quiere saber si tienen riesgo de padecerla</p>
        </div>
        <div className="col-md-4 col-sm-4">
          <div className="service-info ">
            <div className="icon">
              <a className="btn btn-circle js-scroll-trigger" href="react.html">
              	<img src="img/TrigoNoSmall.png" className="img-responsive"/>
              </a>
            </div>
            <div className="icon-info">
              <h4>Test Diagnosticados</h4>
              <p>Realice este test si usted ya padece celiaquía</p>
            </div>
            </div>
          </div>
          <div className="service-info">
            <div className="icon">
              <a className="btn btn-circle js-scroll-trigger"  href="react.html">
              	<img src="img/TrigoSmall.png" className="img-responsive"/>
              </a>
            </div>
            <div className="icon-info">
              <h4>Test No Diagnosticados</h4>
              <p>Realice este test si usted desea saber si padece Celiaquía</p>
            </div>
          </div>
            </div>
            </div>
        
        </section>
    );
  }
}

export default Servicios;

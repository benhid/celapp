'use strict';

import React from 'react';
import {render} from 'react-dom';

class Oficina extends React.Component {
  render () {
    return (
      <div className="medi-info">
        <h3>{this.props.name}</h3>
          <strong>Información:</strong>
          <p>{this.props.telefono}</p>
          <p>{this.props.correo}</p>
          <p>{this.props.dir1}</p>
          <p>{this.props.dir2}</p>
      </div>
    );
  }
}

class Oficinas extends React.Component {
  render () {
    return (
      <section id="cta-1" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="schedule-tab">
              <div className="col-md-4 col-sm-4 bor-left">
                <div className="mt-boxy-color"></div>
                <Oficina name="HOSPITAL BANÚS (Grupo Humaline)"
                  telefono="T. (+34) 951 055 951 - 636 123 350"
                  correo="infobanus@humanline.es"
                  dir1="Ctra. Nacional 340 Km 175 (salida desde autovia nº 175)"
                  dir2="29600 Puerto Banús. Marbella (Málaga)"/>
              </div>
              <div className="col-md-4 col-sm-4">
                <Oficina name="HOSPITAL DE DÍA HUMANLINE SOTOGRANDE"
                  telefono="T. (+34) 956 785 333"
                  correo="info@humanline.es"
                  dir1="Autovia A7 salida 133. Centro comercial Sotomarket."
                  dir2="11310 Sotogrande. San Roque (Cádiz)"/>
              </div>
              <div className="col-md-4 col-sm-4 mt-boxy-3">
                <div className="mt-boxy-color"></div>
                <div className="time-info">
                  <h3>Horario general</h3>
                  <table style={{ margin: '8px 0px 0px', border: 1 }}>
                    <tbody>
                      <tr>
                        <td>Lunes - Viernes</td>
                        <td>8.00 - 17.00</td>
                      </tr>
                      <tr>
                        <td>Sábados</td>
                        <td>9.30 - 17.30</td>
                      </tr>
                      <tr>
                        <td>Domingo</td>
                        <td>9.30 - 15.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Oficinas;

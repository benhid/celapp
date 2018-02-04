'use strict';

import React from 'react';
import {render} from 'react-dom';

class Panel extends React.Component {
  render () {
    return (
      <section id="panel" className="section-padding text-justify">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="ser-title">Panel de administración:</h2>
              <hr className="botm-line"></hr>
            </div>
            <div className="col-md-12 col-sm-12">

              <p>Total de encuestas de celíacos confirmados almacenadas: { this.props.totalSoyCeliaco }</p>
              <div className="btn-group btn-group-sm">
                <a type="button" className="btn btn-primary" href="/soyceliaco/all">OBTENER RESULTADOS</a>
                <a type="button" className="btn btn-primary" href="#">EDITAR PREGUNTAS</a>
              </div>
              <p>&nbsp;</p>
              <p>Total de encuestas de celíacos no confirmados almacenadas: { this.props.totalNoSoyCeliaco }</p>
              <div className="btn-group btn-group-sm">
                <a type="button" className="btn btn-primary" href="#">OBTENER RESULTADOS</a>
                <a type="button" className="btn btn-primary" href="#">EDITAR PREGUNTAS</a>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Panel;

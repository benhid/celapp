'use strict';

import React from 'react';
import {render} from 'react-dom';
import Cabecera from './adminpanel/Cabecera'
import tableify from 'tableify'

class Formulario extends React.Component {
  render () {
    var datos = this.props.datos;
    var tabla = "";

    for (var i = 0; i < datos.length; i++) {
      tabla += `<h3>Formulario ${i+1}:</h3>`;
      tabla += `<table class=\"table table-striped table-sm\">`;
      tabla += `<thead><tr><th>Pregunta</th><th>Respuesta</th></tr></thead>`;
      tabla += `<tbody>`

      datos[i].respuestas.forEach(function(preg) {
        tabla += `<tr><td>${preg.pregunta}</td><td>${preg.respuesta}</td></tr>`;
      });

      tabla += `</tbody></table>`;
    }

    return (
      <div>
        <Cabecera/>
        <section id="formulario" className="section-padding text-justify">
         <div className="container">
           <div className="row">
             <div className="col-md-12">
               <h2 className="ser-title">Formularios:</h2>
               <hr className="botm-line"></hr>
             </div>
             <div className="col-md-12 col-sm-12">
               <div dangerouslySetInnerHTML={{__html: tabla}}>
               </div>
             </div>
           </div>
         </div>
        </section>
      </div>
    );
  }
}

export default Formulario;

'use strict';

import React from 'react';
import {render} from 'react-dom';
import Cabecera from './soyceliaco/Cabecera'
import FormularioCeliacos from './soyceliaco/FormularioCeliacos'

class SoyCeliaco extends React.Component {
  render () {
    return (
      <div>
        <Cabecera/>
        <FormularioCeliacos/>

        {
          this.props.showModal ?
            <div id="modal" className="modal fade" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">¡Gracias!</h4>
                  </div>
                  <div className="modal-body">
                    <p>Formulario enviado con éxito</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
                  </div>
                </div>

              </div>
            </div>
            :
            ``
        }
      </div>
    );
  }
}

export default SoyCeliaco;

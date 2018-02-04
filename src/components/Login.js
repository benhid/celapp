'use strict';

import React from 'react';
import {render} from 'react-dom';
import Cabecera from './login/Cabecera'
import FormularioLogin from './login/FormularioLogin'

class Login extends React.Component {
  render () {
    return (
      <div>
        <Cabecera/>
        <FormularioLogin/>

        {
          this.props.showModal ?
            <div id="modal" className="modal fade" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">Fallo de identificación</h4>
                  </div>
                  <div className="modal-body">
                    <p>El nombre de usuario o contraseña proporcionados no es correcto.</p>
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

export default Login;

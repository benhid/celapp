'use strict';

import React from 'react';
import {render} from 'react-dom';

class Login extends React.Component {
  render () {
    return (
      <section id="soyceliaco" className="section-padding text-justify">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="ser-title">Introduzca sus credenciales:</h2>
              <hr className="botm-line"></hr>
            </div>
            <div className="col-md-12 col-sm-12">

              <form action="/login" method="get">
               <div className="form-group">
                 <label htmlFor="username">Nombre de usuario:</label>
                 <input name="username" type="user" className="form-control" id="username"></input>
               </div>
               <div className="form-group">
                 <label htmlFor="password">Contraseña:</label>
                 <input name="password" type="password" className="form-control" id="password"></input>
               </div>
               <button type="submit" className="btn btn-default">Enviar</button>
              </form>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;

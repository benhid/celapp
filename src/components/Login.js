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
      </div>
    );
  }
}

export default Login;

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
      </div>
    );
  }
}

export default SoyCeliaco;

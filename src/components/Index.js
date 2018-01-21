'use strict';

import React from 'react';
import {render} from 'react-dom';
import Cabecera from './index/Cabecera'
import Equipo from './index/Equipo'
import FormularioContacto from './index/FormularioContacto'
import Servicios from './index/Servicios'
import Oficinas from './index/Oficinas'
import SobreApp from './index/SobreApp'

class Index extends React.Component {
  render () {
    return (
      <div>
        <Cabecera/>
        <Servicios/>
        <Oficinas/>
        <SobreApp/>
        <Equipo/>
        <FormularioContacto/>
      </div>
    );
  }
}

export default Index;

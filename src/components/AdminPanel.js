'use strict';

import React from 'react';
import {render} from 'react-dom';
import Cabecera from './adminpanel/Cabecera'
import FormularioAdmin from './adminpanel/FormularioAdmin'

class AdminPanel extends React.Component {
  render () {
    return (
      <div>
        <Cabecera/>
        <FormularioAdmin/>
      </div>
    );
  }
}

export default AdminPanel;

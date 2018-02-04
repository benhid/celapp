'use strict';

import React from 'react';
import {render} from 'react-dom';
import Cabecera from './adminpanel/Cabecera'
import Panel from './adminpanel/Panel'

class AdminPanel extends React.Component {
  render () {
    return (
      <div>
        <Cabecera/>
        <Panel totalSoyCeliaco={this.props.totalSoyCeliaco}/>
      </div>
    );
  }
}

export default AdminPanel;

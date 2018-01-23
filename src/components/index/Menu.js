'use strict';

import React from 'react';
import {render} from 'react-dom';

class Section extends React.Component {
  render () {
    return (
      <li className=""><a href={ `#${this.props.href}` }>{this.props.name}</a></li>
    );
  }
}

class Menu extends React.Component {
  render () {
    return (
      <ul className="nav navbar-nav">
        <Section name="Inicio" href="banner"/>
        <Section name="Información" href="about"/>
		<Section name="Servicios" href="service"/>
        <Section name="Contacto" href="contact"/>
      </ul>
    );
  }
}

export default Menu;

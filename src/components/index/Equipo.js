'use strict';

import React from 'react';
import {render} from 'react-dom';

class Miembro extends React.Component {
  render () {
    return (
      <div className="thumbnail">
        <img src={ `${this.props.img}` } alt="..." className="team-img"></img>
        <div className="caption">
          <h3>{this.props.name}</h3>
          <p>Doctor</p>
          <ul className="list-inline">
            <li><a href="https://www.facebook.com/carlos.desolaearle?lst=1755271254%3A546449003%3A1516708830"><i className="fa fa-facebook"></i></a></li>
            <li><a href="https://www.linkedin.com/in/carlos-miguel-de-sola-earle-723a622a/"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

class Equipo extends React.Component {
  render () {
    return (
      <section id="doctor-team" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="ser-title">SOBRE MI</h2>
              <hr className="botm-line"></hr>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-6">
            <Miembro name="Carlos De Sola Earle"
              img="img/Carlos.jpg"
              facebook="#"
              twitter="#"/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Equipo;

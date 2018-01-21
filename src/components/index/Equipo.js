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
            <li><a href={ `#${this.props.facebook}` }><i className="fa fa-facebook"></i></a></li>
            <li><a href={ `#${this.props.twitter}` }><i className="fa fa-twitter"></i></a></li>
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
              <h2 className="ser-title">Nuestro equipo</h2>
              <hr className="botm-line"></hr>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-6">
              <Miembro name="Jessica Wall"
                img="img/doctor1.jpg"
                facebook="#"
                twitter="#"/>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-6">
            <Miembro name="Jessica Wall"
              img="img/doctor2.jpg"
              facebook="#"
              twitter="#"/>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-6">
            <Miembro name="Jessica Wall"
              img="img/doctor3.jpg"
              facebook="#"
              twitter="#"/>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-6">
            <Miembro name="Jessica Wall"
              img="img/doctor4.jpg"
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

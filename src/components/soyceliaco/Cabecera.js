'use strict';

import React from 'react';
import {render} from 'react-dom';

class Cabecera extends React.Component {
  render () {
    return (
        <section id="banner" className="banner">
        <div className="bg-color">
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div className="col-md-12">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                          </button>
                  <a className="navbar-brand" href="/"><img src="img/logo.png" className="img-responsive" style={{width: 140, marginTop: -16}}/></a>
                </div>
              </div>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="banner-info">
                <div className="banner-logo text-center">
                  <img src="img/logo.png" className="img-responsive"/>
                </div>
                <div className="banner-text text-center">
                  <h1 className="white">Plataforma para diagnosticos de celiaquía</h1>
                  <p className="intro-text">
                    A continuación va a relizar...
                  </p>
                </div>
                <div className="overlay-detail text-center">
                  <a href="#"><i className="fa fa-angle-down"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cabecera;

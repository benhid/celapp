'use strict';

import React from 'react';
import {render} from 'react-dom';

class FormularioContacto extends React.Component {
  render () {
    return (
      <section id="contact" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="ser-title">¡Contáctanos!</h2>
              <hr className="botm-line"></hr>
            </div>
            <div className="col-md-4 col-sm-4">
              <h3>Dirección</h3>
              <div className="space"></div>
              <p><i className="fa fa-envelope-o fa-fw pull-left fa-2x"></i>infobanus@humanline.es</p>
              <div className="space"></div>
              <p><i className="fa fa-phone fa-fw pull-left fa-2x"></i>+34 952 90 26 30</p>
            </div>
            <div className="col-md-8 col-sm-8 marb20">
              <div className="contact-info">
                <h3 className="cnt-ttl">Formulario de contacto</h3>
                <div className="space"></div>
                <div id="sendmessage">Your message has been sent. Thank you!</div>
                <div id="errormessage"></div>
                <form action="" method="post" role="form" className="contactForm">
                  <div className="form-group">
                    <input type="text" name="name" className="form-control br-radius-zero" id="name" placeholder="Tu Nombre" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validation"></div>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control br-radius-zero" name="email" id="email" placeholder="Tu correo" data-rule="email" data-msg="Please enter a valid email" />
                    <div className="validation"></div>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control br-radius-zero" name="subject" id="subject" placeholder="Asunto" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                    <div className="validation"></div>
                  </div>
                  <div className="form-group">
                    <textarea className="form-control br-radius-zero" name="message" rows="5" data-rule="required" data-msg="Motivo de Consulta" placeholder="Mensaje"></textarea>
                    <div className="validation"></div>
                  </div>

                  <div className="form-action">
                    <button type="submit" className="btn btn-form">Enviar Mensaje</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FormularioContacto;

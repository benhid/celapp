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
            <div className="col-md-8">
            <p>Nacido en La Línea de la Concepción en 1964, estudio en el colegio Huerta Fava y en el Instituto Menéndez Tolosa.</p>
            <p>Licienciado en Medicina y Cirugía por la Facultad de Cádiz (1982-88), obteniendo el Grado de Licenciado con Sobresaliente. Especialización vía MIR en Medicina del Aparato Digestivo en la Ciudad Sanitaria Virgen de las Nieves de Granada entre 1989-93.</p>
            <p>Es Doctor en Medicina y Cirugía por la Universidad de Granada con la calificación "Cum Laude". Su tesis doctoral versó sobre pacientes con enfermedad de Crohn y colitis ulcerosa.</p>
            <p>Ha llevado a cabo una intensa actividad como autor de un gran número de publicaciones, artículos científicos, ponencias y participaciones en congresos médicos. Es considerado un experto en enfermedades inflamatorias intestinales, a las que se viene dedicando desde hace 20 años. Se ha dedicado además al estudio de las enfermedades hepáticas y a la endoscopia digestiva.
            Ha trabajado como Médico de familia, del que posee título, como pediatra, Especialista en Aparato Digestivo entre 1993 y 2005, ha sido Director Médico de USP Hospital de Marbella, Jefe de Servicio de Aparato Digestivo, y Director Gerente en dicho hospital. Actualmente ejerce como Médico especialista en Medicina del Aparato Digestivo y es Presidente del Grupo Hospitalario Humanline.</p>

            </div>

          </div>
        </div>
      </section>

    );
  }
}

export default Equipo;

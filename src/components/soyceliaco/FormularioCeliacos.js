'use strict';

import React from 'react';
import {render} from 'react-dom';
import Form from "react-jsonschema-form";
import { type } from 'os';


var celiacSchemaQuestions = require('../../data/celiacQuestions.js'); 

var ident = [];
for (var a=0; a< celiacSchemaQuestions.SetQuestion.length; a++){
  var SetPreguntas = celiacSchemaQuestions.SetQuestion; 
  ident.push(<h3>{SetPreguntas[a].headQuestions}</h3>);

  for (var i=0; i < SetPreguntas[a].preguntas.length; i++) {
    var Pregunta = SetPreguntas[a].preguntas[i];
    if(Pregunta.type=="desplegable"){
      var options = [];
      
      for(var j=0; j<Pregunta.enum.length; j++){
        options.push(<option value={Pregunta.enum[j]}>{Pregunta.enum[j]}</option>);
      }
      ident.push(
        <div className="form-group">
        <label htmlFor="selectioninput">{Pregunta.pregunta}</label>
        <select id="selectioninput" name={Pregunta.pregunta} className="form-control">
          {options}
        </select>
       </div>
       );     
    }else if(Pregunta.type=="libre") {
     ident.push(
     <div className="form-group">
     <label htmlFor="textinput">{Pregunta.pregunta}</label>
     <input id="textinput" name={Pregunta.pregunta} type="text" className="form-control" placeholder="Rellename"></input>
   </div>);
    }else if(Pregunta.type=="checkbox"){
      var options = [];
      for(var j=0; j<Pregunta.enum.length; j++){
        options.push(
        <div>
        <label class="form-check-label" htmlfor="inlineCheckbox1">{Pregunta.enum[j]}</label>
        <input class="form-check-input" name={Pregunta.pregunta} type="radio" id="blankCheckbox" value={Pregunta.enum[j]} ></input>   
        </div>);
      }
      ident.push(<div class="form-check form-check-inline">
                  <p>{Pregunta.pregunta}</p>
                  {options}
                </div>);
    }else if(Pregunta.type == "date"){
      ident.push(<div className="form-group">
                    <label htmlFor="example-date-input">{Pregunta.pregunta}</label>
                    <input id="example-date-input" name={Pregunta.pregunta} type="date" className="form-control" ></input>
                  </div>);
    }
  }
}


class QuestionsSet extends React.Component {
  render () {
    return (
      <section id="soyceliaco" className="section-padding text-justify">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="ser-title">Realizar cuestionario:</h2>
              <hr className="botm-line"></hr>
            </div>
            <div className="col-md-12 col-sm-12">

              <form method="post" action="/soyceliaco">
                {ident}
                <input type="submit" value="Submit" className="btn btn-default"></input>
              </form>
              
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default QuestionsSet;

'use strict';

import React from 'react';
import {render} from 'react-dom';
import Form from "react-jsonschema-form";

const schemaQuestions = require('../../data/SoyCeliacoQuestions.js');
const onSubmit = ({formData}) => console.log("Data submitted: ",  formData);
const onError = (errors) => console.log("I have", errors.length, "errors to fix");

class QuestionsSet extends React.Component {
  onSubmit(event){
    event.preventDefault();
    console.log("hola");
  };

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
              <Form schema={schemaQuestions}
                    onSubmit={this.onSubmit} >
                <div>
                  <button type="submit" className="btn btn-default">Enviar</button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default QuestionsSet;

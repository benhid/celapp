'use strict';

import React from 'react';
import {render} from 'react-dom';
import Form from "react-jsonschema-form";

var schema = require('../../data/FormQuestions.js');
const log = (type) => console.log.bind(console, type);

class QuestionsSet extends React.Component {
  handleForm(formData){
    $.ajax({
      url: '/soyceliaco',
      dataType: 'json',
      type: 'POST',
      data: formData
    });
  }

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
              <Form schema={schema}
                    onChange={log("changed")}
                    onSubmit={this.handleForm}
                    onError={log("errors")} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default QuestionsSet;

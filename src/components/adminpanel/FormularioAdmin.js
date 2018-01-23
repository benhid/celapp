'use strict';

import React from 'react';
import {render} from 'react-dom';
import Form from "react-jsonschema-form";

const schema = {
  title: "Formulario Celiacos",
  type: "object",
  required: ["title"],
  properties: {
    title: {type: "string", title: "Eres celiaco?", default: "Ni puta idea"},
    done: {type: "boolean", title: "Ya has terminado?", default: false}
  }
};

const log = (type) => console.log.bind(console, type);

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
              <Form schema={schema}
                    onChange={log("changed")}
                    onSubmit={log("submitted")}
                    onError={log("errors")} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default QuestionsSet;

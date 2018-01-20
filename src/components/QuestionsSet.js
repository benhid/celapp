'use strict';
//Dependencies
import React from 'react';
import {render} from 'react-dom';
import Form from "react-jsonschema-form";

//Components
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
      <div>
        <Form schema={schema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")} />
      </div>
    );
  }
}

export default QuestionsSet;

'use strict';

import React from 'react';
import {render} from 'react-dom';
import Form from "react-jsonschema-form";

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

                <div className="form-group">
                  <label htmlFor="textinput">Input:</label>
                  <input id="textinput" name="questionA" type="text" className="form-control" placeholder="Enter some text"></input>
                </div>

                <div className="form-group">
                 <label htmlFor="selectioninput">Select list:</label>
                 <select id="selectioninput" name="questionB" className="form-control">
                   <option value="resB1">1</option>
                   <option value="resB2">2</option>
                   <option value="resB3">3</option>
                   <option value="resB4">4</option>
                 </select>
                </div>

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

import React from 'react';
import {render} from 'react-dom';
import ExampleComponent from './ExampleComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React Project!! </p>
        <ExampleComponent />
      </div>
    );
  }
}

export default App;

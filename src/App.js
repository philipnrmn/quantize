import React, { Component } from 'react';

import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/github';

import {ctom} from './convert';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      chronos: {},
      metronome: {}
    };
    this.updateChronosConfig = this.updateChronosConfig.bind(this);
    this.updateMetronomeConfig = this.updateMetronomeConfig.bind(this);
  }

  updateChronosConfig(config) {
    try {
      const obj = JSON.parse(config);
      this.setState({
        chronos: obj,
        metronome: ctom(obj)
      });
    }
    catch (e) {}
  }

  updateMetronomeConfig(config) {
    console.log(config);
  }

  prettyPrint(obj) {
    return JSON.stringify(obj, null, 2);
  }

  render() {
    const {chronos, metronome} = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Quantize: Chronos -> Metronome</h2>
        </div>
        <div className="App-body">
          <div className="App-column">
            <h3 className="App-column-header">
              Chronos Config
            </h3>
            <AceEditor 
              mode="json"
              name="chronos"
              onChange={this.updateChronosConfig}
              tabSize={2}
              theme="github"
              value={this.prettyPrint(chronos)}
              width="100%" />
          </div>
          <div className="App-column">
            <h3 className="App-column-header">
              Metronome Config
            </h3>
            <AceEditor 
              mode="json"
              name="metronome"
              onChange={this.updateMetronomeConfig}
              tabSize={2}
              theme="github"
              value={this.prettyPrint(metronome)}
              width="100%" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

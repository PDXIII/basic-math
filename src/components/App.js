import React, { Component } from "react";
import _ from "lodash";
import api from "../utils/api";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      problems: {
        all: [],
        additions: [],
        substractions: [],
        multiplications: [],
        divisions: []
      },
      answers: {
        right: [],
        wrong: []
      }
    };
  }

  componentWillMount() {
    api.get.then(response => {
      this.setState({
        problems: {
          all: response.all,
          additions: response.additions,
          substractions: response.substractions,
          multiplications: response.multiplications,
          divisions: response.divisions
        }
      });
    });
  }

  randomProblem = arr => {
    return arr[_.random(0, arr.length)];
  };

  render() {
    return (
      <div className="App">
        <header className="w-100 bg-yellow pa4">
          <h1 className="f1 ma0 tc">Welcome to Basic Math</h1>
        </header>
        <div className="stage flex flex-column ">
          <div className="status measure center pa4">
            {this.state.problems.additions.length} <br />
            {this.state.problems.substractions.length} <br />
            {this.state.problems.multiplications.length} <br />
            {this.state.problems.divisions.length} <br />
          </div>
          <div className="measure center pa4">
            {JSON.stringify(this.randomProblem(this.state.problems.divisions))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

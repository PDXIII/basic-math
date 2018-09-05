import React, { Component } from "react";
import _ from "lodash";

import api from "./utils/api";

// MUI-next components
import Reboot from 'material-ui/Reboot';
import Typography from 'material-ui/Typography';


// own components
import BasicMathTheme from "./hoc/BasicMathTheme";
import MathQuestion from "./ui/MathQuestion/MathQuestion";
import Score from "./ui/Score/Score";

class App extends Component {
  constructor(props) {
    super(props); 

    this.state = {
      problems: {
        all: [],
        additions: [],
        substractions: [],
        multiplications: [],
        divisions: [],
        current: {}
      },
      answers: [],
      currentProblem: {}
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
        },
        currentProblem: this.randomProblem(response.all)
      });
    });
  }

  randomProblem = arr => {
    return arr[_.random(0, arr.length)];
  };

  updateCurrentProblem = () => {
    this.setState({
      currentProblem: this.randomProblem(this.state.problems.all)
    });
  };

  rightOrWrong = answer => {
    const currentProblem = this.state.currentProblem;
    const answers = this.state.answers;
    currentProblem.answer = answer;
    answers.push(currentProblem);
    this.setState({
      answers: answers
    });

    this.updateCurrentProblem();
  };

  render() {
    return (
      <div className="App">
        <Reboot/>
        <BasicMathTheme>
          <header className="w-100 bg-yellow pa4">
            <Typography type="display1">
              Welcome to Basic Math
            </Typography>
          </header>
          <div className="stage flex flex-column ">
            <div className="measure center pa4">
              <MathQuestion
                problem={this.state.currentProblem}
                rightOrWrong={this.rightOrWrong}
              />
            </div>
            <div className="status measure center pa4">
              <Score data={this.state.answers} />
            </div>
          </div>
        </BasicMathTheme>
      </div>
    );
  }
}

export default App;

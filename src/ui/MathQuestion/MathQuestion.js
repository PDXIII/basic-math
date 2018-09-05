import React from "react";
import PropTypes from "prop-types";

import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

class MathQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: {
        value: "",
        isRight: false
      }
    };
  }

  beHappy = () => {
    console.log("Happy!");
  }

  handleKeyPress = event => {
    if (event.key === "Enter") {
      // submit and clear input
      this.handleSubmit();
    }
  };

  handleSubmit = () => {
    this.props.rightOrWrong(this.state.answer);
    this.setState({
       answer: {
        value: "",
        isRight: false
      }
    })
  }

  updateAnswer = event => {
    this.setState({
      answer: {
        value: event.target.value,
        isRight: this.validateInput(event.target.value)
      }
    });
  };

  validateInput = val => {
    return val === this.props.problem.result.toString();
  };

  correctOperator = type => {
    switch (type) {
      case "ADDITION":
        return "+";
      case "SUBSTRACTION":
        return "−";
      case "MULTIPLICATION":
        return "×";
      case "DIVISION":
        return "÷";
      default:
        return "?";
    }
  };

  render() {
    return (
      <div>
        <Typography type="title">
          {`${this.props.problem.num1} ${this.correctOperator(
            this.props.problem.type
          )} ${this.props.problem.num2} = `}
        </Typography>
        <TextField
          id="answer"
          name="answer"
          type="text"
          placeholder="Solve the math …"
          value={this.state.answer.value}
          onChange={this.updateAnswer}
          inputProps={{
                      onKeyPress: this.handleKeyPress
                    }}
          autoFocus
        />
      </div>
    );
  }
}

export default MathQuestion;

MathQuestion.propTypes = {
  problem: PropTypes.object.isRequired,
  rightOrWrong: PropTypes.func.isRequired
};

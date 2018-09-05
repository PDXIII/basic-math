import React from "react";
import PropTypes from "prop-types";

import _ from "lodash";

const ScoreItem = ({item}) => {
  return (
    <li>
      <p>{item.str}</p>
    </li>
  );
};

class Score extends React.Component {
  render() {
    return (
      <div>
        <h4>Score</h4>
        <p>
          right:
          {_.filter(this.props.data, o => o.answer.isRight).length}
        </p>
        <p>
          wrong:
          {_.filter(this.props.data, o => !o.answer.isRight).length}
        </p>
        <ul>
          {this.props.data.map((item, key) => {
            return <ScoreItem key={key} item={item} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Score;

Score.propTypes = {
  data: PropTypes.array.isRequired
};

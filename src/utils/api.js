import axios from "axios";
import _ from "lodash";

const url = "./data/MathProblems.json";

var sortData = response => ({
  all: response.data,
  additions: _.filter(response.data, item => item.type === "ADDITION"),
  substractions: _.filter(response.data, item => item.type === "SUBSTRACTION"),
  multiplications: _.filter(
    response.data,
    item => item.type === "MULTIPLICATION"
  ),
  divisions: _.filter(response.data, item => item.type === "DIVISION")
});

export default {
  get: axios
    .get(url)
    .then(sortData)
    .catch(error => console.error(error))
};

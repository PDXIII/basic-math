import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "tachyons/css/tachyons.css";
import "./index.css";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

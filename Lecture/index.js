import React from "react";
import ReactDOM from "react-dom";
import Test from "./Test";
import { hot } from "react-hot-loader/root";

const Hot = hot(Test);

ReactDOM.render(<Test />, document.getElementById("root"));

//ES2015(ES6) 모듈 문법
import React, { Component } from "react";
function getNumbers() {}
class NumberBaseBall extends Component {
  state = {
    result: "",
    value: "",
    answer: getNumbers(),
    tries: [],
  };
  onSubmitForm = () => {};
  onChangeInput = () => {};
  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            maxLength={4}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {["like", "like", "like", "like", "like"].map(() => {
            return <li>like</li>;
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseBall;

//export const hello = "hello"; //import { hello }
//export const bye = "hello"; // import { hello, bye }

//node module system common JS
//const React = require("react");
//exports.hello = "hello";
//module.exports = NumberBaseBall;

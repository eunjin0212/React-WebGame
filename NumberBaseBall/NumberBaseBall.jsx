//ES2015(ES6) 모듈 문법
import React, { Component } from "react";
import Try from "./Try";
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
  fruits = [
    { fruit: "사과", taste: "맛있다" },
    { fruit: "감", taste: "달다달어" },
    { fruit: "바나나", taste: "맛있다" },
    { fruit: "귤", taste: "정말맛있다" },
    { fruit: "밤", taste: "맛나다" },
    { fruit: "배", taste: "달다" },
    { fruit: "사과", taste: "맛없다" },
  ];
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
          {this.fruits.map((v, i) => {
            return <Try key={v.fruit + v.taste} value={v} index={i} />; //가독성을 위해
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

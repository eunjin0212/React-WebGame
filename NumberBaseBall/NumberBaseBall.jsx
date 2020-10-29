//ES2015(ES6) 모듈 문법

import React, { Component, createRef } from "react";
import Try from "./Try";

function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}
class NumberBaseBall extends Component {
  state = {
    result: "",
    value: "",
    answer: getNumbers(),
    tries: [],
  };
  onSubmitForm = (e) => {
    const { value, tries, answer } = this.state;
    //답 제출
    e.preventDefault();
    if (this.state.value === this.state.answer.join("")) {
      // 맞았을시
      this.setState((prevState) => {
        return {
          result: "홈런!",
          tries: [
            ...this.state.tries,
            { try: this.state.value, result: "홈런!" },
          ],
        };
      });
      alert("게임을 다시 시작합니다!");
      this.setState({
        value: "",
        answer: getNumbers(),
        tries: [],
      });
    } else {
      //답 틀렸으면
      const answerArray = this.state.value.split("").map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (this.state.tries.length >= 9) {
        // 10번 이상 틀렸을 경우
        this.setState({
          result: `10번 넘게 틀려서 답은 ${this.state.answer.join(
            ","
          )}였습니다!`,
        });
        alert("게임을 다시 시작합니다!");
        this.setState({
          value: "",
          answer: getNumbers(),
          tries: [],
        });
      } else {
        // 10번이 안틀렸다면
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === this.state.answer[i]) {
            strike += 1;
          } else if (this.state.answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        this.setState((prevState) => {
          return {
            tries: [
              ...this.state.tries,
              {
                try: this.state.value,
                result: `${strike} 스트라이크, ${ball}볼 입니다`,
              },
            ],
            value: "",
          };
        });
      }
    }
  };
  onChangeInput = (e) => {
    console.log(this.state.answer);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { result, value, tries } = this.state;
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
          {this.state.tries.map((v, i) => {
            // v는 객체기됨
            return <Try key={`${i + 1}차 시도 :`} tryInfo={v} />; //가독성을 위해
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

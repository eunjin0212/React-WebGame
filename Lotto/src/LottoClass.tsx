import React, { Component } from "react";
import Ball from "./Ball";

function getWinNumbers() {
  console.log("getWinNumbers");
  const candidate = Array(45)
    .fill(45)
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
      //splice 기존 요소를 삭제, 교체 또는 새 요소 추가 배열의 내용 변경
    );
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  //sort 정렬 메소드
  //slice 복사 후 배열 반환
  return [...winNumbers, bonusNumber];
}
interface ILotto {
  winNumbers: number[];
  winBalls: number[];
  bonus: number | null;
  redo: boolean;
}
class Lotto extends Component<{}, ILotto> {
  state: ILotto = {
    winNumbers: getWinNumbers(), // 당첨 숫자들
    winBalls: [],
    bonus: null, // 보너스 공
    redo: false,
  };
  timeouts: number[] = [];

  runTimeOuts = () => {
    console.log('runTimeouts');
    const { winNumbers } = this.state;
    for (let i = 0; i < winNumbers.length - 1; i++) {
      this.timeouts[i] = window.setTimeout(() => {
        this.setState((prevState) => {
          return {
            winBalls: [...prevState.winBalls, winNumbers[i]],
          };
        });
      }, (i + 1) * 1000);
    }
    this.timeouts[6] = window.setTimeout(() => {
      this.setState({
        bonus: winNumbers[6],
        redo: true,
      });
    }, 7000);
  };

  componentDidMount() {
    console.log('didMount');
    this.runTimeOuts();
    console.log('로또 숫자를 생성합니다.');
  }

  componentDidUpdate(prevProps: {}, prevState: ILotto) {
    console.log('didUpdate');
    //조건문이 중요함
    if (this.state.winBalls.length === 0) {
      this.runTimeOuts();
    }
    if (prevState.winNumbers !== this.state.winNumbers) {
      console.log('로또 숫자를 생성합니다.');
    }
  }

  componentWillUnmount() {
    this.timeouts.forEach((v) => {
      clearTimeout(v);
    });
  }
  onClickRedo = () => {
    console.log('onClickRedo');
    this.setState({
      winNumbers: getWinNumbers(), // 당첨 숫자들
      winBalls: [],
      bonus: null, // 보너스 공
      redo: false,
    });
    this.timeouts = [];
  };
  render() {
    const { winBalls, bonus, redo } = this.state;
    return (
      <div id="container">
        <div>당첨 숫자</div>
        <div id="결과창">
          {winBalls.map((v) => (
            <Ball key={v} number={v} />
          ))}
        </div>
        <div>보너스</div>
        {bonus && <Ball number={bonus} />}
        {redo && <button onClick={this.onClickRedo}>한 번 더!</button>}
      </div>
    );
  }
}
export default Lotto;

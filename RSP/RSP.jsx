import React, { Component } from "react";
//class --> constructor --> rendering --> ref --> componentDidMount --> setState/props 바뀔때 --> shouldComponentUpdate(true ) --> render --> componentDidUpdate
//부모가 없앴을 때 --> componentWillUnmount --> 소멸
const rspCoords = {
  바위: "0",
  가위: "-142px",
  보: "-284px",
};
const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};
class RSP extends Component {
  state = {
    result: "",
    imgCoords: 0,
    score: 0,
  };
  interval;
  componentDidMount() {
    // 컴포넌트가 첫 렌더링 후
    const { imgCoords } = this.state;
    this.interval = setInterval(() => {
      console.log("asdf");
      if (imgCoords === rspCoords.바위) {
        this.setState({
          imgCoords: rspCoords.가위,
        });
      } else if (imgCoords === rspCoords.가위) {
        this.setState({
          imgCoords: rspCoords.보,
        });
      } else if (imgCoords === rspCoords.보) {
        this.setState({
          imgCoords: rspCoords.바위,
        });
      }
    }, 1000);
  }

  componentDidUpdate() {
    // 리렌더링 후
  }
  componentWillUnmount() {
    // 컴포넌트가 제거되기 직전, 비동기 요청 정리를 많이 함
    clearInterval(this.interval);
  }
  onClickBtn = (choice) => {
    const { imgCoord } = this.state;
    const myScore = score[choice];
    const cpuScore = score[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      this.setState({
        result: "비겼습니다",
      });
    } else if ([-1, 2]) {
    }
  };
  render() {
    const { result, score, imgCoord } = this.state;
    return (
      <>
        <div
          id="computer"
          style={{
            background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
          }}
        />
        <div>
          <button id="rock" className="btn" onClick={this.onClickBtn("바위")}>
            바위
          </button>
          <button
            id="scissor"
            className="btn"
            onClick={this.onClickBtn("가위")}
          >
            가위
          </button>
          <button id="paper" className="btn" onClick={this.onClickBtn("보")}>
            보
          </button>
        </div>
        <div>{result}</div>
        <div>현재{score}점</div>
      </>
    );
  }
}
export default RSP;
class ResponseCheck extends Component {
  state = {
    state: "waiting",
    message: "Click and Start.",
    result: [],
  };

  timeout;
  startTime;
  endTime;

  onClickScreen = () => {
    const { state } = this.state;
    if (state === "waiting") {
      this.timeout = setTimeout(() => {
        // <-- this.timeout
        this.setState({
          state: "now",
          message: "Click now",
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); // 2초~3초 랜덤
      this.setState({
        state: "ready",
        message: "Click when it turns green.",
      });
    } else if (state === "ready") {
      // 성급하게 클릭
      clearTimeout(this.timeout);
      this.setState({
        state: "waiting",
        message: "Too hasty.",
      });
    } else if (state === "now") {
      // 반응속도 체크
      this.endTime = new Date(); // <-- this.endTime
      this.setState((prevState) => {
        return {
          state: "waiting",
          message: "Click and Start.",
          result: [...prevState.result, this.endTime - this.startTime], 
        };
      });
    }
  };

  onReset = () => {
    this.setState({
      result: [],
    });
  };

  renderAverage = () => {
    const { result } = this.state;
    return result.length === 0 ? null : (
      <>
        <div>
          Average Time: {result.reduce((a, c) => a + c) / result.length}ms
        </div>
        <button onClick={this.onReset}>Reset</button>
      </>
    );
  };
  render() {
    const { state, message } = this.state;
    return (
      <>
        <div id="screen" className={state} onClick={this.onClickScreen}>
          {message}
        </div>
        {this.renderAverage()}
      </>
    );
  }
}
export default ResponseCheck;

import React, { Component } from "react";
import { ids } from "webpack";
class Test extends Component {
  state = {
    counter: 0,
  };
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextContext.state.counter !== nextState.counter) {
      return true;
    }
    return false;
  }
  onClick = () => {
    this.setState({});
  };
  render() {
    console.log("렌더링", this.state);
    return (
      <div>
        <button onClock={this.onClick}>클릭</button>
      </div>
    );
  }
}
export default Test;
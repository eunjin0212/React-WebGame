import React, { Component } from "react";
import { TryProps } from './Types'

class Try extends Component<TryProps> {
  // constructor(props) {
  //   super(props);
  //   const filtered = this.props.filter(() => {});
  // }
  // // this.state = {
  //   result: filtered,
  //   result: this.props.result,
  //   try: this.props.try,
  // };
  render() {
    const { tryInfo } = this.props;
    return (
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    );
  }
}
export default Try;

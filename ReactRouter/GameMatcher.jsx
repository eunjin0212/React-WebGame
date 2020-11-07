import React, { Component } from "react";
import NumberBaseball from "../NumberBaseBall/NumberBaseballClass";
import RSP from "../RSP/RSPClass";
import Lotto from "../Lotto/LottoClass";
import MineSearch from "../WordRelay/WordRelayClass";
import ResponseCheck from "../ResponseCheck/ResponseCheck";

class GameMatcher extends Component {
  render() {
    let urlSearchParams = new URLSearchParams(
      this.props.location.search.slice(1)
    );
    console.log(urlSearchParams.get("hello"));
    if (this.props.match.params.name === "number-baseball") {
      return <NumberBaseball />;
    } else if (this.props.match.params.name === "rock-scissors-paper") {
      return <RSP />;
    } else if (this.props.match.params.name === "lotto-generator") {
      return <Lotto />;
    } else if (this.props.match.params.name === "WordRelay") {
      return <MineSearch />;
    } else if (this.props.match.params.name === "ResponseCheck") {
      return <ResponseCheck />;
    }
    return <div>일치하는 게임이 없습니다.</div>;
  }
}

export default GameMatcher;

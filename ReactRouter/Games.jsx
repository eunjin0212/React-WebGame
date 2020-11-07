import React from "react";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import GameMatcher from "./GameMatcher";

const Games = () => {
  return (
    <HashRouter>
      <div>
        <Link to="/game/number-baseball">숫자야구</Link>
        &nbsp;
        <Link to="/game/rock-scissors-paper">가위바위보</Link>
        &nbsp;
        <Link to="/game/lotto-generator">로또생성기</Link>
        &nbsp;
        <Link to="/game/WordRelay">끝말잇기</Link>
        &nbsp;
        <Link to="/game/ResponseCheck">반응체크</Link>
        &nbsp;
        <Link to="/game/index">게임 모음</Link>
      </div>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <GameMatcher {...props} />}
          />
          <Route
            path="/game/:name"
            render={(props) => <GameMatcher {...props} />}
          />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default Games;

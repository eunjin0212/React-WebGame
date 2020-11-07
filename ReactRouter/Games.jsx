import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import NumberBaseBall from "../NumberBaseBall/NumberBaseBallClass";
import RSP from "../RSP/RSPClass";
import Lotto from "../Lotto/LottoClass";

const Games = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/number-baseball">숫자야구</Link>
        &nbsp;
        <Link to="/rock-scissors-paper">가위바위보</Link>
        &nbsp;
        <Link to="/lotto-generator">로또</Link>
      </div>
      <div>
        <Switch>
          <Router path="/number-baseball" component={NumberBaseBall} />
          <Router path="/rock-scissors-paper" component={RSP} />
          <Router path="/lotto-generator" component={Lotto} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Games;

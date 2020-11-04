import React, { useReducer, useState } from "react";
import { render } from "react-dom";
import Table from "./Table";
const initialState = {
  winner: "",
  turn: "O",
  tableData: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
};
const reducer = (state, action) => {};
const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //   const [winner, setWinner] = useState("");
  //   const [turn, setTurn] = useState("O");
  //   const [tableData, setTablrData] = useState(
  //     ["", "", ""],
  //     ["", "", ""],
  //     ["", "", ""]
  //   );
  return (
    <>
      <Table />
      {winner && <div>{winner}님의 승리</div>}
    </>
  );
};

export default TicTacTo;

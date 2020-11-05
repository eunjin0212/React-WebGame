import React, { useEffect, useReducer, createContext, useMemo } from "react";
import Table from "./Table";
import Form from "./Form";
const initialState = {
  tableData: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const MineSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Table />;
};

export default MineSearch;

import React from "react";
import Td from "./Td";
const Tr = ({ rowData, rowIndex, dispatch }) => {
  return (
    <>
      <tr>
        {Array(rowData.length)
          .fill()
          .map((td, i) => (
            <Td rowIndex={rowIndex} cellIndex={i} dispatch={dispatch}>
              {""}
            </Td>
          ))}
      </tr>
    </>
  );
};
export default Tr;

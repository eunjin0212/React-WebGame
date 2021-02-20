import React, { memo, useState, FunctionComponent } from "react";
import { TryInfo } from './Types';

interface TryProps {
  tryInfo: TryInfo;
}
const Try: FunctionComponent<TryProps> = memo(({ tryInfo }) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});

export default Try;

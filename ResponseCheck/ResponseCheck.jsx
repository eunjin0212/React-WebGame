import React, { useState, useRef } from "react";

const ResponseCheck = () => {
  const [state, setState] = useState("waiting");
  const [message, setMessage] = useState("클릭해서 시작하세요");
  const [result, setResult] = useState([]);
  const timeOut = useRef(null);
  const startTime = useRef(0);
  const endTime = useRef(0);

  const onClickScreen = () => {
    if (state === "waiting") {
      timeOut.current = setTimeout(() => {
        setState("now"), setMessage("지금 클릭");
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
      setState("ready");
      setMessage("초록색이 되면 클릭하세요.");
    } else if (state === "ready") {
      // 성급하게 클릭
      clearTimeout(timeOut.current);
      setState("waiting");
      setMessage("too hasty.");
    } else if (state === "now") {
      // 반응속도 체크
      endTime.current = new Date();
      setState("waiting");
      setMessage("클릭해서 시작하세요");
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current];
      });
    }
  };
  const onReset = () => {
    setResult([]);
  };
  const renderAverage = () => {
    return result.length === 0 ? null : (
      <>
        <div>
          Average Time: {result.reduce((a, c) => a + c) / result.length}ms
        </div>
        <button onClick={onReset}>Reset</button>
      </>
    );
  };
  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {renderAverage()}
    </>
  );
};
export default ResponseCheck;

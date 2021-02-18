import React, { useState, useRef } from 'react';

const GuGuDan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputEl = useRef<any>();

  const onSubmitForm = (e: any) => {
    console.log(typeof e);
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult("정답");
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      inputEl.current.focus();
    } else {
      setResult("땡");
      setValue("");
      inputEl.current.focus();
    }
  };
  return (
    <>
      <div id="question">
        {first} 곱하기 {second}는?
      </div>
      <div>
        <form onSubmit={onSubmitForm}>
          <input
            ref={inputEl}
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button>입력!</button>
        </form>
      </div>
      <div id="result">{result}</div>
    </>
  );
};

export default GuGuDan;

import React, { useRef, useState, useCallback, FormEvent } from "react";

const WordRelay = () => {
  const [word, setWord] = useState("김은진");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputEl = useRef<HTMLInputElement>(null);

  const onSubmitForm = useCallback<(e: FormEvent) => void>((e) => {
    e.preventDefault();
    const input = inputEl.current;
    if (word[word.length - 1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
      setValue('');
      if (input) {
        input.focus();
      }
    } else {
      setResult('땡');
      setValue('');
      if (input) {
        input.focus();
      }
    }
  }, [word, value]);
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }, []);
  return (
    <div className='container'>
      <div className='start_word'>제시 단어 : {word}</div>
      <form onSubmit={onSubmitForm}>
        <input
          id="wordInput"
          className="wordInput"
          ref={inputEl}
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </div>
  );
};
export default WordRelay;
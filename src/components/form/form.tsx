import React,{useState} from 'react'
import * as C from './style';



type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement> ) => void ;
  word: string;
  tranlate: string;
  select: string;
  display:boolean;
  setWord: (value: string) => void;
  setSelec: (value: string) => void;
  setTranslate: (value: string) => void;
}

export function WordForm(props: Props) {
  const { onSubmit, word, tranlate, select, setWord, setSelec, setTranslate, display } = props;

  return (
    <C.Container action="" onSubmit={onSubmit} display={display}>
      <label htmlFor="">word</label>
      <input
        type="text"
        value={word}
        onChange={({ target }) => {
          setWord(target.value);
        }}
      />
      <label htmlFor="">translate</label>
      <input
        type="text"
        value={tranlate}
        onChange={({ target }) => {
          setTranslate(target.value);
        }}
      />
      <select
        value={select}
        onChange={({ target }) => {
          setSelec(target.value);
        }}
      >
        <option disabled value=""></option>
        <option value="green" style={{ background: 'green' }}>
          easy
        </option>
        <option value="yellow">midle</option>
        <option value="red">hard</option>
      </select>
      <button>save</button>
    </C.Container>
  );
}


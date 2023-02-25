import React, { useState } from 'react';
import * as C from './style';

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  word: string;
  tranlate: string;
  select: string;
  display: boolean;
  setWord: (value: string) => void;
  setSelec: (value: string) => void;
  setTranslate: (value: string) => void;
};

export function WordForm(props: Props) {
  const {
    onSubmit,
    word,
    tranlate,
    select,
    setWord,
    setSelec,
    setTranslate,
    display,
  } = props;

  return (
    <C.ContainerGrid>
      <C.Container action="" onSubmit={onSubmit}>
        <h1>My Dicionary</h1>
        <div>
          <label htmlFor="word">word</label>
          <input
            id="word"
            type="text"
            value={word}
            onChange={({ target }) => {
              setWord(target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="tranlate">translation</label>
          <input
            id="tranlate"
            type="text"
            value={tranlate}
            onChange={({ target }) => {
              setTranslate(target.value);
            }}
          />
        </div>
        <select
          value={select}
          onChange={({ target }) => {
            setSelec(target.value);
          }}
        >
          <option disabled value="">
            Select
          </option>
          <option value="green" style={{ background: 'green' }}>
            easy
          </option>
          <option value="yellow" style={{ background: 'yellow' }}>
            medium
          </option>
          <option value="red" style={{ background: 'red' }}>
            hard
          </option>
        </select>
        <button disabled={ word && select && tranlate ? false : true}>save</button>
      </C.Container>
    </C.ContainerGrid>
  );
}

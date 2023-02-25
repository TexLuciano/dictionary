import axios from 'axios';
import React, { useState } from 'react';
import { WordForm } from './form/form';
import { Render } from './render/render';


const Init = () => {
  const [word, setWord] = useState('');
  const [tranlate, setTranslate] = useState('');
  const [select, setSelec] = useState('');
  const [render, setRender] = useState(0);
  const [modal, setModal] = useState(false);

  console.log(modal);

  function req() {
    setRender(render + 1);
  }

  function env(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let temp = {
      name: word,
      translate: tranlate,
      dificult: select,
    };
    if (word != '' || tranlate != '' || select != '') {
      axios
        .post('http://localhost:3000/create', temp)
        .then((res) => console.log(res.data));
      req();

      setWord('');
      setSelec('');
      setTranslate('');
    }
  }

  function deleteWord(id: string) {
    axios
      .delete(`http://localhost:3000/create/${id}`)
      .then((res) => console.log(res.status));
    req();
  }

  return (
    <div>
      <WordForm
        onSubmit={env}
        word={word}
        tranlate={tranlate}
        select={select}
        setWord={setWord}
        setSelec={setSelec}
        setTranslate={setTranslate}
        display={true}
      />

      <Render
        render={render}
        deletar={deleteWord}
        modal={modal}
        setModal={setModal}
        req={req}
      />
    </div>
  );
};

export default Init;

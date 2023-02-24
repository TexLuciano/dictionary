import React, { useState } from 'react'
import styled from 'styled-components'



const Init = () => {
const [word, setWord] = useState('')
const [tranlate, setTranslate] = useState('')
const [select, setSelec] = useState('')

type ar ={
  word:string,
  tranlate:string,
  select:string,
}

const palavras:ar[]= [
{
  word:'save',
  tranlate:'salvar-guardar',
  select:'green',
}

]


function env (e:React.FormEvent<HTMLFormElement>){
  e.preventDefault()
  let temp = {
    word:word,
    tranlate:tranlate,
    select:select,
  }
palavras.push(...palavras, temp)
  
}

console.log(palavras)
  return (
    <div>
      <form action="" onSubmit={env}>
        <label htmlFor="">word</label>
        <input type="text" value={word} onChange={({target})=>{ setWord(target.value)}}/>
        <label htmlFor="">translate</label>
        <input type="text" value={tranlate} onChange={({target})=>{ setTranslate(target.value)}}/>
        <select value={select} onChange={({target})=>{ setSelec(target.value)}}>
          <option value="green">easy</option>
          <option value="yellow">midle</option>
          <option value="red">hard</option>
        </select>
        <button>save</button>

      </form>
      
    </div>
  )
}

export default Init
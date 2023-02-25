import React, { useState } from 'react';
import axios from 'axios';
import * as C from './style';
interface Props {
  itemId: string;
  closeModal: boolean;
  name:string;
  req:()=> void,
  setModal:(value: boolean)=> void
}

export const Modal = ({ itemId, closeModal, name, req ,setModal}: Props) => {
  const [editW, setEditW] = useState('');
  const [editT, setEditT] = useState('');
  const [editS, setEditS] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const editedItem = {
      name: editW,
      translate: editT,
      dificult: editS,
    };
    try {
      const response = await axios.put(`http://localhost:3000/create/${itemId}`, editedItem);
      console.log(response.data);
      
    } catch (err) {
      console.log(err);
    }
    req()
    setModal(false)
  };

  return (
    <C.ContainerGrid display={closeModal}>
      <h2>Editar Item - {name}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">word</label>
        <input
          type="text"
          value={editW}
          onChange={(e) => setEditW(e.target.value)}
        />
        <label htmlFor="">translate</label>
        <input
          type="text"
          value={editT}
          onChange={(e) => setEditT(e.target.value)}
        />
        <select value={editS} onChange={(e) => setEditS(e.target.value)}>
          <option disabled value=""></option>
          <option value="green" style={{ background: 'green' }}>
            easy
          </option>
          <option value="yellow">midle</option>
          <option value="red">hard</option>
        </select>
        <button type="submit">Salvar</button>
      </form>
    </C.ContainerGrid>
  );
};
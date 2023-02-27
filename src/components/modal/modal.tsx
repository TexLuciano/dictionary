import React, { useState , useEffect } from 'react';
import axios from 'axios';
import * as C from './style';
interface Props {
  itemId: string;
  closeModal: boolean;
  name: string;
  req: () => void;
  setModal: (value: boolean) => void;
  translate:string
}

export const Modal = ({ itemId, closeModal, name, req, setModal , translate}: Props) => {
  const [editW, setEditW] = useState('');
  const [editT, setEditT] = useState('');
  const [editS, setEditS] = useState('');



  useEffect(() => {
    setEditW(name);
    setEditT(translate);
  }, [name, translate]);

  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const editedItem = {
      name: editW,
      translate: editT,
      dificult: editS,
    };

    try {
      if (editS != '' || editT !== '' || editW != '') {
        const response = await axios.put(
          `http://localhost:3000/create/${itemId}`,
          editedItem,
        );
        console.log(response.data);
      }
    } catch (err) {
      console.log(err);
    }
    req();
    setEditW('');
    setEditT('');
    setEditS('');
    setModal(false);
  };

  return (
    <C.ContainerGrid display={closeModal}>
      <C.BtnX onClick={() => setModal(false)}>x</C.BtnX>
      <C.Container onSubmit={handleSubmit}>
        <h2>Edit - {name}</h2>
        <C.FormdivCont>
          <C.Formdiv>
            <label htmlFor="">word</label>
            <input
              type="text"
              value={editW}
              onChange={(e) => setEditW(e.target.value)}
            />
          </C.Formdiv>
          <C.Formdiv>
            <label htmlFor="">translation</label>
            <input
              type="text"
              value={editT}
              onChange={(e) => setEditT(e.target.value)}
            />
          </C.Formdiv>

          <select value={editS} onChange={(e) => setEditS(e.target.value)}>
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
        </C.FormdivCont>
        <C.Btn type="submit" disabled={editS || editT || editW ? false : true}>
          Salvar
        </C.Btn>
      </C.Container>
    </C.ContainerGrid>
  );
};
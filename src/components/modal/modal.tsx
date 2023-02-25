import React, { useState } from 'react';
import axios from 'axios';
import * as C from './style';

interface EditableItem {
  name: string;
  translate: string;
  difficulty: string;
}

interface Props {
  itemId: string;
  closeModal: boolean;
  name: string;
  req: () => void;
  setModal: (value: boolean) => void;
}

export const Modal = ({ itemId, closeModal, name, req, setModal }: Props) => {
  const [editableItem, setEditableItem] = useState<EditableItem>({
    name: '',
    translate: '',
    difficulty: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { name, translate, difficulty } = editableItem;

      if (name || translate || difficulty) {
        const response = await axios.put(
          `http://localhost:3000/create/${itemId}`,
          { name, translate, difficulty }
        );
        console.log(response.data);
      }
    } catch (err) {
      console.log(err);
    }

    req();
    setEditableItem({ name: '', translate: '', difficulty: '' });
    setModal(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;

    setEditableItem(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <C.ContainerGrid display={closeModal}>
      <C.BtnX onClick={() => setModal(false)}>x</C.BtnX>
      <C.Container onSubmit={handleSubmit}>
        <h2>Edit - {name}</h2>
        <C.FormdivCont>
          <C.Formdiv>
            <label htmlFor="name">word</label>
            <input
              type="text"
              id="name"
              name="name"
              value={editableItem.name}
              onChange={handleInputChange}
            />
          </C.Formdiv>
          <C.Formdiv>
            <label htmlFor="translate">translation</label>
            <input
              type="text"
              id="translate"
              name="translate"
              value={editableItem.translate}
              onChange={handleInputChange}
            />
          </C.Formdiv>
          <C.Formdiv>
            <label htmlFor="difficulty">Difficulty</label>
            <select
              id="difficulty"
              name="difficulty"
              value={editableItem.difficulty}
              onChange={handleInputChange}
            >
              <option disabled value="">Select</option>
              <option value="green" style={{ background: 'green' }}>Easy</option>
              <option value="yellow" style={{ background: 'yellow' }}>Medium</option>
              <option value="red" style={{ background: 'red' }}>Hard</option>
            </select>
          </C.Formdiv>
        </C.FormdivCont>
        <C.Btn type="submit" disabled={!editableItem.name && !editableItem.translate && !editableItem.difficulty}>
          Salvar
        </C.Btn>
      </C.Container>
    </C.ContainerGrid>
  );
};


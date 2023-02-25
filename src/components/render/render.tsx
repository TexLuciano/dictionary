import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import * as C from './style';
import { Modal } from '../modal/modal';

interface Props {
  render: number;
  deletar: (id: string) => void;
  modal: boolean;
  setModal: (value: boolean) => void;
  req:()=> void
}

export const Render = ({ render, deletar,req }: Props) => {
  const [posts, setPosts] = useState<AxiosResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [editModalOpen, setModalOpen] = useState(false);
  const [itemIdToEdit, setItemIdToEdit] = useState('');
  const [name, setName] = useState('');

  function openEditModal(itemId: string, name:string) {
    setItemIdToEdit(itemId);
    setName(name)
    if(editModalOpen === false){
      setModalOpen(true)
    }else{
      setModalOpen(false)
    }

  }


  const getPosts = async () => {
    setTimeout(async () => {
      try {
        const response = await axios.get('http://localhost:3000/word');
        setPosts(response);
        setLoading(true);
      } catch (err) {
        console.log(err);
      }
    }, 500);
  };

  useEffect(() => {
    getPosts();
  }, [render]);

 

  type Word = {
    dificult: string;
    name: string;
    translate: string;
    __v: number;
    _id: string;
  };



  return (
    <>
    <Modal itemId={itemIdToEdit} closeModal={editModalOpen} setModal={setModalOpen} name={name} req={req}/>
      <C.Container>
        {posts &&
          posts?.data.map((item: Word) => (
            <C.Item key={item._id}>
              <p>{item.name} -</p>
              <p>{item.translate}</p>
              <button onClick={() => deletar(item._id)}>x</button>
              <button onClick={() => openEditModal(item._id, item.name)}>edit</button>
            </C.Item>
          ))}
        {!loading && <p>Caregando</p>}
      </C.Container>
    </>
  );
};

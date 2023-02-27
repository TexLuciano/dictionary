import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import * as C from './style';
import { Modal } from '../modal/modal';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
interface Props {
  render: number;
  deletar: (id: string) => void;
  modal: boolean;
  setModal: (value: boolean) => void;
  req: () => void;
}

export const Render = ({ render, deletar, req }: Props) => {
  const [posts, setPosts] = useState<AxiosResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [editModalOpen, setModalOpen] = useState(false);
  const [itemIdToEdit, setItemIdToEdit] = useState('');
  const [name, setName] = useState('');
  const [translate, setTranslate] = useState('');

  function openEditModal(itemId: string, name: string, traslate:string) {
    setItemIdToEdit(itemId);
    setName(name);
    setTranslate(traslate)
    
    if (editModalOpen === false) {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  }

console.log(name,translate);

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
      <Modal
        itemId={itemIdToEdit}
        closeModal={editModalOpen}
        setModal={setModalOpen}
        name={name}
        req={req}
        translate={translate}
      />
      <C.Container>
        {posts &&
          posts?.data.map((item: Word) => (
            <C.ItemGroup key={item._id}>
              <C.ContainerItem>
                <C.Item color={item.dificult}>{item.name}</C.Item>
                <C.Item color={item.dificult}>{item.translate}</C.Item>
              </C.ContainerItem>
              <C.Btn onClick={() => deletar(item._id)}>
                <AiFillDelete />
              </C.Btn>
              <C.Btn onClick={() => openEditModal(item._id, item.name, item.translate)}>
                <FaEdit />
              </C.Btn>
            </C.ItemGroup>
          ))}
        {!loading && <C.Loading></C.Loading>}
      </C.Container>
    </>
  );
};

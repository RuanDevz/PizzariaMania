import React from 'react'
import {AdminContainer,Gerenciamento} from './AdminStyle'
import { CgAddR } from "react-icons/cg";
import { MdModeEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";




const Admin = () => {
  return (
    <AdminContainer>
        <h1>Gerenciamento de Produtos</h1>
        <Gerenciamento>
            <div className='container_gerenciamento'>
                <h2>Adicionar</h2>
                <CgAddR id='add' className='icon' />
            </div>
            <div className='container_gerenciamento'>
                <h2>Editar</h2>
                <MdModeEdit id='edit' className='icon' />
            </div>
            <div className='container_gerenciamento'>
                <h2>Remover</h2>
                <FaRegTrashAlt id='remove' className='icon' />
            </div>
        </Gerenciamento>
    </AdminContainer>
  )
}

export default Admin
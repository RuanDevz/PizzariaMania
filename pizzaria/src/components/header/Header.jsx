import React, { useState } from 'react';
import { ContainerHeader } from './HeaderStyle';
import logo from '../../assets/logo.png';
import { LuMenu } from 'react-icons/lu';
import { IoMdClose } from 'react-icons/io';
import {Link} from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { GrLogin } from "react-icons/gr";
import { FaUserPlus } from "react-icons/fa6";




const Header = () => {
  const [menuactive, setMenuactive] = useState(false);

  const showMenu = () => {
    setMenuactive((prevMenuActive) => !prevMenuActive);
  };

  return (
    <ContainerHeader>
      <div className='logo'>
        <img src={logo} alt='logo' />
        <Link to='/'><h1>Mania</h1></Link>
      </div>
      <div className='menu'>
        {menuactive ? (
          <>
            <IoMdClose className='menubar' onClick={showMenu} />
            <ul className='menuoptions'>
            <div className='options'>
            <FaHome  />
            <li>Inicio</li>
            </div>
            <div className='options'>
            <GrLogin />
            <li>Entrar</li>
            </div>
            <div className='options'>
            <FaUserPlus />
            <li>Cadastrar</li>
            </div>
            </ul>
          </>
        ) : (
          <LuMenu className='menubar' onClick={showMenu} />
        )}
      </div>
    </ContainerHeader>
  );
};

export default Header;
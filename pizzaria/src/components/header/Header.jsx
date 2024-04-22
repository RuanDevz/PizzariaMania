import React, { useState, useEffect, useContext } from 'react';
import { ContainerHeader } from './HeaderStyle';
import logo from '../../assets/logo.png';
import { LuMenu } from 'react-icons/lu';
import { IoMdClose } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaRegUser } from 'react-icons/fa';
import { GrConfigure } from 'react-icons/gr';

import Logincontext from '../../context/Logincontext';
import axios from 'axios';

const Header = () => {
  const [menuactive, setMenuactive] = useState(true);
  const navigate = useNavigate();
  const { setModalvisible, username, getuser} = useContext(Logincontext);

  const admin = getuser.isAdmin

  const showMenu = () => {
    setMenuactive((prevMenuActive) => !prevMenuActive);
  };


  const Openmodal = () => {
    setModalvisible((prevModalActive) => !prevModalActive);
  };

  return (
    <>
      <ContainerHeader>
        <div className='logo'>
          <img src={logo} alt='logo' />
          <Link to='/'>
            <h1>Mania</h1>
          </Link>
        </div>
        <div className='menu'>
          {menuactive ? (
            <>
              <IoMdClose className='menubar' onClick={showMenu} />
              <ul className='menuoptions'>
                <li onClick={Openmodal} className='options'>
                  <FaShoppingCart />
                </li>
                <li id='user'>
                  <FaRegUser />
                </li>
                {admin && <li id='config' onClick={() => navigate('/admin')}><GrConfigure/></li>}
              </ul>
            </>
          ) : (
            <LuMenu className='menubar' onClick={showMenu} />
          )}
        </div>
      </ContainerHeader>
    </>
  );
};

export default Header;

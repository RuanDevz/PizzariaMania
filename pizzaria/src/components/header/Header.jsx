import React, { useState, useEffect, useContext } from 'react';
import { ContainerHeader } from './HeaderStyle';
import logo from '../../assets/logo.png';
import { LuMenu } from 'react-icons/lu';
import { IoMdClose } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaRegUser, } from "react-icons/fa";
import { GrConfigure } from "react-icons/gr";

import Logincontext from '../../context/Logincontext';
import axios from 'axios';

const Header = () => {
  const [menuactive, setMenuactive] = useState(true);
  const navigate = useNavigate();
  const { setModalvisible, isadmin, setIsadmin, username } = useContext(Logincontext);

  const showMenu = () => {
    setMenuactive((prevMenuActive) => !prevMenuActive);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pizzariamania3.onrender.com/user/login');
        const isAdmin = response.data.isAdmin;
        setIsadmin(isAdmin);
      } catch (error) {
        console.error('Erro ao verificar se o usuário é administrador:', error);
      }
    };
    
    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuactive(true);
      } else {
        setMenuactive(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  const Openmodal = () =>{
    setModalvisible((prevModalActive) => !prevModalActive)
  };

  return (
    <>
      {isadmin ? (
        <h1>Você é admin</h1>
      ) : (
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
                  <li onClick={Openmodal} className='options'>
                    <FaShoppingCart />
                  </li>
                  <li id='user'>
                    <FaRegUser />
                  </li>
                  <li>
                    <GrConfigure />
                  </li>
                </ul>
              </>
            ) : (
              <LuMenu className='menubar' onClick={showMenu} />
            )}
          </div>
        </ContainerHeader>
      )}
    </>
  );
};

export default Header;

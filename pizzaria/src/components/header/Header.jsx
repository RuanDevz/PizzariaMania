import React, { useState, useEffect } from 'react';
import { ContainerHeader } from './HeaderStyle';
import logo from '../../assets/logo.png';
import { LuMenu } from 'react-icons/lu';
import { IoMdClose } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { GrLogin } from "react-icons/gr";
import { FaUserPlus } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
  const [menuactive, setMenuactive] = useState(true);
  const navigate = useNavigate();

  const showMenu = () => {
    setMenuactive((prevMenuActive) => !prevMenuActive);
  };

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
              <div onClick={() => navigate('/')} className='options'>
                <FaHome />
                <li>Inicio</li>
              </div>
              <div onClick={() => navigate('/login')} className='options'>
                <GrLogin />
                <li>Entrar</li>
              </div>
              <div onClick={() => navigate('/register')} className='options'>
                <FaUserPlus />
                <li>Cadastrar</li>
              </div>
              <div className='options'>
              <FaShoppingCart />
              <li>Carrinho</li>
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

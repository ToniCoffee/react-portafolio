import { MenuMobile } from '/src/components/menu-mobile/menu-mobile';
import { Logo } from '/src/components/logo/logo';
import { Menu } from '/src/components/menu/menu';
import { useState, useEffect } from 'react';

import './navbar.css';
import '/src/common.css';

export const Navbar = () => {
  const [newClass, setNewClass] = useState('');

  const handleClickMenu = () => setNewClass('visible');
  const handleClickLink = () => setNewClass('');
  const handleScroll = () => {
    let a = 0;
    const factor = 900;
    const navbar = document.querySelector('.navbar');
    a += (window.scrollY || window.pageYOffset) / factor;
    navbar.style.backgroundColor = `rgba(${0}, ${0}, ${0}, ${a})`
  };

  useEffect(() => {
    window.removeEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <Logo text='TL' />
        <MenuMobile onClick={handleClickMenu} />
        <Menu className={newClass} onClick={handleClickLink} />
      </div>
    </nav>
  );
};
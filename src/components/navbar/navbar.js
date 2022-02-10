import { MenuMobile } from '/src/components/menu-mobile/menu-mobile';
import { Logo } from '/src/components/logo/logo';
import { Menu } from '/src/components/menu/menu';
import { useState } from 'react';

import './navbar.css';

export const Navbar = () => {
  const [newClass, setNewClass] = useState('');

  const handleClickMenu = () => setNewClass('visible');
  const handleClickLink = () => setNewClass('');

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
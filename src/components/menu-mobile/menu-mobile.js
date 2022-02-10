import { Icon } from '/src/components/icon/icon';

import './menu-mobile.css';

export const MenuMobile = ({ onClick = () => {} }) => {
  return (
    <div className="menu-mobile" onClick={onClick} >
      <Icon icon="bars" />
    </div>
  );
};
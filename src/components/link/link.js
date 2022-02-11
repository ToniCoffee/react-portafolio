import { Icon } from '/src/components/icon/icon';

import './link.css';

export const Link = ({ href='#', icon='', text='Default text'}) => {
  return (
    <a href={href} className="link">
      <Icon icon={icon} />
      <span>{text}</span>
    </a>
  );
};
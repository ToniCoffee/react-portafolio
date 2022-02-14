import { Icon } from '/src/components/icon/icon';

import './card-tecnology.css';

export const CardTecnology = ({ 
  src='', 
  alt='Defautl alt text',
  title='',
  text='Default text', 
  icon=null,
  iconSize='',
  className='' }
) => {
  return (
    <div className="card_tecnology_item" data-sr-id="16">
      { 
        icon != null  ? <Icon icon={icon} className={className} iconSize={iconSize} />
                      : <img src={src} alt={alt} className={className} />    
      }
      {
        title !== '' ? <h3>{title}</h3> : ''
      }
      <p className="card_tecnology_name">{text}</p>
    </div>
  );
};
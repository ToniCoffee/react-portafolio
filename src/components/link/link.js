import { Icon } from '/src/components/icon/icon';

// import './link.css';

export const Link = ({ 
  href='#', 
  target="", 
  rel="",
  icon=null,
  iconSize='xs',
  className='',
  childrenClassName='',
  text='Default text',
  src='',
  alt='Default alt text'
}) => {
  return (
    <a href={href} target={target} rel={rel} className={className}>
      { 
        icon != null  ? <Icon icon={icon} className={childrenClassName} iconSize={iconSize} />
                      : <img height="20px" src={src} alt={alt} className={childrenClassName} />    
      }
      <span>{text}</span>
    </a>
  );
};
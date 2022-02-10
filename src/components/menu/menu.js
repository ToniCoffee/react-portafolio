import './menu.css';

export const Menu = ({ className = '', onClick = () => {} }) => {
  return (
    <ul className={`menu_links ${className}`} onClick={onClick} >
      <li className="menu_link active" data-ref="home">
        <a href="#home">Home</a>
      </li>
      <li className="menu_link" data-ref="about">
        <a href="#about">About</a>
      </li>
      <li className="menu_link" data-ref="services">
        <a href="#services">Services</a>
      </li>
      <li className="menu_link" data-ref="portfolio">
        <a href="#portfolio">Portfolio</a>
      </li>
      <li className="menu_link" data-ref="contact">
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};
import './card-tecnology.css';

export const CardTecnology = ({ src='', alt='Defautl alt text', text='Default text' }) => {
  return (
    <div className="card_tecnology_item" data-sr-id="16">
      <img src={src} alt={alt} />
      <div className="card_tecnology_name">{text}</div>
    </div>
  );
};
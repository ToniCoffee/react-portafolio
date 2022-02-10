import './logo.css';

export const Logo = ({ text = '' }) => {
  return (
    <div className="logo">
      <p className="title">
        <a href="#">{text}</a>  
      </p> 
    </div>
  );
};
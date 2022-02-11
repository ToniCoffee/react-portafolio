import './section.css';

const Section = ({ title='Default title', children=null }) => {
  return (
    <div>
      <h2 className="section_title">{title}</h2>
      {children}
    </div>
  );
}

const Description = ({ title='Default title', paragraphs = [] }) => {
  return (
    <div className="description_container">
      <h2 className="section_title">{title}</h2>
      {paragraphs.map((item, index) => <p key={index}>{item}</p>)}
    </div>
  );
};

export {
  Section,
  Description
};